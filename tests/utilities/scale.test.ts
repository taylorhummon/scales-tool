import { test, expect } from 'vitest';

import { NaturalNote } from "src/enumerations";
import {
  getModeName,
  getModeNote,
  getRootNote,
  getScale,
  getNote,
} from "src/utilities/scale";


test("getModeName() works", () => {
  expect(
    getModeName(NaturalNote.D)
  ).toBe(
    "Dorian"
  );
  expect(
    getModeName(NaturalNote.C)
  ).toBe(
    "Ionian"
  );
  expect(
    getModeName(NaturalNote.B)
  ).toBe(
    "Locrian"
  );
});

test("getModeNote() works", () => {
  expect(
    getModeNote(0)
  ).toBe(
    NaturalNote.D
  );
  expect(
    getModeNote(2)
  ).toBe(
    NaturalNote.C
  );
  expect(
    getModeNote(-3)
  ).toBe(
    NaturalNote.B
  );
});

test("getRootNote() works", () => {
  expect(
    getRootNote(0, 0).name
  ).toBe(
    "D"
  );
  expect(
    getRootNote(2, 1).name
  ).toBe(
    "G"
  );
  expect(
    getRootNote(2, 0).name
  ).toBe(
    "C"
  );
  expect(
    getRootNote(-1, -5).name
  ).toBe(
    "B♭"
  );
});

test("getScale() works", () => {
  expect(
    getScale(0, 0).map((note) => note.name)
  ).toStrictEqual(
    ["F", "C", "G", "D", "A", "E", "B"]
  );
  expect(
    getScale(2, 3).map((note) => note.name)
  ).toStrictEqual(
    ["D", "A", "E", "B", "F♯", "C♯", "G♯"]
  );
  expect(
    getScale(2, 2).map((note) => note.name)
  ).toStrictEqual(
    ["G", "D", "A", "E", "B", "F♯", "C♯"]
  );
  expect(
    getScale(-1, -4).map((note) => note.name)
  ).toStrictEqual(
    ["D♭", "A♭", "E♭", "B♭", "F", "C", "G"]
  );
});

test("getNote() works", () => {
  expect(
    getNote(0, 0, 0).name
  ).toBe(
    "D"
  );
  expect(
    getNote(2, 0, -3).name
  ).toBe(
    "B"
  );
  expect(
    getNote(-1, 4, -3).name
  ).toBe(
    "D♯"
  );
  expect(
    getNote(-2, -5, 0).name
  ).toBe(
    "E♭"
  );
});
