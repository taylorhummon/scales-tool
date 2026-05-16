import { test, expect } from "vitest"
import { renderHook } from "@testing-library/react"

import { useDerived } from "@scalesTool/utilities/derived"

import { Motion } from "@shared/utilities/motion"


test("useDerived() works", () => {
  const state = {
    isUntangled: false,
    isUsingSymmetryDot: false,
    isUsingSolfege: true,
    isUsingAnimation: true,
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
    derived.clockSettings.isUsingSymmetryDot
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
    derived.musicalKey.root
  ).toBe(
    2
  )
  expect(
    derived.musicalKey.degree
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
