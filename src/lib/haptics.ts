/**
 * Lightweight haptic feedback helpers.
 *
 * Uses the Web Vibration API (Android Chrome/Firefox). iOS Safari and
 * desktop browsers do not implement `navigator.vibrate`. Callers can read
 * the boolean return to fall back to a visual tick where vibration was
 * not delivered. Respects prefers-reduced-motion.
 */

type HapticIntensity = "tick" | "soft" | "medium";

const DURATIONS: Record<HapticIntensity, number> = {
  tick: 6,    // single-card snap
  soft: 10,   // edge bump / boundary hit
  medium: 18, // strong action (rarely used)
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

/**
 * Trigger a haptic tick.
 * Returns `true` if the underlying `navigator.vibrate` call accepted the
 * request, `false` otherwise (no API support, server, or reduced motion).
 */
export function haptic(intensity: HapticIntensity = "tick"): boolean {
  if (typeof navigator === "undefined") return false;
  if (typeof navigator.vibrate !== "function") return false;
  if (prefersReducedMotion()) return false;
  return navigator.vibrate(DURATIONS[intensity]);
}
