import { useState } from 'react';
import { Target, BookOpen, ClipboardCheck, ArrowRight, Sparkles, CheckCircle, Copy, Check, Lightbulb } from 'lucide-react';
import { Progress } from '../utils/progress';
import { getModulesSync } from '../data/modulesLoader';
import { getIsMvpMode } from '../utils/mvpMode';
import PromptLibrary from './PromptLibrary';
import CircularProgress from './CircularProgress';

const QUICK_PROMPTS = [
  {
    id: 1,
    title: 'Gauk aiškų atsakymą',
    prompt: 'Atsakyk trumpai ir aiškiai: ką man svarbiausia žinoti apie [TEMA] šiandien?',
    timeLabel: 'Atsakymas ~1 min',
    tags: ['Trumpai', 'Aiškiai'],
  },
  {
    id: 2,
    title: 'Atskirti esmę (20/80)',
    prompt: 'Išskirk 3 svarbiausius dalykus apie [TEMA], kurie duoda didžiausią naudą.',
    timeLabel: 'Analizė ~2 min',
    tags: ['Prioritetai', '20/80 esmė'],
  },
  {
    id: 3,
    title: 'Paversk problemą veiksmais',
    prompt: 'Pasiūlyk 3 konkrečius žingsnius, ką daryti toliau sprendžiant [PROBLEMĄ].',
    timeLabel: 'Planas ~2 min',
    tags: ['Veiksmai', 'Sprendimo planas'],
  },
] as const;

interface HomePageProps {
  onStart: () => void;
  onGoToQuiz?: () => void;
  progress: Progress;
}

export default function HomePage({ onStart, onGoToQuiz, progress }: HomePageProps) {
  const [copiedQuickId, setCopiedQuickId] = useState<number | null>(null);
  const modulesCompleted = progress.completedModules.length;
  const totalModules = (() => {
    const n = getModulesSync()?.length;
    if (n != null) return n;
    return getIsMvpMode() ? 3 : 6;
  })();
  const totalTasks = Object.values(progress.completedTasks).reduce(
    (sum, tasks) => sum + tasks.length,
    0
  );

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-200/5 via-transparent to-accent-200/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative text-center py-16 md:py-24 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 dark:bg-brand-900/30 rounded-full text-brand-700 dark:text-brand-300 text-sm font-medium mb-6 animate-bounce-in">
            <Sparkles className="w-4 h-4" />
            <span>DI Promptų Inžinerijos Mokymas</span>
          </div>
          
          {/* Main icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-500 to-accent-500 p-6 rounded-3xl shadow-2xl shadow-brand-500/30 hover:scale-110 transition-transform duration-300 animate-bounce-in">
                <Target className="w-16 h-16 text-white" />
              </div>
              {/* Floating badge – trukmė (aiškesnis nei Zap ikona mažuose ekranuose) */}
              <div className="absolute -top-2 -right-2 bg-accent-400 px-2.5 py-1.5 rounded-xl shadow-lg animate-float">
                <span className="text-xs font-semibold text-white">~45 min</span>
              </div>
            </div>
          </div>
          
          {/* Title – +15–20% didesnis, aiški hierarchija */}
          <h1 className="text-6xl md:text-8xl font-black text-gray-950 dark:text-white mb-4 tracking-tight">
            Promptų <span className="gradient-text gradient-text-hero">anatomija</span>
          </h1>
          
          {/* Subline – -15% mažesnis + lighter weight */}
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-normal mb-5 max-w-xl mx-auto">
            90 proc. žmonių rašo komandas neteisingai – čia išmoksi sistemą.
          </p>
          
          {/* Subtitle – 6 blokų sistema bold + 110–120% dydžio */}
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-2 max-w-2xl mx-auto leading-loose">
            Išmokite kurti efektyvius DI promptus su{' '}
            <span className="font-bold text-[1.15em] text-accent-600 dark:text-accent-400">6 blokų sistema</span>
          </p>
          
          {/* Bonus subline – aiškesnis pažadas */}
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto">
            Praktinė sistema realioms verslo situacijoms.
            <span className="font-medium"> ~45 min.</span>
          </p>
          
          {/* Trust indicators – muted (ne ryškūs žali), kad CTA lieka vienintelis energinis objektas */}
          <div className="flex flex-wrap justify-center gap-4 mb-14 text-sm text-gray-500 dark:text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              <span>{totalModules} moduliai</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              <span>Verslo pavyzdžiai</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              <span>Baigiamoji apklausa</span>
            </div>
          </div>
          
          {/* Progress virš CTA – kognityvinė eilė */}
          {modulesCompleted > 0 && (
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Jūsų progresas: {modulesCompleted}/{totalModules} moduliai baigti
            </p>
          )}
          
          {/* CTA Button – priklauso nuo būsenos: moduliai baigti + apklausa ne → Į apklausą; viskas baigta → Peržiūrėti modulius */}
          <button
            onClick={
              modulesCompleted === totalModules && totalModules > 0 && progress.quizCompleted
                ? onStart
                : modulesCompleted === totalModules && totalModules > 0 && onGoToQuiz
                  ? onGoToQuiz
                  : onStart
            }
            className="btn-primary btn-hero-cta text-xl px-10 inline-flex items-center gap-3 group"
            aria-label={
              modulesCompleted === totalModules && totalModules > 0 && progress.quizCompleted
                ? 'Peržiūrėti modulius'
                : modulesCompleted === totalModules && totalModules > 0 && onGoToQuiz
                  ? 'Į apklausą'
                  : 'Pradėti mokymą'
            }
          >
            {modulesCompleted === totalModules && totalModules > 0 && progress.quizCompleted
              ? 'Peržiūrėti modulius'
              : modulesCompleted === totalModules && totalModules > 0 && onGoToQuiz
                ? 'Į apklausą'
                : modulesCompleted > 0
                  ? 'Tęsti mokymą'
                  : 'Pradėti dabar'}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-hover p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-4">
            <CircularProgress
              progress={totalModules > 0 ? (modulesCompleted / totalModules) * 100 : 0}
              size={70}
              strokeWidth={7}
              showPercentage={false}
            />
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{modulesCompleted}/{totalModules}</p>
              <p className="text-gray-600 dark:text-gray-400">Baigti moduliai</p>
            </div>
          </div>
        </div>

        <div className="card-hover p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-4">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-2xl">
              <ClipboardCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalTasks}</p>
              <p className="text-gray-600 dark:text-gray-400">Atliktos užduotys</p>
            </div>
          </div>
        </div>

        <div className="card-hover p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-4">
            <div className="bg-accent-100 dark:bg-accent-900/30 p-4 rounded-2xl">
              <Target className="w-8 h-8 text-accent-600 dark:text-accent-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {progress.quizCompleted ? `${progress.quizScore}%` : '-'}
              </p>
              <p className="text-gray-600 dark:text-gray-400">Apklausos rezultatas</p>
              {progress.quizCompleted && (
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      (progress.quizScore || 0) >= 70 
                        ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' 
                        : 'bg-gradient-to-r from-orange-400 to-orange-500'
                    }`}
                    style={{ width: `${progress.quizScore || 0}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features – sprendimo puslapis su CTA */}
      <div className="card p-8 md:p-10 animate-fade-in">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Išmok kurti promptus, kurie veikia.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Per 6 praktinius blokus susikursi savo DI komunikacijos sistemą.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4 p-5 rounded-2xl hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all duration-300 group">
            <div className="bg-brand-100 dark:bg-brand-900/30 p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-brand-600 dark:text-brand-400" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">6 Blokų Sistema</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                Struktūra, kuri eliminuoja atsitiktinumą.
              </p>
              <button
                type="button"
                onClick={onStart}
                className="text-brand-600 dark:text-brand-400 font-semibold text-sm hover:underline inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded"
              >
                → Išmok struktūruoti
              </button>
            </div>
          </div>

          <div className="flex gap-4 p-5 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 group">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Verslo Pavyzdžiai</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                Realūs scenarijai, ne teorija.
              </p>
              <button
                type="button"
                onClick={onStart}
                className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:underline inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
              >
                → Pamatyk praktikoje
              </button>
            </div>
          </div>

          <div className="flex gap-4 p-5 rounded-2xl hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300 group">
            <div className="bg-violet-100 dark:bg-violet-900/30 p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
              <ClipboardCheck className="w-7 h-7 text-violet-600 dark:text-violet-400" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Praktinės Užduotys</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                Kuri savo promptus čia ir dabar.
              </p>
              <button
                type="button"
                onClick={onStart}
                className="text-violet-600 dark:text-violet-400 font-semibold text-sm hover:underline inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 rounded"
              >
                → Pradėk kurti
              </button>
            </div>
          </div>

          <div className="flex gap-4 p-5 rounded-2xl hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all duration-300 group">
            <div className="bg-accent-100 dark:bg-accent-900/30 p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
              <Sparkles className="w-7 h-7 text-accent-600 dark:text-accent-400" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Progreso Sekimas</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                Matai savo augimą modulis po modulio.
              </p>
              <button
                type="button"
                onClick={onStart}
                className="text-accent-600 dark:text-accent-400 font-semibold text-sm hover:underline inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded"
              >
                → Sek savo pažangą
              </button>
            </div>
          </div>
        </div>

        {/* Pagrindinis CTA blokas – neadaptyvus: kai viskas baigta → Peržiūrėti modulius */}
        <div className="mt-12 pt-10 border-t border-gray-200 dark:border-gray-700 text-center">
          <button
            onClick={onStart}
            className="btn-primary text-xl px-10 py-5 rounded-2xl inline-flex items-center gap-3 group w-full sm:w-auto justify-center mb-4"
            aria-label={modulesCompleted === totalModules && totalModules > 0 && progress.quizCompleted ? 'Peržiūrėti modulius' : 'Pradėti mokymus'}
          >
            {modulesCompleted === totalModules && totalModules > 0 && progress.quizCompleted
              ? 'Peržiūrėti modulius'
              : '🚀 Pradėti mokymus dabar'}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          {!(modulesCompleted === totalModules && totalModules > 0 && progress.quizCompleted) && (
            <>
              <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">arba</p>
              <button
                type="button"
                onClick={onStart}
                className="text-brand-600 dark:text-brand-400 font-semibold hover:underline inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded px-2 py-1"
              >
                Peržiūrėti modulius →
              </button>
            </>
          )}
        </div>
      </div>

      {/* Kaip naudoti? – pirmiausia, prieš promptus */}
      <section className="animate-fade-in">
        <div className="bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-brand-800 dark:text-brand-300 mb-3 text-lg flex items-center gap-2">
            <Lightbulb className="w-5 h-5" strokeWidth={1.5} />
            Kaip naudoti?
          </h3>
          <ol className="text-sm text-brand-700 dark:text-brand-400 space-y-2">
            <li><span className="font-medium">1.</span> Paspauskite <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white dark:bg-gray-800 rounded border border-brand-200 dark:border-brand-700 text-xs font-medium"><Copy className="w-3 h-3 inline" /> Kopijuoti</span> mygtuką</li>
            <li><span className="font-medium">2.</span> Įklijuokite į ChatGPT, Claude ar kitą DI įrankį</li>
            <li><span className="font-medium">3.</span> Pakeiskite <code className="bg-white dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs">[tekstą laužtiniuose skliaustuose]</code> savo duomenimis</li>
          </ol>
        </div>

        {/* 3 užduotys – greitam progresui */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            3 užduotys – greitam progresui
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Kopijuok ir pritaikyk per kelias sekundes – pakeisk [TEMA] arba [PROBLEMĄ] ir gauk rezultatą.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {QUICK_PROMPTS.map((item) => (
            <div
              key={item.id}
              className="card-hover p-6 flex flex-col relative"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                {item.title}
              </h3>
              <code className="block font-mono text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 mb-4 break-words">
                {item.prompt}
              </code>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200">
                  ⏱ {item.timeLabel}
                </span>
                {item.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(item.prompt);
                    setCopiedQuickId(item.id);
                    setTimeout(() => setCopiedQuickId(null), 2000);
                  } catch {
                    // ignore
                  }
                }}
                className={`mt-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  copiedQuickId === item.id
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                    : 'btn-secondary'
                }`}
                aria-label={`Kopijuoti: ${item.title}`}
              >
                {copiedQuickId === item.id ? (
                  <>
                    <Check className="w-4 h-4" />
                    Nukopijuota
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Kopijuoti
                  </>
                )}
              </button>
              {copiedQuickId === item.id && (
                <div className="absolute bottom-3 right-3 badge-success animate-fade-in">
                  <Check className="w-3 h-3 mr-1" />
                  Nukopijuota!
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Prompt Library */}
      <PromptLibrary />
    </div>
  );
}
