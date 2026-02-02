/**
 * Logger utility for error tracking
 * Currently uses console, but prepared for Sentry integration
 */

interface LogContext {
  [key: string]: unknown;
}

/**
 * Log error with context
 */
export function logError(error: Error, context?: LogContext): void {
  const errorInfo = {
    message: error.message,
    stack: error.stack,
    context: context || {},
    timestamp: new Date().toISOString(),
  };

  console.error('[Error]', errorInfo);

  // TODO: Integrate Sentry here
  // if (window.Sentry) {
  //   window.Sentry.captureException(error, { extra: context });
  // }
}

/**
 * Log warning with context
 */
export function logWarning(message: string, context?: LogContext): void {
  const warningInfo = {
    message,
    context: context || {},
    timestamp: new Date().toISOString(),
  };

  console.warn('[Warning]', warningInfo);
}

/**
 * Log info with context
 */
export function logInfo(message: string, context?: LogContext): void {
  const info = {
    message,
    context: context || {},
    timestamp: new Date().toISOString(),
  };

  if (import.meta.env.DEV) {
    console.info('[Info]', info);
  }
}

/**
 * Initialize error tracking (for future Sentry integration)
 */
export function initErrorTracking(): void {
  // TODO: Initialize Sentry
  // if (import.meta.env.PROD) {
  //   Sentry.init({
  //     dsn: import.meta.env.VITE_SENTRY_DSN,
  //     environment: import.meta.env.MODE,
  //   });
  // }
  logInfo('Error tracking initialized');
}
