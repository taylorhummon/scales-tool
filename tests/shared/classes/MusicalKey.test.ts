import { test, expect } from "vitest"

import { MusicalKey } from "@shared/classes/MusicalKey"
import { arrayFromMap } from "@shared/utilities/map"
import { NaturalNote } from "@shared/utilities/naturalNote"


test("new MusicalKey() works with different parameter subsets", () => {
  expect(
    new MusicalKey({ mode: 0, root: 0, degree: 0 }).mode
  ).toBe(
    0
  )
  expect(
    new MusicalKey({ mode: 0, root: 0, degree: 0 }).root
  ).toBe(
    0
  )
  expect(
    new MusicalKey({ mode: 0, root: 0, degree: 0 }).degree
  ).toBe(
    0
  )

  expect(
    new MusicalKey({ mode: 1, root: 3, degree: 2 }).mode
  ).toBe(
    1
  )
  expect(
    new MusicalKey({ mode: 1, root: 3, degree: 2 }).root
  ).toBe(
    3
  )
  expect(
    new MusicalKey({ mode: 1, root: 3, degree: 2 }).degree
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
    new MusicalKey({ mode: 1, root: 3 }).degree
  ).toBe(
    2
  )

  expect(
    new MusicalKey({ mode: 1, degree: 2 }).mode
  ).toBe(
    1
  )
  expect(
    new MusicalKey({ mode: 1, degree: 2 }).root
  ).toBe(
    3
  )
  expect(
    new MusicalKey({ mode: 1, degree: 2 }).degree
  ).toBe(
    2
  )

  expect(
    new MusicalKey({ root: 3, degree: 2 }).mode
  ).toBe(
    1
  )
  expect(
    new MusicalKey({ root: 3, degree: 2 }).root
  ).toBe(
    3
  )
  expect(
    new MusicalKey({ root: 3, degree: 2 }).degree
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
    new MusicalKey({ degree: 2 }).mode
  }).toThrow()
  expect(() => {
    new MusicalKey({ mode: 1, root: 3, degree: 4 }).mode
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
    musicalKey.symmetryNote.name
  ).toBe(
    "D"
  )
  expect(
    musicalKey.headNote.name
  ).toBe(
    "B"
  )
  expect(
    musicalKey.tailNote.name
  ).toBe(
    "F"
  )
  expect(
    arrayFromMap(musicalKey.noteBySolfegeLetter, (_note, solfegeLetter) => solfegeLetter)
  ).toStrictEqual(
    [ "do", "re", "mi", "fa", "sol", "la", "ti" ]
  )
  expect(
    arrayFromMap(musicalKey.noteBySolfegeLetter, (note, _solfegeLetter) => note.name)
  ).toStrictEqual(
    [ "D", "E", "F", "G", "A", "B", "C" ]
  )
  expect(
    arrayFromMap(musicalKey.noteByNaturalNote, (_note, naturalNote) => naturalNote)
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F", "G" ]
  )
  expect(
    arrayFromMap(musicalKey.noteByNaturalNote, (note, _naturalNote) => note.name)
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F", "G" ]
  )
})

test("MusicalKey works for A-Major", () => {
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
    musicalKey.symmetryNote.name
  ).toBe(
    "B"
  )
  expect(
    musicalKey.headNote.name
  ).toBe(
    "G♯"
  )
  expect(
    musicalKey.tailNote.name
  ).toBe(
    "D"
  )
  expect(
    arrayFromMap(musicalKey.noteBySolfegeLetter, (_note, solfegeLetter) => solfegeLetter)
  ).toStrictEqual(
    [ "do", "re", "mi", "fa", "sol", "la", "ti" ]
  )
  expect(
    arrayFromMap(musicalKey.noteBySolfegeLetter, (note, _solfegeLetter) => note.name)
  ).toStrictEqual(
    [ "A", "B", "C♯", "D", "E", "F♯", "G♯" ]
  )
  expect(
    arrayFromMap(musicalKey.noteByNaturalNote, (_note, naturalNote) => naturalNote)
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F", "G" ]
  )
  expect(
    arrayFromMap(musicalKey.noteByNaturalNote, (note, _naturalNote) => note.name)
  ).toStrictEqual(
    [ "A", "B", "C♯", "D", "E", "F♯", "G♯" ]
  )
})

test("MusicalKey works for G-Minor", () => {
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
    musicalKey.symmetryNote.name
  ).toBe(
    "C"
  )
  expect(
    musicalKey.headNote.name
  ).toBe(
    "A"
  )
  expect(
    musicalKey.tailNote.name
  ).toBe(
    "E♭"
  )
  expect(
    arrayFromMap(musicalKey.noteBySolfegeLetter, (_note, solfegeLetter) => solfegeLetter)
  ).toStrictEqual(
    [ "do", "re", "mi", "fa", "sol", "la", "ti" ]
  )
  expect(
    arrayFromMap(musicalKey.noteBySolfegeLetter, (note, _solfegeLetter) => note.name)
  ).toStrictEqual(
    [ "G", "A", "B♭", "C", "D", "E♭", "F" ]
  )
  expect(
    arrayFromMap(musicalKey.noteByNaturalNote, (_note, naturalNote) => naturalNote)
  ).toStrictEqual(
    [ "A", "B", "C", "D", "E", "F", "G" ]
  )
  expect(
    arrayFromMap(musicalKey.noteByNaturalNote, (note, _naturalNote) => note.name)
  ).toStrictEqual(
    [ "A", "B♭", "C", "D", "E♭", "F", "G" ]
  )
})
