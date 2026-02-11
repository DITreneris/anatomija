import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import App from '../../App';
import { getProgress, resetProgress } from '../../utils/progress';
import { loadModules, getModulesDataSync, getModulesSync, preloadModules } from '../../data/modulesLoader';
import type { ModulesData } from '../../types/modules';

const fixtureEmptyQuiz: ModulesData = {
  modules: [],
  quiz: {
    title: 'Baigiamasis Testas',
    description: 'Galutinis žinių patikrinimas',
    passingScore: 70,
    questions: [],
  },
};

vi.mock('../../data/modulesLoader', () => ({
  loadModules: vi.fn(),
  getModulesDataSync: vi.fn(),
  getModulesSync: vi.fn(),
  preloadModules: vi.fn(),
}));

const matchMediaMock = (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
});

describe('App – Quiz integracinis srautas', () => {
  beforeEach(() => {
    vi.mocked(getModulesDataSync).mockReturnValue(fixtureEmptyQuiz);
    vi.mocked(loadModules).mockResolvedValue(fixtureEmptyQuiz);
    vi.mocked(getModulesSync).mockReturnValue([]);
    vi.mocked(preloadModules).mockImplementation(() => {});
    localStorage.clear();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(matchMediaMock),
    });
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    resetProgress();
    vi.restoreAllMocks();
  });

  it('naviguoja į Apklausą ir rodo empty-state kai quiz.questions tuščias', async () => {
    render(<HelmetProvider><App /></HelmetProvider>);

    const apklausaButton = screen.getByRole('button', { name: /Apklausa/i });
    await userEvent.click(apklausaButton);

    await waitFor(
      () => {
        expect(screen.getByText(/Apklausos klausimų šiuo metu nėra/)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    expect(screen.getByRole('button', { name: /Grįžti atgal/i })).toBeInTheDocument();
  });

  it('mygtukas „Grįžti atgal“ Apklausoje grąžina atgal', async () => {
    render(<HelmetProvider><App /></HelmetProvider>);

    await userEvent.click(screen.getByRole('button', { name: /Apklausa/i }));

    await waitFor(
      () => {
        expect(screen.getByText(/Apklausos klausimų šiuo metu nėra/)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    await userEvent.click(screen.getByRole('button', { name: /Grįžti atgal/i }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Apklausa/i })).toBeInTheDocument();
      expect(screen.queryByText(/Apklausos klausimų šiuo metu nėra/)).not.toBeInTheDocument();
    });
  });

  it('progress išlieka po navigacijos į Apklausą ir atgal', async () => {
    const progressWithModule = {
      ...getProgress(),
      completedModules: [1],
      completedTasks: { 1: [1] },
    };
    vi.mocked(getModulesDataSync).mockReturnValue(fixtureEmptyQuiz);
    localStorage.setItem(
      'prompt-anatomy-progress',
      JSON.stringify({
        version: 2,
        ...progressWithModule,
        quizCompleted: false,
        quizScore: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
    );

    render(<HelmetProvider><App /></HelmetProvider>);

    await userEvent.click(screen.getByRole('button', { name: /Apklausa/i }));

    await waitFor(
      () => {
        expect(screen.getByText(/Apklausos klausimų šiuo metu nėra/)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    await userEvent.click(screen.getByRole('button', { name: /Grįžti atgal/i }));

    const progressAfter = getProgress();
    expect(progressAfter.completedModules).toContain(1);
    expect(progressAfter.completedTasks[1]).toContain(1);
  });
});
