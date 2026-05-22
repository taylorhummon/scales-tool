import { test, expect } from "vitest"

import {
  getQuotientAndRemainder,
  getRemainder,
  ensureZeroIsPositive,
  isBetweenInclusive,
} from "@scalesTool/utilities/math"


test("getQuotientAndRemainder() works when the denominator is positive", () => {
  expect(
    getQuotientAndRemainder(14, 6)
  ).toStrictEqual(
    { quotient: 2, remainder: 2 }
  )
  expect(
    getQuotientAndRemainder(4, 6)
  ).toStrictEqual(
    { quotient: 0, remainder: 4 }
  )
  expect(
    getQuotientAndRemainder(0, 6)
  ).toStrictEqual(
    { quotient: 0, remainder: 0 }
  )
  expect(
    getQuotientAndRemainder(-0, 6)
  ).toStrictEqual(
    { quotient: 0, remainder: 0 }
  )
  expect(
    getQuotientAndRemainder(-6, 6)
  ).toStrictEqual(
    { quotient: -1, remainder: 0 }
  )
  expect(
    getQuotientAndRemainder(-14, 6)
  ).toStrictEqual(
    { quotient: -3, remainder: 4 }
  )
})

test("getRemainder() works when the denominator is positive", () => {
  expect(
    getRemainder(14, 6)
  ).toBe(
    2
  )
  expect(
    getRemainder(4, 6)
  ).toBe(
    4
  )
  expect(
    getRemainder(0, 6)
  ).toBe(
    0
  )
  expect(
    getRemainder(-0, 6)
  ).toBe(
    0
  )
  expect(
    getRemainder(-6, 6)
  ).toBe(
    0
  )
  expect(
    getRemainder(-14, 6)
  ).toBe(
    4
  )
})

test("getRemainder() throws when the denominator is zero or negative", () => {
  expect(() => {
    getRemainder(14, 0)
  }).toThrow()
  expect(() => {
    getRemainder(14, -3)
  }).toThrow()
})

test("ensureZeroIsPositive() works", () => {
  expect(
    ensureZeroIsPositive(0)
  ).toBe(
    0
  )
  expect(
    ensureZeroIsPositive(-0)
  ).toBe(
    0
  )
  expect(
    ensureZeroIsPositive(3)
  ).toBe(
    3
  )
  expect(
    ensureZeroIsPositive(-7)
  ).toBe(
    -7
  )
})

test("isBetweenInclusive() works", () => {
  expect(
    isBetweenInclusive(5, 3, 10)
  ).toBe(
    true
  )
  expect(
    isBetweenInclusive(5, 5, 10)
  ).toBe(
    true
  )
  expect(
    isBetweenInclusive(5, 1, 5)
  ).toBe(
    true
  )
  expect(
    isBetweenInclusive(6, 7, 10)
  ).toBe(
    false
  )
  expect(
    isBetweenInclusive(11, 7, 10)
  ).toBe(
    false
  )
  expect(
    isBetweenInclusive(-4, 1, 10)
  ).toBe(
    false
  )
})
