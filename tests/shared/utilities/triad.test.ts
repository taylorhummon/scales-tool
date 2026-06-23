import { test, expect } from "vitest"

import { MusicalKey } from "@shared/classes/MusicalKey"
import { buildInclusiveRange } from "@shared/utilities/array"
import { getTriadQuality } from "@shared/utilities/triad"


test("getModeQuality() works for major", () => {
  const musicalKey = new MusicalKey({ mode: -2, rank: 0 })
  expect(
    buildInclusiveRange(0, 6).map((triadOffset) => getTriadQuality(musicalKey, triadOffset))
  ).toStrictEqual(
    [ "major", "minor", "minor",  "major",  "major",  "minor", "diminished" ]
  )
})

test("getModeQuality() works for minor", () => {
  const musicalKey = new MusicalKey({ mode: 1, rank: 0 })
  expect(
    buildInclusiveRange(0, 6).map((triadOffset) => getTriadQuality(musicalKey, triadOffset))
  ).toStrictEqual(
    [ "minor", "diminished", "major", "minor", "minor",  "major",  "major" ]
  )
})

test("getModeQuality() works for Dorian", () => {
  const musicalKey = new MusicalKey({ mode: 0, rank: 1 })
  expect(
    buildInclusiveRange(0, 6).map((triadOffset) => getTriadQuality(musicalKey, triadOffset))
  ).toStrictEqual(
    [ "minor", "minor",  "major",  "major", "minor", "diminished", "major",  ]
  )
})
