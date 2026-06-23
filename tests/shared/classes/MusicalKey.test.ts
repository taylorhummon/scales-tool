import { test, expect } from "vitest"

import { MusicalKey } from "@shared/classes/MusicalKey"
import { buildInclusiveRange } from "@shared/utilities/array"
import { NaturalNote, NATURAL_NOTES } from "@shared/utilities/naturalNote"
import { SOLFEGE_LETTERS } from "@shared/utilities/solfegeLetter"
import { SIMPLIFIED_LETTERS } from "@shared/utilities/simplifiedLetter"


test("new MusicalKey() works with different parameter subsets", () => {
  expect(
    new MusicalKey({ mode: 0, root: 0, rank: 0 }).mode
  ).toBe(
    0
  )
  expect(
    new MusicalKey({ mode: 0, root: 0, rank: 0 }).root
  ).toBe(
    0
  )
  expect(
    new MusicalKey({ mode: 0, root: 0, rank: 0 }).rank
  ).toBe(
    0
  )

  expect(
    new MusicalKey({ mode: 1, root: 3, rank: 2 }).mode
  ).toBe(
    1
  )
  expect(
    new MusicalKey({ mode: 1, root: 3, rank: 2 }).root
  ).toBe(
    3
  )
  expect(
    new MusicalKey({ mode: 1, root: 3, rank: 2 }).rank
  ).toBe(
    2
  )

  expect(
    new MusicalKey({ mode: 1, root: 3 }).mode
  ).toBe(
    1
  )
  expect(
    new MusicalKey({ mode: 1, root: 3 }).root
  ).toBe(
    3
  )
  expect(
    new MusicalKey({ mode: 1, root: 3 }).rank
  ).toBe(
    2
  )

  expect(
    new MusicalKey({ mode: 1, rank: 2 }).mode
  ).toBe(
    1
  )
  expect(
    new MusicalKey({ mode: 1, rank: 2 }).root
  ).toBe(
    3
  )
  expect(
    new MusicalKey({ mode: 1, rank: 2 }).rank
  ).toBe(
    2
  )

  expect(
    new MusicalKey({ root: 3, rank: 2 }).mode
  ).toBe(
    1
  )
  expect(
    new MusicalKey({ root: 3, rank: 2 }).root
  ).toBe(
    3
  )
  expect(
    new MusicalKey({ root: 3, rank: 2 }).rank
  ).toBe(
    2
  )

  expect(() => {
    new MusicalKey({ mode: 1 }).mode
  }).toThrow()
  expect(() => {
    new MusicalKey({ root: 3 }).mode
  }).toThrow()
  expect(() => {
    new MusicalKey({ rank: 2 }).mode
  }).toThrow()
  expect(() => {
    new MusicalKey({ mode: 1, root: 3, rank: 4 }).mode
  }).toThrow()
})

test("MusicalKey works for Dorian D", () => {
  const musicalKey = new MusicalKey({ mode: 0, root: 0 })
  expect(
    musicalKey.modeName
  ).toBe(
    "Dorian"
  )
  expect(
    musicalKey.modeNote
  ).toBe(
    NaturalNote.D
  )
  expect(
    musicalKey.rootNote.name
  ).toBe(
    "D"
  )
  expect(
    musicalKey.rankNote.name
  ).toBe(
    "D"
  )
  expect(
    buildInclusiveRange(-3, 3).map((index) => musicalKey.noteFromCaterpillarIndex(index).name)
  ).toStrictEqual(
    [ "F", "C", "G", "D", "A", "E", "B" ]
  )
  expect(
    NATURAL_NOTES.map((naturalNote) => musicalKey.noteFromNaturalNote(naturalNote).name)
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F", "G" ]
  )
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) => musicalKey.noteFromSolfegeLetter(solfegeLetter).name)
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F", "G" ]
  )
  expect(
    SIMPLIFIED_LETTERS.map((simplifiedLetter) => musicalKey.noteFromSimplifiedLetter(simplifiedLetter).name)
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F", "G" ]
  )
  expect(
    NATURAL_NOTES.map((naturalNote) => musicalKey.simplifiedLetterFromNaturalNote(naturalNote))
  ).toStrictEqual(
    [ "a", "b", "c", "d", "e", "f", "g" ]
  )
})

test("MusicalKey works for A major", () => {
  const musicalKey = new MusicalKey({ mode: -2, root: 1 })
  expect(
    musicalKey.modeName
  ).toBe(
    "Major"
  )
  expect(
    musicalKey.modeNote
  ).toBe(
    NaturalNote.C
  )
  expect(
    musicalKey.rootNote.name
  ).toBe(
    "A"
  )
  expect(
    musicalKey.rankNote.name
  ).toBe(
    "B"
  )
  expect(
    buildInclusiveRange(-3, 3).map((index) => musicalKey.noteFromCaterpillarIndex(index).name)
  ).toStrictEqual(
    [ "D", "A", "E", "B", "F♯", "C♯", "G♯" ]
  )
  expect(
    NATURAL_NOTES.map((naturalNote) => musicalKey.noteFromNaturalNote(naturalNote).name)
  ).toStrictEqual(
    [ "A", "B", "C♯", "D", "E", "F♯", "G♯" ]
  )
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) => musicalKey.noteFromSolfegeLetter(solfegeLetter).name)
  ).toStrictEqual(
    [ "E", "F♯", "G♯", "A", "B", "C♯", "D" ]
  )
  expect(
    SIMPLIFIED_LETTERS.map((simplifiedLetter) => musicalKey.noteFromSimplifiedLetter(simplifiedLetter).name)
  ).toStrictEqual(
    [ "F♯", "G♯", "A", "B", "C♯", "D", "E" ]
  )
  expect(
    NATURAL_NOTES.map((naturalNote) => musicalKey.simplifiedLetterFromNaturalNote(naturalNote))
  ).toStrictEqual(
    [ "c", "d", "e", "f", "g", "a", "b" ]
  )
})

test("MusicalKey works for G minor", () => {
  const musicalKey = new MusicalKey({ mode: 1, root: -1 })
  expect(
    musicalKey.modeName
  ).toBe(
    "Minor"
  )
  expect(
    musicalKey.modeNote
  ).toBe(
    NaturalNote.A
  )
  expect(
    musicalKey.rootNote.name
  ).toBe(
    "G"
  )
  expect(
    musicalKey.rankNote.name
  ).toBe(
    "C"
  )
  expect(
    buildInclusiveRange(-3, 3).map((index) => musicalKey.noteFromCaterpillarIndex(index).name)
  ).toStrictEqual(
    [ "E♭", "B♭", "F", "C", "G", "D", "A" ]
  )
  expect(
    NATURAL_NOTES.map((naturalNote) => musicalKey.noteFromNaturalNote(naturalNote).name)
  ).toStrictEqual(
    [ "A", "B♭", "C", "D", "E♭", "F", "G" ]
  )
  expect(
    SOLFEGE_LETTERS.map((solfegeLetter) => musicalKey.noteFromSolfegeLetter(solfegeLetter).name)
  ).toStrictEqual(
    [ "D", "E♭", "F", "G", "A", "B♭", "C" ]
  )
  expect(
    SIMPLIFIED_LETTERS.map((simplifiedLetter) => musicalKey.noteFromSimplifiedLetter(simplifiedLetter).name)
  ).toStrictEqual(
    [ "G", "A", "B♭", "C", "D", "E♭", "F" ]
  )
  expect(
    NATURAL_NOTES.map((naturalNote) => musicalKey.simplifiedLetterFromNaturalNote(naturalNote))
  ).toStrictEqual(
    [ "b", "c", "d", "e", "f", "g", "a" ]
  )
})
