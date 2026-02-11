import { useState, useMemo } from 'react';
import {
  AI_DETECTORS,
  DETECTOR_TYPE_LABELS,
  DETECTOR_FILTERS,
  type DetectorType,
  type AiDetectorEntry,
} from '../data/aiDetectors';

/** Statistikos blokas viršuje */
function StatsBar({ tools }: { tools: AiDetectorEntry[] }) {
  const textCount = tools.filter((t) => t.types.includes('text')).length;
  const imageCount = tools.filter((t) =>
    t.types.includes('image') || t.types.includes('video'),
  ).length;

  return (
    <div className="grid grid-cols-3 gap-3 mb-5">
      {[
        { value: tools.length, label: 'Įrankių' },
        { value: textCount, label: 'Teksto detektorių' },
        { value: imageCount, label: 'Vaizdo / video' },
      ].map((stat) => (
        <div
          key={stat.label}
          className="text-center rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 py-3 px-2 shadow-sm"
        >
          <div className="text-2xl font-bold text-brand-600 dark:text-brand-400">
            {stat.value}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Tipo badge */
function TypeBadge({ type }: { type: DetectorType }) {
  const { label, colorClass } = DETECTOR_TYPE_LABELS[type];
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide ${colorClass}`}
    >
      {label}
    </span>
  );
}

/** Viena įrankio kortelė */
function ToolCard({ tool }: { tool: AiDetectorEntry }) {
  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-xl border shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 overflow-hidden ${
        tool.highlight
          ? 'border-brand-400 dark:border-brand-500 ring-1 ring-brand-200 dark:ring-brand-800'
          : 'border-gray-200 dark:border-gray-700'
      }`}
    >
      {/* Viršutinė spalvota linija */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-500 to-violet-500" />

      <div className="p-4">
        {/* Header: numeris + pavadinimas */}
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-white text-sm font-bold flex items-center justify-center">
            {tool.number}
          </span>
          <h4 className="text-base font-bold text-gray-900 dark:text-white leading-tight pt-0.5">
            {tool.name}
            {tool.highlight && (
              <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 px-1.5 py-0.5 rounded">
                LT
              </span>
            )}
          </h4>
        </div>

        {/* Tipo badge'ai */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tool.types.map((type) => (
            <TypeBadge key={type} type={type} />
          ))}
        </div>

        {/* Aprašymas */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
          {tool.description}
        </p>

        {/* Nuoroda */}
        {tool.url && (
          <a
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
          >
            Aplankykite svetainę
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

/** Pagrindinė skaidrė: DI turinio detektoriai */
export default function AiDetectorsSlide() {
  const [activeFilter, setActiveFilter] = useState<DetectorType | 'all'>('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let result: AiDetectorEntry[] = AI_DETECTORS;

    if (activeFilter !== 'all') {
      result = result.filter((t) => t.types.includes(activeFilter));
    }

    const term = search.trim().toLowerCase();
    if (term) {
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(term) ||
          t.description.toLowerCase().includes(term),
      );
    }

    return result;
  }, [activeFilter, search]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Antraštė */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          DI turinio aptikimo įrankiai (2026)
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Šie įrankiai padeda nustatyti, ar turinys (tekstas, vaizdai, video) buvo
          sugeneruotas DI. Naudokite juos turinio patikimumui vertinti -- ne
          slepimuisi.
        </p>
      </div>

      {/* Statistika */}
      <StatsBar tools={filtered} />

      {/* Paieška + filtrai */}
      <div className="space-y-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ieškoti pagal pavadinimą ar aprašymą..."
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />

        <div className="flex flex-wrap gap-2">
          {DETECTOR_FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                activeFilter === f.key
                  ? 'bg-brand-600 text-white border-brand-600 dark:bg-brand-500 dark:border-brand-500'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-brand-400 hover:text-brand-600 dark:hover:border-brand-400 dark:hover:text-brand-400'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Kortelių grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500 dark:text-gray-400 text-sm">
          Įrankių nerasta. Pabandykite pakeisti paieškos kriterijus.
        </div>
      )}

      {/* Etikos pastaba */}
      <p className="text-[11px] text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
        Detektoriai skirti turinio autentiškumui vertinti, ne DI naudojimui slėpti.
        Nė vienas detektorius nėra 100 % tikslus -- rezultatus vertinkite kritiškai.
      </p>
    </div>
  );
}
