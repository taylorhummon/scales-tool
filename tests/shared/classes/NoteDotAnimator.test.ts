import { test, expect } from "vitest"

import { MusicalKey } from "@shared/classes/MusicalKey"
import { Note } from "@shared/classes/Note"
import { NoteDotAnimator } from "@shared/classes/NoteDotAnimator"
import { buildInclusiveRange } from "@shared/utilities/array"
import { Motion } from "@shared/utilities/motion"


function noMotion(
  musicalKey: MusicalKey,
): Array<number> {
  return buildInclusiveRange(musicalKey.tailNote.value, musicalKey.headNote.value)
}

function exerciseAnimator(
  musicalKey: MusicalKey,
  animator: NoteDotAnimator,
): Array<number> {
  const values = buildInclusiveRange(musicalKey.tailNote.value, musicalKey.headNote.value)
  return values.map(
    (value) => new Note({ value })
  ).map(
    (startNote) => animator.finishNote(startNote)
  ).map(
    (finishNote) => finishNote.value
  );
}

test("NoteDotAnimator works when is tangled and incrementing root", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
  const animator = new NoteDotAnimator({ isUntangled: false, motion: Motion.IncrementRoot, musicalKey })
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
})

test("NoteDotAnimator works when is tangled and decrementing root", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
  const animator = new NoteDotAnimator({ isUntangled: false, motion: Motion.DecrementRoot, musicalKey })
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
})

test("NoteDotAnimator works when is tangled and incrementing degree", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
  const animator = new NoteDotAnimator({ isUntangled: false, motion: Motion.IncrementDegree, musicalKey })
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ 5, -1, +0, 1, 2, 3, 4 ]
  )
})

test("NoteDotAnimator works when is tangled and decrementing degree", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
  const animator = new NoteDotAnimator({ isUntangled: false, motion: Motion.DecrementDegree, musicalKey })
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, -3 ]
  )
})

test("NoteDotAnimator works when is tangled and incrementing both", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
  const animator = new NoteDotAnimator({ isUntangled: false, motion: Motion.IncrementDegree, musicalKey })
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ 5, -1, 0, 1, 2, 3, 4 ]
  )
})

test("NoteDotAnimator works when is tangled and decrementing both", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
  const animator = new NoteDotAnimator({ isUntangled: false, motion: Motion.DecrementDegree, musicalKey })
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, -3 ]
  )
})

test("NoteDotAnimator works when is untangled and incrementing root", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
  const animator = new NoteDotAnimator({ isUntangled: true, motion: Motion.IncrementRoot, musicalKey })
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
})

test("NoteDotAnimator works when is untangled and decrementing root", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
  const animator = new NoteDotAnimator({ isUntangled: true, motion: Motion.DecrementRoot, musicalKey })
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
})

test("NoteDotAnimator works when is untangled and incrementing degree", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
  const animator = new NoteDotAnimator({ isUntangled: true, motion: Motion.IncrementDegree, musicalKey })
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ -1, 0, 1, 2, 3, 4, 5 ]
  )
})

test("NoteDotAnimator works when is untangled and decrementing degree", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
  const animator = new NoteDotAnimator({ isUntangled: true, motion: Motion.DecrementDegree, musicalKey })
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ -3, -2, -1, 0, 1, 2, 3 ]
  )
})

test("NoteDotAnimator works when is untangled and incrementing both", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
  const animator = new NoteDotAnimator({ isUntangled: true, motion: Motion.IncrementDegree, musicalKey })
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ -1, 0, 1, 2, 3, 4, 5 ]
  )
})

test("NoteDotAnimator works when is untangled and decrementing both", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  expect(
    noMotion(musicalKey)
  ).toStrictEqual(
    [ -2, -1, 0, 1, 2, 3, 4 ]
  )
  const animator = new NoteDotAnimator({ isUntangled: true, motion: Motion.DecrementDegree, musicalKey })
  expect(
    exerciseAnimator(musicalKey, animator)
  ).toStrictEqual(
    [ -3, -2, -1, 0, 1, 2, 3 ]
  )
})
