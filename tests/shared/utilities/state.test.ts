import { test, expect } from "vitest"
import { getInitialState } from "../../../test-utilities/initialState"

import { MusicalKey } from "@shared/classes/MusicalKey"
import { ActionType } from "@shared/utilities/action"
import { LabelsOption } from "@shared/utilities/clock"
import { Motion } from "@shared/utilities/motion"
import { reducer } from "@shared/utilities/state"


test("reducer() works for SelectExtraNoteNames action", () => {
  expect(
    reducer(
      getInitialState(),
      { type: ActionType.SelectExtraNoteNames, outsideLabelsOption: LabelsOption.None },
    ).outsideLabelsOption
  ).toBe(
    LabelsOption.None
  )
  expect(
    reducer(
      getInitialState(),
      { type: ActionType.SelectExtraNoteNames, outsideLabelsOption: LabelsOption.None },
    ).isUsingRankSpotlight
  ).toBe(
    false
  )

  expect(
    reducer(
      getInitialState(),
      { type: ActionType.SelectExtraNoteNames, outsideLabelsOption: LabelsOption.Solfege },
    ).outsideLabelsOption
  ).toBe(
    LabelsOption.Solfege
  )
  expect(
    reducer(
      getInitialState(),
      { type: ActionType.SelectExtraNoteNames, outsideLabelsOption: LabelsOption.Solfege },
    ).isUsingRankSpotlight
  ).toBe(
    false
  )

  expect(
    reducer(
      getInitialState(),
      { type: ActionType.SelectExtraNoteNames, outsideLabelsOption: LabelsOption.Simplified },
    ).outsideLabelsOption
  ).toBe(
    LabelsOption.Simplified
  )
  expect(
    reducer(
      getInitialState(),
      { type: ActionType.SelectExtraNoteNames, outsideLabelsOption: LabelsOption.Simplified },
    ).isUsingRankSpotlight
  ).toBe(
    true
  )
})

test("reducer() works for SelectIsUsingRankDial action", () => {
  expect(
    reducer(
      getInitialState(),
      { type: ActionType.SelectIsUsingRankDial, isUsingRankDial: true },
    ).isUsingRankDial
  ).toBe(
    true
  )
  expect(
    reducer(
      getInitialState(),
      { type: ActionType.SelectIsUsingRankDial, isUsingRankDial: true },
    ).insideLabelsOption
  ).toBe(
    LabelsOption.Ordinary
  )

  expect(
    reducer(
      getInitialState(),
      { type: ActionType.SelectIsUsingRankDial, isUsingRankDial: false },
    ).isUsingRankDial
  ).toBe(
    false
  )
  expect(
    reducer(
      getInitialState(),
      { type: ActionType.SelectIsUsingRankDial, isUsingRankDial: false },
    ).insideLabelsOption
  ).toBe(
    LabelsOption.Simplified
  )
})

test("reducer() works for ActivateMotion action", () => {
  expect(
    reducer(
      getInitialState(),
      { type: ActionType.ActivateMotion, motion: Motion.IncrementRank },
    ).motion
  ).toBe(
    Motion.IncrementRank
  )

  expect(
    reducer(
      getInitialState(),
      { type: ActionType.ActivateMotion, motion: Motion.DecrementRank },
    ).motion
  ).toBe(
    Motion.DecrementRank
  )
})

test("reducer() works for CompleteMotion action", () => {
  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.CompleteMotion,
        nextMusicalKey: new MusicalKey({ root: 2, rank: 3 }),
        nextIsCaterpillarPattern: true,
        nextTriadOffset: 4,
      },
    ).root
  ).toBe(
    2
  )
  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.CompleteMotion,
        nextMusicalKey: new MusicalKey({ root: 2, rank: 3 }),
        nextIsCaterpillarPattern: true,
        nextTriadOffset: 4,
      },
    ).rank
  ).toBe(
    3
  )
  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.CompleteMotion,
        nextMusicalKey: new MusicalKey({ root: 2, rank: 3 }),
        nextIsCaterpillarPattern: true,
        nextTriadOffset: 4,
      },
    ).isCaterpillarPattern
  ).toBe(
    true
  )
  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.CompleteMotion,
        nextMusicalKey: new MusicalKey({ root: 2, rank: 3 }),
        nextIsCaterpillarPattern: true,
        nextTriadOffset: 4,
      },
    ).triadOffset
  ).toBe(
    4
  )

  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.CompleteMotion,
        nextMusicalKey: new MusicalKey({ root: -1, rank: -2 }),
        nextIsCaterpillarPattern: false,
        nextTriadOffset: -3,
      },
    ).root
  ).toBe(
    -1
  )
  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.CompleteMotion,
        nextMusicalKey: new MusicalKey({ root: -1, rank: -2 }),
        nextIsCaterpillarPattern: false,
        nextTriadOffset: -3,
      },
    ).rank
  ).toBe(
    -2
  )
  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.CompleteMotion,
        nextMusicalKey: new MusicalKey({ root: -1, rank: -2 }),
        nextIsCaterpillarPattern: false,
        nextTriadOffset: -3,
      },
    ).isCaterpillarPattern
  ).toBe(
    false
  )
  expect(
    reducer(
      getInitialState(),
      {
        type: ActionType.CompleteMotion,
        nextMusicalKey: new MusicalKey({ root: -1, rank: -2 }),
        nextIsCaterpillarPattern: false,
        nextTriadOffset: -3,
      },
    ).triadOffset
  ).toBe(
    -3
  )
})
