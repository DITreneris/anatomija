/**
 * Interaktyvus RL proceso blokas – clickable diagrama + paaiškinimai apačioje.
 * UI/UX: „Tu esi čia“ orientacija, žingsnių mygtukai, sklandus perėjimas (pagal SCHEME_AGENT §3.6).
 */
import { useState } from 'react';
import RlProcessDiagram from './RlProcessDiagram';
import { RL_STEP_EXPLANATIONS } from './stepExplanations';

const TOTAL_STEPS = RL_STEP_EXPLANATIONS.length;

function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? (
      <strong key={i} className="font-bold text-gray-900 dark:text-white">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export default function RlProcessBlock() {
  const [currentStep, setCurrentStep] = useState(0);
  const step = RL_STEP_EXPLANATIONS[currentStep];

  return (
    <div className="space-y-4" role="region" aria-label="RL proceso schema">
      {/* „Tu esi čia“ – nuolatinė orientacija */}
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 dark:bg-brand-900/40 px-3 py-1.5 text-sm font-semibold text-brand-700 dark:text-brand-300"
          aria-live="polite"
        >
          <span className="h-2 w-2 rounded-full bg-brand-500 shrink-0" aria-hidden />
          Tu esi čia: {currentStep + 1}. {step.title}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{currentStep + 1} / {TOTAL_STEPS}</span>
      </div>

      <RlProcessDiagram currentStep={currentStep} onStepClick={setCurrentStep} />

      {/* Mintinis modelis – aiškiai po schema, be kabučių (HARD E) */}
      <p className="text-center text-base font-medium text-brand-700 dark:text-brand-300" aria-label="Mintinis modelis">
        Padarau → gaunu rezultatą → koreguoju elgesį
      </p>

      {/* Greita navigacija */}
      <nav className="flex flex-wrap justify-center gap-1.5" aria-label="Žingsnių pasirinkimas">
        {RL_STEP_EXPLANATIONS.map((s, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentStep(idx)}
            aria-current={currentStep === idx ? 'step' : undefined}
            aria-label={`Žingsnis ${idx + 1}: ${s.title}`}
            className={`
              flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all
              focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
              ${currentStep === idx
                ? 'border-brand-500 bg-brand-500 text-white shadow-md'
                : 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:border-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/30'}
            `}
          >
            {idx + 1}
          </button>
        ))}
      </nav>

      {/* Paaiškinimas */}
      <div
        className="rounded-xl border-l-4 border-l-brand-500 bg-brand-50 dark:bg-brand-900/20 p-4 text-gray-700 dark:text-gray-300 leading-relaxed"
        role="status"
        aria-live="polite"
      >
        <p className="font-semibold text-brand-800 dark:text-brand-200 mb-2">{step.title}</p>
        <p>{renderBold(step.body)}</p>
      </div>
    </div>
  );
}
