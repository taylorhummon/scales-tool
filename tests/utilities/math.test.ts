import { test, expect } from "vitest";

import {
  quotientAndRemainderFor,
  remainderFor,
  ensureZeroIsPositive,
  isBetweenInclusive,
} from "@/utilities/math";


test("quotientAndRemainderFor() works when the denominator is positive", () => {
  expect(
    quotientAndRemainderFor(14, 6)
  ).toStrictEqual(
    { quotient: 2, remainder: 2 }
  );
  expect(
    quotientAndRemainderFor(4, 6)
  ).toStrictEqual(
    { quotient: 0, remainder: 4 }
  );
  expect(
    quotientAndRemainderFor(0, 6)
  ).toStrictEqual(
    { quotient: 0, remainder: 0 }
  );
  expect(
    quotientAndRemainderFor(-0, 6)
  ).toStrictEqual(
    { quotient: 0, remainder: 0 }
  );
  expect(
    quotientAndRemainderFor(-6, 6)
  ).toStrictEqual(
    { quotient: -1, remainder: 0 }
  );
  expect(
    quotientAndRemainderFor(-14, 6)
  ).toStrictEqual(
    { quotient: -3, remainder: 4 }
  );
});

test("remainderFor() works when the denominator is positive", () => {
  expect(
    remainderFor(14, 6)
  ).toBe(
    2
  );
  expect(
    remainderFor(4, 6)
  ).toBe(
    4
  );
  expect(
    remainderFor(0, 6)
  ).toBe(
    0
  );
  expect(
    remainderFor(-0, 6)
  ).toBe(
    0
  );
  expect(
    remainderFor(-6, 6)
  ).toBe(
    0
  );
  expect(
    remainderFor(-14, 6)
  ).toBe(
    4
  );
});

test("remainderFor() throws when the denominator is zero or negative", () => {
  expect(() => {
    remainderFor(14, 0);
  }).toThrow();
  expect(() => {
    remainderFor(14, -3);
  }).toThrow();
});

test("ensureZeroIsPositive() works", () => {
  expect(
    ensureZeroIsPositive(0)
  ).toBe(
    0
  );
  expect(
    ensureZeroIsPositive(-0)
  ).toBe(
    0
  );
  expect(
    ensureZeroIsPositive(3)
  ).toBe(
    3
  );
  expect(
    ensureZeroIsPositive(-7)
  ).toBe(
    -7
  );
});

test("isBetweenInclusive() works", () => {
  expect(
    isBetweenInclusive(5, 3, 10)
  ).toBe(
    true
  );
  expect(
    isBetweenInclusive(5, 5, 10)
  ).toBe(
    true
  );
  expect(
    isBetweenInclusive(5, 1, 5)
  ).toBe(
    true
  );
  expect(
    isBetweenInclusive(6, 7, 10)
  ).toBe(
    false
  );
  expect(
    isBetweenInclusive(11, 7, 10)
  ).toBe(
    false
  );
  expect(
    isBetweenInclusive(-4, 1, 10)
  ).toBe(
    false
  );
});
