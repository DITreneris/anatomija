/**
 * MVP mode: when VITE_MVP_MODE=1, only modules 1–3 are available.
 * Used for release to testers before full 6-module rollout.
 */
export const getIsMvpMode = (): boolean =>
  import.meta.env.VITE_MVP_MODE === '1';
