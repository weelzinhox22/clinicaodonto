type ErrorContext = Record<string, unknown>;

export function reportLovableError(error: unknown, context: ErrorContext = {}) {
  if (typeof window === "undefined") return;
  console.error("[SorrisoVivo] Unhandled error", {
    error,
    route: window.location.pathname,
    ...context,
  });
}

