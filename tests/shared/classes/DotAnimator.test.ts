import { test, expect } from "vitest"
import { getDerivedFromState } from "../../../test-utilities/getDerivedFromState"
import { getInitialState } from "../../../test-utilities/initialState"

import { DotAnimator } from "@shared/classes/DotAnimator"
import { AnimationOption, getCurrentHour } from "@shared/utilities/clock"
import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"
import { SOLFEGE_LETTERS } from "@shared/utilities/solfegeLetter"


function noMotion(
  derived: Derived,
): Array<number> {
  return SOLFEGE_LETTERS.map(
    (solfegeLetter) => {
      const note = derived.currentMusicalKey.noteFromSolfegeLetter(solfegeLetter)
      const startHour = getCurrentHour(derived, note)
      return startHour
    }
  )
}

function exerciseAnimator(
  derived: Derived,
  animator: DotAnimator,
): Array<number> {
  return SOLFEGE_LETTERS.map(
    (solfegeLetter) => {
      const note = derived.currentMusicalKey.noteFromSolfegeLetter(solfegeLetter)
      const startHour = getCurrentHour(derived, note)
      return animator.getFinishHour(startHour, note.naturalNote, solfegeLetter)
    }
  )
}


test("DotAnimator works when still and in butterfly mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.Still,
    isCaterpillarPattern: false,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 4, 5, 7 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 4, 5, 7 ]
  )
})

test("DotAnimator works when incrementing root and in butterfly mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.IncrementRoot,
    isCaterpillarPattern: false,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 4, 5, 7 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 4, 5, 7 ]
  )
})

test("DotAnimator works when decrementing root and in butterfly mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.DecrementRoot,
    isCaterpillarPattern: false,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 4, 5, 7 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 4, 5, 7 ]
  )
})

test("DotAnimator works when incrementing rank and in butterfly mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.IncrementRank,
    isCaterpillarPattern: false,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 4, 5, 7 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 9, 11, 0, 2, 4, 5, 7 ]
  )
})

test("DotAnimator works when decrementing rank and in butterfly mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.DecrementRank,
    isCaterpillarPattern: false,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 4, 5, 7 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 3, 5, 7 ]
  )
})

test("DotAnimator works when incrementing both and in butterfly mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.IncrementRank,
    isCaterpillarPattern: false,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 4, 5, 7 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 9, 11, 0, 2, 4, 5, 7 ]
  )
})

test("DotAnimator works when decrementing both and in butterfly mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.DecrementRank,
    isCaterpillarPattern: false,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 4, 5, 7 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 3, 5, 7 ]
  )
})

test("DotAnimator works when moving to caterpillar mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.ToCaterpillarPattern,
    isCaterpillarPattern: false,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 4, 5, 7 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 3, 10, 0, 2, 4, 11, 1 ]
  )
})

test("DotAnimator works when still and in caterpillar mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.Still,
    isCaterpillarPattern: true,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 3, 10, 0, 2, 4, 11, 1 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 3, 10, 0, 2, 4, 11, 1 ]
  )
})

test("DotAnimator works when incrementing root and in caterpillar mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.IncrementRoot,
    isCaterpillarPattern: true,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 3, 10, 0, 2, 4, 11, 1 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 3, 10, 0, 2, 4, 11, 1 ]
  )
})

test("DotAnimator works when decrementing root and in caterpillar mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.DecrementRoot,
    isCaterpillarPattern: true,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
     [ 3, 10, 0, 2, 4, 11, 1 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 3, 10, 0, 2, 4, 11, 1 ]
  )
})

test("DotAnimator works when incrementing rank and in caterpillar mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.IncrementRank,
    isCaterpillarPattern: true,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 3, 10, 0, 2, 4, 11, 1 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 4, 11, 1, 3, 5, 0, 2 ]
  )
})

test("DotAnimator works when decrementing rank and in caterpillar mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.DecrementRank,
    isCaterpillarPattern: true,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 3, 10, 0, 2, 4, 11, 1 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 2, 9, 11, 1, 3, 10, 0 ]
  )
})

test("DotAnimator works when incrementing both and in caterpillar mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.IncrementRank,
    isCaterpillarPattern: true,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 3, 10, 0, 2, 4, 11, 1 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 4, 11, 1, 3, 5, 0, 2 ]
  )
})

test("DotAnimator works when decrementing both and in caterpillar mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.DecrementRank,
    isCaterpillarPattern: true,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 3, 10, 0, 2, 4, 11, 1 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 2, 9, 11, 1, 3, 10, 0 ]
  )
})

test("DotAnimator works when moving to butterfly mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    animationOption: AnimationOption.Combo,
    motion: Motion.ToButterlflyPattern,
    isCaterpillarPattern: true,
    root: 2,
    rank: 1,
  })
  const animator = new DotAnimator({ derived })
  expect(
    noMotion(derived)
  ).toStrictEqual(
    [ 3, 10, 0, 2, 4, 11, 1 ]
  )
  expect(
    exerciseAnimator(derived, animator)
  ).toStrictEqual(
    [ 9, 10, 0, 2, 4, 5, 7 ]
  )
})
