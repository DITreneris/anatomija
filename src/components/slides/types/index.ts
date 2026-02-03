import { lazy } from 'react';

// Lazy load all slide type components
// This enables code splitting - each slide type is loaded only when needed

// Only export components that actually exist
export const IntroSlide = lazy(() => import('./IntroSlide'));

// Note: Other slide components are imported directly in SlideContent.tsx
// This file is kept for potential future lazy loading optimization
