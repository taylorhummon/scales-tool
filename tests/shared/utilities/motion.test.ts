import { test, expect } from "vitest"

import { MusicalKey } from "@shared/classes/MusicalKey"
import {
  Motion,
  canPerformMotion,
  getNextMusicalKey,
  getNextIsCaterpillarPattern,
  getWillIncrementMode,
  getWillDecrementMode,
  getWillIncrementRoot,
  getWillDecrementRoot,
  getWillIncrementRank,
  getWillDecrementRank,
} from "@shared/utilities/motion"


test("canPerformMotion() works for Dorian D", () => {
  const musicalKey = new MusicalKey({ mode: 0, root: 0 })
  expect(
    canPerformMotion({ motion: Motion.IncrementRoot, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.DecrementRoot, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.IncrementRank, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.DecrementRank, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.IncrementBoth, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.DecrementBoth, musicalKey })
  ).toBe(
    true
  )
})

test("canPerformMotion() works for 14 sharps", () => {
  const musicalKey = new MusicalKey({ mode: -2, rank: 14 })
  expect(
    canPerformMotion({ motion: Motion.IncrementRoot, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.DecrementRoot, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.IncrementRank, musicalKey })
  ).toBe(
    false
  )
  expect(
    canPerformMotion({ motion: Motion.DecrementRank, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.IncrementBoth, musicalKey })
  ).toBe(
    false
  )
  expect(
    canPerformMotion({ motion: Motion.DecrementBoth, musicalKey })
  ).toBe(
    true
  )
})

test("canPerformMotion() works for 14 flats", () => {
  const musicalKey = new MusicalKey({ mode: -1, rank: -14 })
  expect(
    canPerformMotion({ motion: Motion.IncrementRoot, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.DecrementRoot, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.IncrementRank, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.DecrementRank, musicalKey })
  ).toBe(
    false
  )
  expect(
    canPerformMotion({ motion: Motion.IncrementBoth, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.DecrementBoth, musicalKey })
  ).toBe(
    false
  )
})

test("canPerformMotion() works for mode = -3", () => {
  const musicalKey = new MusicalKey({ mode: -3, root: 2 })
  expect(
    canPerformMotion({ motion: Motion.IncrementRoot, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.DecrementRoot, musicalKey })
  ).toBe(
    false
  )
  expect(
    canPerformMotion({ motion: Motion.IncrementRank, musicalKey })
  ).toBe(
    false
  )
  expect(
    canPerformMotion({ motion: Motion.DecrementRank, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.IncrementBoth, musicalKey })
  ).toBe(
    true
  )
  expect(
    canPerformMotion({ motion: Motion.DecrementBoth, musicalKey })
  ).toBe(
    true
  )
})

test("getNextMusicalKey() works", () => {
  const currentMusicalKey = new MusicalKey({ mode: 0, root: 0 })
  expect(
    getNextMusicalKey({ motion: Motion.IncrementRoot, currentMusicalKey }).root
  ).toBe(
    1
  )
  expect(
    getNextMusicalKey({ motion: Motion.IncrementRoot, currentMusicalKey }).rank
  ).toBe(
    0
  )
  expect(
    getNextMusicalKey({ motion: Motion.DecrementRoot, currentMusicalKey }).root
  ).toBe(
    -1
  )
  expect(
    getNextMusicalKey({ motion: Motion.DecrementRoot, currentMusicalKey }).rank
  ).toBe(
    0
  )
  expect(
    getNextMusicalKey({ motion: Motion.IncrementRank, currentMusicalKey }).root
  ).toBe(
    0
  )
  expect(
    getNextMusicalKey({ motion: Motion.IncrementRank, currentMusicalKey }).rank
  ).toBe(
    1
  )
  expect(
    getNextMusicalKey({ motion: Motion.DecrementRank, currentMusicalKey }).root
  ).toBe(
    0
  )
  expect(
    getNextMusicalKey({ motion: Motion.DecrementRank, currentMusicalKey }).rank
  ).toBe(
    -1
  )
  expect(
    getNextMusicalKey({ motion: Motion.IncrementBoth, currentMusicalKey }).root
  ).toBe(
    1
  )
  expect(
    getNextMusicalKey({ motion: Motion.IncrementBoth, currentMusicalKey }).rank
  ).toBe(
    1
  )
  expect(
    getNextMusicalKey({ motion: Motion.DecrementBoth, currentMusicalKey }).root
  ).toBe(
    -1
  )
  expect(
    getNextMusicalKey({ motion: Motion.DecrementBoth, currentMusicalKey }).rank
  ).toBe(
    -1
  )
})

test("getNextIsCaterpillarPattern() works", () => {
  expect(
    getNextIsCaterpillarPattern({ motion: Motion.ToCaterpillarPattern, currentIsCaterpillarPattern: false })
  ).toBe(
    true
  )
  expect(
    getNextIsCaterpillarPattern({ motion: Motion.ToButterlflyPattern, currentIsCaterpillarPattern: true })
  ).toBe(
    false
  )
  expect(
    getNextIsCaterpillarPattern({ motion: Motion.DecrementBoth, currentIsCaterpillarPattern: false })
  ).toBe(
    false
  )
  expect(
    getNextIsCaterpillarPattern({ motion: Motion.DecrementBoth, currentIsCaterpillarPattern: true })
  ).toBe(
    true
  )
})

test("getWillIncrementMode() works", () => {
  expect(
    getWillIncrementMode(Motion.IncrementRoot)
  ).toBe(
    true
  )
  expect(
    getWillIncrementMode(Motion.IncrementRank)
  ).toBe(
    false
  )
  expect(
    getWillIncrementMode(Motion.IncrementBoth)
  ).toBe(
    false
  )
  expect(
    getWillIncrementMode(Motion.DecrementRoot)
  ).toBe(
    false
  )
  expect(
    getWillIncrementMode(Motion.DecrementRank)
  ).toBe(
    true
  )
  expect(
    getWillIncrementMode(Motion.DecrementBoth)
  ).toBe(
    false
  )
})

test("getWillDecrementMode() works", () => {
  expect(
    getWillDecrementMode(Motion.IncrementRoot)
  ).toBe(
    false
  )
  expect(
    getWillDecrementMode(Motion.IncrementRank)
  ).toBe(
    true
  )
  expect(
    getWillDecrementMode(Motion.IncrementBoth)
  ).toBe(
    false
  )
  expect(
    getWillDecrementMode(Motion.DecrementRoot)
  ).toBe(
    true
  )
  expect(
    getWillDecrementMode(Motion.DecrementRank)
  ).toBe(
    false
  )
  expect(
    getWillDecrementMode(Motion.DecrementBoth)
  ).toBe(
    false
  )
})

test("getWillIncrementRoot() works", () => {
  expect(
    getWillIncrementRoot(Motion.IncrementRoot)
  ).toBe(
    true
  )
  expect(
    getWillIncrementRoot(Motion.IncrementRank)
  ).toBe(
    false
  )
  expect(
    getWillIncrementRoot(Motion.IncrementBoth)
  ).toBe(
    true
  )
})

test("getWillDecrementRoot() works", () => {
  expect(
    getWillDecrementRoot(Motion.DecrementRoot)
  ).toBe(
    true
  )
  expect(
    getWillDecrementRoot(Motion.DecrementRank)
  ).toBe(
    false
  )
  expect(
    getWillDecrementRoot(Motion.DecrementBoth)
  ).toBe(
    true
  )
})

test("getWillIncrementRank() works", () => {
  expect(
    getWillIncrementRank(Motion.IncrementRoot)
  ).toBe(
    false
  )
  expect(
    getWillIncrementRank(Motion.IncrementRank)
  ).toBe(
    true
  )
  expect(
    getWillIncrementRank(Motion.IncrementBoth)
  ).toBe(
    true
  )
})

test("getWillDecrementRank() works", () => {
  expect(
    getWillDecrementRank(Motion.DecrementRoot)
  ).toBe(
    false
  )
  expect(
    getWillDecrementRank(Motion.DecrementRank)
  ).toBe(
    true
  )
  expect(
    getWillDecrementRank(Motion.DecrementBoth)
  ).toBe(
    true
  )
})
