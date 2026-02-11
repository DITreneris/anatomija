import { describe, it, expect, beforeEach, vi } from 'vitest';
import { loadModules, getModule, getModulesSync, __clearCacheForTesting } from '../../data/modulesLoader';

vi.mock('../../utils/mvpMode', () => ({
  getIsMvpMode: vi.fn(() => true),
}));

const { getIsMvpMode } = await import('../../utils/mvpMode');

describe('MVP mode', () => {
  beforeEach(() => {
    vi.mocked(getIsMvpMode).mockReturnValue(true);
    __clearCacheForTesting();
    localStorage.clear();
  });

  it('loadModules returns only modules 1–3 when MVP', async () => {
    const data = await loadModules();
    expect(data.modules.length).toBe(3);
    expect(data.modules.every((m) => m.id <= 3)).toBe(true);
    expect(data.modules.map((m) => m.id)).toEqual([1, 2, 3]);
  });

  it('getModule(4) returns null when MVP', async () => {
    await loadModules();
    const mod = await getModule(4);
    expect(mod).toBeNull();
  });

  it('getModule(1) returns module when MVP', async () => {
    const mod = await getModule(1);
    expect(mod).not.toBeNull();
    expect(mod?.id).toBe(1);
  });

  it('getModulesSync returns only modules 1–3 when MVP', async () => {
    await loadModules();
    const modules = getModulesSync();
    expect(modules?.length).toBe(3);
    expect(modules?.find((m) => m.id === 4)).toBeUndefined();
  });
});
