export function quotientAndRemainderFor(
  numerator: number,
  denominator: number
): { quotient: number, remainder: number } {
  const remainder = remainderFor(numerator, denominator);
  const quotient = ensureZeroIsPositive((numerator - remainder) / denominator);
  return { quotient, remainder };
}

export function remainderFor(
  numerator: number,
  denominator: number
): number {
  if (denominator <= 0) throw Error("remainder() expects a positive denominator");
  const possiblyNegative = ensureZeroIsPositive(numerator % denominator);
  if (possiblyNegative < 0) {
    return possiblyNegative + denominator;
  } else {
    return possiblyNegative;
  }
}

function ensureZeroIsPositive(
  n: number
): number {
  // Note: -0 === 0, and that's OK
  return n === 0 ? 0 : n;
}

export function cosineOfDegrees(
  degrees: number
): number {
  return Math.cos(degrees * 2 * Math.PI / 360)
}

export function sineOfDegrees(
  degrees: number
): number {
  return Math.sin(degrees * 2 * Math.PI / 360)
}
