/**
 * A-S2: axe-core smoke – 1–2 pagrindiniai puslapiai/komponentai.
 * Tikrina, kad nėra kritinių a11y pažeidimų (serious/critical).
 */
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import axe from 'axe-core';
import HomePage from '../HomePage';
import type { Progress } from '../../utils/progress';

vi.mock('../../data/modulesLoader', () => ({
  getModulesSync: vi.fn(() => []),
}));
vi.mock('../../utils/mvpMode', () => ({ getIsMvpMode: vi.fn(() => false) }));

interface AxeResults {
  violations: Array<{ id: string; impact?: string; description: string }>;
}

function runAxe(container: HTMLElement): Promise<AxeResults> {
  return new Promise((resolve, reject) => {
    axe.run(container, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] } }, (err, results) => {
      if (err) reject(err);
      else resolve(results as AxeResults);
    });
  });
}

const defaultProgress: Progress = {
  completedModules: [],
  completedTasks: {},
  quizCompleted: false,
  quizScore: null,
};

describe('A11y smoke (axe-core)', () => {
  it('HomePage has no serious/critical axe violations', async () => {
    const { container } = render(
      <HomePage onStart={() => {}} progress={defaultProgress} />
    );
    const results = await runAxe(container);
    const serious = results.violations.filter(
      (v) => v.impact === 'serious' || v.impact === 'critical'
    );
    expect(serious).toHaveLength(0);
  });
});
