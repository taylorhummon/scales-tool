import { test, expect } from "vitest"

import {
  DEFAULT_IS_UNTANGLED,
  DEFAULT_IS_USING_SYMMETRY_DOT,
  DEFAULT_IS_USING_SOLFEGE,
  DEFAULT_IS_USING_DOTS_BALLET,
  DEFAULT_IS_USING_ANIMATION,
} from "@scalesTool/config"

import { MusicalKey } from "@shared/classes/MusicalKey"
import { Note } from "@shared/classes/Note"
import { NoteDotAnimator } from "@shared/classes/NoteDotAnimator"
import { buildInclusiveRange } from "@shared/utilities/array"
import { Motion, getNextMusicalKey } from "@shared/utilities/motion"


const DEFAULT_CLOCK_SETTINGS = {
  isUntangled: DEFAULT_IS_UNTANGLED,
  isUsingSymmetryDot: DEFAULT_IS_USING_SYMMETRY_DOT,
  isUsingSolfege: DEFAULT_IS_USING_SOLFEGE,
  isUsingDotsBallet: DEFAULT_IS_USING_DOTS_BALLET,
  isUsingAnimation: DEFAULT_IS_USING_ANIMATION,
}

function noMotion(
  musicalKey: MusicalKey,
): Array<string> {
  const values = buildInclusiveRange(musicalKey.tailNote.value, musicalKey.headNote.value)
  return values.map(
    (value) => new Note({ value })
  ).map(
    (finishNote) => finishNote.name
  );
}

function exerciseAnimator(
  musicalKey: MusicalKey,
  animator: NoteDotAnimator,
): Array<string> {
  const values = buildInclusiveRange(musicalKey.tailNote.value, musicalKey.headNote.value)
  return values.map(
    (value) => new Note({ value })
  ).map(
    (startNote) => animator.finishNote(startNote)
  ).map(
    (finishNote) => finishNote.name
  );
}


test("NoteDotAnimator works when is incrementing root and is not using dots ballet", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUsingDotsBallet: false }
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.IncrementRoot })
  const animator = new NoteDotAnimator({ clockSettings, musicalKey, nextMusicalKey })

  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
})

test("NoteDotAnimator works when is decrementing root and is not using dots ballet", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUsingDotsBallet: false }
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.DecrementRoot })
  const animator = new NoteDotAnimator({ clockSettings, musicalKey, nextMusicalKey })

  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
})

test("NoteDotAnimator works when is incrementing degree and is not using dots ballet", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUsingDotsBallet: false }
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.IncrementDegree })
  const animator = new NoteDotAnimator({ clockSettings, musicalKey, nextMusicalKey })

  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ "C♯", "G", "D", "A", "E", "B", "F♯" ]
  )
})

test("NoteDotAnimator works when is decrementing degree and is not using dots ballet", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUsingDotsBallet: false }
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.DecrementDegree })
  const animator = new NoteDotAnimator({ clockSettings, musicalKey, nextMusicalKey })

  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F" ]
  )
})

test("NoteDotAnimator works when is incrementing both and is not using dots ballet", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUsingDotsBallet: false }
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.IncrementBoth })
  const animator = new NoteDotAnimator({ clockSettings, musicalKey, nextMusicalKey })

  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ "C♯", "G", "D", "A", "E", "B", "F♯" ]
  )
})

test("NoteDotAnimator works when is decrementing both and is not using dots ballet", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUsingDotsBallet: false }
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.DecrementBoth })
  const animator = new NoteDotAnimator({ clockSettings, musicalKey, nextMusicalKey })

  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F" ]
  )
})

test("NoteDotAnimator works when is incrementing root and is using dots ballet", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUsingDotsBallet: true }
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.IncrementRoot })
  const animator = new NoteDotAnimator({ clockSettings, musicalKey, nextMusicalKey })

  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
})

test("NoteDotAnimator works when is decrementing root and is using dots ballet", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUsingDotsBallet: true }
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.DecrementRoot })
  const animator = new NoteDotAnimator({ clockSettings, musicalKey, nextMusicalKey })

  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
})

test("NoteDotAnimator works when is incrementing degree and is using dots ballet", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUsingDotsBallet: true }
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.IncrementDegree })
  const animator = new NoteDotAnimator({ clockSettings, musicalKey, nextMusicalKey })

  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ "G", "D", "A", "E", "B", "F♯", "C♯" ]
  )
})

test("NoteDotAnimator works when is decrementing degree and is using dots ballet", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUsingDotsBallet: true }
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.DecrementDegree })
  const animator = new NoteDotAnimator({ clockSettings, musicalKey, nextMusicalKey })

  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ "F", "C", "G", "D", "A", "E", "B" ]
  )
})

test("NoteDotAnimator works when is incrementing both and is using dots ballet", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUsingDotsBallet: true }
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.IncrementBoth })
  const animator = new NoteDotAnimator({ clockSettings, musicalKey, nextMusicalKey })

  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ "G", "D", "A", "E", "B", "F♯", "C♯" ]
  )
})

test("NoteDotAnimator works when is decrementing both and is using dots ballet", () => {
  const clockSettings = { ...DEFAULT_CLOCK_SETTINGS, isUsingDotsBallet: true }
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.DecrementBoth })
  const animator = new NoteDotAnimator({ clockSettings, musicalKey, nextMusicalKey })

  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ "C", "G", "D", "A", "E", "B", "F♯" ]
  )
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ "F", "C", "G", "D", "A", "E", "B" ]
  )
})
