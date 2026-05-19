import { test, expect } from "vitest"

import { MusicalKey } from "@shared/classes/MusicalKey"
import { SolfegeLabelAnimator } from "@shared/classes/SolfegeLabelAnimator"
import { Motion, getNextMusicalKey } from "@shared/utilities/motion"
import { SOLFEGE_LETTERS } from "@shared/utilities/solfege"


test("SolfegeLabelAnimator works when incrementing root", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.IncrementRoot })
  const animator = new SolfegeLabelAnimator({ musicalKey, nextMusicalKey })
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) =>
      animator.startNote(solfegeLetter).name
    )
  ).toStrictEqual(
    [ "E", "F♯", "G", "A", "B", "C", "D" ]
  )
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) =>
      animator.finishNote(solfegeLetter).name
    )
  ).toStrictEqual(
    [ "B", "C", "D", "E", "F♯", "G", "A" ]
  )
})

test("SolfegeLabelAnimator works when decrementing root", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.DecrementRoot })
  const animator = new SolfegeLabelAnimator({ musicalKey, nextMusicalKey })
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) =>
      animator.startNote(solfegeLetter).name
    )
  ).toStrictEqual(
    [ "E", "F♯", "G", "A", "B", "C", "D" ]
  )
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) =>
      animator.finishNote(solfegeLetter).name
    )
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F♯", "G" ]
  )
})

test("SolfegeLabelAnimator works when incrementing degree", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.IncrementDegree })
  const animator = new SolfegeLabelAnimator({ musicalKey, nextMusicalKey })
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) =>
      animator.startNote(solfegeLetter).name
    )
  ).toStrictEqual(
    [ "E", "F♯", "G", "A", "B", "C", "D" ]
  )
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) =>
      animator.finishNote(solfegeLetter).name
    )
  ).toStrictEqual(
    [ "E", "F♯", "G", "A", "B", "C♯", "D" ]
  )
})

test("SolfegeLabelAnimator works when decrementing degree", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.DecrementDegree })
  const animator = new SolfegeLabelAnimator({ musicalKey, nextMusicalKey })
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) =>
      animator.startNote(solfegeLetter).name
    )
  ).toStrictEqual(
    [ "E", "F♯", "G", "A", "B", "C", "D" ]
  )
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) =>
      animator.finishNote(solfegeLetter).name
    )
  ).toStrictEqual(
    [ "E", "F", "G", "A", "B", "C", "D" ]
  )
})

test("SolfegeLabelAnimator works when incrementing both", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.IncrementBoth })
  const animator = new SolfegeLabelAnimator({ musicalKey, nextMusicalKey })
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) =>
      animator.startNote(solfegeLetter).name
    )
  ).toStrictEqual(
    [ "E", "F♯", "G", "A", "B", "C", "D" ]
  )
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) =>
      animator.finishNote(solfegeLetter).name
    )
  ).toStrictEqual(
    [ "B", "C♯", "D", "E", "F♯", "G", "A" ]
  )
})

test("SolfegeLabelAnimator works when decrementing both", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.DecrementBoth })
  const animator = new SolfegeLabelAnimator({ musicalKey, nextMusicalKey })
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) =>
      animator.startNote(solfegeLetter).name
    )
  ).toStrictEqual(
    [ "E", "F♯", "G", "A", "B", "C", "D" ]
  )
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) =>
      animator.finishNote(solfegeLetter).name
    )
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F", "G" ]
  )
})
