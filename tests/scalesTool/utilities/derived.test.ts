import { test, expect } from "vitest"
import { renderHook } from "@testing-library/react"

import { AnimationOption } from "@scalesTool/utilities/clock"
import { useDerived } from "@scalesTool/utilities/derived"

import { Motion } from "@scalesTool/utilities/motion"


test("useDerived() works", () => {
  const state = {
    isUsingAnimation: true,
    isUntangled: false,
    isUsingSymmetrySpotlight: false,
    isUsingSolfege: true,
    isAnchoringRoot: false,
    animationOption: AnimationOption.Ballet,
    motion: Motion.IncrementDegree,
    root: 2,
    degree: 3,
  }
  const { result } = renderHook(() => useDerived(state))
  const derived = result.current
  expect(
    derived.clockSettings.isUntangled
  ).toBe(
    false
  )
  expect(
    derived.clockSettings.isUsingSymmetrySpotlight
  ).toBe(
    false
  )
  expect(
    derived.clockSettings.isUsingSolfege
  ).toBe(
    true
  )
  expect(
    derived.clockSettings.isUsingAnimation
  ).toBe(
    true
  )
  expect(
    derived.motion
  ).toBe(
    Motion.IncrementDegree
  )
  expect(
    derived.currentMusicalKey.root
  ).toBe(
    2
  )
  expect(
    derived.currentMusicalKey.degree
  ).toBe(
    3
  )
  expect(
    derived.nextMusicalKey.root
  ).toBe(
    2
  )
  expect(
    derived.nextMusicalKey.degree
  ).toBe(
    4
  )
})
