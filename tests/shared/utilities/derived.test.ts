import { test, expect } from "vitest"
import { getDerivedFromState } from "../../../test-utilities/getDerivedFromState"

import {
  AnimationOption,
  AnchorOption,
  LabelsOption,
  TriadOriginOption,
} from "@shared/utilities/clock"
import { Motion } from "@shared/utilities/motion"


test("useDerived() works", () => {
  const derived = getDerivedFromState({
    anchorOption: AnchorOption.RootNote,
    insideLabelsOption: LabelsOption.Ordinary,
    outsideLabelsOption: LabelsOption.Solfege,
    triadOriginOption: TriadOriginOption.RankNote,
    animationOption: AnimationOption.Combo,
    isUsingRootSpotlight: true,
    isUsingRankSpotlight: false,
    isUsingRankDial: false,
    motion: Motion.IncrementRank,
    root: 2,
    rank: 3,
    isCaterpillarPattern: false,
    triadOffset: 4,
  })
  expect(
    derived.clockSettings.anchorOption
  ).toBe(
    AnchorOption.RootNote
  )
  expect(
    derived.clockSettings.insideLabelsOption
  ).toBe(
    LabelsOption.Ordinary
  )
  expect(
    derived.clockSettings.outsideLabelsOption
  ).toBe(
    LabelsOption.Solfege
  )
  expect(
    derived.clockSettings.triadOriginOption
  ).toBe(
    TriadOriginOption.RankNote
  )
  expect(
    derived.clockSettings.animationOption
  ).toBe(
    AnimationOption.Combo
  )
  expect(
    derived.clockSettings.isUsingRootSpotlight
  ).toBe(
    true
  )
  expect(
    derived.clockSettings.isUsingRankSpotlight
  ).toBe(
    false
  )
  expect(
    derived.clockSettings.isUsingRankDial
  ).toBe(
    false
  )
  expect(
    derived.motion
  ).toBe(
    Motion.IncrementRank
  )
  expect(
    derived.currentMusicalKey.root
  ).toBe(
    2
  )
  expect(
    derived.currentMusicalKey.rank
  ).toBe(
    3
  )
  expect(
    derived.nextMusicalKey.root
  ).toBe(
    2
  )
  expect(
    derived.nextMusicalKey.rank
  ).toBe(
    4
  )
  expect(
    derived.currentIsCaterpillarPattern
  ).toBe(
    false
  )
  expect(
    derived.nextIsCaterpillarPattern
  ).toBe(
    false
  )
  expect(
    derived.currentTriadOffset
  ).toBe(
    4
  )
  expect(
    derived.nextTriadOffset
  ).toBe(
    4
  )
})
