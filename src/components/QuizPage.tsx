import { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { Progress } from '../utils/progress';
import modulesData from '../data/modules.json';

interface QuizPageProps {
  onBack: () => void;
  progress: Progress;
  onQuizComplete: (score: number) => void;
}

export default function QuizPage({
  onBack,
  progress,
  onQuizComplete,
}: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = modulesData.quiz.questions;

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) {
        correct++;
      }
    });
    const finalScore = Math.round((correct / questions.length) * 100);
    setScore(finalScore);
    setShowResults(true);
    onQuizComplete(finalScore);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  if (showResults) {
    return (
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-6">
            {score >= 70 ? (
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            ) : (
              <XCircle className="w-20 h-20 text-orange-500 mx-auto mb-4" />
            )}
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Apklausa baigta!
            </h2>
            <p className="text-4xl font-bold text-blue-600 mb-4">{score}%</p>
            <p className="text-gray-600">
              Teisingai atsakyta: {questions.filter((q) => selectedAnswers[q.id] === q.correct).length} iš {questions.length}
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {questions.map((q) => {
              const isCorrect = selectedAnswers[q.id] === q.correct;
              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-lg border-2 ${
                    isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-2">{q.question}</p>
                      <div className="space-y-1">
                        {q.options.map((option, idx) => (
                          <div
                            key={idx}
                            className={`text-sm p-2 rounded ${
                              idx === q.correct
                                ? 'bg-green-200 font-semibold'
                                : idx === selectedAnswers[q.id] && idx !== q.correct
                                ? 'bg-red-200'
                                : 'bg-gray-100'
                            }`}
                          >
                            {option}
                            {idx === q.correct && ' ✓'}
                            {idx === selectedAnswers[q.id] && idx !== q.correct && ' ✗'}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Pradėti iš naujo
            </button>
            <button
              onClick={onBack}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Grįžti
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const hasAnswer = selectedAnswers[currentQ.id] !== undefined;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Atgal</span>
        </button>
        <div className="text-right">
          <p className="text-sm text-gray-500">Klausimas</p>
          <p className="text-lg font-bold text-blue-600">
            {currentQuestion + 1}/{questions.length}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-500 ease-out relative"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">
            {currentQ.question}
          </h2>
        </div>

        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedAnswers[currentQ.id] === idx;
            return (
              <button
                key={idx}
                onClick={() => handleAnswerSelect(currentQ.id, idx)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50 shadow-md scale-105'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 bg-white hover:scale-102'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                aria-label={`Pasirinkti atsakymą: ${option}`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-500 scale-110'
                        : 'border-gray-300'
                    }`}
                  >
                    {isSelected && (
                      <div className="w-3 h-3 rounded-full bg-white animate-bounceIn" />
                    )}
                  </div>
                  <span className="text-gray-800 font-medium">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 active:scale-95"
            aria-label="Ankstesnis klausimas"
          >
            Atgal
          </button>
          {isLastQuestion ? (
            <button
              onClick={handleSubmit}
              disabled={!hasAnswer}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
              aria-label="Baigti apklausą"
            >
              Baigti apklausą
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              disabled={!hasAnswer}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
              aria-label="Kitas klausimas"
            >
              Kitas klausimas
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
