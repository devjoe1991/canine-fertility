/**
 * Lightweight haptic feedback helpers.
 *
 * Uses the Web Vibration API (mobile only — desktop browsers no-op).
 * Each tick is intentionally short so rapid snaps feel like a click track
 * rather than a buzz. Respects prefers-reduced-motion.
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

export function haptic(intensity: HapticIntensity = "tick"): void {
  if (typeof navigator === "undefined") return;
  if (typeof navigator.vibrate !== "function") return;
  if (prefersReducedMotion()) return;
  navigator.vibrate(DURATIONS[intensity]);
}
