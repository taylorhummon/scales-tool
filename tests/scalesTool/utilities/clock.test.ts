import { test, expect } from "vitest"

import {
  DEFAULT_IS_USING_ANIMATION,
  DEFAULT_IS_UNTANGLED,
  DEFAULT_IS_USING_SYMMETRY_DOT,
  DEFAULT_IS_USING_SOLFEGE,
  DEFAULT_ANIMATION_OPTION,
  DEFAULT_ANCHOR_OPTION
} from "@scalesTool/config"

import { MusicalKey } from "@scalesTool/classes/MusicalKey"
import { Note } from "@scalesTool/classes/Note"
import { getHour } from "@scalesTool/utilities/clock"


const DEFAULT_CLOCK_SETTINGS = {
  isUsingAnimation: DEFAULT_IS_USING_ANIMATION,
  isUntangled: DEFAULT_IS_UNTANGLED,
  isUsingSymmetrySpotlight: DEFAULT_IS_USING_SYMMETRY_DOT,
  isUsingSolfege: DEFAULT_IS_USING_SOLFEGE,
  animationOption: DEFAULT_ANIMATION_OPTION,
  anchorOption: DEFAULT_ANCHOR_OPTION,
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
