import { useState, useEffect, Fragment } from 'react';
import { CheckCircle, Sparkles, MessageCircle, Languages, Lightbulb, Target, Layers, Repeat, ChevronRight, ChevronDown, Info, ExternalLink, ArrowRight, Zap, Copy, Wrench, BookMarked } from 'lucide-react';
import { CopyButton, TemplateBlock, ProcessStepper, DiPrezentacijosWorkflowBlock, EnlargeableImage, RlProcessBlock } from '../shared';
import { getColorClasses } from '../utils/colorStyles';
import type {
  ActionIntroContent,
  DefinitionsContent,
  DiModalitiesContent,
  PieChartContent,
  AiWorkflowContent,
  IntroContent,
  ModuleIntroContent,
  ContentBlockContent,
  SectionBreakContent,
  WarmUpQuizContent,
  GlossaryContent,
  PromptTypesContent,
  PromptTechniquesContent,
  WorkflowSummaryContent,
  PromptTemplateContent,
  TransitionContent,
  HierarchyContent,
  ComparisonContent,
  SummaryContent,
  PracticeSummaryContent,
  ProductivityInfographicContent,
} from '../../../types/modules';
import { renderBodyWithBold, RecognitionExerciseBlock } from './shared';

/* ─── Action Intro Slide v3 (provokacija + micro-action + kontekstas) ───
 *  v3: UI/UX polish pagal projekto tipografijos standartus ir geriausias praktikas.
 *  - Hero: kompaktiškas, tamsus, provokuojantis. CTA su subtiliu pulse.
 *  - Palyginimas: slide-in animacija, nested white cards, didesnis šriftas.
 *  - Kontekstas: rodomas tik po reveal, su fade-in.
 */

export interface ActionIntroSlideProps {
  content: ActionIntroContent;
}

export function ActionIntroSlide({ content }: ActionIntroSlideProps) {
  const [revealed, setRevealed] = useState(false);
  const [showTools, setShowTools] = useState(false);

  const ctaLabel = content.ctaText || 'Pamatyk skirtumą per 30 sekundžių!';

  return (
    <div className="space-y-6">
      {/* ── DALIS A: Provokacija + CTA (5-7 sek.) ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 dark:from-gray-950 dark:via-brand-950 dark:to-gray-950 p-6 sm:p-8 md:p-10 text-white">
        {/* Dekoratyvinis fonas – subtilūs ? ir ! ženklai */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <div className="absolute top-3 right-5 text-[90px] sm:text-[110px] font-black leading-none select-none">?</div>
          <div className="absolute bottom-3 left-5 text-[90px] sm:text-[110px] font-black leading-none select-none">!</div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center gap-3 sm:gap-4 max-w-lg mx-auto">
          {/* Pagrindinė provokacija – Plus Jakarta Sans, font-black */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
            {content.heroStat}
            <br />
            <span className="bg-gradient-to-r from-brand-300 to-accent-300 bg-clip-text text-transparent">
              {content.heroText}
            </span>
          </h2>

          {/* Konflikto eilutė – Variant A: dviejų eilučių smūgis (1. eilutė 60% opacity, 2. bold + accent) */}
          {content.heroSubText && (() => {
            const parts = content.heroSubText.split(/\.\s+/).filter(Boolean);
            const isTwoLineSmugis = parts.length === 2 && content.heroSubText.includes('Problema');
            if (isTwoLineSmugis) {
              return (
                <div className="flex flex-col gap-2 sm:gap-3 max-w-sm leading-[1.5]">
                  <p className="text-sm sm:text-base text-gray-400 dark:text-gray-500 opacity-60">
                    {parts[0]}.
                  </p>
                  <p className="text-sm sm:text-base font-bold text-accent-400 dark:text-accent-300">
                    {parts[1]}.
                  </p>
                </div>
              );
            }
            return (
              <p className="text-sm sm:text-base text-gray-400 italic font-medium leading-relaxed max-w-sm">
                {content.heroSubText}
              </p>
            );
          })()}

          {/* CTA mygtukas – pirmas veiksmas per 5 sek. Didelis, ryškus, pulse-slow. */}
          {!revealed && (
            <button
              onClick={() => setRevealed(true)}
              aria-label={ctaLabel}
              className="group mt-2 sm:mt-3 flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-brand-500 via-brand-400 to-accent-500 text-white font-bold text-base sm:text-lg shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-accent-500/40 transition-all duration-300 hover:scale-[1.06] active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-gray-900 min-h-[52px] animate-pulse-slow hover:animate-none"
            >
              <Zap className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <span>{ctaLabel}</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </button>
          )}

        </div>
      </div>

      {/* ── DALIS B: Side-by-side palyginimas (atsiskleidžia po CTA) ── */}
      {revealed && (
        <div className="animate-slide-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nestruktūruotas (kairė – blogas) */}
            <div className="bg-rose-50 dark:bg-rose-900/20 border-2 border-rose-200 dark:border-rose-800 rounded-2xl p-5 sm:p-6 flex flex-col">
              <p className="text-xs font-semibold text-rose-700 dark:text-rose-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" aria-hidden="true" />
                Tuščias promptas
              </p>
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center border border-rose-100 dark:border-rose-900/30">
                <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg italic leading-relaxed font-sans">
                  &ldquo;{content.unstructuredPrompt}&rdquo;
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-rose-600 dark:text-rose-400 font-medium leading-snug">
                  Neaiškus tikslas. Nėra konteksto. DI spėlioja.
                </p>
              </div>
            </div>

            {/* Struktūruotas (dešinė – geras, vizualiai „laimintis") */}
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-300 dark:border-emerald-700 rounded-2xl p-5 sm:p-6 flex flex-col ring-2 ring-emerald-200/60 dark:ring-emerald-800/40 shadow-lg shadow-emerald-500/10">
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" aria-hidden="true" />
                6 blokų promptas
              </p>
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-4 border border-emerald-100 dark:border-emerald-900/30">
                <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line font-mono leading-relaxed max-h-56 overflow-y-auto pr-1">
                  {content.structuredPrompt}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
                  <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium leading-snug truncate">
                    Aiškus kontekstas, struktūra, rezultatas.
                  </p>
                </div>
                <CopyButton text={content.structuredPrompt} size="sm" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── DALIS C: Kontekstas (rodomas tik po reveal su animacija) ── */}
      {revealed && (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
          {/* Apie mokymą + outcomes */}
          <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand-500 p-5 rounded-xl">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {content.aboutText}
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              {content.outcomes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trukmė + DI įrankių išskleidimo mygtukas */}
          <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5 rounded-xl flex flex-col">
            <div className="mb-4">
              <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Trukmė:</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{content.duration}</p>
            </div>

            <button
              onClick={() => setShowTools(!showTools)}
              className="flex items-center gap-2 text-sm font-semibold text-brand-700 dark:text-brand-300 hover:text-brand-800 dark:hover:text-brand-200 transition-colors min-h-[44px] py-2"
              aria-expanded={showTools}
            >
              <Wrench className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span>{showTools ? 'Paslėpti DI įrankius' : 'DI įrankiai – peržiūrėti'}</span>
              <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${showTools ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Apačioje: aiškiai išskleidžiamas DI įrankių blokas */}
        {showTools && (
          <div className="animate-fade-in border-2 border-brand-200 dark:border-brand-800 rounded-2xl bg-gradient-to-b from-brand-50/80 to-white dark:from-brand-950/50 dark:to-gray-900 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-brand-500" aria-hidden="true" />
              DI įrankiai – kur pradėti
            </h3>
            {content.toolsIntro && (
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {content.toolsIntro}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.tools.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    {t.url ? (
                      <a
                        href={t.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-base font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-200 underline underline-offset-2 inline-flex items-center gap-1"
                      >
                        {t.name}
                        <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-base font-semibold text-gray-900 dark:text-white">{t.name}</span>
                    )}
                  </div>
                  {t.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug mb-3">
                      {t.description}
                    </p>
                  )}
                  {t.useCases && t.useCases.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                        Populiariausi naudojimo atvejai
                      </p>
                      <ul className="flex flex-wrap gap-1.5">
                        {t.useCases.map((uc, i) => (
                          <li key={i}>
                            <span className="inline-block text-xs px-2 py-0.5 rounded-md bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300">
                              {uc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-5">
              Principai veikia visuose įrankiuose – svarbi prompto struktūra, ne platforma.
            </p>
          </div>
        )}
        </>
      )}
    </div>
  );
}

export function ContentBlockSlide({ content }: { content: ContentBlockContent }) {
  const isDiVisata = !!content.comparisonImages;
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});
  const hasCollapsibleSections = (content.sections ?? []).some((s) => Boolean(s.collapsible));

  // Initialize collapsible sections (accordion) – closed by default
  useEffect(() => {
    const initial: Record<number, boolean> = {};
    (content.sections ?? []).forEach((s, idx) => {
      if (s.collapsible) {
        initial[idx] = !(s.collapsedByDefault ?? true);
      }
    });
    setOpenSections(initial);
  }, [content]);

  const expandAll = () => {
    const next: Record<number, boolean> = {};
    (content.sections ?? []).forEach((s, idx) => {
      if (s.collapsible) next[idx] = true;
    });
    setOpenSections(next);
  };

  const collapseAll = () => {
    const next: Record<number, boolean> = {};
    (content.sections ?? []).forEach((s, idx) => {
      if (s.collapsible) next[idx] = false;
    });
    setOpenSections(next);
  };

  return (
    <div
      className={`space-y-6 rounded-2xl p-6 -mx-2 sm:-mx-4 ${
        isDiVisata
          ? 'bg-gradient-to-b from-di-visata-bg-top to-di-visata-bg-bottom dark:from-gray-900/80 dark:to-gray-800/90'
          : ''
      }`}
    >
      {content.comparisonImages && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Kairė: Dantė – metafora, istorija / mąstymo modelis */}
          <div className="flex flex-col gap-2 p-4 rounded-xl bg-di-visata-dante-paper dark:bg-gray-800/80 border-t-4 border-t-di-visata-dante-accent border border-amber-100 dark:border-amber-900/30 shadow-sm">
            <EnlargeableImage
              src={content.comparisonImages.left.src}
              alt={content.comparisonImages.left.label || ''}
              enlargeLabel={content.comparisonImages.left.label || undefined}
              className="border-amber-200/60 dark:border-amber-800/40"
            />
            {content.comparisonImages.left.label && (
              <p className="text-sm font-semibold text-di-visata-text-muted dark:text-gray-300">
                {content.comparisonImages.left.label}
              </p>
            )}
            {content.comparisonImages.left.explanation && (
              <p className="text-sm text-di-visata-text-muted dark:text-gray-400 leading-relaxed">
                {content.comparisonImages.left.explanation}
              </p>
            )}
            {content.comparisonImages.left.source && (
              <p className="text-xs text-gray-500 dark:text-gray-400 italic">{content.comparisonImages.left.source}</p>
            )}
          </div>
          {/* Dešinė: AI Universe – sistema, dabartis / technologija */}
          <div className="flex flex-col gap-2 p-4 rounded-xl bg-di-visata-ai-cool dark:bg-gray-800/80 border-t-4 border-t-di-visata-ai-accent border border-blue-100 dark:border-blue-900/30 shadow-sm">
            <EnlargeableImage
              src={content.comparisonImages.right.src}
              alt={content.comparisonImages.right.label || ''}
              enlargeLabel={content.comparisonImages.right.label || undefined}
              className="border-blue-200/60 dark:border-blue-800/40"
            />
            {content.comparisonImages.right.label && (
              <p className="text-sm font-semibold text-di-visata-text-muted dark:text-gray-300">
                {content.comparisonImages.right.label}
              </p>
            )}
            {content.comparisonImages.right.explanation && (
              <p className="text-sm text-di-visata-text-muted dark:text-gray-400 leading-relaxed">
                {content.comparisonImages.right.explanation}
              </p>
            )}
            {content.comparisonImages.right.source && (
              <p className="text-xs text-gray-500 dark:text-gray-400 italic">{content.comparisonImages.right.source}</p>
            )}
          </div>
        </div>
      )}
      {hasCollapsibleSections && (
        <div className="flex flex-wrap items-center justify-end gap-2">
          <button
            type="button"
            onClick={expandAll}
            className="btn-secondary px-4 py-2 text-sm"
            aria-label="Atidaryti visas korteles"
          >
            Atidaryti visus
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="btn-secondary px-4 py-2 text-sm"
            aria-label="Suskleisti visas korteles"
          >
            Suskleisti visus
          </button>
        </div>
      )}

      {(content.sections ?? []).map((section, i) => {
        const isOptional = section.heading?.toLowerCase().includes('(optional)');
        const variant = section.blockVariant || 'default';
        const isBottomLine = isDiVisata && variant === 'accent';
        const isCollapsible = Boolean(section.collapsible);
        const isOpen = isCollapsible ? Boolean(openSections[i]) : true;
        const contentId = `content-section-${i}`;
        const blockClasses = isOptional
          ? 'bg-gray-50 dark:bg-gray-800/70 p-4 rounded-xl border-l-4 border-gray-300 dark:border-gray-600 border border-gray-200 dark:border-gray-700'
          : isBottomLine
            ? 'bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl border-l-4 border-l-di-visata-ai-accent border border-blue-200/60 dark:border-blue-800/40 shadow-md'
            : variant === 'accent'
              ? 'bg-accent-50 dark:bg-accent-900/20 p-6 rounded-xl border-l-4 border-accent-500 border border-accent-200 dark:border-accent-800'
              : variant === 'brand'
                ? 'bg-brand-50 dark:bg-brand-900/20 p-6 rounded-xl border-l-4 border-l-brand-500 border border-brand-200 dark:border-brand-800'
                : variant === 'terms'
                  ? 'bg-slate-50 dark:bg-slate-800/60 p-6 rounded-xl border-l-4 border-slate-400 dark:border-slate-600 border border-slate-200 dark:border-slate-700'
                  : 'bg-white dark:bg-gray-800 p-6 rounded-xl border-l-4 border-brand-200 dark:border-brand-800 border border-gray-200 dark:border-gray-700';
        return (
        <Fragment key={i}>
        <div className={blockClasses}>
          {section.heading && !isCollapsible && (
            <h4
              className={
                isOptional
                  ? 'font-semibold text-sm text-gray-600 dark:text-gray-400 mb-2'
                  : isBottomLine
                    ? 'font-semibold text-lg text-gray-800 dark:text-gray-100 mb-3'
                    : 'font-semibold text-lg text-gray-900 dark:text-white mb-3'
              }
            >
              {section.heading}
            </h4>
          )}

          {section.heading && isCollapsible && (
            <button
              type="button"
              onClick={() => setOpenSections((prev) => ({ ...prev, [i]: !prev[i] }))}
              className={`w-full flex items-center justify-between gap-3 text-left focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded-lg ${
                isOptional ? 'mb-2' : 'mb-3'
              }`}
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <span
                className={
                  isOptional
                    ? 'font-semibold text-sm text-gray-600 dark:text-gray-400'
                    : isBottomLine
                      ? 'font-semibold text-lg text-gray-800 dark:text-gray-100'
                      : 'font-semibold text-lg text-gray-900 dark:text-white'
                }
              >
                {section.heading}
              </span>
              <ChevronRight
                className={`w-5 h-5 shrink-0 text-gray-500 dark:text-gray-400 transition-transform ${
                  isOpen ? 'rotate-90' : ''
                }`}
                aria-hidden
              />
            </button>
          )}

          <div id={contentId} className={isCollapsible && !isOpen ? 'hidden' : ''}>
          {section.presentationToolsBlock && content.presentationTools && content.presentationTools.length > 0 ? (
            <div className="space-y-3" role="region" aria-label="Prezentacijų įrankiai">
              <p className="text-sm text-gray-600 dark:text-gray-400">Kam ir kada naudoti – paspausk, kad atidarytum:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {content.presentationTools.map((tool, idx) => (
                  <a
                    key={idx}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-3 rounded-xl border-2 border-brand-200 dark:border-brand-700 bg-brand-50/50 dark:bg-brand-900/10 hover:border-brand-500 dark:hover:border-brand-500 hover:bg-brand-100/80 dark:hover:bg-brand-900/20 transition-colors group"
                    aria-label={`${tool.name}: ${tool.forWhom}. Atidaryti naujame lange.`}
                  >
                    <span className="font-bold text-brand-700 dark:text-brand-300 group-hover:text-brand-800 dark:group-hover:text-brand-200 flex items-center gap-1.5">
                      {tool.name}
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden />
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{tool.forWhom}</span>
                  </a>
                ))}
              </div>
            </div>
          ) : section.image ? (
            section.image.includes('rl_process_diagram') ? (
              <div className="my-4">
                <RlProcessBlock />
                {section.body && (
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{renderBodyWithBold(section.body)}</p>
                )}
              </div>
            ) : section.image.includes('di_prezentacijos_workflow') ? (
              <div className="my-4">
                <DiPrezentacijosWorkflowBlock />
                {section.body && (
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{renderBodyWithBold(section.body)}</p>
                )}
              </div>
            ) : section.image.includes('custom_gpt_process') ? (
              <div className="my-4">
                <ProcessStepper />
                <a
                  href={section.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-xs font-medium text-brand-600 dark:text-brand-400 hover:underline"
                >
                  Peržiūrėti pilną diagramą
                </a>
              </div>
            ) : (
            <figure className="my-4">
              <div className={`overflow-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/30 max-h-80`}>
                <img
                  src={section.image}
                  alt={section.imageAlt ?? section.heading ?? ''}
                  className="w-full h-auto min-h-0 object-contain"
                />
              </div>
              {section.body && (
                <figcaption className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {section.body}
                </figcaption>
              )}
              <a
                href={section.image}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-block text-xs font-medium text-brand-600 dark:text-brand-400 hover:underline"
              >
                Peržiūrėti pilname dydyje
              </a>
            </figure>
            )
          ) : null}
          {section.copyable && !section.presentationToolsBlock && (
            <div className="mt-2 mb-3">
              <TemplateBlock
                label="Kopijuoti"
                template={section.copyable}
              />
            </div>
          )}
          {section.table && !section.presentationToolsBlock && (
            <div
              className="overflow-x-auto my-3 rounded-lg border border-gray-200 dark:border-gray-600"
              role="region"
              aria-label={section.table.headers?.length === 2 ? `Palyginimo lentelė: ${section.table.headers.join(' ir ')}` : 'Palyginimo lentelė'}
            >
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-100 dark:bg-brand-900/40">
                    {(section.table.headers ?? []).map((h, j) => (
                      <th key={j} className="px-4 py-3 text-left font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(section.table.rows ?? []).map((row, ri) => (
                    <tr key={ri} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0 even:bg-gray-50/50 dark:even:bg-gray-800/30">
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-4 py-3 text-gray-700 dark:text-gray-300 align-top">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {!section.image && !section.presentationToolsBlock && (section.body || !section.table) && (
            <div className={isOptional ? 'text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line' : 'text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line'}>
              {renderBodyWithBold(section.body)}
            </div>
          )}
          </div>
        </div>
        {i === 0 && content.workflowImages && content.workflowImages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="region" aria-label="Inžinerijos workflow pavyzdžiai">
            {content.workflowImages.slice(0, 2).map((img, j) => (
              <figure
                key={j}
                className="group relative rounded-xl border border-brand-200 dark:border-brand-800 bg-brand-50/50 dark:bg-brand-900/10 overflow-visible"
              >
                <div className="p-2 bg-gray-50/50 dark:bg-gray-900/30">
                  <EnlargeableImage
                    src={img.src}
                    alt={img.alt ?? img.label ?? 'Workflow schema'}
                    enlargeLabel={img.label ?? undefined}
                    className="border-brand-200 dark:border-brand-800 rounded-lg max-h-72"
                  />
                </div>
                {img.label && (
                  <figcaption className="p-3 text-sm font-semibold text-brand-800 dark:text-brand-200 flex items-center gap-2">
                    {img.label}
                    {img.tooltip && (
                      <span
                        className="relative inline-flex"
                        aria-label={`Papildoma informacija: ${img.label}`}
                      >
                        <Info
                          className="w-4 h-4 text-brand-500 dark:text-brand-400 shrink-0"
                          aria-hidden
                        />
                        <span
                          id={`workflow-tooltip-${j}`}
                          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 w-64 p-3 text-xs font-normal text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-10 pointer-events-none"
                          role="tooltip"
                        >
                          {img.tooltip}
                        </span>
                      </span>
                    )}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
        </Fragment>
      ); })}
      {content.recognitionExercise && (
        <RecognitionExerciseBlock
          exercise={content.recognitionExercise}
          useAiAccent={isDiVisata}
        />
      )}
      {content.practicalTask && (
        <div
          className={
            isDiVisata
              ? 'mt-6 rounded-xl border-l-4 border-l-di-visata-ai-accent bg-di-visata-ai-cool/80 dark:bg-gray-800/80 pl-4'
              : 'mt-6 rounded-xl border-l-4 border-accent-500 bg-accent-50 dark:bg-accent-900/20 pl-4'
          }
        >
          <TemplateBlock
            label={content.practicalTask.templateLabel || 'Kopijuojamas šablonas'}
            template={content.practicalTask.template}
          />
        </div>
      )}
    </div>
  );
}

export function SectionBreakSlide({ content }: { content: SectionBreakContent }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[280px] text-center px-4 py-8">
      {content.sectionNumber && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 font-semibold text-sm mb-4">
          {content.sectionNumber}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
        {content.title}
      </h2>
      {content.subtitle && (
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
          {content.subtitle}
        </p>
      )}
    </div>
  );
}

export function WarmUpQuizSlide({ content }: { content: WarmUpQuizContent }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const questions = content.questions ?? [];
  const q = questions[currentIndex];
  const isDone = currentIndex >= questions.length;

  const handleOptionClick = (idx: number) => {
    if (showFeedback) return;
    setSelectedOption(idx);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setCurrentIndex(questions.length);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600 dark:text-gray-400">
        Bandomųjų klausimų nėra.
      </div>
    );
  }

  if (isDone) {
    return (
      <div className="space-y-6">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-6 rounded-xl text-center">
          <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" aria-hidden />
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Pasiruošimo savitikra baigta</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Galite pradėti testą – įskaita neįskaitoma, tai tik pasiruošimas.
          </p>
        </div>
      </div>
    );
  }

  const isCorrect = selectedOption === q.correct;

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Klausimas {currentIndex + 1} iš {questions.length}. Įskaita neįskaitoma – tik pasiruošimas.
      </p>
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border-2 border-gray-200 dark:border-gray-700">
        <p className="font-bold text-gray-900 dark:text-white mb-4">{q.question}</p>
        <div className="space-y-2">
          {q.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrectOption = idx === q.correct;
            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                disabled={showFeedback}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                  showFeedback
                    ? isCorrectOption
                      ? 'border-emerald-500 bg-emerald-100 dark:bg-emerald-900/30'
                      : isSelected && !isCorrectOption
                      ? 'border-rose-500 bg-rose-100 dark:bg-rose-900/30'
                      : 'border-gray-200 dark:border-gray-700'
                    : isSelected
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/30'
                    : 'border-gray-200 dark:border-gray-700 hover:border-brand-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      showFeedback ? (isCorrectOption ? 'border-emerald-500 bg-emerald-500' : isSelected ? 'border-rose-500 bg-rose-500' : 'border-gray-300') : isSelected ? 'border-brand-500 bg-brand-500' : 'border-gray-300'
                    }`}
                  >
                    {showFeedback && isCorrectOption && <CheckCircle className="w-4 h-4 text-white" />}
                    {isSelected && !showFeedback && <div className="w-3 h-3 rounded-full bg-white" />}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{option}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {showFeedback && (
        <div className={`p-4 rounded-xl ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800' : 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800'}`}>
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">{isCorrect ? 'Teisingai' : 'Neteisingai'}</p>
          {q.explanation && <p className="text-sm text-gray-700 dark:text-gray-300">{q.explanation}</p>}
          <button
            type="button"
            onClick={handleNext}
            className="mt-3 px-4 py-2 rounded-lg bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors"
          >
            {currentIndex + 1 < questions.length ? 'Kitas' : 'Baigti'}
          </button>
        </div>
      )}
    </div>
  );
}

export function GlossarySlide({ content }: { content: GlossaryContent }) {
  return (
    <div className="space-y-4">
      {/* ── Header ── */}
      <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-l-brand-500 p-5 rounded-r-xl">
        <h4 className="font-bold text-lg text-brand-900 dark:text-brand-100">Žodynėlis</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Pagrindiniai terminai – greitai susigrąžink, jei reikia.</p>
      </div>

      {/* ── Terminai ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {(content.terms ?? []).map((item, i) => (
          <article
            key={i}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
            role="article"
            aria-label={item.term}
          >
            <dt className="font-bold text-sm text-brand-700 dark:text-brand-300 mb-1">{item.term}</dt>
            <dd className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.definition}</dd>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ModuleIntroSlide({ content }: { content: ModuleIntroContent }) {
  return (
    <div className="space-y-6">
      <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand-500 p-6 rounded-xl">
        <h3 className="font-bold text-lg mb-3 text-brand-900 dark:text-brand-100">
          Po šio modulio galėsite:
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          {(content.learningOutcomes ?? []).map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-6 rounded-xl">
        <h3 className="font-bold text-lg mb-3 text-accent-900 dark:text-accent-100">
          Kodėl konteksto inžinerija?
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{content.whyAdvanced}</p>
      </div>
      {content.connectionToModule1 && (
        <div className="bg-slate-50 dark:bg-slate-800/60 border-l-4 border-slate-400 dark:border-slate-600 border border-slate-200 dark:border-slate-700 p-5 rounded-xl">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Ryšys su Moduliu 1</p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {content.connectionToModule1}
          </p>
        </div>
      )}
    </div>
  );
}

const DEFAULT_INTRO: IntroContent = {
  aboutText: 'Šis mokymas padės jums kurti efektyvius promptus, kurie duoda nuoseklius, profesionalius rezultatus. Išmoksite hierarchinę struktūrą, kuri paverčia chaotišką DI komunikaciją sistemingu ir valdomu procesu.',
  tools: [
    { name: 'ChatGPT (OpenAI)', url: 'https://chat.openai.com' },
    { name: 'Claude (Anthropic)', url: 'https://claude.ai' },
    { name: 'Gemini (Google)', url: 'https://gemini.google.com' },
    { name: 'Copilot (Microsoft)', url: 'https://copilot.microsoft.com' },
    { name: 'Grok (xAI)', url: 'https://grok.x.ai' },
  ],
  outcomes: ['Struktūruoti promptus profesionaliai', 'Gauti nuspėjamus rezultatus', 'Taupyti laiką ir išteklius'],
  toolsTip: 'Mokymuose dėmesys skiriamas promptų struktūrai, todėl tie patys principai veikia skirtinguose įrankiuose.',
  tip: 'Pagalvokite apie vieną verslo užduotį, kurią norėtumėte automatizuoti ar pagerinti naudojant DI. Šį pavyzdį naudosime viso mokymo metu.',
};

export interface IntroSlideProps {
  content?: IntroContent | null;
}
export function IntroSlide({ content: contentProp }: IntroSlideProps) {
  const content = contentProp ?? DEFAULT_INTRO;
  return (
    <div className="space-y-6">
      <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand-500 p-6 rounded-xl">
        <h3 className="font-bold text-lg mb-3 text-brand-900 dark:text-brand-100">Apie šį mokymą</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{content.aboutText}</p>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-xl">
        <h3 className="font-bold text-lg mb-3 text-amber-900 dark:text-amber-100 flex items-center gap-2">
          <span className="text-2xl">🛠️</span> Kokius DI įrankius naudoti?
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Visas šiuose mokymuose pateiktas praktines užduotis galite atlikti naudodami bet kurį modernų generatyvinio dirbtinio intelekto įrankį.
        </p>
        <div className="mb-4">
          <p className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-2">Galimi įrankiai:</p>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {content.tools.map((t, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                <span>
                  <strong>{t.name}</strong>
                  {t.url && (
                    <> –{' '}
                      <a href={t.url} target="_blank" rel="noreferrer" className="text-amber-700 dark:text-amber-300 underline hover:text-amber-900 dark:hover:text-amber-100">
                        {t.url}
                      </a>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {content.toolsTip && (
          <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-amber-900 dark:text-amber-100 flex items-start gap-2">
              <span className="text-amber-600 dark:text-amber-400 mt-0.5">🔹</span>
              <span><strong>Svarbu:</strong> {content.toolsTip}</span>
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-xl">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3">Po šio mokymo galėsite:</h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            {content.outcomes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-violet-50 dark:bg-violet-900/20 p-5 rounded-xl">
          <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-3">Mokymo trukmė:</h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>• 3 moduliai</li>
            <li>• Praktinės užduotys</li>
            <li>• ~45 minučių</li>
          </ul>
        </div>
      </div>

      {content.tip && (
        <div className="mt-6 p-5 bg-accent-50 dark:bg-accent-900/20 rounded-xl border-l-4 border-accent-500">
          <p className="text-sm text-accent-900 dark:text-accent-100 leading-relaxed">
            <strong className="block mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-accent-600 dark:text-accent-400" strokeWidth={1.5} />
              Praktinė užduotis:
            </strong>
            {content.tip}
          </p>
        </div>
      )}
    </div>
  );
}

export function DefinitionsSlide({ content }: { content?: DefinitionsContent }) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [showEngineering, setShowEngineering] = useState(false);
  const [showSources, setShowSources] = useState(false);
  const bothRevealed = showPrompt && showEngineering;

  const getAspectIcon = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      MessageCircle: <MessageCircle className="w-6 h-6" />,
      Languages: <Languages className="w-6 h-6" />,
      Lightbulb: <Lightbulb className="w-6 h-6" />,
      Target: <Target className="w-6 h-6" />,
      Layers: <Layers className="w-6 h-6" />,
      Repeat: <Repeat className="w-6 h-6" />,
    };
    return icons[iconName] || <Sparkles className="w-6 h-6" />;
  };

  const aspectColors = ['violet', 'brand', 'accent'];

  return (
    <div className="space-y-6">
      {/* ── A) Hook (tamsus, provokuojantis) ── */}
      {content?.contextIntro && (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 dark:from-gray-950 dark:via-brand-950 dark:to-gray-950 p-5 sm:p-7 text-white">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" aria-hidden="true">
            <div className="absolute top-2 right-4 text-[80px] font-black leading-none select-none">💬</div>
            <div className="absolute bottom-2 left-4 text-[80px] font-black leading-none select-none">🔧</div>
          </div>
          <div className="relative z-10 text-center max-w-md mx-auto">
            <p className="text-base sm:text-lg font-bold leading-snug tracking-tight">
              {content.contextIntro}
            </p>
            {!bothRevealed && (
              <p className="text-xs sm:text-sm text-brand-300/80 mt-2 font-medium">
                Paspauskite korteles žemiau ir sužinokite.
              </p>
            )}
          </div>
        </div>
      )}

      {/* ── Optional hero/comparison images ── */}
      {(content?.heroImage || content?.comparisonImage) && (
        <div className={content?.comparisonImage ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : 'flex justify-center'}>
          {content?.heroImage && (
            <div className="flex flex-col items-center gap-2">
              <img
                src={content.heroImage}
                alt={content.heroImageLabel || 'DI ir promptų inžinerijos kontekstas'}
                className="w-full h-auto rounded-xl border border-gray-200 dark:border-gray-700 object-contain max-h-64"
              />
              {content.comparisonImage && content.heroImageLabel && (
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{content.heroImageLabel}</p>
              )}
            </div>
          )}
          {content?.comparisonImage && (
            <div className="flex flex-col items-center gap-2">
              <img
                src={content.comparisonImage}
                alt={content.comparisonImageLabel || 'Palyginimo iliustracija'}
                className="w-full h-auto rounded-xl border border-gray-200 dark:border-gray-700 object-contain max-h-64"
              />
              {content?.comparisonImageLabel && (
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{content.comparisonImageLabel}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── B) Dvi interaktyvios kortelės ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Kortelė 1: Promptas */}
        <button
          onClick={() => setShowPrompt(true)}
          disabled={showPrompt}
          className={`text-left rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
            showPrompt
              ? 'border-brand-300 dark:border-brand-700 bg-gradient-to-br from-brand-50 to-violet-50 dark:from-brand-900/20 dark:to-violet-900/20 cursor-default'
              : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-brand-300 dark:hover:border-brand-600 hover:shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2.5 rounded-xl flex-shrink-0 transition-colors duration-300 ${
                showPrompt
                  ? 'bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
              }`}>
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Promptas</h3>
                {!showPrompt && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">Paspauskite ir sužinokite</p>
                )}
              </div>
              {!showPrompt && (
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto flex-shrink-0" aria-hidden="true" />
              )}
            </div>
            {showPrompt && (
              <div className="animate-fade-in">
                <div className="border-l-4 border-brand-500 pl-4">
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {content?.promptDefinition}
                  </p>
                </div>
              </div>
            )}
          </div>
        </button>

        {/* Kortelė 2: Promptų Inžinerija */}
        <button
          onClick={() => setShowEngineering(true)}
          disabled={showEngineering}
          className={`text-left rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
            showEngineering
              ? 'border-accent-300 dark:border-accent-700 bg-gradient-to-br from-accent-50 to-brand-50 dark:from-accent-900/20 dark:to-brand-900/20 cursor-default'
              : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-accent-300 dark:hover:border-accent-600 hover:shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2.5 rounded-xl flex-shrink-0 transition-colors duration-300 ${
                showEngineering
                  ? 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
              }`}>
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Promptų Inžinerija</h3>
                {!showEngineering && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">Paspauskite ir sužinokite</p>
                )}
              </div>
              {!showEngineering && (
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto flex-shrink-0" aria-hidden="true" />
              )}
            </div>
            {showEngineering && (
              <div className="animate-fade-in">
                <div className="border-l-4 border-accent-500 pl-4 mb-4">
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {content?.engineeringDefinition}
                  </p>
                </div>
              </div>
            )}
          </div>
        </button>
      </div>

      {/* ── 3 Dedamosios (rodomi po Inžinerijos atskleidimo) ── */}
      {showEngineering && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-slide-in">
          {(content?.aspects ?? []).map((aspect, idx) => {
            const color = aspectColors[idx] || 'brand';
            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border-2 bg-${color === 'accent' ? 'accent' : color}-50 dark:bg-${color === 'accent' ? 'accent' : color}-900/20 border-${color === 'accent' ? 'accent' : color}-200 dark:border-${color === 'accent' ? 'accent' : color}-800`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg bg-${color === 'accent' ? 'accent' : color}-100 dark:bg-${color === 'accent' ? 'accent' : color}-900/30 text-${color === 'accent' ? 'accent' : color}-600 dark:text-${color === 'accent' ? 'accent' : color}-400`}>
                    {getAspectIcon(aspect.icon)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full bg-${color === 'accent' ? 'accent' : color}-200 dark:bg-${color === 'accent' ? 'accent' : color}-800 text-${color === 'accent' ? 'accent' : color}-700 dark:text-${color === 'accent' ? 'accent' : color}-300`}>
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">{aspect.title}</h4>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-2">
                  {aspect.description}
                </p>
                <div className="bg-white dark:bg-gray-900/50 p-2.5 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Pavyzdys</p>
                    <CopyButton text={aspect.example} size="sm" />
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 italic leading-relaxed">{aspect.example}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── C) Key Insight (rodomas kai abu terminai atskleisti) ── */}
      {bothRevealed && (
        <div className="animate-bounce-in">
          <div className="bg-gradient-to-r from-brand-500 to-accent-500 p-5 sm:p-6 rounded-2xl text-white text-center shadow-lg shadow-brand-500/20">
            <p className="text-base sm:text-lg font-bold flex items-center justify-center gap-2 leading-snug">
              <Sparkles className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <span>{content?.keyInsight}</span>
              <Sparkles className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            </p>
          </div>
        </div>
      )}

      {/* ── Šaltiniai (collapsible) ── */}
      {content?.sources && content.sources.length > 0 && bothRevealed && (
        <div className="animate-fade-in">
          <button
            onClick={() => setShowSources(!showSources)}
            className="flex items-center gap-2 text-xs font-semibold text-brand-700 dark:text-brand-300 hover:text-brand-800 dark:hover:text-brand-200 transition-colors min-h-[44px]"
            aria-expanded={showSources}
          >
            <span>Šaltiniai ir gairės</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showSources ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          {showSources && (
            <div className="mt-2 text-xs text-brand-700 dark:text-brand-300 space-y-1 animate-fade-in">
              {content.sources.map((source, idx) => (
                <div key={idx}>
                  <a href={source.url} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-brand-900 dark:hover:text-brand-100">
                    {source.label}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function DiModalitiesSlide({ content }: { content?: DiModalitiesContent }) {
  const groups = content?.groups ?? [];
  const intro = content?.intro ?? 'DI modeliai, pagrįsti transformeriais, gali dirbti su įvairiomis įvesties ir išvesties formomis. Žemiau – pagrindinės kategorijos su pavyzdžiais ir nuorodomis. Pažymėta rekomenduojami įrankiai kiekvienai kategorijai.';
  return (
    <div className="space-y-8">
      {/* Intro – aiški tipografija, projekto spalvos */}
      <div className="max-w-3xl mx-auto space-y-2">
        <p className="text-center text-slate-600 dark:text-slate-300 text-base leading-relaxed">
          {intro}
        </p>
        {/* 1. Legenda – iš karto aišku, ką reiškia Rek. (lengvesnis skaitymas) */}
        <p className="text-center text-slate-500 dark:text-slate-400 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-0.5 text-emerald-700 dark:text-emerald-300 font-medium">
            <CheckCircle className="w-3 h-3 shrink-0" aria-hidden />
            Rek. = rekomenduojamas įrankis šiai kategorijai
          </span>
        </p>
      </div>

      {/* Kategorijos – kortelės su brand kairiuoju rėmeliu (lengviau skenuoti) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {groups.map((group, idx) => (
          <article
            key={idx}
            className="relative bg-white dark:bg-slate-800/80 pl-5 pr-5 py-5 rounded-2xl border border-slate-200 dark:border-slate-700 border-l-4 border-l-brand-500 dark:border-l-brand-400 shadow-sm hover:shadow-lg hover:border-brand-200 dark:hover:border-brand-700 transition-all duration-200 focus-within:ring-2 focus-within:ring-brand-500 focus-within:ring-offset-2"
          >
            {/* Modality – badge projekto spalva */}
            <div className="mb-3">
              <span className="inline-block px-3 py-1 rounded-lg text-sm font-semibold bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                {group.modality}
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-sm mb-1.5 font-semibold leading-snug">
              {group.tasks}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 leading-snug">
              {group.description}
            </p>
            {/* 2. „Įrankiai:“ etiketė + chip stilius – aiškūs paspaudžiami blokai, geresni touch targets */}
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Įrankiai:</p>
            <ul className="flex flex-wrap gap-2" aria-label="Įrankiai šiai kategorijai">
              {group.examples.map((ex, i) => (
                <li key={i} className="inline-flex items-center gap-1.5">
                  {ex.url ? (
                    <a
                      href={ex.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      title={ex.tooltip}
                      className="inline-flex items-center gap-1.5 min-h-[32px] px-2.5 py-1.5 rounded-lg text-sm font-medium text-brand-700 dark:text-brand-300 bg-slate-100 dark:bg-slate-700/60 hover:bg-brand-100 dark:hover:bg-brand-900/40 hover:text-brand-800 dark:hover:text-brand-200 border border-transparent hover:border-brand-200 dark:hover:border-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-1"
                    >
                      {ex.name}
                    </a>
                  ) : (
                    <span className="inline-flex items-center min-h-[32px] px-2.5 py-1.5 rounded-lg text-sm font-medium text-brand-600 dark:text-brand-400 bg-slate-100 dark:bg-slate-700/60" title={ex.tooltip}>
                      {ex.name}
                    </span>
                  )}
                  {ex.recommended && (
                    <span
                      className="inline-flex items-center gap-0.5 px-2 py-1 rounded-md text-[10px] font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 whitespace-nowrap"
                      title="Rekomenduojamas įrankis šiai kategorijai"
                    >
                      <CheckCircle className="w-3 h-3 shrink-0" aria-hidden />
                      Rek.
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Takeaway – accent akcentas, projekto kortelė */}
      {content?.takeaway && (
        <div className="rounded-2xl border-l-4 border-accent-500 bg-accent-50 dark:bg-accent-900/20 dark:border-accent-600 p-5 shadow-sm">
          <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
            <span className="font-bold text-accent-700 dark:text-accent-300">Takeaway: </span>
            {content.takeaway}
          </p>
        </div>
      )}
    </div>
  );
}

/** Projekto spalvų paletė pie diagramai (atitinka tailwind brand/emerald/orange/rose/violet/amber/slate/fuchsia) */
const PIE_COLORS: Record<string, string> = {
  brand: '#627d98',
  emerald: '#10b981',
  orange: '#f97316',
  rose: '#f43f5e',
  violet: '#8b5cf6',
  amber: '#f59e0b',
  slate: '#94a3b8',
  fuchsia: '#d946ef',
};

function getPieColor(colorKey?: string, index?: number): string {
  const key = colorKey || ['brand', 'emerald', 'orange', 'rose', 'violet', 'amber', 'slate', 'fuchsia'][index ?? 0];
  return PIE_COLORS[key] ?? PIE_COLORS.brand;
}

export function PieChartSlide({ content }: { content?: PieChartContent }) {
  const segments = content?.segments ?? [];
  const total = segments.reduce((s, seg) => s + seg.value, 0) || 1;
  const cx = 100;
  const cy = 100;
  const r = 80;

  let acc = 0;
  const paths = segments.map((seg, i) => {
    const pct = seg.value / total;
    const startAngle = (acc / 100) * 2 * Math.PI - Math.PI / 2;
    acc += pct * 100;
    const endAngle = (acc / 100) * 2 * Math.PI - Math.PI / 2;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const large = pct > 0.5 ? 1 : 0;
    const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
    const fill = getPieColor(seg.colorKey, i);
    return { d, fill, label: seg.label, value: seg.value };
  });

  return (
    <div className="space-y-6">
      {content?.title && (
        <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white">
          {content.title}
        </h2>
      )}
      {content?.subtitle && (
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          {content.subtitle}
        </p>
      )}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <div className="flex-shrink-0">
          <svg viewBox="0 0 200 200" className="w-48 h-48 md:w-56 md:h-56">
            {paths.map((p, i) => (
              <path key={i} d={p.d} fill={p.fill} stroke="white" strokeWidth={1.5} />
            ))}
          </svg>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          {paths.map((p, i) => (
            <li key={i} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: p.fill }}
              />
              <span className="text-gray-700 dark:text-gray-300">
                {p.label} <span className="font-medium text-gray-900 dark:text-white">{p.value}%</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const STAGE_COLORS = [
  { bg: 'bg-brand-100 dark:bg-brand-900/30', border: 'border-brand-500', text: 'text-brand-800 dark:text-brand-200' },
  { bg: 'bg-amber-100 dark:bg-amber-900/30', border: 'border-amber-500', text: 'text-amber-800 dark:text-amber-200' },
  { bg: 'bg-violet-100 dark:bg-violet-900/30', border: 'border-violet-500', text: 'text-violet-800 dark:text-violet-200' },
];
const EXAMPLE_STEP_COLORS = ['bg-emerald-500', 'bg-orange-500', 'bg-violet-500', 'bg-brand-500', 'bg-rose-500'];

export function AiWorkflowSlide({ content }: { content?: AiWorkflowContent }) {
  const stages = content?.stages ?? [];
  const examples = content?.examples ?? [];

  return (
    <div className="space-y-6">
      {content?.title && (
        <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white">
          {content.title}
        </h2>
      )}
      {content?.subtitle && (
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          {content.subtitle}
        </p>
      )}

      {stages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stages.map((stage, i) => {
            const style = STAGE_COLORS[i % STAGE_COLORS.length];
            return (
              <div
                key={i}
                className={`rounded-xl border-2 p-4 ${style.bg} ${style.border}`}
              >
                <h3 className={`font-bold mb-2 ${style.text}`}>
                  {stage.step}. {stage.title}
                </h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                  {stage.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {examples.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-sm">
            Pavyzdžiai: DI įrankių grandinės
          </h3>
          <div className="space-y-4">
            {examples.map((ex, exIdx) => (
              <div key={exIdx} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                  {ex.steps.map((s, stepIdx) => (
                    <span key={stepIdx} className="flex items-center gap-1">
                      <span
                        className={`rounded-lg px-3 py-1.5 text-white text-sm font-medium ${EXAMPLE_STEP_COLORS[stepIdx % EXAMPLE_STEP_COLORS.length]}`}
                      >
                        {s.tool}
                      </span>
                      {stepIdx < ex.steps.length - 1 && (
                        <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                      )}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {ex.steps.map((s) => s.description).join(' → ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function PromptTypesSlide({ content }: { content?: PromptTypesContent }) {
  const typeStyles: Record<string, { bg: string; border: string; text: string; badge: string; num: string }> = {
    brand: {
      bg: 'bg-brand-50 dark:bg-brand-900/20',
      border: 'border-brand-300 dark:border-brand-700',
      text: 'text-brand-700 dark:text-brand-300',
      badge: 'bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300',
      num: 'bg-brand-500',
    },
    accent: {
      bg: 'bg-cyan-50 dark:bg-cyan-900/20',
      border: 'border-cyan-300 dark:border-cyan-700',
      text: 'text-cyan-700 dark:text-cyan-300',
      badge: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
      num: 'bg-cyan-500',
    },
    violet: {
      bg: 'bg-fuchsia-50 dark:bg-fuchsia-900/20',
      border: 'border-fuchsia-300 dark:border-fuchsia-700',
      text: 'text-fuchsia-700 dark:text-fuchsia-300',
      badge: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300',
      num: 'bg-fuchsia-500',
    },
  };

  return (
    <div className="space-y-6">
      {/* ── Hook intro: provokuojantis, ne generiškas ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 dark:from-gray-950 dark:via-brand-950 dark:to-gray-950 p-5 sm:p-7 text-white">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <div className="absolute top-2 right-4 select-none" aria-hidden="true">
            <Target className="w-20 h-20 text-current opacity-100" strokeWidth={1} />
          </div>
        </div>
        <div className="relative z-10 text-center max-w-lg mx-auto">
          <p className="text-base sm:text-lg font-bold leading-snug tracking-tight">
            Vienas promptas – trys sluoksniai. Kiekvienas atlieka savo darbą.
          </p>
          <p className="text-xs sm:text-sm text-brand-300/80 mt-2 font-medium">
            Kombinuok juos – ir DI supras ne tik KĄ, bet ir KAIP, ir KAM.
          </p>
        </div>
      </div>

      {/* ── Kortelės su numeracija ir progresija ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {content?.types.map((type, idx) => {
          const s = typeStyles[type.color] || typeStyles.brand;
          return (
            <article
              key={idx}
              className={`p-5 rounded-2xl border-2 ${s.bg} ${s.border} transition-all hover:shadow-lg`}
              role="article"
              aria-label={type.name}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className={`w-7 h-7 rounded-full ${s.num} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                  {idx + 1}
                </span>
                <h4 className={`font-bold text-lg ${s.text}`}>{type.name}</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{type.description}</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Pavyzdys:</p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-sm text-gray-700 dark:text-gray-300 italic">&ldquo;{type.example}&rdquo;</p>
                      <CopyButton text={type.example} size="sm" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Rezultatas:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{type.result}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── Praktinis patarimas: accent CTA stilius ── */}
      <div className="bg-accent-50 dark:bg-accent-900/20 p-5 rounded-xl border-l-4 border-accent-500">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex-shrink-0">
            <Lightbulb className="w-5 h-5 text-accent-600 dark:text-accent-400" aria-hidden="true" />
          </div>
          <div>
            <p className="font-bold text-accent-800 dark:text-accent-200 mb-1">Praktinis patarimas:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{content?.practicalTip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PromptTechniquesSlide({ content }: { content?: PromptTechniquesContent }) {
  return (
    <div className="space-y-6">
      {/* ── Intro: vizualus žingsnių kelias, ne sąrašas ── */}
      <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-l-brand-500 p-5 rounded-r-xl">
        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Technikų logika: nuo paprasto iki sudėtingo</h3>
        <div className="flex flex-wrap items-center gap-1.5 text-sm">
          {content?.logicSteps.map((step, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-gray-800 border border-brand-200 dark:border-brand-700 text-gray-700 dark:text-gray-300 font-medium">
                <span className="w-5 h-5 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                {step}
              </span>
              {idx < (content?.logicSteps.length ?? 0) - 1 && (
                <ChevronRight className="w-4 h-4 text-brand-400 dark:text-brand-600 flex-shrink-0" aria-hidden="true" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── Technikos: geros (5) + antipattern (1) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {content?.techniques.map((technique, idx) => {
          const isAntiPattern = technique.title.toLowerCase().includes('manipuliacija') || technique.title.toLowerCase().includes('vengti');
          return (
            <article
              key={idx}
              className={
                isAntiPattern
                  ? 'bg-rose-50 dark:bg-rose-900/10 border-2 border-rose-300 dark:border-rose-800 rounded-2xl p-5'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5'
              }
              role="article"
              aria-label={technique.title}
            >
              <div className="flex items-center gap-2 mb-2">
                {isAntiPattern && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-200 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-700 flex-shrink-0">
                    ⚠ Vengti
                  </span>
                )}
                <h4 className={`font-bold ${isAntiPattern ? 'text-rose-800 dark:text-rose-200' : 'text-gray-900 dark:text-white'}`}>
                  {technique.title}
                </h4>
              </div>
              <p className={`text-sm mb-3 ${isAntiPattern ? 'text-rose-700 dark:text-rose-300' : 'text-gray-600 dark:text-gray-400'}`}>
                {technique.description}
              </p>
              <div className={`rounded-xl p-3 ${
                isAntiPattern
                  ? 'bg-rose-100/60 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800'
                  : 'bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700'
              }`}>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {isAntiPattern ? 'Blogas pavyzdys' : 'Pavyzdys'}
                  </p>
                  {!isAntiPattern && <CopyButton text={technique.example} size="sm" />}
                </div>
                <p className={`text-sm whitespace-pre-line font-mono ${isAntiPattern ? 'text-rose-600 dark:text-rose-400 line-through decoration-rose-400/50' : 'text-gray-700 dark:text-gray-300'}`}>
                  {technique.example}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function WorkflowSummarySlide({ content }: { content?: WorkflowSummaryContent }) {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const diagramImages = [`${baseUrl}LLM_1.png`, `${baseUrl}LLM_2.png`];

  return (
    <div className="space-y-6">
      {/* ── Intro: provokuojantis hook ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 dark:from-gray-950 dark:via-brand-950 dark:to-gray-950 p-5 sm:p-7 text-white">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <div className="absolute top-2 right-4 text-[80px] font-black leading-none select-none">⚙</div>
          <div className="absolute bottom-2 left-4 text-[80px] font-black leading-none select-none">💬</div>
        </div>
        <div className="relative z-10 text-center max-w-lg mx-auto">
          <p className="text-base sm:text-lg font-bold leading-snug tracking-tight">
            {content?.intro}
          </p>
        </div>
      </div>

      {/* ── Diagramos: Basic (neutralus) vs Workflow (paryškintas) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {content?.diagrams.map((diagram, idx) => {
          const isWorkflow = diagram.variant === 'workflow' || idx === 1;
          const cardClasses = isWorkflow
            ? 'bg-emerald-50 dark:bg-emerald-900/10 border-2 border-emerald-300 dark:border-emerald-700 rounded-2xl p-5 ring-2 ring-emerald-200/60 dark:ring-emerald-800/40 shadow-lg shadow-emerald-500/10'
            : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-5';
          const noteClasses = isWorkflow
            ? 'inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
            : 'inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800';
          const noteIcon = isWorkflow ? '✓' : '⚠';

          return (
            <article
              key={idx}
              className={cardClasses}
              role="article"
              aria-label={diagram.title}
            >
              <div className="mb-4">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{diagram.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{diagram.subtitle}</p>
              </div>

              {/* Vizualizacijos paveikslėlis – EnlargeableImage */}
              {diagramImages[idx] && (
                <div className={`mb-3 rounded-xl p-2 border ${isWorkflow ? 'bg-white dark:bg-gray-800 border-emerald-200 dark:border-emerald-800' : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700'}`}>
                  <EnlargeableImage
                    src={diagramImages[idx]}
                    alt={diagram.title}
                    enlargeLabel={diagram.title}
                    className={isWorkflow ? 'border-emerald-200/60 dark:border-emerald-800/40' : 'border-gray-200 dark:border-gray-700'}
                  />
                </div>
              )}

              {/* Pastaba – badge stilius su spalva */}
              {diagram.note && (
                <div>
                  <span className={noteClasses}>
                    <span aria-hidden="true">{noteIcon}</span>
                    {diagram.note}
                  </span>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* ── Praktiniai pavyzdžiai ── */}
      {content?.examples && content.examples.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          {content.examples.map((example, idx) => (
            <TemplateBlock key={idx} label={example.title} template={example.prompt} />
          ))}
        </div>
      )}
    </div>
  );
}

export function PromptTemplateSlide({ content }: { content?: PromptTemplateContent }) {
  const blockColors = [
    { bg: 'bg-brand-50 dark:bg-brand-900/20', border: 'border-brand-300 dark:border-brand-700', num: 'bg-brand-500' },
    { bg: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-300 dark:border-amber-700', num: 'bg-amber-500' },
    { bg: 'bg-emerald-50 dark:bg-emerald-900/20', border: 'border-emerald-300 dark:border-emerald-700', num: 'bg-emerald-500' },
  ];

  return (
    <div className="space-y-6">
      {/* ── Intro: provokuojantis, ne generiškas ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 dark:from-gray-950 dark:via-brand-950 dark:to-gray-950 p-5 sm:p-7 text-white">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <div className="absolute top-2 right-4 text-[80px] font-black leading-none select-none">📋</div>
        </div>
        <div className="relative z-10 text-center max-w-lg mx-auto">
          <p className="text-base sm:text-lg font-bold leading-snug tracking-tight">
            3 blokai. 1 šablonas. Nukopijuok ir naudok iš karto.
          </p>
          <p className="text-xs sm:text-sm text-brand-300/80 mt-2 font-medium">
            META + INPUT + OUTPUT = minimalus, bet veiksmingas prompto pagrindas.
          </p>
        </div>
      </div>

      {/* ── 3 blokai su spalvomis ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {content?.blocks.map((block, idx) => {
          const c = blockColors[idx] || blockColors[0];
          return (
            <article
              key={idx}
              className={`${c.bg} border-2 ${c.border} rounded-2xl p-5`}
              role="article"
              aria-label={block.title}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-8 h-8 rounded-full ${c.num} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                  {idx + 1}
                </span>
                <h4 className="font-bold text-gray-900 dark:text-white">{block.title}</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{block.description}</p>
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-3">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Pavyzdys</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">{block.example}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── Šablonai: ryškesni su accent akcentu ── */}
      {content?.template && (
        <div className="border-l-4 border-accent-500 rounded-r-xl bg-accent-50 dark:bg-accent-900/20 p-1">
          <TemplateBlock label="Nukopijuok šabloną" template={content.template} />
        </div>
      )}
      {content?.example && (
        <div className="border-l-4 border-emerald-500 rounded-r-xl bg-emerald-50 dark:bg-emerald-900/10 p-1">
          <TemplateBlock label="Pilnas pavyzdys" template={content.example} />
        </div>
      )}
    </div>
  );
}

export function TransitionSlide({ content }: { content?: TransitionContent }) {
  // Pirmoji kortelė = "kas padaryta" (emerald), antroji = "kas toliau" (brand)
  const cardStyles = [
    { bg: 'bg-emerald-50 dark:bg-emerald-900/10', border: 'border-emerald-300 dark:border-emerald-700', num: 'bg-emerald-500', icon: '✓' },
    { bg: 'bg-brand-50 dark:bg-brand-900/20', border: 'border-brand-300 dark:border-brand-700', num: 'bg-brand-500', icon: '→' },
  ];

  return (
    <div className="space-y-6">
      {/* ── Intro: aiškus perėjimo signalas ── */}
      <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-l-brand-500 p-6 rounded-r-xl">
        <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{content?.title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{content?.note}</p>
      </div>

      {/* ── Kortelės: padaryta vs toliau ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {content?.mapping.map((item, idx) => {
          const s = cardStyles[idx] || cardStyles[1];
          return (
            <article
              key={idx}
              className={`${s.bg} border-2 ${s.border} rounded-2xl p-5`}
              role="article"
              aria-label={item.from}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-8 h-8 rounded-full ${s.num} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                  {s.icon}
                </span>
                <h4 className="font-bold text-gray-900 dark:text-white">{item.from}</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.to}</p>
            </article>
          );
        })}
      </div>

      {/* ── Takeaway: gradient accent ── */}
      <div className="bg-gradient-to-r from-brand-500 to-accent-500 p-5 rounded-xl text-white text-center shadow-md">
        <p className="text-sm sm:text-base font-bold">{content?.takeaway}</p>
      </div>
    </div>
  );
}

const DEFAULT_HIERARCHY: HierarchyContent = {
  introHeading: 'Kodėl hierarchija svarbi?',
  introBody: 'DI modeliai skaito ir apdoroja informaciją nuosekliai. Svarbiausia informacija turi būti pateikta pirmiausia, kad rezultatas atitiktų jūsų lūkesčius.',
  blocks: [
    { num: '1', name: 'Meta blokas', desc: 'Rolė, patirtis, tikslas, auditorija', priority: 'Kritinis', color: 'rose' },
    { num: '2', name: 'Input blokas', desc: 'Duomenys, skaičiai, faktai, apribojimai', priority: 'Labai svarbus', color: 'orange' },
    { num: '3', name: 'Output blokas', desc: 'Formatas, struktūra, ilgis, kalba', priority: 'Labai svarbus', color: 'orange' },
    { num: '4', name: 'Reasoning blokas', desc: 'Mąstymo seka, logika, žingsniai', priority: 'Svarbus', color: 'amber' },
    { num: '5', name: 'Quality Control', desc: 'Tikrinimo kriterijai, validacija', priority: 'Rekomenduojama', color: 'emerald' },
    { num: '6', name: 'Advanced Parameters', desc: 'Temperature, reasoning gylis', priority: 'Pasirenkama', color: 'brand' },
  ],
  tip: 'Pabandykite sukurti promptą be struktūros (kaip paprastai darote). Išsaugokite - palyginsime su struktūruota versija pabaigoje.',
};

export interface HierarchySlideProps { content?: HierarchyContent | null }
export function HierarchySlide({ content: contentProp }: HierarchySlideProps) {
  const content = contentProp ?? DEFAULT_HIERARCHY;
  return (
    <div className="space-y-6">
      {/* ── Intro: tamsus hook ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 dark:from-gray-950 dark:via-brand-950 dark:to-gray-950 p-5 sm:p-7 text-white">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <div className="absolute top-2 right-4 text-[80px] font-black leading-none select-none">📐</div>
        </div>
        <div className="relative z-10 max-w-lg mx-auto text-center">
          <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight mb-2">{content.introHeading ?? 'Kodėl hierarchija svarbi?'}</h3>
          <p className="text-sm sm:text-base text-brand-200/90 leading-relaxed">{content.introBody ?? ''}</p>
        </div>
      </div>

      <div className="space-y-3">
        {content.blocks.map((item) => {
          const colors = getColorClasses(item.color);
          return (
            <div key={item.num} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-full ${colors.bg} ${colors.bgDark} flex items-center justify-center font-bold ${colors.text} ${colors.textDark} flex-shrink-0`}>
                {item.num}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 dark:text-white">{item.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 truncate">{item.desc}</div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.bgDark} ${colors.text} ${colors.textDark} flex-shrink-0`}>
                {item.priority}
              </div>
            </div>
          );
        })}
      </div>

      {content.tip && (
        <div className="mt-6 p-5 bg-accent-50 dark:bg-accent-900/20 rounded-xl border border-accent-200 dark:border-accent-800">
          <p className="text-sm text-accent-900 dark:text-accent-100">
            <strong className="inline-flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-accent-600 dark:text-accent-400 shrink-0" strokeWidth={1.5} />
            Praktinė užduotis:
          </strong> {content.tip}
          </p>
        </div>
      )}
    </div>
  );
}

const DEFAULT_COMPARISON: ComparisonContent = {
  introText: 'Kas lyginama: ta pati užduotis, bet skirtinga struktūra (be blokų vs su blokais).',
  unstructuredPrompt: 'Sukurk man mokymo programą apie DI. Turi būti įdomi ir praktinė.',
  structuredPrompt: 'META: Tu esi mokymo kūrėjas. Tikslas – parengti 4 val. DI įvadinį mokymą. Auditorija – 12–15 pradedančiųjų.\nINPUT: Apribojimai – 1 lektorius, be praktinių įrankių demonstracijų.\nOUTPUT: Lentelė su 5 stulpeliais: modulis, trukmė, tikslas, veikla, rezultatas. Tonas – aiškus, profesionalus.',
  unstructuredCons: ['Neaiški tikslinė auditorija', 'Nėra konkretių duomenų', 'Neapibrėžtas formatas'],
  structuredPros: ['Aiški auditorija', 'Konkretūs parametrai', 'Tikslus formatas'],
  labelLeft: 'Nestruktūruotas',
  labelRight: 'Struktūruotas',
  stats: { leftPct: 40, rightPct: 85, lessEditsPct: 60 },
};

export interface ComparisonSlideProps { content?: ComparisonContent | null }
export function ComparisonSlide({ content: contentProp }: ComparisonSlideProps) {
  const c = contentProp ?? DEFAULT_COMPARISON;
  const cons = c.unstructuredCons ?? DEFAULT_COMPARISON.unstructuredCons!;
  const pros = c.structuredPros ?? DEFAULT_COMPARISON.structuredPros!;
  const stats = c.stats ?? DEFAULT_COMPARISON.stats!;
  return (
    <div className="space-y-6">
      {/* ── Intro: tamsus hook ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 dark:from-gray-950 dark:via-brand-950 dark:to-gray-950 p-5 sm:p-7 text-white">
        <div className="relative z-10 text-center max-w-lg mx-auto">
          <p className="text-base sm:text-lg font-bold leading-snug tracking-tight">
            Ta pati užduotis. Du skirtingi promptai. Kuris laimi?
          </p>
          {c.introText && (
            <p className="text-xs sm:text-sm text-brand-300/80 mt-2 font-medium">{c.introText}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-xl border-2 border-rose-200 dark:border-rose-800">
          <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-3 flex items-center gap-2">❌ {c.labelLeft ?? 'Nestruktūruotas'}</h4>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-sm italic text-gray-700 dark:text-gray-300 mb-4 relative whitespace-pre-line">
            <CopyButton text={c.unstructuredPrompt} className="absolute top-2 right-2" size="sm" />
            <p>{c.unstructuredPrompt}</p>
          </div>
          <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
            {cons.map((item, i) => (
              <p key={i} className="flex items-start gap-2"><span className="text-rose-600">•</span><span>{item}</span></p>
            ))}
          </div>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3 flex items-center gap-2">✓ {c.labelRight ?? 'Struktūruotas'}</h4>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-xs text-gray-700 dark:text-gray-300 max-h-40 overflow-y-auto mb-4 relative whitespace-pre-line">
            <CopyButton text={c.structuredPrompt} className="absolute top-2 right-2" size="sm" />
            <p>{c.structuredPrompt}</p>
          </div>
          <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
            {pros.map((item, i) => (
              <p key={i} className="flex items-start gap-2"><span className="text-emerald-600">•</span><span>{item}</span></p>
            ))}
          </div>
        </div>
      </div>

      {stats && (
        <div className="bg-brand-50 dark:bg-brand-900/20 p-6 rounded-xl">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Rezultatų palyginimas:</h4>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <p className="text-3xl font-bold text-rose-600">{stats.leftPct}%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{c.labelLeft?.toLowerCase() ?? 'nestruktūruotas'}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <p className="text-3xl font-bold text-emerald-600">{stats.rightPct}%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{c.labelRight?.toLowerCase() ?? 'struktūruotas'}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <p className="text-3xl font-bold text-brand-600">{stats.lessEditsPct}%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">mažiau taisymų</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Summary Slide v2 (2026-02) ─────────────────────────────────────────
 *  Dizainas pagal top e-learning platformų šablonus:
 *  - Duolingo: celebration animations, confetti, achievement feel
 *  - Design+Code: success modal, gradient hero, glass morphism
 *  - Articulate: beyond bullet points – visual cards, next step CTA
 *  - Gamification patterns: stats, badges, staggered card entrance
 * ─────────────────────────────────────────────────────────────────────── */

const DEFAULT_SUMMARY: SummaryContent = {
  introHeading: 'Ką išmokote',
  introBody: 'Sveikiname! Dabar žinote, kaip profesionaliai struktūruoti promptus naudojant 6 blokų sistemą, workflow sampratą ir promptavimo technikas.',
  stats: [
    { label: 'Blokai', value: '6' },
    { label: 'Technikos', value: '5' },
    { label: 'Workflow', value: '2' },
  ],
  sections: [
    { heading: '6 Pagrindiniai Blokai', icon: 'Layers', color: 'brand', items: ['Meta - rolė, kontekstas ir tikslas (kas esate ir ką darote)', 'Input - duomenys, faktai ir apribojimai (ką turite)', 'Output - formatas, struktūra ir tonas (ko norite)', 'Reasoning - mąstymo struktūra (CoT arba ToT)', 'Quality - kokybės kriterijai (kaip patikrinti)', 'Advanced - parametrai (Temperature, Reasoning depth)'] },
    { heading: 'Workflow ir Technikos', icon: 'Workflow', color: 'violet', items: ['Basic naudojimas – pokalbiams, idėjoms', 'Workflow naudojimas – dokumentams, procesams', 'Zero-shot, Few-shots, CoT, ToT, Instruktavimas', 'Manipuliacija – ko vengti'] },
    { heading: 'Pagrindinės Idėjos', icon: 'Lightbulb', color: 'amber', items: ['Hierarchija yra kritinė (nuo svarbiausio)', 'Konkretumas > bendrumas (tikslūs skaičiai)', 'Pavyzdžiai pagerina rezultatus (Few-shots)', 'Kokybės kontrolė būtina (Quality blokas)', 'Workflow > Basic (procesams)', 'Mąstymo modeliai svarbūs (CoT/ToT pasirinkimas)'] },
    { heading: 'Kitas Žingsnis', icon: 'ArrowRight', color: 'emerald', items: ['Dabar, kai išmokote 6 blokų sistemą, workflow ir technikas, laikas patikrinti savo žinias – Modulio 2 testas.'] },
  ],
  tagline: 'Struktūruoti promptai = nuspėjami rezultatai = didesnis efektyvumas',
};

/** Ikona pagal sekcijos pavadinimą – fallback CheckCircle */
function SectionIcon({ name, className }: { name?: string; className?: string }) {
  switch (name) {
    case 'Layers':     return <Layers className={className} />;
    case 'Workflow':   return <Repeat className={className} />;
    case 'Lightbulb':  return <Lightbulb className={className} />;
    case 'ArrowRight': return <ArrowRight className={className} />;
    case 'Target':     return <Target className={className} />;
    case 'Sparkles':   return <Sparkles className={className} />;
    case 'Zap':        return <Zap className={className} />;
    default:           return <CheckCircle className={className} />;
  }
}

/** Spalvų žemėlapis sekcijų kortelėms */
const sectionColorMap: Record<string, {
  card: string; iconBg: string; iconText: string; border: string; checkColor: string;
}> = {
  brand:   { card: 'bg-brand-50/80 dark:bg-brand-900/20', iconBg: 'bg-brand-500', iconText: 'text-white', border: 'border-brand-200 dark:border-brand-800', checkColor: 'text-brand-500' },
  violet:  { card: 'bg-violet-50/80 dark:bg-violet-900/20', iconBg: 'bg-violet-500', iconText: 'text-white', border: 'border-violet-200 dark:border-violet-800', checkColor: 'text-violet-500' },
  amber:   { card: 'bg-amber-50/80 dark:bg-amber-900/20', iconBg: 'bg-amber-500', iconText: 'text-white', border: 'border-amber-200 dark:border-amber-800', checkColor: 'text-amber-500' },
  emerald: { card: 'bg-emerald-50/80 dark:bg-emerald-900/20', iconBg: 'bg-emerald-500', iconText: 'text-white', border: 'border-emerald-200 dark:border-emerald-800', checkColor: 'text-emerald-500' },
  rose:    { card: 'bg-rose-50/80 dark:bg-rose-900/20', iconBg: 'bg-rose-500', iconText: 'text-white', border: 'border-rose-200 dark:border-rose-800', checkColor: 'text-rose-500' },
  orange:  { card: 'bg-orange-50/80 dark:bg-orange-900/20', iconBg: 'bg-orange-500', iconText: 'text-white', border: 'border-orange-200 dark:border-orange-800', checkColor: 'text-orange-500' },
};
const defaultColor = sectionColorMap.brand;

/** Confetti dalelės – CSS-only animacija */
function ConfettiParticles() {
  const colors = ['#627d98', '#d4a520', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'];
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    color: colors[i % colors.length],
    left: `${5 + Math.random() * 90}%`,
    delay: `${Math.random() * 0.8}s`,
    size: 4 + Math.random() * 6,
    duration: `${1.2 + Math.random() * 1.5}s`,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 rounded-sm opacity-0"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size * 1.5}px`,
            backgroundColor: p.color,
            animation: `summaryConfettiFall ${p.duration} ${p.delay} ease-out forwards`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}

/** Kopijuojamo refleksijos prompto mygtukas su „Nukopijuota!" atsakymu */
function ReflectionCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* silent */ }
  };
  return (
    <button
      onClick={handleCopy}
      className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm shadow-md active:scale-[0.98] transition-all ${
        copied
          ? 'bg-emerald-500 text-white shadow-emerald-500/20'
          : 'bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white shadow-accent-500/20 hover:shadow-lg hover:shadow-accent-500/30'
      }`}
      aria-label="Kopijuoti refleksijos promptą"
    >
      {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      <span>{copied ? 'Nukopijuota!' : 'Kopijuoti promptą'}</span>
    </button>
  );
}

export interface SummarySlideProps {
  content?: SummaryContent | null;
  /** Kai paskutinė skaidrė – mygtukas „Pereikite prie kito modulio“ kviečia šią funkciją */
  onNextStep?: () => void;
}
export function SummarySlide({ content: contentProp, onNextStep }: SummarySlideProps) {
  const content = contentProp ?? DEFAULT_SUMMARY;
  const [showContent, setShowContent] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Staggered entrance: show cards after hero animates
    const timer = setTimeout(() => setShowContent(true), 400);
    // Hide confetti after animation completes
    const confettiTimer = setTimeout(() => setShowConfetti(false), 3500);
    return () => { clearTimeout(timer); clearTimeout(confettiTimer); };
  }, []);

  // Separate "Kitas Žingsnis" from knowledge sections
  const knowledgeSections = (content.sections ?? []).filter(
    (s) => s.icon !== 'ArrowRight' && s.heading !== 'Kitas Žingsnis'
  );
  const nextStepSection = (content.sections ?? []).find(
    (s) => s.icon === 'ArrowRight' || s.heading === 'Kitas Žingsnis'
  );

  return (
    <div className="space-y-8">
      {/* ── Hero Celebration Header ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 dark:from-brand-800 dark:via-brand-700 dark:to-accent-700 p-8 md:p-10 text-white">
        {/* Confetti overlay */}
        {showConfetti && <ConfettiParticles />}

        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" aria-hidden="true" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" aria-hidden="true" />

        {/* Trophy icon */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/15 backdrop-blur-sm shadow-lg shadow-black/10 animate-celebrate">
            <span className="text-4xl" role="img" aria-label="Trophy">🏆</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2 drop-shadow-sm">
            {content.introHeading ?? 'Ką išmokote'}
          </h3>
          <p className="text-white/85 max-w-lg text-base md:text-lg leading-relaxed">
            {content.introBody ?? ''}
          </p>

          {/* Stats row */}
          {content.stats && content.stats.length > 0 && (
            <div className="mt-6 flex gap-4 md:gap-8 justify-center">
              {content.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 min-w-[80px] border border-white/10"
                  style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                >
                  <span className="text-3xl md:text-4xl font-black leading-none">{stat.value}</span>
                  <span className="text-xs md:text-sm text-white/70 mt-1 font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Knowledge Section Cards (staggered entrance) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {knowledgeSections.map((section, sIdx) => {
          const colors = sectionColorMap[section.color ?? 'brand'] ?? defaultColor;
          return (
            <div
              key={sIdx}
              className={`relative rounded-2xl border-2 ${colors.border} ${colors.card} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${sIdx * 120}ms` }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${colors.iconBg} shadow-md`}>
                  <SectionIcon name={section.icon} className={`w-5 h-5 ${colors.iconText}`} />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{section.heading}</h4>
              </div>

              {/* Items */}
              <ul className="space-y-2.5">
                {(section.items ?? []).map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.checkColor}`} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Item count badge */}
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${colors.iconBg} ${colors.iconText} shadow-sm`}>
                  {(section.items ?? []).length}
                </span>
              </div>
            </div>
          );
        })}

        {/* ── Reflection Prompt Card (fills empty grid cell) ── */}
        {content.reflectionPrompt && (
          <div
            className={`relative rounded-2xl border-2 border-accent-200 dark:border-accent-800 bg-gradient-to-br from-accent-50 to-amber-50 dark:from-accent-900/20 dark:to-amber-900/20 p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${knowledgeSections.length * 120}ms` }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-accent-500 shadow-md">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
                  {content.reflectionTitle ?? 'Refleksijos promptas'}
                </h4>
                <p className="text-xs text-accent-700 dark:text-accent-300 font-medium mt-0.5">Nukopijuok ir naudok su DI</p>
              </div>
            </div>

            {/* Prompt text */}
            <div className="relative flex-1 bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 border border-accent-200/50 dark:border-accent-700/50 mb-3">
              <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-sans leading-relaxed">
                {content.reflectionPrompt}
              </pre>
            </div>

            {/* Copy button - prominent, with feedback */}
            <ReflectionCopyButton text={content.reflectionPrompt ?? ''} />
          </div>
        )}
      </div>

      {/* ── Next Step CTA ── */}
      {nextStepSection && (
        <div
          className={`relative overflow-hidden rounded-2xl border-2 border-emerald-300 dark:border-emerald-700 bg-gradient-to-r from-emerald-50 to-brand-50 dark:from-emerald-900/30 dark:to-brand-900/20 p-6 md:p-8 transition-all duration-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: `${knowledgeSections.length * 120 + 100}ms` }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500 shadow-lg shadow-emerald-500/25">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Kitas Žingsnis</h4>
              {(nextStepSection.items ?? []).map((item, i) => (
                <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
              ))}
              {onNextStep ? (
                <button
                  type="button"
                  onClick={onNextStep}
                  className="mt-4 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-4 py-2 rounded-xl border border-emerald-600 shadow-sm hover:shadow-md transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 min-h-[44px]"
                  aria-label="Pereiti prie kito modulio"
                >
                  <span>Pereikite prie kito modulio</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="mt-4 inline-flex items-center gap-2 bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300 font-semibold text-sm px-4 py-2 rounded-xl border border-emerald-200 dark:border-emerald-700">
                  <span>Pereikite prie kito modulio</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>

          {/* Decorative pulse dot */}
          <div className="absolute top-6 right-6" aria-hidden="true">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
          </div>
        </div>
      )}

      {/* ── Motivational Footer ── */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 dark:from-brand-800 dark:via-brand-700 dark:to-accent-600 p-8 md:p-10 text-center text-white shadow-xl transition-all duration-500 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: `${(knowledgeSections.length + 1) * 120 + 200}ms` }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_70%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_60%)]" aria-hidden="true" />

        <div className="relative z-10">
          <span className="text-4xl mb-3 block" role="img" aria-label="Rocket">🚀</span>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3 drop-shadow-sm">Sėkmės su DI!</h3>
          <p className="text-white/80 text-base md:text-lg max-w-md mx-auto">
            {content.tagline ?? 'Struktūruoti promptai = nuspėjami rezultatai = didesnis efektyvumas'}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProductivityInfographicSlide({ content, onGoToGlossary }: { content?: ProductivityInfographicContent; onGoToGlossary?: () => void }) {
  const [showSources, setShowSources] = useState(false);
  
  if (!content) return null;

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[550px]">
          {/* Left Section - Hero */}
          <div className="lg:col-span-1 bg-gradient-to-br from-brand-600 via-brand-500 to-violet-600 dark:from-brand-700 dark:via-brand-600 dark:to-violet-700 text-white p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 text-8xl opacity-10 select-none">
              🚀
            </div>
            
            <h2 className="text-xl lg:text-2xl font-black mb-2 leading-tight relative z-10">
              {content.title}
            </h2>
            {onGoToGlossary && (
              <button
                type="button"
                onClick={onGoToGlossary}
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-medium mb-6 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg py-1 min-h-[44px]"
                aria-label="Atidaryti žodynėlį – terminas Generatyvus DI"
              >
                <BookMarked className="w-4 h-4" aria-hidden />
                <span>Žodynėlis</span>
                <ChevronRight className="w-3.5 h-3.5" aria-hidden />
              </button>
            )}
            
            <div className="mb-6 relative z-10">
              <div className="text-5xl lg:text-6xl font-black mb-2 drop-shadow-lg">
                {content.heroNumber}
              </div>
              <div className="text-lg lg:text-xl font-bold uppercase tracking-wider">
                {content.heroText}
              </div>
            </div>
            
            <div className="mt-auto relative z-10 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-xs lg:text-sm leading-relaxed italic">
                &ldquo;{content.conclusion}&rdquo;
              </p>
            </div>
          </div>
          
          {/* Right Section - Cards and Insights */}
          <div className="lg:col-span-2 p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 flex flex-col">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {(content.cards ?? []).map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md dark:shadow-xl hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 border-t-4 border-brand-500 dark:border-brand-400"
                >
                  <div className="text-3xl mb-2">{card.icon}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-3">
                    {card.title}
                  </h3>
                  <div className="space-y-1.5">
                    {(card.stats ?? []).map((stat, statIdx) => (
                      <div
                        key={statIdx}
                        className="flex justify-between items-center p-1.5 bg-gray-50 dark:bg-gray-900/50 rounded"
                      >
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </span>
                        <span className="text-base font-black text-brand-600 dark:text-brand-400">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Insights Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {(content.insights ?? []).map((insight, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center shadow-sm dark:shadow-md border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-2xl mb-1">{insight.emoji}</div>
                  <div className="text-lg font-black text-brand-600 dark:text-brand-400 mb-0.5">
                    {insight.value}
                  </div>
                  <div className="text-[10px] font-semibold text-gray-600 dark:text-gray-400 leading-tight">
                    {insight.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Sources Section - Collapsible */}
            {content.sources && content.sources.length > 0 && (
              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setShowSources(!showSources)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <span>📚</span> Šaltiniai ({content.sources.length})
                  </span>
                  <span className={`transform transition-transform ${showSources ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {showSources && (
                  <ul className="mt-3 divide-y divide-gray-200 dark:divide-gray-700" role="list">
                    {content.sources.map((source, idx) => (
                      <li key={idx} className="py-3 first:pt-0 last:pb-0">
                        <div className="text-xs leading-relaxed">
                          <div className="font-bold text-gray-900 dark:text-gray-100">
                            {source.title ?? source.label}
                          </div>
                          <div className="mt-0.5 text-gray-600 dark:text-gray-400">
                            {source.journal && <span>{source.journal}</span>}
                            {source.year && (
                              <span className="text-gray-400 dark:text-gray-500"> ({source.year})</span>
                            )}
                            {source.institution && (
                              <span>{source.journal || source.year ? ' · ' : ''}{source.institution}</span>
                            )}
                          </div>
                          {source.url && (
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-1.5 inline-flex items-center gap-1 text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 text-[11px] font-medium"
                            >
                              Peržiūrėti tyrimą
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const DEFAULT_PRACTICE_SUMMARY: PracticeSummaryContent = {
  title: 'Mokymas Baigtas!',
  subtitle: 'Sveikiname! Jūs sėkmingai baigėte Prompt Anatomijos mokymą ir dabar galite kurti profesionalius, struktūruotus promptus.',
  learnedItems: ['6 blokų sistemą', 'Hierarchijos svarbą', 'Konkretaus input naudą', 'Kokybės kontrolę'],
  nextStepsItems: ['Praktikuokite kasdien', 'Kurkite šablonų biblioteką', 'Dalinkitės su komanda', 'Iteruokite ir tobulinkite'],
  taglineTitle: 'Struktūra = Rezultatas',
  taglineSub: '5 minutės geram promptui = valandos sutaupytos vėliau',
};

export interface PracticeSummarySlideProps { content?: PracticeSummaryContent | null }
export function PracticeSummarySlide({ content: contentProp }: PracticeSummarySlideProps) {
  const c = contentProp ?? DEFAULT_PRACTICE_SUMMARY;
  const learned = c.learnedItems ?? DEFAULT_PRACTICE_SUMMARY.learnedItems!;
  const nextSteps = c.nextStepsItems ?? DEFAULT_PRACTICE_SUMMARY.nextStepsItems!;
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-accent-50 dark:from-emerald-900/20 dark:to-accent-900/20 p-8 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-emerald-400 to-brand-500 mb-4">
          <span className="text-4xl">🎓</span>
        </div>
        <h3 className="font-bold text-2xl mb-2 text-gray-900 dark:text-white">{c.title ?? 'Mokymas Baigtas!'} 🎉</h3>
        <p className="text-gray-700 dark:text-gray-300 max-w-lg mx-auto">{c.subtitle ?? ''}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
          <h4 className="font-bold text-gray-900 dark:text-white mb-3">✅ Ką išmokote:</h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            {learned.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
          <h4 className="font-bold text-gray-900 dark:text-white mb-3">🚀 Kiti žingsniai:</h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            {nextSteps.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </div>
      </div>

      {(c.taglineTitle ?? c.taglineSub) && (
        <div className="bg-gradient-to-r from-brand-500 to-accent-500 p-6 rounded-xl text-white text-center">
          {c.taglineTitle && <h4 className="text-xl font-bold mb-2">{c.taglineTitle}</h4>}
          {c.taglineSub && <p className="text-brand-100">{c.taglineSub}</p>}
        </div>
      )}
    </div>
  );
}
