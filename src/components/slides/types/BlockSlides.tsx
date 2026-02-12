import { CheckCircle, FileText, Lightbulb, BarChart2, Target, Sparkles } from 'lucide-react';
import { CopyButton, TemplateBlock, EnlargeableImage } from '../shared';
import { getColorClasses } from '../utils/colorStyles';
import type { QualityCriteria, FullExampleBlock, Slide, AdvancedVeiksmoIntroContent } from '../../../types/modules';
import { renderBodyWithBold } from './shared';

export function MetaBlockSlide({ onRenderTask }: { onRenderTask: () => JSX.Element | null }) {
  return (
    <div className="space-y-6">
      <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-6 rounded-xl">
        <h3 className="font-bold text-xl mb-3 text-rose-900 dark:text-rose-100">
          Klausimas: Kas esate ir ką darote?
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Meta blokas nustato DI tapatybę ir kontekstą. Tai kaip darbo aprašymas,
          kuris lemia, kaip DI interpretuoja jūsų užduotį.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border-2 border-rose-200 dark:border-rose-800 relative">
          <div className="flex justify-between items-start mb-3">
            <span className="badge bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">❌ Blogas</span>
            <CopyButton text="Sukurk man pardavimų ataskaitą." size="sm" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">Sukurk man pardavimų ataskaitą.</p>
          <p className="text-xs text-rose-600 dark:text-rose-400">Problema: neaiški perspektyva</p>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 relative">
          <div className="flex justify-between items-start mb-3">
            <span className="badge bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">✓ Geras</span>
            <CopyButton text="Tu esi vyresnysis verslo analitikas su 10 metų patirtimi e-commerce srityje. Tavo tikslas - parengti pardavimų ataskaitą valdybos nariams, kurie priims strateginius sprendimus Q4 ketvirčiui." size="sm" />
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 italic">
            Tu esi vyresnysis verslo analitikas su 10 metų patirtimi e-commerce srityje.
            Tavo tikslas - parengti pardavimų ataskaitą valdybos nariams, kurie priims
            strateginius sprendimus Q4 ketvirčiui.
          </p>
        </div>
      </div>

      <div className="bg-brand-50 dark:bg-brand-900/20 p-5 rounded-xl">
        <h4 className="font-bold mb-3 text-brand-900 dark:text-brand-100">Meta bloko komponentai:</h4>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li><strong className="text-brand-700 dark:text-brand-300">Rolė:</strong> specializacija, patirties lygis</li>
          <li><strong className="text-brand-700 dark:text-brand-300">Domeno kontekstas:</strong> pramonė, specifika</li>
          <li><strong className="text-brand-700 dark:text-brand-300">Tikslinė auditorija:</strong> kam skirtas rezultatas</li>
          <li><strong className="text-brand-700 dark:text-brand-300">Verslo kontekstas:</strong> kodėl tai svarbu</li>
        </ul>
      </div>

      <TemplateBlock label="Kopijuojamas šablonas" template="META: Tu esi [vaidmuo]. Tikslas: [rezultatas]. Auditorija: [kam]." />
      {onRenderTask()}
    </div>
  );
}

export function InputBlockSlide({ onRenderTask }: { onRenderTask: () => JSX.Element | null }) {
  return (
    <div className="space-y-6">
      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-xl">
        <h3 className="font-bold text-xl mb-3 text-orange-900 dark:text-orange-100">
          Klausimas: Kokia faktinė informacija, duomenys, apribojimai?
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Input blokas nurodo KONKRETIUS duomenis, su kuriais DI turi dirbti. Aiškus input = aiškus output.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border-2 border-gray-200 dark:border-gray-700">
          <h4 className="font-bold mb-3 text-gray-900 dark:text-white">Ką įtraukti į Input bloką?</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {['Konkretūs skaičiai, datos, metrikos', 'Dokumentų ištraukos ar nuorodos', 'Apribojimai (biudžetas, laikas)', 'Taisyklės, standartai, gairės'].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-xl border border-rose-200 dark:border-rose-800">
            <p className="text-xs text-rose-700 dark:text-rose-400 font-bold mb-2 uppercase tracking-wider">❌ Ne konkretus input:</p>
            <p className="text-sm italic text-gray-600 dark:text-gray-400">Įvertink mūsų pardavimus.</p>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <p className="text-xs text-emerald-700 dark:text-emerald-400 font-bold mb-2 uppercase tracking-wider">✓ Konkretus input:</p>
            <p className="text-sm italic text-gray-700 dark:text-gray-300">
              Įvertink Q3 2024 pardavimus. Duomenys: 250k EUR pajamos (+15% vs Q2), 1200 užsakymų, vidutinis čekis 208 EUR.
            </p>
          </div>
        </div>
      </div>

      <TemplateBlock label="Kopijuojamas šablonas" template="INPUT: Duomenys: [faktai/skaičiai]. Apribojimai: [laikas/biudžetas]." />
      {onRenderTask()}
    </div>
  );
}

export function OutputBlockSlide({ onRenderTask }: { onRenderTask: () => JSX.Element | null }) {
  return (
    <div className="space-y-6">
      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-xl">
        <h3 className="font-bold text-xl mb-3 text-orange-900 dark:text-orange-100">
          Klausimas: Kokio formato ir struktūros noriu?
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Output blokas nurodo TIKSLŲ rezultato formatą. Tai pašalina nereikalingus taisymo iteracijos ciklus.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700">
        <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Pavyzdys: Q4 Pardavimų Analizės Ataskaita</h4>
        <div className="bg-brand-50 dark:bg-brand-900/20 p-4 rounded-xl text-sm mb-3">
          <p className="text-brand-700 dark:text-brand-300 mb-2 font-semibold">Formatas: Executive Summary (1-2 puslapiai)</p>
          <p className="text-gray-600 dark:text-gray-400 mb-3">Struktūra:</p>
          <ol className="space-y-1 text-gray-700 dark:text-gray-300 list-decimal list-inside ml-2">
            <li>Pagrindinės metrikos (KPI dashboard su skaičiais)</li>
            <li>Tendencijos (palyginimas su Q3 ir praėjusių metų Q4)</li>
            <li>Kategorijų analizė (top 3 produktų grupės)</li>
            <li>Rekomendacijos Q1 (3 konkrečios, veiksmais pagrįstos)</li>
          </ol>
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl text-sm">
          <p className="text-emerald-700 dark:text-emerald-300 mb-2 font-semibold">Papildomi reikalavimai:</p>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300">
            <li>• Kalba: lietuvių</li>
            <li>• Tonas: profesionalus, verslo</li>
            <li>• Stilius: aiškus, be žargono</li>
            <li>• Priedai: 1 diagrama (tendencijų grafikas)</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-brand-50 dark:bg-brand-900/20 p-5 rounded-xl">
          <h4 className="font-bold mb-3 text-brand-900 dark:text-brand-100">Formatų tipai:</h4>
          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Lentelė</li>
            <li>• Dokumentas</li>
            <li>• Sąrašas</li>
            <li>• Diagrama</li>
            <li>• Kodas</li>
          </ul>
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-xl">
          <h4 className="font-bold mb-3 text-emerald-900 dark:text-emerald-100">Reikalavimai:</h4>
          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Ilgis</li>
            <li>• Detalumo lygis</li>
            <li>• Tonas</li>
            <li>• Kalba</li>
            <li>• Priedai</li>
          </ul>
        </div>
      </div>

      <TemplateBlock label="Kopijuojamas šablonas" template="OUTPUT: Format: [struktūra]. Ilgis: [apimtis]. Tonas: [stilius]." />
      {onRenderTask()}
    </div>
  );
}

export function ReasoningModelsSlide({ slide, onRenderTask }: { slide?: Slide; onRenderTask: () => JSX.Element | null }) {
  const intro = slide?.content && 'veiksmoIntro' in slide.content ? slide.content.veiksmoIntro : null;

  const cotExample = `REASONING (CoT):
1. Apibrėžk Q3 pardavimų metrikas
2. Palygink su Q2 ir praėjusių metų Q3
3. Identifikuok pagrindines tendencijas
4. Suformuluok išvadą apie Q4 prognozę`;

  const totExample = `REASONING (ToT):
1. Įvardink problemą: mažas LinkedIn įsitraukimas
2. Sugeneruok 3 sprendimo variantus:
   a) Informacinis postas
   b) Klausimo forma
   c) Provokuojanti įžvalga
3. Įvertink kiekvieno privalumus ir trūkumus
4. Pasirink geriausią pagal B2B auditorijos poreikius`;

  const cotTemplate = `REASONING (CoT):
1. Apibrėžk problemą
2. Išanalizuok duomenis
3. Padaryk išvadą`;

  const totTemplate = `REASONING (ToT):
1. Įvardink problemą
2. Sugeneruok [N] sprendimo variantus
3. Įvertink kiekvieno privalumus ir trūkumus
4. Pasirink geriausią`;

  return (
    <div className="space-y-6">
      {/* VeiksmoIntro */}
      {intro && <VeiksmoIntroBlock content={intro} />}

      {/* Dark hero intro */}
      <div className="bg-gradient-to-r from-gray-900 to-brand-900 p-5 rounded-xl text-white">
        <p className="text-sm text-brand-200 mb-1">Du keliai. Vienas sprendimas.</p>
        <h3 className="font-bold text-lg">Pasirink tinkamą mąstymo modelį</h3>
        <p className="text-sm text-gray-300 mt-2">
          Tai ne DI &ldquo;natūralus mąstymas&rdquo; – tai struktūra, kurią <strong>tu</strong> nurodai prompt&apos;e.
        </p>
      </div>

      {/* Vizualizacija su EnlargeableImage */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
        <EnlargeableImage
          src={`${import.meta.env.BASE_URL || '/'}mastymo_modeliai.png`}
          alt="Mąstymo modeliai: Chain of Thought vs Tree of Thoughts"
          enlargeLabel="Padidinti mąstymo modelių diagramą"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
          Grandinės (CoT) vs Medžio (ToT) mąstymo modelis
        </p>
      </div>

      {/* Kaip pasirinkti – visada matomas, kompaktiškas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-brand-50 dark:bg-brand-900/20 p-4 rounded-xl border-2 border-brand-200 dark:border-brand-800" role="article" aria-label="Chain of Thought modelis">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl" aria-hidden="true">🔗</span>
            <div>
              <p className="font-bold text-brand-900 dark:text-brand-100">CoT – Grandinė</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Chain of Thought</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Žingsnis po žingsnio. Viena loginė seka.</p>
          <span className="inline-block px-2 py-0.5 rounded-full bg-brand-200 dark:bg-brand-800 text-brand-800 dark:text-brand-200 text-xs font-medium">Aiškus atsakymas → CoT</span>
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border-2 border-emerald-200 dark:border-emerald-800" role="article" aria-label="Tree of Thoughts modelis">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl" aria-hidden="true">🌳</span>
            <div>
              <p className="font-bold text-emerald-900 dark:text-emerald-100">ToT – Medis</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Tree of Thoughts</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Kelios šakos. DI palygina variantus ir pasirenka.</p>
          <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-medium">Keli variantai → ToT</span>
        </div>
      </div>

      {/* CoT detalus – suskleičiamas */}
      <details className="group bg-gradient-to-br from-brand-50 to-cyan-50 dark:from-brand-900/20 dark:to-cyan-900/20 rounded-xl border-2 border-brand-200 dark:border-brand-800 overflow-hidden">
        <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-brand-50/80 dark:hover:bg-brand-900/30 transition-colors select-none min-h-[44px]">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">🔗</span>
            <h4 className="font-bold text-lg text-brand-900 dark:text-brand-100">GRANDINĖ (CoT) – detaliau</h4>
          </div>
          <span className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform text-sm shrink-0">▼</span>
        </summary>
        <div className="px-5 pb-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Kada naudoti:</p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• vienas aiškus atsakymas</li>
                <li>• loginis paaiškinimas</li>
                <li>• nuoseklumas ir tikslumas</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Tinka:</p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• analizėms</li>
                <li>• skaičiavimams</li>
                <li>• procesų paaiškinimams</li>
              </ul>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg relative">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold text-brand-700 dark:text-brand-300 uppercase tracking-wider">Pavyzdys:</span>
              <CopyButton text={cotExample} size="sm" />
            </div>
            <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono bg-gray-50 dark:bg-gray-900 p-3 rounded-lg overflow-x-auto">{cotExample}</pre>
          </div>
        </div>
      </details>

      {/* ToT detalus – suskleičiamas */}
      <details className="group bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-900/30 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 overflow-hidden">
        <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-emerald-50/80 dark:hover:bg-emerald-900/30 transition-colors select-none min-h-[44px]">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">🌳</span>
            <h4 className="font-bold text-lg text-emerald-900 dark:text-emerald-100">MEDIS (ToT) – detaliau</h4>
          </div>
          <span className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform text-sm shrink-0">▼</span>
        </summary>
        <div className="px-5 pb-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Kada naudoti:</p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• keli galimi sprendimai</li>
                <li>• kūryba ar strategija</li>
                <li>• pliusų ir minusų vertinimas</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Tinka:</p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• strateginiams sprendimams</li>
                <li>• marketingui</li>
                <li>• idėjų generavimui</li>
              </ul>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg relative">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">Pavyzdys:</span>
              <CopyButton text={totExample} size="sm" />
            </div>
            <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono bg-gray-50 dark:bg-gray-900 p-3 rounded-lg overflow-x-auto">{totExample}</pre>
          </div>
        </div>
      </details>

      {/* Kopijuojami šablonai – visada matomi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TemplateBlock label="CoT šablonas" template={cotTemplate} />
        <TemplateBlock label="ToT šablonas" template={totTemplate} />
      </div>

      {/* Svarbi pastaba – kompaktiška */}
      <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border-l-4 border-amber-500 flex flex-wrap items-center gap-3">
        <span className="text-lg" aria-hidden="true">⚠️</span>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex-1">
          Jei nenurodysi reasoning struktūros – DI pasirinks ją <strong className="text-amber-800 dark:text-amber-200">atsitiktinai arba paviršutiniškai</strong>.
        </p>
      </div>

      {onRenderTask()}
    </div>
  );
}

export function ReasoningBlockSlide({ slide, onRenderTask }: { slide?: Slide; onRenderTask: () => JSX.Element | null }) {
  const intro = slide?.content && 'veiksmoIntro' in slide.content ? slide.content.veiksmoIntro : null;

  const steps = [
    { num: 1, step: 'Apibrėžti problemą', desc: 'Kokia tikroji problema, kurią reikia išspręsti?' },
    { num: 2, step: 'Analizuoti turimus duomenis', desc: 'Ką jau žinome? Kokie faktai, apribojimai, kontekstas?' },
    { num: 3, step: 'Nustatyti trūkstamus elementus', desc: 'Ko trūksta pilnam sprendimui? Kokios prielaidos daromos?' },
    { num: 4, step: 'Įvardinti galimus variantus', desc: 'Kokie galimi sprendimo būdai?' },
    { num: 5, step: 'Įvertinti kompromisus', desc: 'Kiekvieno varianto privalumai ir trūkumai?' },
    { num: 6, step: 'Išvada', desc: 'Kurį sprendimą rekomenduoti ir kodėl?' },
  ];

  const liteSteps = [
    'Kokia problema?',
    'Kokie 2–3 galimi sprendimai?',
    'Kuris geriausias ir kodėl?',
  ];

  const example1 = `REASONING:
1. Problema: Įmonėje darbuotojai naudoja ChatGPT be taisyklių.
2. Duomenys: 40 darbuotojų, jautrūs duomenys, nėra DI politikos.
3. Trūksta: aiškių naudojimo ribų ir atsakomybės.
4. Variantai:
   a) Visiškai uždrausti DI
   b) Leisti naudoti be ribojimų
   c) Parengti DI politiką
5. Kompromisai:
   a) Saugu, bet mažina efektyvumą
   b) Greita, bet rizikinga
   c) Reikalauja darbo, bet valdoma
6. Išvada: Rekomenduoti DI politikos sukūrimą.`;

  const example2 = `REASONING:
1. Problema: LinkedIn įrašai nesulaukia reakcijų.
2. Duomenys: B2B auditorija, mažas įsitraukimas.
3. Trūksta: aiškaus CTA.
4. Variantai:
   a) Informacinis postas
   b) Klausimo forma
   c) Provokuojanti įžvalga
5. Kompromisai:
   a) Saugu, bet nuobodu
   b) Skatina komentarus
   c) Rizikinga, bet viral
6. Išvada: Rinktis klausimo formą.`;

  const fullTemplate = `REASONING:
1. Problema:
2. Turimi duomenys:
3. Ko trūksta:
4. Galimi variantai:
5. Kompromisai:
6. Išvada:`;

  return (
    <div className="space-y-6">
      {/* VeiksmoIntro */}
      {intro && <VeiksmoIntroBlock content={intro} />}

      {/* Dark hero intro */}
      <div className="bg-gradient-to-r from-gray-900 to-amber-900 p-5 rounded-xl text-white">
        <p className="text-sm text-amber-300 mb-1">Ne kiekviena DI užduotis reikalauja mąstymo. Bet kiekviena svarbi – taip.</p>
        <h3 className="font-bold text-lg">Reasoning blokas: kaip mąstyti prieš atsakant?</h3>
        <p className="text-sm text-gray-300 mt-2">
          Nurodo DI sprendimo logiką – ne tik tekstą, bet <strong>pagrįstą sprendimą</strong>.
        </p>
      </div>

      {/* Kada naudoti / kada nenaudoti – visada matomas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border-2 border-emerald-200 dark:border-emerald-800" role="article" aria-label="Kada naudoti Reasoning">
          <h4 className="font-bold mb-2 text-emerald-900 dark:text-emerald-100 flex items-center gap-2 text-sm">
            <span>✅</span> Naudok, kai:
          </h4>
          <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>• reikia sprendimo ar rekomendacijos</li>
            <li>• yra keli galimi variantai</li>
            <li>• reikia įvertinti rizikas ar kompromisus</li>
          </ul>
        </div>
        <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border-2 border-rose-200 dark:border-rose-800" role="article" aria-label="Kada nenaudoti Reasoning">
          <h4 className="font-bold mb-2 text-rose-900 dark:text-rose-100 flex items-center gap-2 text-sm">
            <span>❌</span> NENAUDOK, kai:
          </h4>
          <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>• reikia greito fakto</li>
            <li>• reikia perrašyti ar sutrumpinti tekstą</li>
            <li>• atsakymas vienas ir akivaizdus</li>
          </ul>
        </div>
      </div>

      {/* Lite versija – visada matoma (80% atvejų) */}
      <div className="bg-brand-50 dark:bg-brand-900/20 p-5 rounded-xl border-2 border-brand-200 dark:border-brand-800" role="article" aria-label="Lite Reasoning versija">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h4 className="font-bold text-base text-brand-900 dark:text-brand-100 flex items-center gap-2">
            <FileText className="w-4 h-4 text-brand-600 dark:text-brand-400" strokeWidth={1.5} />
            Lite Reasoning
          </h4>
          <span className="text-xs px-2 py-0.5 rounded-full bg-brand-200 dark:bg-brand-800 text-brand-800 dark:text-brand-200 font-medium">80% atvejų</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {liteSteps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-1.5 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg">
              <span className="text-brand-600 dark:text-brand-400 font-bold text-sm">{idx + 1}.</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pilna Advanced struktūra – suskleičiama */}
      <details className="group bg-gradient-to-r from-brand-50 to-brand-100 dark:from-brand-900/20 dark:to-brand-900/30 rounded-xl overflow-hidden">
        <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-brand-50/80 dark:hover:bg-brand-900/30 transition-colors select-none min-h-[44px]">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">🧠</span>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white">Pilna Reasoning struktūra (6 žingsniai)</h4>
          </div>
          <span className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform text-sm shrink-0">▼</span>
        </summary>
        <div className="px-5 pb-5 space-y-2">
          {steps.map((item) => (
            <div key={item.num} className="flex gap-3 items-start bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="w-7 h-7 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center font-bold text-sm text-brand-700 dark:text-brand-300 flex-shrink-0">
                {item.num}
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.step}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </details>

      {/* Verslo pavyzdžiai – suskleičiami */}
      <details className="group bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
        <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors select-none min-h-[44px]">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">📋</span>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white">Verslo pavyzdžiai (2)</h4>
          </div>
          <span className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform text-sm shrink-0">▼</span>
        </summary>
        <div className="px-5 pb-5 space-y-4">
          <div className="p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg border-l-4 border-violet-500">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold text-violet-700 dark:text-violet-300">Pavyzdys №1 – Sprendimas</span>
              <CopyButton text={example1} size="sm" />
            </div>
            <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono bg-white dark:bg-gray-800 p-3 rounded-lg overflow-x-auto">{example1}</pre>
          </div>
          <div className="p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg border-l-4 border-violet-500">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold text-violet-700 dark:text-violet-300">Pavyzdys №2 – Marketingas</span>
              <CopyButton text={example2} size="sm" />
            </div>
            <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono bg-white dark:bg-gray-800 p-3 rounded-lg overflow-x-auto">{example2}</pre>
          </div>
        </div>
      </details>

      {/* Kopijuojamas šablonas – visada matomas */}
      <TemplateBlock label="Kopijuojamas šablonas" template={fullTemplate} />

      {/* Svarbi pastaba – kompaktiška */}
      <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border-l-4 border-amber-500">
        <div className="flex items-start gap-2">
          <span className="text-lg shrink-0" aria-hidden="true">⚠️</span>
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Reasoning nepadarys stebuklo, jei problema neaiški, duomenys klaidingi ar tikslas neapibrėžtas.
            </p>
            <p className="text-sm text-amber-800 dark:text-amber-200 mt-1 font-semibold">
              Geras reasoning prasideda nuo aiškios problemos.
            </p>
          </div>
        </div>
      </div>

      {onRenderTask()}
    </div>
  );
}

export function QualityBlockSlide({ slide, onRenderTask }: { slide?: Slide; onRenderTask: () => JSX.Element | null }) {
  const intro = slide?.content && 'veiksmoIntro' in slide.content ? slide.content.veiksmoIntro : null;

  const criteria: QualityCriteria[] = [
    { text: 'Loginė seka – informacija seka logiškai', color: 'brand' },
    { text: 'Pilnumas – visi klausimai atsakyti', color: 'emerald' },
    { text: 'Faktinis tikslumas – visi duomenys teisingi', color: 'amber' },
    { text: 'Įvairūs metodai – ne tik vienas būdas', color: 'violet' },
    { text: 'Išmatuojami rezultatai – turi KPI', color: 'rose' },
  ];

  const reasoningCriteria = [
    'Ar aiškiai išvardintos prielaidos?',
    'Ar nurodyta, kur modelis spėja, o kur remiasi faktais?',
    'Ar parodyta sprendimo logika, ne tik išvada?',
    'Ar modelis įvardija ribotumus?',
    'Ar yra alternatyvos / priešingos hipotezės?',
  ];

  const redFlags = [
    'Atsakymas per greitas ir per tikras',
    'Nėra „nežinau"',
    'Nėra alternatyvų',
    'Visi sakiniai „užtikrinti"',
    'Nėra ribų („depends", „if", „assumption")',
  ];

  return (
    <div className="space-y-6">
      {/* VeiksmoIntro */}
      {intro && <VeiksmoIntroBlock content={intro} />}

      {/* Dark hero intro */}
      <div className="bg-gradient-to-r from-gray-900 to-emerald-900 p-5 rounded-xl text-white">
        <p className="text-sm text-emerald-300 mb-1">DI atsakymas gali atrodyti puikiai. Ir būti visiškai klaidingas.</p>
        <h3 className="font-bold text-lg">Quality Control: kaip patikrinti rezultatą?</h3>
        <p className="text-sm text-gray-300 mt-2">
          Saugos diržas, kuris verčia DI <strong>pažymėti prielaidas</strong> ir <strong>nuodyti ribotumus</strong>.
        </p>
      </div>

      {/* Reasoning ≠ Answer Quality – visada matomas (svarbus konceptas) */}
      <div className="bg-rose-50 dark:bg-rose-900/20 border-2 border-rose-300 dark:border-rose-700 p-5 rounded-xl">
        <h4 className="font-bold text-base mb-3 text-rose-900 dark:text-rose-100">
          ⚠️ Reasoning Quality ≠ Answer Quality
        </h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          Geras atsakymas nebūtinai reiškia gerą reasoning. DI gali pateikti gražų, bet nepagrįstą atsakymą.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 p-3 rounded-lg" role="article" aria-label="Blogas pavyzdys">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">❌</span>
              <span className="font-bold text-sm text-red-900 dark:text-red-100">Gražus, bet nepagrįstas</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Atrodo profesionalus, bet nėra logikos ar prielaidų.</p>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-300 dark:border-emerald-700 p-3 rounded-lg" role="article" aria-label="Geras pavyzdys">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">✅</span>
              <span className="font-bold text-sm text-emerald-900 dark:text-emerald-100">Aiškiai pagrįstas</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Turi aiškią logiką, prielaidas ir ribotumus.</p>
          </div>
        </div>
      </div>

      {/* Universalūs kriterijai – visada matomi (kompaktiški) */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
        <h4 className="font-bold mb-3 text-gray-900 dark:text-white text-base">Universalūs kokybės kriterijai:</h4>
        <div className="space-y-1.5 text-sm">
          {criteria.map((item, idx) => {
            const colors = getColorClasses(item.color);
            return (
              <div key={idx} className={`flex items-center gap-2 p-2.5 ${colors.bg} ${colors.bgDark} rounded-lg`}>
                <CheckCircle className={`w-4 h-4 ${colors.text} ${colors.textDark} flex-shrink-0`} />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reasoning Quality kriterijai – suskleičiami */}
      <details className="group bg-violet-50 dark:bg-violet-900/20 rounded-xl border-2 border-violet-300 dark:border-violet-700 overflow-hidden">
        <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-violet-100/50 dark:hover:bg-violet-900/30 transition-colors select-none min-h-[44px]">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">🧠</span>
            <h4 className="font-bold text-lg text-violet-900 dark:text-violet-100">Reasoning Quality kriterijai</h4>
          </div>
          <span className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform text-sm shrink-0">▼</span>
        </summary>
        <div className="px-5 pb-5 space-y-1.5 text-sm">
          {reasoningCriteria.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 p-2.5 bg-white dark:bg-gray-800 rounded-lg">
              <span className="text-violet-600 dark:text-violet-400 font-bold mt-0.5 shrink-0">•</span>
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </details>

      {/* Red Flags – suskleičiami */}
      <details className="group bg-amber-50 dark:bg-amber-900/20 rounded-xl border-2 border-amber-300 dark:border-amber-700 overflow-hidden">
        <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-amber-100/50 dark:hover:bg-amber-900/30 transition-colors select-none min-h-[44px]">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">🚩</span>
            <h4 className="font-bold text-lg text-amber-900 dark:text-amber-100">Blogo reasoning požymiai (red flags)</h4>
          </div>
          <span className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform text-sm shrink-0">▼</span>
        </summary>
        <div className="px-5 pb-5 space-y-1.5 text-sm">
          {redFlags.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 p-2.5 bg-white dark:bg-gray-800 rounded-lg">
              <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 shrink-0">⚠</span>
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </details>

      {/* QC šablonai – suskleičiami */}
      <details className="group bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
        <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors select-none min-h-[44px]">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">📋</span>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white">Kopijuojami QC šablonai (2)</h4>
          </div>
          <span className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform text-sm shrink-0">▼</span>
        </summary>
        <div className="px-5 pb-5 space-y-4">
          <div>
            <h5 className="font-bold mb-2 text-sm text-gray-900 dark:text-white">A. Inline Quality Control (prompt&apos;e)</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Prieš pateikiant galutinį atsakymą, DI turi patikrinti:</p>
            <TemplateBlock 
              label="Kopijuojamas šablonas:" 
              template={`Prieš pateikiant galutinį atsakymą:\n- patikrink loginę nuoseklumą (ar visi teiginiai dera tarpusavyje?)\n- pažymėk prielaidas (kokie faktai remiasi spėjimais, o ne duomenimis?)\n- nurodyk neapibrėžtumus (kur trūksta duomenų ar yra rizika?)\n- ištaisyk faktinius spėjimus (ar visi skaičiai ir faktai tikslūs?)`}
            />
            <div className="mt-2 p-2.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mb-1">Verslo pavyzdys:</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 italic">
                &ldquo;Prieš pateikiant Q4 strategijos rekomendacijas, patikrink: ar visi KPI dera su biudžetu? Pažymėk, kurios prognozės remiasi spėjimais.&rdquo;
              </p>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-2 text-sm text-gray-900 dark:text-white">B. Post-hoc Quality Audit (antras žingsnis)</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Po pirmo atsakymo, prašyk DI peržiūrėti:</p>
            <TemplateBlock 
              label="Kopijuojamas šablonas:" 
              template={`Peržiūrėk ankstesnį atsakymą ir išvardyk:\n1) Loginius trūkumus (kur logika nebaigta ar prieštaringa?)\n2) Nepagrįstus teiginius (kur trūksta duomenų ar šaltinių?)\n3) Prielaidas (kokie faktai remiasi spėjimais, o ne įrodymais?)\n4) Pagerinimo pasiūlymus (ką galima patobulinti ar papildyti?)`}
            />
            <div className="mt-2 p-2.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mb-1">Verslo pavyzdys:</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 italic">
                &ldquo;Peržiūrėk Q4 pardavimų analizę. Ar palyginimas su Q3 pilnas? Kokios prielaidos apie Q1 augimą?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </details>

      {/* Mikro-užduotis – visada matoma (interaktyvus elementas) */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-2 border-blue-300 dark:border-blue-700" role="article" aria-label="Mikro-užduotis">
        <h4 className="font-bold mb-3 text-blue-900 dark:text-blue-100 text-base flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
          Mikro-užduotis
        </h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          Pateiktas atsakymas atrodo geras. Pažymėk:
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
            <span className="text-blue-600 dark:text-blue-400 font-bold">1.</span> 2 prielaidas
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
            <span className="text-blue-600 dark:text-blue-400 font-bold">2.</span> 1 galimą hallucinaciją
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
            <span className="text-blue-600 dark:text-blue-400 font-bold">3.</span> 1 vietą papildomam šaltiniui
          </span>
        </div>
      </div>

      {/* Susiejimas – kompaktiškas, visada matomas */}
      <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-xl">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-emerald-900 dark:text-emerald-100">Quality Control = saugos diržas:</strong> kompensuoja silpną kontekstą (Input), neaiškų tikslą (Meta) ir per drąsų modelį (Advanced).
        </p>
      </div>

      {onRenderTask()}
    </div>
  );
}

function VeiksmoIntroBlock({ content }: { content: NonNullable<AdvancedVeiksmoIntroContent['veiksmoIntro']> }) {
  const { trumpai, darykDabar, patikra } = content;
  if (!trumpai && !darykDabar && !patikra) return null;
  const steps = [
    trumpai ? { label: '1. Trumpai', time: '30 s', text: trumpai } : null,
    darykDabar ? { label: '2. Daryk', time: '2–7 min', text: darykDabar } : null,
    patikra ? { label: '3. Patikra', time: '1 min', text: patikra } : null,
  ].filter(Boolean) as { label: string; time: string; text: string }[];

  return (
    <div className="bg-accent-50 dark:bg-accent-900/20 rounded-xl border-l-4 border-accent-500 border border-accent-200 dark:border-accent-800 p-4 sm:p-5 mb-6">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {steps.map((s, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-gray-800 border border-accent-200 dark:border-accent-700 text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="font-bold text-accent-700 dark:text-accent-300">{s.label}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">({s.time})</span>
            </span>
            {i < steps.length - 1 && <span className="text-accent-400 dark:text-accent-600 text-sm" aria-hidden="true">→</span>}
          </span>
        ))}
      </div>
      <details className="group">
        <summary className="cursor-pointer list-none flex items-center gap-2 text-sm font-semibold text-accent-700 dark:text-accent-300 hover:text-accent-800 dark:hover:text-accent-200 transition-colors select-none min-h-[44px]">
          <span>Peržiūrėti žingsnius</span>
          <span className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="mt-3 space-y-2">
          {steps.map((s, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-accent-100 dark:border-accent-900/30">
              <p className="text-xs font-bold text-accent-700 dark:text-accent-300 mb-1">{s.label} ({s.time})</p>
              <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{renderBodyWithBold(s.text)}</div>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}

export interface AdvancedBlockSlideProps {
  slide?: Slide;
  onRenderTask: () => JSX.Element | null;
}

export function AdvancedBlockSlide({ slide, onRenderTask }: AdvancedBlockSlideProps) {
  const intro = slide?.content && 'veiksmoIntro' in slide.content ? slide.content.veiksmoIntro : null;
  return (
    <div className="space-y-6">
      {intro && <VeiksmoIntroBlock content={intro} />}
      {/* Tikslas – kompaktiškas */}
      <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand-500 p-5 rounded-xl">
        <h3 className="font-bold text-lg mb-2 text-brand-900 dark:text-brand-100">
          🧠 Advanced Parameters – tikslumas vs kūryba
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Neprivalomas, bet galingas blokas: valdyk DI nuspėjamumą, gylį ir kūrybiškumą pagal verslo užduotį.
        </p>
      </div>

      {/* Temperature sekcija – suskleičiama */}
      <details className="group bg-white dark:bg-gray-800 rounded-xl border-2 border-violet-200 dark:border-violet-800 overflow-hidden">
        <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-colors select-none min-h-[44px]">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">🌡️</span>
            <h4 className="font-bold text-lg text-violet-900 dark:text-violet-100">Temperature – kūrybos valdiklis</h4>
          </div>
          <span className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform text-sm shrink-0">▼</span>
        </summary>
        <div className="px-5 pb-5 space-y-3">
          {/* Vizualus skalės pavyzdys */}
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600 dark:text-gray-400">⬅️ Tikslumas</span>
              <span className="text-gray-600 dark:text-gray-400">Kūrybiškumas ➡️</span>
            </div>
            <div className="w-full h-3 bg-gradient-to-r from-blue-500 via-emerald-500 to-orange-500 rounded-full"></div>
          </div>
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
            <p className="font-semibold text-sm text-blue-900 dark:text-blue-100">0.0–0.3 | Žemas → faktai, analizė, instrukcijos</p>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">Kuo žemesnė temperatūra – tuo mažiau improvizacijos.</p>
          </div>
          <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border-l-4 border-emerald-500">
            <p className="font-semibold text-sm text-emerald-900 dark:text-emerald-100">0.4–0.7 | Vidutinis → subalansuotas verslo naudojimas</p>
          </div>
          <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl border-l-4 border-orange-500">
            <p className="font-semibold text-sm text-orange-900 dark:text-orange-100">0.8–1.0 | Aukštas → idėjos, marketingas, kūryba</p>
          </div>
        </div>
      </details>

      {/* Reasoning gylis sekcija – suskleičiama */}
      <details className="group bg-white dark:bg-gray-800 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 overflow-hidden">
        <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors select-none min-h-[44px]">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">🧠</span>
            <h4 className="font-bold text-lg text-emerald-900 dark:text-emerald-100">Reasoning gylis – mąstymo intensyvumas</h4>
          </div>
          <span className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform text-sm shrink-0">▼</span>
        </summary>
        <div className="px-5 pb-5 space-y-3">
          <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Greitas → paprasti klausimai, Q&A</p>
          </div>
          <div className="p-3 bg-brand-50 dark:bg-brand-900/20 rounded-xl">
            <p className="font-semibold text-sm text-brand-900 dark:text-brand-100">Normalus → standartinės verslo užduotys</p>
          </div>
          <div className="p-3 bg-violet-50 dark:bg-violet-900/20 rounded-xl">
            <p className="font-semibold text-sm text-violet-900 dark:text-violet-100">Gilus → analizė, strategija, sprendimų palyginimas</p>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">Gilus = daugiau laiko, bet geresnė logika.</p>
          </div>
        </div>
      </details>

      {/* Business cheat sheet – suskleičiama */}
      <details className="group bg-white dark:bg-gray-800 rounded-xl border-2 border-amber-200 dark:border-amber-800 overflow-hidden">
        <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-colors select-none min-h-[44px]">
          <div className="flex items-center gap-3">
            <span className="inline-flex p-2 rounded-lg bg-amber-500/10 dark:bg-amber-500/20">
              <BarChart2 className="w-5 h-5 text-amber-600 dark:text-amber-400" strokeWidth={1.5} />
            </span>
            <h4 className="font-bold text-lg text-amber-900 dark:text-amber-100">Kada ką naudoti? (Business cheat sheet)</h4>
          </div>
          <span className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform text-sm shrink-0">▼</span>
        </summary>
        <div className="px-5 pb-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-amber-50 dark:bg-amber-900/20">
                  <th className="p-2.5 text-left border-b border-amber-200 dark:border-amber-800">Užduotis</th>
                  <th className="p-2.5 text-left border-b border-amber-200 dark:border-amber-800">Temperature</th>
                  <th className="p-2.5 text-left border-b border-amber-200 dark:border-amber-800">Reasoning</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-2.5">Ataskaitos, analizė</td>
                  <td className="p-2.5">0.1–0.3</td>
                  <td className="p-2.5">Gilus</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                  <td className="p-2.5">SOP, instrukcijos</td>
                  <td className="p-2.5">0.1–0.2</td>
                  <td className="p-2.5">Normalus</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-2.5">El. laiškai, HR</td>
                  <td className="p-2.5">0.4–0.5</td>
                  <td className="p-2.5">Normalus</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                  <td className="p-2.5">Marketingas, tekstai</td>
                  <td className="p-2.5">0.6–0.8</td>
                  <td className="p-2.5">Normalus</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-2.5">Strategija, idėjos</td>
                  <td className="p-2.5">0.5–0.6</td>
                  <td className="p-2.5">Gilus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </details>

      {/* Safe default – visada matomas */}
      <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-5 rounded-xl" role="article" aria-label="Safe default nustatymai">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h4 className="font-bold text-base text-emerald-900 dark:text-emerald-100">✅ SAFE DEFAULT</h4>
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200">80% verslo atvejų</span>
        </div>
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg font-mono text-sm inline-block">
          <span className="text-gray-700 dark:text-gray-300">Temperature: <strong>0.4–0.6</strong> · Reasoning: <strong>Normal</strong></span>
        </div>
      </div>

      {/* Ready-to-copy pavyzdžiai – suskleičiama */}
      <details className="group bg-white dark:bg-gray-800 rounded-xl border-2 border-violet-200 dark:border-violet-800 overflow-hidden">
        <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-colors select-none min-h-[44px]">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">📋</span>
            <h4 className="font-bold text-lg text-violet-900 dark:text-violet-100">Ready-to-copy pavyzdžiai (3)</h4>
          </div>
          <span className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform text-sm shrink-0">▼</span>
        </summary>
        <div className="px-5 pb-5 space-y-4">
          {/* Pavyzdys 1: Verslo analizė */}
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
            <p className="font-semibold text-sm text-blue-900 dark:text-blue-100 mb-2">🔍 Verslo analizė</p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm font-mono text-gray-800 dark:text-gray-200 relative group/copy">
              <CopyButton
                text={`ADVANCED:\nTemperature: 0.2\nReasoning: Deep\n\nUžduotis:\nIšanalizuok šios įmonės procesą ir pateik 3 problemas bei 3 realias optimizavimo rekomendacijas.`}
                className="absolute top-2 right-2"
                size="sm"
              />
              <div className="pr-8 text-xs">
                <div className="mb-1">ADVANCED:</div>
                <div>Temperature: 0.2</div>
                <div className="mb-2">Reasoning: Deep</div>
                <div className="text-gray-500 dark:text-gray-400">Užduotis:</div>
                <div>Išanalizuok šios įmonės procesą ir pateik 3 problemas bei 3 realias optimizavimo rekomendacijas.</div>
              </div>
            </div>
          </div>

          {/* Pavyzdys 2: Marketingo tekstas */}
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
            <p className="font-semibold text-sm text-orange-900 dark:text-orange-100 mb-2">📣 Marketingo tekstas</p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm font-mono text-gray-800 dark:text-gray-200 relative group/copy">
              <CopyButton
                text={`ADVANCED:\nTemperature: 0.7\nReasoning: Normal\n\nUžduotis:\nParašyk LinkedIn įrašą apie naują paslaugą. Tonas – profesionalus, orientuotas į naudą verslui.`}
                className="absolute top-2 right-2"
                size="sm"
              />
              <div className="pr-8 text-xs">
                <div className="mb-1">ADVANCED:</div>
                <div>Temperature: 0.7</div>
                <div className="mb-2">Reasoning: Normal</div>
                <div className="text-gray-500 dark:text-gray-400">Užduotis:</div>
                <div>Parašyk LinkedIn įrašą apie naują paslaugą. Tonas – profesionalus, orientuotas į naudą verslui.</div>
              </div>
            </div>
          </div>

          {/* Pavyzdys 3: SOP / instrukcija */}
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border-l-4 border-emerald-500">
            <p className="font-semibold text-sm text-emerald-900 dark:text-emerald-100 mb-2">⚙️ SOP / instrukcija</p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm font-mono text-gray-800 dark:text-gray-200 relative group/copy">
              <CopyButton
                text={`ADVANCED:\nTemperature: 0.1\nReasoning: Normal\n\nUžduotis:\nSukurk žingsnis po žingsnio instrukciją naujam darbuotojui, be interpretacijų.`}
                className="absolute top-2 right-2"
                size="sm"
              />
              <div className="pr-8 text-xs">
                <div className="mb-1">ADVANCED:</div>
                <div>Temperature: 0.1</div>
                <div className="mb-2">Reasoning: Normal</div>
                <div className="text-gray-500 dark:text-gray-400">Užduotis:</div>
                <div>Sukurk žingsnis po žingsnio instrukciją naujam darbuotojui, be interpretacijų.</div>
              </div>
            </div>
          </div>
        </div>
      </details>

      {/* Dažniausios klaidos – suskleičiama */}
      <details className="group bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500 overflow-hidden">
        <summary className="cursor-pointer list-none flex items-center justify-between p-5 hover:bg-red-100/50 dark:hover:bg-red-900/30 transition-colors select-none min-h-[44px]">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">⚠️</span>
            <h4 className="font-bold text-lg text-red-900 dark:text-red-100">Dažniausios klaidos</h4>
          </div>
          <span className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform text-sm shrink-0">▼</span>
        </summary>
        <div className="px-5 pb-5">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-red-500 mr-2 shrink-0">❌</span>
              <span>Aukšta temperature analizei → &ldquo;gražu, bet netikslu&rdquo;</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 shrink-0">❌</span>
              <span>Deep reasoning paprastoms užduotims → per lėta</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 shrink-0">❌</span>
              <span>Keiti parametrus, bet nekeiti užduoties formuluotės</span>
            </li>
          </ul>
        </div>
      </details>

      {/* Mini taisyklė – visada matoma, kompaktiška */}
      <div className="bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-500 p-4 rounded-xl flex flex-wrap items-center gap-4" role="article" aria-label="Įsimintina taisyklė">
        <span className="text-lg" aria-hidden="true">🧩</span>
        <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">Temperature → <span className="text-violet-600 dark:text-violet-400">KŪRYBA</span></span>
        <span className="text-gray-400 dark:text-gray-500" aria-hidden="true">|</span>
        <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">Reasoning → <span className="text-violet-600 dark:text-violet-400">MĄSTYMAS</span></span>
      </div>

      <TemplateBlock label="Kopijuojamas šablonas" template="ADVANCED: Temperature: [0.2–0.7]. Reasoning: [normal/extended]." />
      {onRenderTask()}
    </div>
  );
}

export interface AdvancedParameters2SlideProps {
  slide?: Slide;
  onRenderTask: () => JSX.Element | null;
}

export function AdvancedParameters2Slide({ slide, onRenderTask }: AdvancedParameters2SlideProps) {
  const intro = slide?.content && 'veiksmoIntro' in slide.content ? slide.content.veiksmoIntro : null;
  return (
    <div className="space-y-6">
      {intro && <VeiksmoIntroBlock content={intro} />}
      {/* Tikslas ir įspėjimas */}
      <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand-500 p-6 rounded-xl">
        <h3 className="font-bold text-xl mb-3 text-brand-900 dark:text-brand-100">
          ⚙️ Advanced Parameters (II) – atsakymo kontrolė
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          <strong>Tikslas:</strong> valdyti atsakymo ilgį, fokusą ir pasikartojimus be papildomo &ldquo;prompt triukšmo&rdquo;.
        </p>
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
          <p className="text-sm text-red-800 dark:text-red-200 font-semibold">
            ⚠️ Advanced parameters niekada neišgelbės blogai suformuluotos užduoties.
          </p>
          <p className="text-sm text-red-700 dark:text-red-300 mt-1">
            Pirma – aiški užduotis. Tik tada – parametrai.
          </p>
        </div>
      </div>

      {/* Max Tokens */}
      <details open className="bg-white dark:bg-gray-800 rounded-xl border-2 border-blue-200 dark:border-blue-800 group">
        <summary className="p-6 cursor-pointer list-none flex items-center justify-between select-none hover:bg-blue-50/50 dark:hover:bg-blue-900/10 rounded-xl transition-colors">
          <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100">
            🧮 Max Tokens – atsakymo ilgis (SAUGIAUSIAS parametras)
          </h4>
          <span className="text-gray-400 dark:text-gray-500 ml-2 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="px-6 pb-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          <strong>Valdo:</strong> kiek teksto DI gali sugeneruoti
        </p>
        
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-50 dark:bg-blue-900/20">
                <th className="p-3 text-left border-b border-blue-200 dark:border-blue-800">Reikšmė</th>
                <th className="p-3 text-left border-b border-blue-200 dark:border-blue-800">Kada naudoti</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-3 font-mono">50–100</td>
                <td className="p-3">Trumpi atsakymai, Q&A, santraukos</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                <td className="p-3 font-mono">150–300</td>
                <td className="p-3">El. laiškai, vidiniai dokumentai</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-3 font-mono">400–800</td>
                <td className="p-3">Analizės, ataskaitos</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                <td className="p-3 font-mono">1000+</td>
                <td className="p-3">Strategija, mokymai, ilgasis turinys</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500 mb-3">
          <p className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Verslo pavyzdys</p>
          <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm font-mono text-gray-800 dark:text-gray-200 relative group">
            <CopyButton
              text={`ADVANCED:
Max tokens: 150

Užduotis:
Atsakyk 3 punktais. Be pavyzdžių ir išplėtimų.`}
              className="absolute top-2 right-2"
              size="sm"
            />
            <div className="pr-8">
              <div className="mb-2">ADVANCED:</div>
              <div className="mb-3">Max tokens: 150</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Užduotis:</div>
              <div>Atsakyk 3 punktais. Be pavyzdžių ir išplėtimų.</div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border-l-4 border-red-500">
          <p className="text-sm text-red-800 dark:text-red-200">
            <span className="font-semibold">❌ Klaida:</span> Didinti Max Tokens vietoje to, kad paprašytum struktūros ar punktų.
          </p>
        </div>
        </div>
      </details>

      {/* Top-p */}
      <details className="bg-white dark:bg-gray-800 rounded-xl border-2 border-violet-200 dark:border-violet-800 group">
        <summary className="p-6 cursor-pointer list-none flex items-center justify-between select-none hover:bg-violet-50/50 dark:hover:bg-violet-900/10 rounded-xl transition-colors">
          <h4 className="font-bold text-lg text-violet-900 dark:text-violet-100 flex items-center gap-2">
            <Target className="w-5 h-5 text-violet-600 dark:text-violet-400" strokeWidth={1.5} />
            Top-p – atsakymo fokusas
          </h4>
          <span className="text-gray-400 dark:text-gray-500 ml-2 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="px-6 pb-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          <strong>Valdo:</strong> kiek skirtingų variantų DI svarsto prieš pateikdamas atsakymą
        </p>
        
        <div className="space-y-3 mb-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
            <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">0.3–0.5 → vienas kryptingas sprendimas</p>
          </div>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border-l-4 border-emerald-500">
            <p className="font-semibold text-emerald-900 dark:text-emerald-100 mb-1">0.6–0.8 → subalansuota</p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border-l-4 border-orange-500">
            <p className="font-semibold text-orange-900 dark:text-orange-100 mb-1">0.9–1.0 → daug alternatyvų (idėjų generavimas)</p>
          </div>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500 mb-3">
          <p className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Verslo pavyzdys</p>
          <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm font-mono text-gray-800 dark:text-gray-200 relative group">
            <CopyButton
              text={`ADVANCED:
Top-p: 0.4

Užduotis:
Pateik vieną geriausią sprendimą.
Nevardink alternatyvų.`}
              className="absolute top-2 right-2"
              size="sm"
            />
            <div className="pr-8">
              <div className="mb-2">ADVANCED:</div>
              <div className="mb-3">Top-p: 0.4</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Užduotis:</div>
              <div>Pateik vieną geriausią sprendimą.<br />Nevardink alternatyvų.</div>
            </div>
          </div>
        </div>

        <div className="bg-violet-50 dark:bg-violet-900/20 p-3 rounded-lg border-l-4 border-violet-500">
          <p className="text-sm text-violet-800 dark:text-violet-200">
            <span className="font-semibold">🧠 Taisyklė:</span> Aukšta Temperature + aukštas Top-p = mažas nuspėjamumas
          </p>
        </div>
        </div>
      </details>

      {/* Frequency Penalty */}
      <details className="bg-white dark:bg-gray-800 rounded-xl border-2 border-amber-200 dark:border-amber-800 group">
        <summary className="p-6 cursor-pointer list-none flex items-center justify-between select-none hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-xl transition-colors">
          <h4 className="font-bold text-lg text-amber-900 dark:text-amber-100">
            🔁 Frequency Penalty – pasikartojimų mažinimas
          </h4>
          <span className="text-gray-400 dark:text-gray-500 ml-2 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="px-6 pb-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          <strong>Valdo:</strong> žodžių ir frazių kartojimą tekste
        </p>
        
        <div className="space-y-3 mb-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">0.0 → leidžia kartotis</p>
          </div>
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-l-4 border-amber-500">
            <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">0.5 → subtili kontrolė</p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border-l-4 border-orange-500">
            <p className="font-semibold text-orange-900 dark:text-orange-100 mb-1">0.8 → griežta kontrolė</p>
          </div>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500 mb-3">
          <p className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Verslo pavyzdys</p>
          <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm font-mono text-gray-800 dark:text-gray-200 relative group">
            <CopyButton
              text={`ADVANCED:
Frequency penalty: 0.8

Užduotis:
Parašyk tekstą be pasikartojančių frazių ar klišių.`}
              className="absolute top-2 right-2"
              size="sm"
            />
            <div className="pr-8">
              <div className="mb-2">ADVANCED:</div>
              <div className="mb-3">Frequency penalty: 0.8</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Užduotis:</div>
              <div>Parašyk tekstą be pasikartojančių frazių ar klišių.</div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border-l-4 border-amber-500">
          <p className="text-sm text-amber-800 dark:text-amber-200 font-semibold mb-2">📌 Labai naudinga:</p>
          <ul className="text-sm text-amber-700 dark:text-amber-300 ml-4 list-disc space-y-1">
            <li>marketingui</li>
            <li>prezentacijoms</li>
            <li>ilgoms ataskaitoms</li>
          </ul>
        </div>
        </div>
      </details>

      {/* Presence Penalty */}
      <details className="bg-white dark:bg-gray-800 rounded-xl border-2 border-rose-200 dark:border-rose-800 group">
        <summary className="p-6 cursor-pointer list-none flex items-center justify-between select-none hover:bg-rose-50/50 dark:hover:bg-rose-900/10 rounded-xl transition-colors">
          <h4 className="font-bold text-lg text-rose-900 dark:text-rose-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-rose-600 dark:text-rose-400" strokeWidth={1.5} />
            Presence Penalty – naujų krypčių skatinimas
          </h4>
          <span className="text-gray-400 dark:text-gray-500 ml-2 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="px-6 pb-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          <strong>Valdo:</strong> ar DI laikosi temos, ar aktyviai ieško naujų idėjų
        </p>
        
        <div className="space-y-3 mb-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
            <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">0.0–0.3 → laikosi temos</p>
          </div>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border-l-4 border-emerald-500">
            <p className="font-semibold text-emerald-900 dark:text-emerald-100 mb-1">0.5 → švelnus išėjimas į naujus kampus</p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border-l-4 border-orange-500">
            <p className="font-semibold text-orange-900 dark:text-orange-100 mb-1">0.8–1.0 → radikaliai naujos kryptys</p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500 mb-3">
          <p className="text-sm text-red-800 dark:text-red-200 font-semibold mb-2">🚫 NENAUDOTI:</p>
          <ul className="text-sm text-red-700 dark:text-red-300 ml-4 list-disc space-y-1">
            <li>analizėse</li>
            <li>politikose</li>
            <li>teisiniuose tekstuose</li>
          </ul>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500 mb-3">
          <p className="text-sm text-emerald-800 dark:text-emerald-200 font-semibold mb-2">✅ TINKA:</p>
          <ul className="text-sm text-emerald-700 dark:text-emerald-300 ml-4 list-disc space-y-1">
            <li>brainstormingui</li>
            <li>inovacijoms</li>
            <li>strateginėms dirbtuvėms</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border-l-4 border-blue-500">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <span className="font-semibold">Verslo taisyklė:</span> Presence penalty analizėse laikyti ≤ 0.3
          </p>
        </div>
        </div>
      </details>

      {/* Safe default */}
      <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-6 rounded-xl">
        <h4 className="font-bold text-lg mb-3 text-emerald-900 dark:text-emerald-100">
          ✅ SAFE DEFAULT (80% verslo atvejų)
        </h4>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg relative group">
          <CopyButton
            text={`ADVANCED:
Max tokens: 300
Top-p: 0.7
Frequency penalty: 0.5
Presence penalty: 0.3`}
            className="absolute top-2 right-2"
            size="sm"
          />
          <div className="pr-8">
            <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">ADVANCED:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Max tokens: 300</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Top-p: 0.7</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Frequency penalty: 0.5</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Presence penalty: 0.3</p>
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
          <p className="font-semibold mb-2">📌 Stabilu, nuspėjama, saugu vidiniam naudojimui.</p>
        </div>
      </div>

      {/* Finalinė taisyklė */}
      <div className="bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-500 p-6 rounded-xl">
        <h4 className="font-bold text-lg mb-3 text-violet-900 dark:text-violet-100">
          🧠 Viena taisyklė įsiminti
        </h4>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg">
            Jei DI atsakymas blogas –<br />
            <span className="text-violet-600 dark:text-violet-400">90% atvejų kalta užduotis, ne parametrai.</span>
          </p>
        </div>
      </div>

      <TemplateBlock label="Kopijuojamas šablonas" template="ADVANCED: Max tokens: [150-300]. Top-p: [0.5-0.8]. Frequency penalty: [0.3-0.5]. Presence penalty: [0.0-0.3]." />
      {onRenderTask()}
    </div>
  );
}

export function FullExampleSlide({ onRenderTask }: { onRenderTask: () => JSX.Element | null }) {
  const blocks: FullExampleBlock[] = [
    { num: 1, name: 'META', color: 'rose', content: 'Tu esi vyresnysis verslo strategas su 12 metų B2B SaaS patirtimi. Tavo tikslas - parengti Q4 pardavimų strategijos prezentaciją valdybos nariams, kurie priims strateginius sprendimus 2025 metams.' },
    { num: 2, name: 'INPUT', color: 'orange', content: 'Q1-Q3 2024: 2.1M EUR (+22% vs 2023), 156 naujų klientų, vidutinis čekis 13.5k EUR. Konkurentai: Competitor A (+18%), Competitor B (+15%). Biudžetas Q4: 500k EUR.' },
    { num: 3, name: 'OUTPUT', color: 'amber', content: '10 skaidrių: Executive Summary, Dabartinė situacija, Konkurentų analizė, Q4 tikslai, Strategija, Veiksmų planas, Biudžetas, Rizikos, Metrikos, Išvados. Formatas: PowerPoint, lietuvių kalba, verslo tonas.' },
    { num: 4, name: 'REASONING', color: 'emerald', content: '1) Apibrėžti pagrindinę žinutę 2) Analizuoti duomenis 3) Įvertinti variantus 4) Palyginti su konkurentais 5) Nustatyti kompromisus 6) Rekomenduoti strategiją' },
    { num: 5, name: 'QUALITY', color: 'brand', content: '✓ Aiški žinutė ✓ Duomenimis pagrįsta ✓ Realistiškas ROI ✓ Veiksmų planas ✓ Rizikų analizė ✓ Išmatuojami tikslai' },
    { num: 6, name: 'ADVANCED', color: 'violet', content: 'Temperature: 0.4. Reasoning: Gilus. Max tokens: [150-300]. Top-p: [0.5-0.8]. Frequency penalty: [0.3-0.5]. Presence penalty: [0.0-0.3]. Kalba: LT. Formatas: Verslo dokumentas.' },
  ];

  return (
    <div className="space-y-6">
      {/* ── Intro: tamsus, kulminacinis ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 via-brand-900 to-emerald-900 dark:from-emerald-950 dark:via-brand-950 dark:to-emerald-950 p-5 sm:p-7 text-white">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <div className="absolute top-2 right-4 select-none" aria-hidden="true">
          <Target className="w-20 h-20 text-current" strokeWidth={1} />
        </div>
        </div>
        <div className="relative z-10 text-center max-w-lg mx-auto">
          <p className="text-xs sm:text-sm text-emerald-300/80 font-semibold uppercase tracking-wider mb-1">Visi 6 blokai kartu</p>
          <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight">Q4 Pardavimų Strategijos Prezentacija</h3>
          <p className="text-xs sm:text-sm text-brand-300/80 mt-2 font-medium">Realus verslo pavyzdys – nukopijuok, pritaikyk savo užduočiai.</p>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        {blocks.map((block) => {
          const colors = getColorClasses(block.color);
          return (
            <div key={block.num} className={`${colors.bg} ${colors.bgDark} p-4 rounded-xl border-l-4 ${colors.border}`}>
              <p className={`text-xs font-bold ${colors.text} ${colors.textDark} mb-1 uppercase tracking-wider`}>
                {block.num}. {block.name}
              </p>
              <p className="text-xs text-gray-700 dark:text-gray-300">{block.content}</p>
            </div>
          );
        })}
      </div>

      <TemplateBlock 
        label="📋 Lengvai kopijuojamas šablonas" 
        template={`META: Tu esi [vaidmuo su patirtimi]. Tavo tikslas - [rezultatas] [auditorijai], kurie [kontekstas].

INPUT: [Konkretūs duomenys, skaičiai, metrikos]. [Apribojimai, kontekstas, priešistorė].

OUTPUT: [Formatas ir struktūra]. [Kalba, tonas, stilius].

REASONING: 1) [Pirmas žingsnis] 2) [Antras žingsnis] 3) [Trečias žingsnis] 4) [Ketvirtas žingsnis] 5) [Penktas žingsnis] 6) [Šeštas žingsnis].

QUALITY: ✓ [Kriterijus 1] ✓ [Kriterijus 2] ✓ [Kriterijus 3] ✓ [Kriterijus 4] ✓ [Kriterijus 5].

ADVANCED: Temperature: [0.2-0.7]. Reasoning: [normal/extended]. Max tokens: [150-300]. Top-p: [0.5-0.8]. Frequency penalty: [0.3-0.5]. Presence penalty: [0.0-0.3]. Kalba: [LT/EN]. Formatas: [Verslo dokumentas/Prezentacija/Straipsnis].`}
      />

      {onRenderTask()}
    </div>
  );
}
