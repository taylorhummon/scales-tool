import { test, expect } from "vitest"

import { Note, buildNote } from "@scalesTool/classes/Note"
import { NaturalNote } from "@scalesTool/utilities/naturalNote"


test("Note works", () => {
  const note1 = new Note({ value: 0 })
  expect(
    note1.value
  ).toBe(
    0
  )
  expect(
    note1.naturalNote
  ).toBe(
    NaturalNote.D
  )
  expect(
    note1.sharpsCount
  ).toBe(
    0
  )
  expect(
    note1.name
  ).toBe(
    "D"
  )

  const note2 = new Note({ value: -2 })
  expect(
    note2.value
  ).toBe(
    -2
  )
  expect(
    note2.naturalNote
  ).toBe(
    NaturalNote.C
  )
  expect(
    note2.sharpsCount
  ).toBe(
    0
  )
  expect(
    note2.name
  ).toBe(
    "C"
  )

  const note3 = new Note({ value: -4 })
  expect(
    note3.value
  ).toBe(
    -4
  )
  expect(
    note3.naturalNote
  ).toBe(
    NaturalNote.B
  )
  expect(
    note3.sharpsCount
  ).toBe(
    -1
  )
  expect(
    note3.name
  ).toBe(
    "B♭"
  )

  const note4 = new Note({ value: 7 })
  expect(
    note4.value
  ).toBe(
    7
  )
  expect(
    note4.naturalNote
  ).toBe(
    NaturalNote.D
  )
  expect(
    note4.sharpsCount
  ).toBe(
    1
  )
  expect(
    note4.name
  ).toBe(
    "D♯"
  )

  const note5 = new Note({ value: 4 })
  expect(
    note5.value
  ).toBe(
    4
  )
  expect(
    note5.naturalNote
  ).toBe(
    NaturalNote.F
  )
  expect(
    note5.sharpsCount
  ).toBe(
    1
  )
  expect(
    note5.name
  ).toBe(
    "F♯"
  )
})

test("buildNote() works", () => {
  expect(
    buildNote({
      naturalNote: NaturalNote.D,
      sharpsCount: 0,
    }).name
  ).toBe(
    "D"
  )

  expect(
    buildNote({
      naturalNote: NaturalNote.C,
      sharpsCount: 0,
    }).name
  ).toBe(
    "C"
  )

  expect(
    buildNote({
      naturalNote: NaturalNote.B,
      sharpsCount: -1,
    }).name
  ).toBe(
    "B♭"
  )

  expect(
    buildNote({
      naturalNote: NaturalNote.D,
      sharpsCount: 1,
    }).name
  ).toBe(
    "D♯"
  )

  expect(
    buildNote({
      naturalNote: NaturalNote.F,
      sharpsCount: 1,
    }).name
  ).toBe(
    "F♯"
  )

  expect(
    buildNote({
      naturalNote: NaturalNote.G,
      sharpsCount: -2,
    }).name
  ).toBe(
    "G♭♭"
  )

  expect(
    buildNote({
      naturalNote: NaturalNote.G,
      sharpsCount: 2,
    }).name
  ).toBe(
    "G♯♯"
  )
})
