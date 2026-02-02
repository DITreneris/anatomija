import { CheckCircle } from 'lucide-react';

export default function IntroSlide() {
  return (
    <div className="space-y-6">
      <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand-500 p-6 rounded-xl">
        <h3 className="font-bold text-xl mb-3 text-brand-900 dark:text-brand-100">
          Apie šį mokymą
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Šis mokymas padės jums kurti efektyvius promptus, kurie duoda nuoseklius,
          profesionalius rezultatus. Išmoksite hierarchinę struktūrą, kuri paverčia
          chaotišką DI komunikaciją sistemingu ir valdomu procesu.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-xl">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3">
            Po šio mokymo galėsite:
          </h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            {['Struktūruoti promptus profesionaliai', 'Gauti nuspėjamus rezultatus', 'Taupyti laiką ir išteklius'].map((item, idx) => (
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

      <div className="mt-6 p-5 bg-accent-50 dark:bg-accent-900/20 rounded-xl border-l-4 border-accent-500">
        <p className="text-sm text-accent-900 dark:text-accent-100 leading-relaxed">
          <strong className="block mb-2">💡 Praktinė užduotis:</strong>
          Pagalvokite apie vieną verslo užduotį, kurią norėtumėte automatizuoti ar pagerinti naudojant DI.
          Šį pavyzdį naudosime viso mokymo metu.
        </p>
      </div>
    </div>
  );
}
