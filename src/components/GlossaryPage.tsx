import { useState, useMemo } from 'react';
import { BookMarked, Filter, ArrowLeft } from 'lucide-react';
import glossaryData from '../data/glossary.json';
import { getIsMvpMode } from '../utils/mvpMode';

export interface GlossaryTerm {
  term: string;
  definition: string;
  moduleId: number;
}

const MODULE_LABELS: Record<number, string> = {
  1: 'Modulis 1 – 6 Blokų Sistema',
  2: 'Modulis 2 – Žinių testas',
  3: 'Modulis 3 – Praktika',
  4: 'Modulis 4 – Konteksto inžinerija',
};

export interface GlossaryPageProps {
  onBackToModule?: () => void;
}

export default function GlossaryPage({ onBackToModule }: GlossaryPageProps) {
  const [filter, setFilter] = useState<number | 'all'>('all');
  const rawTerms = (glossaryData as { terms: GlossaryTerm[] }).terms;
  const isMvpMode = getIsMvpMode();
  const terms = useMemo(
    () => (isMvpMode ? rawTerms.filter(t => t.moduleId <= 3) : rawTerms),
    [rawTerms, isMvpMode]
  );

  const filtered = useMemo(() => {
    if (filter === 'all') return terms;
    return terms.filter(t => t.moduleId === filter);
  }, [terms, filter]);

  const moduleIds = useMemo(() => {
    const ids = new Set(terms.map(t => t.moduleId));
    return Array.from(ids).sort((a, b) => a - b);
  }, [terms]);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {onBackToModule && (
            <button
              type="button"
              onClick={onBackToModule}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30 hover:bg-brand-100 dark:hover:bg-brand-900/50 border border-brand-200 dark:border-brand-800 transition-colors min-h-[44px]"
              aria-label="Grįžti į modulį"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden />
              <span>Grįžti į modulį</span>
            </button>
          )}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-brand-500 to-accent-500 p-3 rounded-xl">
              <BookMarked className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Bendras žodynėlis
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-0.5">
                Visi mokymo terminai vienoje vietoje
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 min-h-[44px]"
            aria-label="Filtruoti pagal modulį"
          >
            <option value="all">Visi moduliai</option>
            {moduleIds.map((id) => (
              <option key={id} value={id}>
                {MODULE_LABELS[id] ?? `Modulis ${id}`}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4">
        {filtered.map((item, i) => (
          <article
            key={`${item.term}-${item.moduleId}-${i}`}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-800 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <h2 className="text-lg font-bold text-brand-700 dark:text-brand-300">
                {item.term}
              </h2>
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 w-fit">
                {MODULE_LABELS[item.moduleId] ?? `Modulis ${item.moduleId}`}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.definition}
            </p>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">
          Pagal pasirinktą filtrą terminų nėra.
        </p>
      )}
    </div>
  );
}
