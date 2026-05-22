import { test, expect } from "vitest"

import {
  DEFAULT_IS_USING_ANIMATION,
  DEFAULT_IS_UNTANGLED,
  DEFAULT_IS_USING_SYMMETRY_DOT,
  DEFAULT_IS_USING_SOLFEGE,
  DEFAULT_ANIMATION_OPTION,
  DEFAULT_ANCHOR_OPTION,
} from "@scalesTool/config"

import { MusicalKey } from "@scalesTool/classes/MusicalKey"
import { DotAnimator } from "@scalesTool/classes/DotAnimator"
import { AnimationOption, type ClockSettings, getHour } from "@scalesTool/utilities/clock"
import { Motion, getNextMusicalKey } from "@scalesTool/utilities/motion"
import { SOLFEGE_LETTERS } from "@scalesTool/utilities/solfege"


const DEFAULT_CLOCK_SETTINGS = {
  isUsingAnimation: DEFAULT_IS_USING_ANIMATION,
  isUntangled: DEFAULT_IS_UNTANGLED,
  isUsingSymmetrySpotlight: DEFAULT_IS_USING_SYMMETRY_DOT,
  isUsingSolfege: DEFAULT_IS_USING_SOLFEGE,
  animationOption: DEFAULT_ANIMATION_OPTION,
  anchorOption: DEFAULT_ANCHOR_OPTION,
}

function noMotion(
  clockSettings: ClockSettings,
  currentMusicalKey: MusicalKey,
): Array<number> {
  return SOLFEGE_LETTERS.map(
    (solfegeLetter) => {
      const note = currentMusicalKey.noteFromSolfegeLetter(solfegeLetter)
      const startHour = getHour({
        clockSettings,
        musicalKey: currentMusicalKey,
        note,
      })
      return startHour
    }
  )
}

function exerciseAnimator(
  clockSettings: ClockSettings,
  currentMusicalKey: MusicalKey,
  animator: DotAnimator,
): Array<number> {
  return SOLFEGE_LETTERS.map(
    (solfegeLetter) => {
      const note = currentMusicalKey.noteFromSolfegeLetter(solfegeLetter)
      const startHour = getHour({
        clockSettings,
        musicalKey: currentMusicalKey,
        note,
      })
      return animator.getFinishHour(startHour, note.naturalNote, solfegeLetter)
    }
  )
}


test("DotAnimator works when is incrementing root and is using minimal animation", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, animationOption: AnimationOption.Minimal }
  const motion = Motion.IncrementRoot
  const currentMusicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ currentMusicalKey, motion })
  const animator = new DotAnimator({ clockSettings, motion, currentMusicalKey, nextMusicalKey })
  expect(
    noMotion(clockSettings, currentMusicalKey)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
  expect(
    exerciseAnimator(clockSettings, currentMusicalKey, animator)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
})

test("DotAnimator works when is decrementing root and is using minimal animation", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, animationOption: AnimationOption.Minimal }
  const motion = Motion.DecrementRoot
  const currentMusicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ currentMusicalKey, motion })
  const animator = new DotAnimator({ clockSettings, motion, currentMusicalKey, nextMusicalKey })
  expect(
    noMotion(clockSettings, currentMusicalKey)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
  expect(
    exerciseAnimator(clockSettings, currentMusicalKey, animator)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
})

test("DotAnimator works when is incrementing degree and is using minimal animation", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, animationOption: AnimationOption.Minimal }
  const motion = Motion.IncrementDegree
  const currentMusicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ currentMusicalKey, motion })
  const animator = new DotAnimator({ clockSettings, motion, currentMusicalKey, nextMusicalKey })
  expect(
    noMotion(clockSettings, currentMusicalKey)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
  expect(
    exerciseAnimator(clockSettings, currentMusicalKey, animator)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 11, 0 ]
  )
})

test("DotAnimator works when is decrementing degree and is using minimal animation", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, animationOption: AnimationOption.Minimal }
  const motion = Motion.DecrementDegree
  const currentMusicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ currentMusicalKey, motion })
  const animator = new DotAnimator({ clockSettings, motion, currentMusicalKey, nextMusicalKey })
  expect(
    noMotion(clockSettings, currentMusicalKey)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
  expect(
    exerciseAnimator(clockSettings, currentMusicalKey, animator)
  ).toStrictEqual(
    [ 2, 3, 5, 7, 9, 10, 0 ]
  )
})

test("DotAnimator works when is incrementing both and is using minimal animation", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, animationOption: AnimationOption.Minimal }
  const motion = Motion.IncrementBoth
  const currentMusicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ currentMusicalKey, motion })
  const animator = new DotAnimator({ clockSettings, motion, currentMusicalKey, nextMusicalKey })
  expect(
    noMotion(clockSettings, currentMusicalKey)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
  expect(
    exerciseAnimator(clockSettings, currentMusicalKey, animator)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 11, 0 ]
  )
})

test("DotAnimator works when is decrementing both and is using minimal animation", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, animationOption: AnimationOption.Minimal }
  const motion = Motion.DecrementBoth
  const currentMusicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ currentMusicalKey, motion })
  const animator = new DotAnimator({ clockSettings, motion, currentMusicalKey, nextMusicalKey })
  expect(
    noMotion(clockSettings, currentMusicalKey)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
  expect(
    exerciseAnimator(clockSettings, currentMusicalKey, animator)
  ).toStrictEqual(
    [ 2, 3, 5, 7, 9, 10, 0 ]
  )
})

test("DotAnimator works when is incrementing root and is using ballet animation", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, animationOption: AnimationOption.Ballet }
  const motion = Motion.IncrementRoot
  const currentMusicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ currentMusicalKey, motion })
  const animator = new DotAnimator({ clockSettings, motion, currentMusicalKey, nextMusicalKey })
  expect(
    noMotion(clockSettings, currentMusicalKey)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
  expect(
    exerciseAnimator(clockSettings, currentMusicalKey, animator)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
})

test("DotAnimator works when is decrementing root and is using ballet animation", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, animationOption: AnimationOption.Ballet }
  const motion = Motion.DecrementRoot
  const currentMusicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ currentMusicalKey, motion })
  const animator = new DotAnimator({ clockSettings, motion, currentMusicalKey, nextMusicalKey })
  expect(
    noMotion(clockSettings, currentMusicalKey)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
  expect(
    exerciseAnimator(clockSettings, currentMusicalKey, animator)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
})

test("DotAnimator works when is incrementing degree and is using ballet animation", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, animationOption: AnimationOption.Ballet }
  const motion = Motion.IncrementDegree
  const currentMusicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ currentMusicalKey, motion })
  const animator = new DotAnimator({ clockSettings, motion, currentMusicalKey, nextMusicalKey })
  expect(
    noMotion(clockSettings, currentMusicalKey)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
  expect(
    exerciseAnimator(clockSettings, currentMusicalKey, animator)
  ).toStrictEqual(
    [ 9, 11, 0, 2, 4, 5, 7 ]
  )
})

test("DotAnimator works when is decrementing degree and is using ballet animation", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, animationOption: AnimationOption.Ballet }
  const motion = Motion.DecrementDegree
  const currentMusicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ currentMusicalKey, motion })
  const animator = new DotAnimator({ clockSettings, motion, currentMusicalKey, nextMusicalKey })
  expect(
    noMotion(clockSettings, currentMusicalKey)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
  expect(
    exerciseAnimator(clockSettings, currentMusicalKey, animator)
  ).toStrictEqual(
    [ 7, 9, 10, 0, 2, 3, 5 ]
  )
})

test("DotAnimator works when is incrementing both and is using ballet animation", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, animationOption: AnimationOption.Ballet }
  const motion = Motion.IncrementBoth
  const currentMusicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ currentMusicalKey, motion })
  const animator = new DotAnimator({ clockSettings, motion, currentMusicalKey, nextMusicalKey })
  expect(
    noMotion(clockSettings, currentMusicalKey)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
  expect(
    exerciseAnimator(clockSettings, currentMusicalKey, animator)
  ).toStrictEqual(
    [ 9, 11, 0, 2, 4, 5, 7 ]
  )
})

test("DotAnimator works when is decrementing both and is using ballet animation", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, animationOption: AnimationOption.Ballet }
  const motion = Motion.DecrementBoth
  const currentMusicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ currentMusicalKey, motion })
  const animator = new DotAnimator({ clockSettings, motion, currentMusicalKey, nextMusicalKey })
  expect(
    noMotion(clockSettings, currentMusicalKey)
  ).toStrictEqual(
    [ 2, 4, 5, 7, 9, 10, 0 ]
  )
  expect(
    exerciseAnimator(clockSettings, currentMusicalKey, animator)
  ).toStrictEqual(
    [ 7, 9, 10, 0, 2, 3, 5 ]
  )
})
