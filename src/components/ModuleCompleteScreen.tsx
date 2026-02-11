import { CheckCircle, ArrowLeft, ArrowRight, Trophy } from 'lucide-react';
import CircularProgress from './CircularProgress';
import type { Module } from '../types/modules';
import type { Progress } from '../utils/progress';

export interface ModuleCompleteScreenProps {
  module: Module;
  moduleIndex: number;
  totalModules: number;
  modules: Module[];
  progress: Progress;
  onBack: () => void;
  onContinueToNext: (moduleId: number) => void;
  isLastModule: boolean;
}

export function ModuleCompleteScreen({
  module,
  moduleIndex,
  totalModules,
  modules,
  progress,
  onBack,
  onContinueToNext,
  isLastModule,
}: ModuleCompleteScreenProps) {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="card p-8 md:p-12 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 shadow-lg shadow-accent-500/30 animate-bounce-in">
            <Trophy className="w-12 h-12 text-white" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Modulis baigtas! 🎉
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          {module.title}
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <div className="badge-brand">
            Modulis {moduleIndex + 1} / {totalModules}
          </div>
          <div className="badge-success">
            <CheckCircle className="w-4 h-4 mr-1" />
            Užbaigta
          </div>
        </div>

        <div className="mb-8">
          <CircularProgress
            progress={
              totalModules > 0
                ? (progress.completedModules.length / totalModules) * 100
                : 0
            }
            size={100}
            strokeWidth={10}
            label="Bendra pažanga"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBack}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Grįžti į modulius
          </button>

          <button
            onClick={() => onContinueToNext(module.id)}
            className="btn-primary flex items-center justify-center gap-2"
          >
            {isLastModule ? (
              <>
                Pradėti apklausą
                <ArrowRight className="w-5 h-5" />
              </>
            ) : (
              <>
                Tęsti į kitą modulį
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {!isLastModule && modules[moduleIndex + 1] && (
          <div className="mt-8 p-4 bg-brand-50 dark:bg-brand-900/20 rounded-xl border border-brand-200 dark:border-brand-800">
            <p className="text-sm text-brand-700 dark:text-brand-300 font-medium">
              Kitas: {modules[moduleIndex + 1].title}
            </p>
            <p className="text-xs text-brand-600 dark:text-brand-400 mt-1">
              {modules[moduleIndex + 1].subtitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
