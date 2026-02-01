import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { Progress } from '../utils/progress';
import modulesData from '../data/modules.json';
import SlideContent from './SlideContent';

interface ModuleViewProps {
  moduleId: number;
  onBack: () => void;
  onComplete: (moduleId: number) => void;
  onTaskComplete: (moduleId: number, taskId: number) => void;
  progress: Progress;
}

export default function ModuleView({
  moduleId,
  onBack,
  onComplete,
  onTaskComplete,
  progress,
}: ModuleViewProps) {
  const module = modulesData.modules.find((m) => m.id === moduleId);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!module) return null;

  const nextSlide = useCallback(() => {
    if (currentSlide < module.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      // Scroll to top when changing slides
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Module completed
      if (!progress.completedModules.includes(moduleId)) {
        onComplete(moduleId);
      }
    }
  }, [currentSlide, module.slides.length, progress.completedModules, moduleId, onComplete]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      // Scroll to top when changing slides
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't handle if user is typing in input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onBack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, onBack]);

  const handleTaskComplete = (taskId: number) => {
    if (!progress.completedTasks[moduleId]?.includes(taskId)) {
      onTaskComplete(moduleId, taskId);
    }
  };

  const currentSlideData = module.slides[currentSlide];
  const isLastSlide = currentSlide === module.slides.length - 1;
  const isFirstSlide = currentSlide === 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            aria-label="Grįžti į modulių sąrašą"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Atgal į modulius</span>
          </button>
          <div className="text-right">
            <p className="text-xs text-gray-500">Skaidrė</p>
            <p className="text-lg font-bold text-blue-600">
              {currentSlide + 1}/{module.slides.length}
            </p>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-500 ease-out relative"
            style={{ width: `${((currentSlide + 1) / module.slides.length) * 100}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Naudokite <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">←</kbd> <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">→</kbd> klavišus navigacijai
        </p>
      </div>

      {/* Slide Content */}
      <div className="bg-white rounded-lg shadow-md p-6 md:p-10 min-h-[500px] animate-fadeIn">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            {currentSlideData.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">{currentSlideData.subtitle}</p>
        </div>

        <SlideContent
          slide={currentSlideData}
          moduleId={moduleId}
          onTaskComplete={handleTaskComplete}
          progress={progress}
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center gap-4">
        <button
          onClick={prevSlide}
          disabled={isFirstSlide}
          className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 active:scale-95"
          aria-label="Ankstesnė skaidrė"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Atgal</span>
        </button>

        <div className="flex gap-1 md:gap-2 flex-wrap justify-center max-w-md">
          {module.slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentSlide(idx);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                idx === currentSlide
                  ? 'bg-blue-500 w-6 md:w-8 shadow-md'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Eiti į skaidrę ${idx + 1}`}
              aria-current={idx === currentSlide ? 'true' : 'false'}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={isLastSlide}
          className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
          aria-label={isLastSlide ? 'Modulis baigtas' : 'Kita skaidrė'}
        >
          <span className="hidden sm:inline">
            {isLastSlide ? 'Baigta' : 'Pirmyn'}
          </span>
          {!isLastSlide && <ChevronRight className="w-5 h-5" />}
          {isLastSlide && <CheckCircle className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
