export const UNIT_CIRCLE_XS = [
  0,
  0.5,
  Math.sqrt(3) / 2,
  1,
  Math.sqrt(3) / 2,
  0.5,
  0,
  -0.5,
  - Math.sqrt(3) / 2,
  -1,
  - Math.sqrt(3) / 2,
  -0.5
];
export const UNIT_CIRCLE_YS = [
  -1,
  - Math.sqrt(3) / 2,
  -0.5,
  0,
  0.5,
  Math.sqrt(3) / 2,
  1,
  Math.sqrt(3) / 2,
  0.5,
  0,
  -0.5,
  - Math.sqrt(3) / 2
];


/*
Note: These remainder functions only make sense where the floating point representation of integers
are dense enough to have consecutive integers. That is, up until
Number.MAX_SAFE_INTEGER = 9,007,199,254,740,991.
*/

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

export function ensureZeroIsPositive(
  n: number
): number {
  // Note: -0 === 0, and that's OK
  return n === 0 ? 0 : n;
}

export function isBetweenInclusive(
  n: number,
  lower: number,
  upper: number
): boolean {
  return n >= lower && n <= upper;
}
