export type WheelDirection = "next" | "prev" | null;

export function getWheelDirection(
  deltaX: number,
  deltaY: number,
  threshold = 20,
): WheelDirection {
  const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY);
  const delta = isHorizontal ? deltaX : deltaY;
  if (Math.abs(delta) <= threshold) return null;
  return delta > 0 ? "next" : "prev";
}

export function shouldThrottleWheel(
  nowMs: number,
  lastWheelMs: number,
  cooldownMs = 400,
): boolean {
  return nowMs - lastWheelMs < cooldownMs;
}
