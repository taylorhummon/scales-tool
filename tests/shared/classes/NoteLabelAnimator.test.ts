import { test, expect } from "vitest"

import { MusicalKey } from "@shared/classes/MusicalKey"
import { NoteLabelAnimator } from "@shared/classes/NoteLabelAnimator"
import { Motion, getNextMusicalKey } from "@shared/utilities/motion"
import { NATURAL_NOTES } from "@shared/utilities/naturalNote"


test("NoteLabelAnimator works when incrementing root", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.IncrementRoot })
  const animator = new NoteLabelAnimator({ musicalKey, nextMusicalKey })
  expect(
    NATURAL_NOTES.map((naturalNote) =>
      animator.startNote(naturalNote).name
    )
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F♯", "G" ]
  )
  expect(
    NATURAL_NOTES.map((naturalNote) =>
      animator.finishNote(naturalNote).name
    )
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F♯", "G" ]
  )
})

test("NoteLabelAnimator works when decrementing root", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.DecrementRoot })
  const animator = new NoteLabelAnimator({ musicalKey, nextMusicalKey })
  expect(
    NATURAL_NOTES.map((naturalNote) =>
      animator.startNote(naturalNote).name
    )
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F♯", "G" ]
  )
  expect(
    NATURAL_NOTES.map((naturalNote) =>
      animator.finishNote(naturalNote).name
    )
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F♯", "G" ]
  )
})

test("NoteLabelAnimator works when incrementing degree", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.IncrementDegree })
  const animator = new NoteLabelAnimator({ musicalKey, nextMusicalKey })
  expect(
    NATURAL_NOTES.map((naturalNote) =>
      animator.startNote(naturalNote).name
    )
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F♯", "G" ]
  )
  expect(
    NATURAL_NOTES.map((naturalNote) =>
      animator.finishNote(naturalNote).name
    )
  ).toStrictEqual(
    [ "A", "B", "C♯", "D", "E", "F♯", "G" ]
  )
})

test("NoteLabelAnimator works when decrementing degree", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.DecrementDegree })
  const animator = new NoteLabelAnimator({ musicalKey, nextMusicalKey })
  expect(
    NATURAL_NOTES.map((naturalNote) =>
      animator.startNote(naturalNote).name
    )
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F♯", "G" ]
  )
  expect(
    NATURAL_NOTES.map((naturalNote) =>
      animator.finishNote(naturalNote).name
    )
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F", "G" ]
  )
})

test("NoteLabelAnimator works when incrementing both", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.IncrementBoth })
  const animator = new NoteLabelAnimator({ musicalKey, nextMusicalKey })
  expect(
    NATURAL_NOTES.map((naturalNote) =>
      animator.startNote(naturalNote).name
    )
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F♯", "G" ]
  )
  expect(
    NATURAL_NOTES.map((naturalNote) =>
      animator.finishNote(naturalNote).name
    )
  ).toStrictEqual(
    [ "A", "B", "C♯", "D", "E", "F♯", "G" ]
  )
})

test("NoteLabelAnimator works when decrementing both", () => {
  const musicalKey = new MusicalKey({ root: 2, degree: 1 })
  const nextMusicalKey = getNextMusicalKey({ musicalKey, motion: Motion.DecrementBoth })
  const animator = new NoteLabelAnimator({ musicalKey, nextMusicalKey })
  expect(
    NATURAL_NOTES.map((naturalNote) =>
      animator.startNote(naturalNote).name
    )
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F♯", "G" ]
  )
  expect(
    NATURAL_NOTES.map((naturalNote) =>
      animator.finishNote(naturalNote).name
    )
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F", "G" ]
  )
})
