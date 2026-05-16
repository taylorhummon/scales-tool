import { test, expect } from "vitest"

import { getInitialState, reducer } from "@scalesTool/utilities/state"

import { MusicalKey } from "@shared/classes/MusicalKey"
import { ActionType } from "@shared/utilities/action"
import { Motion } from "@shared/utilities/motion"


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
        type: ActionType.SelectIsUsingSymmetryDot,
        isUsingSymmetryDot: false
      },
    ).isUsingSymmetryDot
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
  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.SelectIsUsingAnimation,
        isUsingAnimation: false
      },
    ).isUsingAnimation
  ).toBe(
    false
  )
})
