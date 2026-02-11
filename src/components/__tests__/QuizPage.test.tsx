import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuizPage from '../QuizPage';
import { getModulesDataSync } from '../../data/modulesLoader';
import type { ModulesData } from '../../types/modules';

vi.mock('../../data/modulesLoader', () => ({
  getModulesDataSync: vi.fn(),
}));

const defaultProgress = {
  completedModules: [],
  completedTasks: {},
  quizCompleted: false,
  quizScore: null,
};

describe('QuizPage', () => {
  const onBack = vi.fn();
  const onQuizComplete = vi.fn();

  beforeEach(() => {
    vi.mocked(getModulesDataSync).mockReturnValue(null);
    onBack.mockClear();
    onQuizComplete.mockClear();
  });

  it('shows loading when modules data is not loaded', () => {
    vi.mocked(getModulesDataSync).mockReturnValue(null);
    render(
      <QuizPage
        onBack={onBack}
        progress={defaultProgress}
        onQuizComplete={onQuizComplete}
      />
    );
    expect(screen.getByText(/Kraunama/)).toBeInTheDocument();
    expect(onQuizComplete).not.toHaveBeenCalled();
  });

  it('shows empty-state message and back button when quiz.questions is empty', async () => {
    const dataWithEmptyQuiz: ModulesData = {
      modules: [],
      quiz: {
        title: 'Baigiamasis Testas',
        description: 'Galutinis žinių patikrinimas',
        passingScore: 70,
        questions: [],
      },
    };
    vi.mocked(getModulesDataSync).mockReturnValue(dataWithEmptyQuiz);

    render(
      <QuizPage
        onBack={onBack}
        progress={defaultProgress}
        onQuizComplete={onQuizComplete}
      />
    );

    expect(screen.getByText(/Apklausos klausimų šiuo metu nėra/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Grįžti atgal/i })).toBeInTheDocument();
    expect(onQuizComplete).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole('button', { name: /Grįžti atgal/i }));
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it('calls onQuizComplete with a valid number (not NaN) when submitting with one question', async () => {
    const dataWithOneQuestion: ModulesData = {
      modules: [],
      quiz: {
        title: 'Testas',
        description: '',
        passingScore: 70,
        questions: [
          {
            id: 1,
            question: 'Test question?',
            options: ['A', 'B', 'C'],
            correct: 0,
            explanation: 'Because A',
          },
        ],
      },
    };
    vi.mocked(getModulesDataSync).mockReturnValue(dataWithOneQuestion);

    render(
      <QuizPage
        onBack={onBack}
        progress={defaultProgress}
        onQuizComplete={onQuizComplete}
      />
    );

    expect(screen.getByText(/Test question/)).toBeInTheDocument();
    const optionButtons = screen.getAllByRole('button', { name: /Pasirinkti atsakymą:/ });
    await act(async () => {
      await userEvent.click(optionButtons[0]);
    });
    const submitButton = screen.getByRole('button', { name: /Baigti apklausą/i });
    await act(async () => {
      await userEvent.click(submitButton);
    });

    expect(onQuizComplete).toHaveBeenCalledTimes(1);
    const score = onQuizComplete.mock.calls[0][0];
    expect(Number.isFinite(score)).toBe(true);
    expect(score).toBeGreaterThanOrEqual(0);
    expect(score).toBeLessThanOrEqual(100);
  });
});
