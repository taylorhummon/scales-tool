import { test, expect } from "vitest"

import { buildInclusiveRange } from "@shared/utilities/array"
import {
  solfegeLetterFromButterflyIndex,
  solfegeLetterFromCaterpillarIndex,
  butterflyIndexFromSolfegeLetter,
  caterpillarIndexFromSolfegeLetter,
} from "@shared/utilities/solfegeLetter"


test("solfegeLetterFromButterflyIndex() works", () => {
  expect(
    buildInclusiveRange(-3, 3).map((index) => solfegeLetterFromButterflyIndex(index))
  ).toStrictEqual(
    [ "sol", "la", "ti", "do", "re", "mi", "fa" ]
  )
})

test("solfegeLetterFromCaterpillarIndex() works", () => {
  expect(
    buildInclusiveRange(-3, 3).map((index) => solfegeLetterFromCaterpillarIndex(index))
  ).toStrictEqual(
    [ "mi", "ti", "fa", "do", "sol", "re", "la" ]
  )
})

test("butterflyIndexFromSolfegeLetter() works", () => {
  expect(
    buildInclusiveRange(-3, 3).map(
      (index) => butterflyIndexFromSolfegeLetter(solfegeLetterFromButterflyIndex(index))
    )
  ).toStrictEqual(
    [ -3, -2, -1, 0, 1, 2, 3 ]
  )
})

test("caterpillarIndexFromSolfegeLetter() works", () => {
  expect(
    buildInclusiveRange(-3, 3).map(
      (index) => caterpillarIndexFromSolfegeLetter(solfegeLetterFromCaterpillarIndex(index))
    )
  ).toStrictEqual(
    [ -3, -2, -1, 0, 1, 2, 3 ]
  )
})
