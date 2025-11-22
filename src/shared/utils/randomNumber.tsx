/**
 * Returns a random integer between `min` and `max` (both inclusive).
 * Uses `Math.random()` with proper rounding to ensure uniform distribution.
 */
export function randomIntBetween(min: number, max: number): number {
  const mn = Math.ceil(min);
  const mx = Math.floor(max);
  if (mx < mn) {
    throw new Error("randomIntBetween: `max` must be >= `min`");
  }
  return Math.floor(Math.random() * (mx - mn + 1)) + mn;
}

/**
 * Convenience helper that returns a random integer between 0 and 4.
 */
export function random0to4(): number {
  return randomIntBetween(0, 4);
}

export default random0to4;
