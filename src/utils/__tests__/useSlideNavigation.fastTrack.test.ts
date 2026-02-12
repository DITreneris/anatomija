import { describe, it, expect } from 'vitest';
import { getNextNonOptionalIndex } from '../useSlideNavigation';
import type { Slide } from '../../types/modules';

function slide(id: number, optional = false): Slide {
  return { id, title: `S${id}`, subtitle: '', type: 'content-block', optional };
}

describe('getNextNonOptionalIndex (A-S4 Fast track)', () => {
  it('returns fromIndex+1 when not skipping and next is not optional', () => {
    const slides = [slide(1), slide(2), slide(3)];
    expect(getNextNonOptionalIndex(slides, 0, true)).toBe(1);
    expect(getNextNonOptionalIndex(slides, 1, true)).toBe(2);
  });

  it('skips optional slides when going forward', () => {
    const slides = [slide(1), slide(2, true), slide(3, true), slide(4)];
    expect(getNextNonOptionalIndex(slides, 0, true)).toBe(3);
    expect(getNextNonOptionalIndex(slides, 1, true)).toBe(3);
  });

  it('returns last index when all remaining are optional', () => {
    const slides = [slide(1), slide(2, true), slide(3, true)];
    expect(getNextNonOptionalIndex(slides, 0, true)).toBe(2);
  });

  it('skips optional slides when going backward', () => {
    const slides = [slide(1), slide(2, true), slide(3, true), slide(4)];
    expect(getNextNonOptionalIndex(slides, 3, false)).toBe(0);
  });

  it('returns 0 when going back and all previous optional', () => {
    const slides = [slide(1, true), slide(2, true), slide(3)];
    expect(getNextNonOptionalIndex(slides, 2, false)).toBe(0);
  });
});
