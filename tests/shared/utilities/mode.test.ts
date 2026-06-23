import { test, expect } from "vitest"

import { getModeQuality } from "@shared/utilities/mode"


test("getModeQuality()", () => {
  expect(
    getModeQuality(-3)
  ).toBe(
    "major"
  )
  expect(
    getModeQuality(-2)
  ).toBe(
    "major"
  )
  expect(
    getModeQuality(-1)
  ).toBe(
    "major"
  )
  expect(
    getModeQuality(0)
  ).toBe(
    "minor"
  )
  expect(
    getModeQuality(1)
  ).toBe(
    "minor"
  )
  expect(
    getModeQuality(2)
  ).toBe(
    "minor"
  )
  expect(
    getModeQuality(3)
  ).toBe(
    "diminished"
  )
  expect(() => {
    getModeQuality(-4)
  }).toThrow()
  expect(() => {
    getModeQuality(4)
  }).toThrow()
})
