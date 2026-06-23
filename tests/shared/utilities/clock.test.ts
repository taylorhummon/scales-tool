import { test, expect } from "vitest"
import { getDerivedFromState } from "../../../test-utilities/getDerivedFromState"
import { getInitialState } from "../../../test-utilities/initialState"

import { Note } from "@shared/classes/Note"
import { buildInclusiveRange } from "@shared/utilities/array"
import { getCurrentHour, getNextHour } from "@shared/utilities/clock"
import { Motion } from "@shared/utilities/motion"


test("getCurrentHour() works when moving to caterpillar mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    motion: Motion.ToCaterpillarPattern,
    isCaterpillarPattern: false,
    root: 0,
    rank: 0,
  })
  expect(
    buildInclusiveRange(-3, 3).map(
      (value) => getCurrentHour(derived, new Note({ value }))
    )
  ).toStrictEqual(
    [3, 10, 5, 0, 7, 2, 9]
  )
})

test("getCurrentHour() works when moving to butterfly mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    motion: Motion.ToButterlflyPattern,
    isCaterpillarPattern: true,
    root: 0,
    rank: 0,
  })
  expect(
    buildInclusiveRange(-3, 3).map(
      (value) => getCurrentHour(derived, new Note({ value }))
    )
  ).toStrictEqual(
    [9, 10, 11, 0, 1, 2, 3]
  )
})

test("getNextHour() works when moving to caterpillar mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    motion: Motion.ToCaterpillarPattern,
    isCaterpillarPattern: false,
    root: 0,
    rank: 0,
  })
  expect(
    buildInclusiveRange(-3, 3).map(
      (value) => getNextHour(derived, new Note({ value }))
    )
  ).toStrictEqual(
    [9, 10, 11, 0, 1, 2, 3]
  )
})

test("getNextHour() works when moving to butterfly mode", () => {
  const derived = getDerivedFromState({
    ...getInitialState(),
    motion: Motion.ToButterlflyPattern,
    isCaterpillarPattern: true,
    root: 0,
    rank: 0,
  })
  expect(
    buildInclusiveRange(-3, 3).map(
      (value) => getNextHour(derived, new Note({ value }))
    )
  ).toStrictEqual(
    [3, 10, 5, 0, 7, 2, 9]
  )
})
