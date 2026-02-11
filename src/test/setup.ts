// Ensure process.on exists before any imports (avoids "Cannot read properties of undefined (reading 'on')" in jsdom/vitest).
// Do not read `process` here – it may be undefined in some runners.
const processStub = { on: function () { return processStub; }, env: {} as NodeJS.ProcessEnv };
(function () {
  if (typeof globalThis !== 'undefined') (globalThis as Record<string, unknown>).process = processStub;
  if (typeof global !== 'undefined') (global as Record<string, unknown>).process = processStub;
})();

import '@testing-library/jest-dom';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// So Vitest workers use the same process stub
vi.stubGlobal('process', processStub);

// Ensure localStorage is available (jsdom should provide it, but ensure it exists)
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    get length() {
      return Object.keys(store).length;
    },
    key: (index: number) => {
      const keys = Object.keys(store);
      return keys[index] || null;
    },
  };
})();

// Use vi.stubGlobal to set up localStorage as a global
vi.stubGlobal('localStorage', localStorageMock);

// Also set up on window and global for compatibility
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
    configurable: true,
  });
}

// Define global type for test environment
declare global {
  // eslint-disable-next-line no-var
  var global: typeof globalThis;
}

if (typeof global !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).localStorage = localStorageMock;
}

// Cleanup after each test
afterEach(() => {
  cleanup();
  // Clear localStorage after each test
  if (typeof localStorage !== 'undefined') {
    localStorage.clear();
  }
});

// Mock window.matchMedia (used by some components)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver (used by some components)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;

// Note: jsdom environment should provide document and window automatically via vitest
// If document is still undefined, there might be a configuration issue
