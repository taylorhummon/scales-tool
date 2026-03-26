import { cosineOfDegrees, sineOfDegrees } from "src/utilities/math"


const CLOCK_RADIUS = 120;

export function xOnClockAt(
  hour: number,
  radius: number = CLOCK_RADIUS
): number {
  return radius * cosineOfDegrees(hour * 30 - 90);
}

export function yOnClockAt(
  hour: number,
  radius: number = CLOCK_RADIUS
): number {
  return radius * sineOfDegrees(hour * 30 - 90);
}
