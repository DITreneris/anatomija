import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import CustomGptProcessDiagram from './CustomGptProcessDiagram';

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  /** Ką konkrečiai padaryti – veiksmo orientuoti žingsniai (max nauda). */
  actionChecklist?: string[];
  /** Nuoroda į išorinį resursą (pvz. ChatGPT Create GPT). */
  externalLink?: { label: string; href: string };
  /** Trumpas patarimas arba dažna klaida (⚠️). */
  tip?: string;
}

const CUSTOM_GPT_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Tikslas',
    description: 'Nuspręskite, kam skirtas GPT: pardavimams, mokymams, kūrybai ar kitiems scenarijams. Aiškūs tikslai padeda formuoti instrukcijas.',
    actionChecklist: ['Užrašykite vienu sakiniumi: kam bus naudojamas asistentas.', 'Pasirinkite 1–2 konkrečius naudojimo atvejus (pvz. „santraukos“, „atsakymai klientams“).'],
  },
  {
    id: 2,
    title: 'Rolė',
    description: 'Apibrėžkite toną, stilių ir kompetenciją: kaip asistentas turi atsakyti ir kokią ekspertizę demonstruoti.',
    actionChecklist: ['Parašykite: „Tu esi [rolė]“.', 'Nustatykite toną: profesionalus / draugiškas / glaustas.', 'Apribokite temas: ką asistentas moka ir ko ne.'],
  },
  {
    id: 3,
    title: 'Prisijungimas',
    description: 'ChatGPT → Explore GPTs → Create a GPT. Atidarykite Custom GPT kūrimo langą.',
    actionChecklist: ['Prisijunkite prie ChatGPT (Plus būtina).', 'Meniu: Explore GPTs → Create a GPT.', 'Pasirinkite „Configure“ ir pradėkite nuo pavadinimo.'],
    externalLink: { label: 'Atidaryti ChatGPT → Create a GPT', href: 'https://chat.openai.com/gpts/editor' },
  },
  {
    id: 4,
    title: 'Konfigūracija',
    description: 'Įveskite pavadinimą, aprašymą, pagrindines instrukcijas ir personą – kaip GPT elgsis ir ką moka.',
    actionChecklist: ['Pavadinimas: aiškus ir trumpas.', 'Instructions: įklijuokite arba parašykite instrukcijas (šabloną rasite šios skaidrės apačioje).', 'Conversation starters: 2–4 pavyzdinės užklausos.'],
    tip: 'Instrukcijas rašykite taip, lyg aiškintumėte naujam darbuotojui – konkrečiai ir veiksmažodžiais.',
  },
  {
    id: 5,
    title: 'Papildomos funkcijos',
    description: 'Pridėkite dokumentus, API ar įrankius (Tools), jei reikia – tai praplėčia GPT galimybes.',
    actionChecklist: ['Jei reikia: įkelkite PDF/tekstus (Knowledge).', 'Jei reikia: prijunkite „Actions“ (API).', 'Jei ne – palikite tuščią ir pereikite prie testavimo.'],
  },
  {
    id: 6,
    title: 'Testavimas',
    description: 'Išbandykite GPT su įvairiomis užklausomis ir pataisykite instrukcijas pagal rezultatus.',
    actionChecklist: ['Užduokite 3 skirtingas užklausas (paprastą, sudėtingą, kraštutinę).', 'Patikrinkite: ar tonas ir ilgis atitinka tikslus.', 'Jei ne – grįžkite į Instructions ir pataisykite.'],
    tip: 'Dažna klaida: per bendros instrukcijos. Pridėkite konkrečių pavyzdžių ar apribojimų.',
  },
  {
    id: 7,
    title: 'Publikavimas',
    description: 'Kai rezultatai patenkina – publikuokite tik savo naudojimui arba bendrai bendruomenei.',
    actionChecklist: ['Pasirinkite: Only me / Anyone with link / Public.', 'Nustatykite (jei reikia) kategoriją ir žymes.', 'Paspauskite Publish.'],
  },
  {
    id: 8,
    title: 'Tobulinimas',
    description: 'Naudokite grįžtamąjį ryšį: stebėkite naudotojų elgesį ir nuolatos tobulinkite instrukcijas.',
    actionChecklist: ['Stebėkite, kokios užklausos dažnos ir ar atsakymai tinka.', 'Periodiškai atidarykite Configure ir pataisykite Instructions.', 'Pridėkite naujų Conversation starters pagal naudojimą.'],
  },
];

export default function ProcessStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = CUSTOM_GPT_STEPS;
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;
  const nextStep = steps[currentStep + 1];

  const progressPct = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="space-y-6" role="region" aria-label="Custom GPT kūrimo proceso žingsniai">
      {/* Pilna proceso diagrama: aktyvus žingsnis paryškintas, kiti priteminti */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-4 shadow-sm overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 dark:bg-brand-900/40 px-3 py-1 text-sm font-semibold text-brand-700 dark:text-brand-300">
            <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" aria-hidden />
            Tu esi čia: Žingsnis {currentStep + 1} – {steps[currentStep].title}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {currentStep + 1} / {steps.length}
          </span>
        </div>
        <CustomGptProcessDiagram currentStep={currentStep} onStepClick={setCurrentStep} className="min-h-[320px]" />
      </div>

      {/* Žingsnių juosta: pasirinkimas */}
      <div>
        <p className="text-center text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
          Pasirinkite žingsnį
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2" aria-label="Žingsnių navigacija">
          {steps.map((step, idx) => {
            const isPast = idx < currentStep;
            const isActive = idx === currentStep;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setCurrentStep(idx)}
                aria-current={isActive ? 'step' : undefined}
                aria-label={`Žingsnis ${step.id}: ${step.title}${isPast ? ', atlikta' : ''}`}
                className={`
                  flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all min-w-[2.5rem] cursor-pointer
                  focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900
                  ${isPast ? 'border-emerald-400 bg-emerald-100 text-emerald-800 dark:border-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-200 hover:bg-emerald-200/80 dark:hover:bg-emerald-900/60' : ''}
                  ${isActive ? 'border-brand-500 bg-brand-500 text-white shadow-lg shadow-brand-500/25 scale-110 ring-2 ring-brand-400/30' : ''}
                  ${!isPast && !isActive ? 'border-gray-300 bg-gray-100 text-gray-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:border-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/30 dark:hover:border-brand-600' : ''}
                `}
              >
                {isPast ? <CheckCircle className="h-5 w-5" /> : step.id}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Progreso juosta */}
      <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-brand-500 transition-all duration-300 ease-out"
          style={{ width: `${progressPct}%` }}
          role="progressbar"
          aria-valuenow={currentStep + 1}
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-label={`Progresas: žingsnis ${currentStep + 1} iš ${steps.length}`}
        />
      </div>

      {/* Dabartinio žingsnio kortelė + „Ką padaryti dabar“ + nuorodos / patarimai */}
      <div className="rounded-xl border-2 border-brand-200 dark:border-brand-700 bg-brand-50/60 dark:bg-brand-900/20 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
            {steps[currentStep].id}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
            Žingsnis iš {steps.length}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {steps[currentStep].title}
        </h3>
        <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
          {steps[currentStep].description}
        </p>

        {/* Ką padaryti dabar – veiksmo checklist (max nauda) */}
        {steps[currentStep].actionChecklist && steps[currentStep].actionChecklist.length > 0 && (
          <div className="mt-4 pt-4 border-t border-brand-200 dark:border-brand-700">
            <p className="text-xs font-semibold text-brand-700 dark:text-brand-300 mb-2">
              Ką padaryti dabar
            </p>
            <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
              {steps[currentStep].actionChecklist!.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5 shrink-0" aria-hidden>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Išorinė nuoroda (pvz. ChatGPT Create GPT) */}
        {steps[currentStep].externalLink && (
          <a
            href={steps[currentStep].externalLink!.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white dark:bg-gray-800 border border-brand-200 dark:border-brand-700 px-4 py-2.5 text-sm font-medium text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-900/30 transition-colors"
          >
            {steps[currentStep].externalLink!.label}
            <span className="text-xs" aria-hidden>↗</span>
          </a>
        )}

        {/* Patarimas / dažna klaida */}
        {steps[currentStep].tip && (
          <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <p className="text-xs font-semibold text-amber-800 dark:text-amber-200 mb-0.5">
              Patarimas
            </p>
            <p className="text-sm text-amber-800/90 dark:text-amber-200/90">
              {steps[currentStep].tip}
            </p>
          </div>
        )}

        {/* Nuoroda į šabloną kitoje skaidrėje (žingsnis 4 – Konfigūracija) */}
        {currentStep === 3 && (
          <p className="mt-4 text-xs text-gray-600 dark:text-gray-400">
            📋 Instrukcijų šabloną (META, tikslas, apribojimai) ir gerus/blogus pavyzdžius rasite <strong>sekančioje skaidrėje</strong> „Gerai vs Blogai – instrukcijų formulavimas“.
          </p>
        )}

        {/* Refleksija pabaigoje (žingsnis 8) – max nauda: ką jau turi / ką toliau */}
        {currentStep === 7 && (
          <div className="mt-4 pt-4 border-t border-brand-200 dark:border-brand-700">
            <p className="text-xs font-semibold text-brand-700 dark:text-brand-300 mb-2">
              Santrauka: ką jūsų GPT jau turi
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Tikslas ir rolė</li>
              <li>• Instrukcijos ir (jei pridėjote) žinios</li>
              <li>• Išbandymas ir pataisymai</li>
              <li>• Toliau: stebėkite naudojimą ir periodiškai tobulinkite</li>
            </ul>
          </div>
        )}
      </div>

      {/* Navigacija: Ankstesnis / Toliau */}
      <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
          disabled={isFirst}
          className="btn-secondary inline-flex items-center justify-center gap-2 py-3 sm:py-2 disabled:opacity-50 disabled:cursor-not-allowed order-2 sm:order-1"
          aria-label="Ankstesnis žingsnis"
        >
          <ChevronLeft className="h-5 w-5 shrink-0" />
          Ankstesnis
        </button>
        <button
          type="button"
          onClick={() => setCurrentStep((s) => Math.min(steps.length - 1, s + 1))}
          disabled={isLast}
          className="btn-primary inline-flex items-center justify-center gap-2 py-3 sm:py-2 disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2"
          aria-label={isLast ? 'Paskutinis žingsnis' : `Toliau: ${nextStep?.title}`}
        >
          {isLast ? 'Paskutinis žingsnis' : `Toliau: ${nextStep?.title}`}
          <ChevronRight className="h-5 w-5 shrink-0" />
        </button>
      </div>

    </div>
  );
}
