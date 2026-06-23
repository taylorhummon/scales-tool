import { test, expect } from "vitest"

import { buildInclusiveRange } from "@shared/utilities/array"
import {
  naturalNoteFromButterflyIndex,
  naturalNoteFromCaterpillarIndex,
  butterflyIndexFromNaturalNote,
  caterpillarIndexFromNaturalNote,
} from "@shared/utilities/naturalNote"


test("naturalNoteFromButterflyIndex() works", () => {
  expect(
    buildInclusiveRange(-3, 3).map((index) => naturalNoteFromButterflyIndex(index))
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F", "G" ]
  )
})

test("naturalNoteFromCaterpillarIndex() works", () => {
  expect(
    buildInclusiveRange(-3, 3).map((index) => naturalNoteFromCaterpillarIndex(index))
  ).toStrictEqual(
    [ "F", "C", "G", "D", "A", "E", "B" ]
  )
})

test("butterflyIndexFromNaturalNote() works", () => {
  expect(
    buildInclusiveRange(-3, 3).map(
      (index) => butterflyIndexFromNaturalNote(naturalNoteFromButterflyIndex(index))
    )
  ).toStrictEqual(
    [ -3, -2, -1, 0, 1, 2, 3 ]
  )
})

test("caterpillarIndexFromNaturalNote() works", () => {
  expect(
    buildInclusiveRange(-3, 3).map(
      (index) => caterpillarIndexFromNaturalNote(naturalNoteFromCaterpillarIndex(index))
    )
  ).toStrictEqual(
    [ -3, -2, -1, 0, 1, 2, 3 ]
  )
})
