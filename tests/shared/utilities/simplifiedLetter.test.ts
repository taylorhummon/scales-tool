import { test, expect } from "vitest"

import { buildInclusiveRange } from "@shared/utilities/array"
import {
  simplifiedLetterFromButterflyIndex,
  simplifiedLetterFromCaterpillarIndex,
  butterflyIndexFromSimplifiedLetter,
  caterpillarIndexFromSimplifiedLetter,
} from "@shared/utilities/simplifiedLetter"


test("simplifiedLetterFromButterflyIndex() works", () => {
  expect(
    buildInclusiveRange(-3, 3).map((index) => simplifiedLetterFromButterflyIndex(index))
  ).toStrictEqual(
    [ "a", "b", "c", "d", "e", "f", "g" ]
  )
})

test("simplifiedLetterFromCaterpillarIndex() works", () => {
  expect(
    buildInclusiveRange(-3, 3).map((index) => simplifiedLetterFromCaterpillarIndex(index))
  ).toStrictEqual(
    [ "f", "c", "g", "d", "a", "e", "b" ]
  )
})

test("butterflyIndexFromSolfegeLetter() works", () => {
  expect(
    buildInclusiveRange(-3, 3).map(
      (index) => butterflyIndexFromSimplifiedLetter(simplifiedLetterFromButterflyIndex(index))
    )
  ).toStrictEqual(
    [ -3, -2, -1, 0, 1, 2, 3 ]
  )
})

test("caterpillarIndexFromSolfegeLetter() works", () => {
  expect(
    buildInclusiveRange(-3, 3).map(
      (index) => caterpillarIndexFromSimplifiedLetter(simplifiedLetterFromCaterpillarIndex(index))
    )
  ).toStrictEqual(
    [ -3, -2, -1, 0, 1, 2, 3 ]
  )
})
