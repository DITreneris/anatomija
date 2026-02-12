import { describe, it, expect } from 'vitest';
import { detectBlocks, isBlockFilled, SIX_BLOCKS, BLOCK_EXAMPLES } from '../sixBlockStructure';

describe('sixBlockStructure', () => {
  it('returns all missing when text is empty', () => {
    const { present, missing } = detectBlocks('');
    expect(present).toEqual([]);
    expect(missing).toEqual([...SIX_BLOCKS]);
  });

  it('returns all missing when text is null/undefined', () => {
    expect(detectBlocks(null).present).toEqual([]);
    expect(detectBlocks(undefined).missing).toEqual([...SIX_BLOCKS]);
  });

  it('detects META when line starts with META:', () => {
    const text = 'META: Jūs esate strategas.';
    const { present, missing } = detectBlocks(text);
    expect(present).toContain('META');
    expect(missing).not.toContain('META');
  });

  it('detects INPUT when line starts with INPUT:', () => {
    const text = 'META: Rolė.\nINPUT: Duomenys.';
    const { present } = detectBlocks(text);
    expect(present).toContain('META');
    expect(present).toContain('INPUT');
  });

  it('does not count keyword in middle of sentence', () => {
    const text = 'Šiame tekste yra žodis META bet ne sekcija.';
    const { present } = detectBlocks(text);
    expect(present).not.toContain('META');
  });

  it('detects case-insensitive block headers', () => {
    const text = 'meta: Rolė.\ninput: Duomenys.';
    const { present } = detectBlocks(text);
    expect(present).toContain('META');
    expect(present).toContain('INPUT');
  });

  it('isBlockFilled returns true when block is present', () => {
    expect(isBlockFilled('META', 'META: Rolė.')).toBe(true);
    expect(isBlockFilled('OUTPUT', 'OUTPUT: Lentelė.')).toBe(true);
  });

  it('isBlockFilled returns false when block is only in middle of text', () => {
    expect(isBlockFilled('META', 'Tekstas su META žodžiu.')).toBe(false);
  });

  it('BLOCK_EXAMPLES has one sentence per block', () => {
    for (const block of SIX_BLOCKS) {
      expect(BLOCK_EXAMPLES[block]).toBeDefined();
      expect(BLOCK_EXAMPLES[block].length).toBeGreaterThan(5);
      expect(BLOCK_EXAMPLES[block]).toMatch(new RegExp(`^${block}:`));
    }
  });
});
