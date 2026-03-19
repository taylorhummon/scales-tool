import { test, expect } from 'vitest';

import {
  quotientAndRemainderFor,
  remainderFor,
  cosineOfDegrees,
  sineOfDegrees
} from "src/utilities/math";


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

test("cosineOfDegrees() should work for common degree values", () => {
  expect(
    cosineOfDegrees(0)
  ).toBeCloseTo(
    1
  );
  expect(
    cosineOfDegrees(90)
  ).toBeCloseTo(
    0
  );
  expect(
    cosineOfDegrees(180)
  ).toBeCloseTo(
    -1
  );
  expect(
    cosineOfDegrees(-90)
  ).toBeCloseTo(
    0
  );
});

test("sineOfDegrees() should work for common degree values", () => {
  expect(
    sineOfDegrees(0)
  ).toBeCloseTo(
    0
  );
  expect(
    sineOfDegrees(90)
  ).toBeCloseTo(
    1
  );
  expect(
    sineOfDegrees(180)
  ).toBeCloseTo(
    0
  );
  expect(
    sineOfDegrees(-90)
  ).toBeCloseTo(
    -1
  );
});
