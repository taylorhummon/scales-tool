import { test, expect } from "vitest"

import {
  DEFAULT_IS_UNTANGLED,
  DEFAULT_IS_USING_SYMMETRY_DOT,
  DEFAULT_IS_USING_SOLFEGE,
  DEFAULT_IS_USING_ANIMATION,
} from "@scalesTool/config"

import { MusicalKey } from "@shared/classes/MusicalKey"
import { Note } from "@shared/classes/Note"
import { getHour } from "@shared/utilities/clock"


const DEFAULT_CLOCK_SETTINGS = {
  isUntangled: DEFAULT_IS_UNTANGLED,
  isUsingSymmetryDot: DEFAULT_IS_USING_SYMMETRY_DOT,
  isUsingSolfege: DEFAULT_IS_USING_SOLFEGE,
  isUsingAnimation: DEFAULT_IS_USING_ANIMATION,
}

test("getHour() works when tangled", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUntangled: false }
  const musicalKey = new MusicalKey({ root: 0, degree: 0 })
  expect(
    getHour({ clockSettings, musicalKey, note: new Note({ value: -2 }) })
  ).toBe(
    10
  )
  expect(
    getHour({ clockSettings, musicalKey, note: new Note({ value: -1 }) })
  ).toBe(
    5
  )
  expect(
    getHour({ clockSettings, musicalKey, note: new Note({ value: 0 }) })
  ).toBe(
    0
  )
  expect(
    getHour({ clockSettings, musicalKey, note: new Note({ value: 1 }) })
  ).toBe(
    7
  )
  expect(
    getHour({ clockSettings, musicalKey, note: new Note({ value: 2 }) })
  ).toBe(
    2
  )
})

test("getHour() works when untangled", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUntangled: true }
  const musicalKey = new MusicalKey({ root: 0, degree: 0 })
  expect(
    getHour({ clockSettings, musicalKey, note: new Note({ value: -2 }) })
  ).toBe(
    10
  )
  expect(
    getHour({ clockSettings, musicalKey, note: new Note({ value: -1 }) })
  ).toBe(
    11
  )
  expect(
    getHour({ clockSettings, musicalKey, note: new Note({ value: 0 }) })
  ).toBe(
    0
  )
  expect(
    getHour({ clockSettings, musicalKey, note: new Note({ value: 1 }) })
  ).toBe(
    1
  )
  expect(
    getHour({ clockSettings, musicalKey, note: new Note({ value: 2 }) })
  ).toBe(
    2
  )
})
