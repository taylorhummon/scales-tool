import { test, expect } from "vitest"

import { getInitialState, reducer } from "@scalesTool/utilities/state"

import { MusicalKey } from "@scalesTool/classes/MusicalKey"
import { ActionType } from "@scalesTool/utilities/action"
import { Motion } from "@scalesTool/utilities/motion"


test("reducer() works", () => {
  expect(
    reducer(
      getInitialState(),
      { type: ActionType.ActivateMotion, motion: Motion.IncrementDegree },
    ).motion
  ).toBe(
    Motion.IncrementDegree
  )
  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.ChangeKey,
        nextMusicalKey: new MusicalKey({ root: 2, degree: 3 }),
      },
    ).root
  ).toBe(
    2
  )
  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.ChangeKey,
        nextMusicalKey: new MusicalKey({ root: 2, degree: 3 }),
      },
    ).degree
  ).toBe(
    3
  )
  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.SelectIsUntangled,
        isUntangled: false
      },
    ).isUntangled
  ).toBe(
    false
  )
  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.SelectIsUsingSymmetrySpotlight,
        isUsingSymmetrySpotlight: false
      },
    ).isUsingSymmetrySpotlight
  ).toBe(
    false
  )
  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.SelectIsUsingSolfege,
        isUsingSolfege: true
      },
    ).isUsingSolfege
  ).toBe(
    true
  )
})
