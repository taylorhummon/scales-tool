import { test, expect } from 'vitest';

import { Motion } from "src/enumerations";
import {
  getKeyDegree,
  getModeNoteName,
  getModeName,
  getRootNote,
  getNotes,
  getSolfege,
  getDotMotionEndHour,
} from "src/utilities/scale";


test("getKeyDegree() works", () => {
  expect(
    getKeyDegree(-2, -2)
  ).toBe(
    0
  );
  expect(
    getKeyDegree(5, 3)
  ).toBe(
    2
  );
  expect(
    getKeyDegree(-3, 3)
  ).toBe(
    -6
  );
});

test("getModeNoteName() works", () => {
  expect(
    getModeNoteName(0)
  ).toBe(
    "D"
  );
  expect(
    getModeNoteName(-2)
  ).toBe(
    "C"
  );
  expect(
    getModeNoteName(3)
  ).toBe(
    "B"
  );
});

test("getModeName() works", () => {
  expect(
    getModeName(0)
  ).toBe(
    "Dorian"
  );
  expect(
    getModeName(-2)
  ).toBe(
    "Ionian"
  );
  expect(
    getModeName(3)
  ).toBe(
    "Locrian"
  );
});

test("getRootNote() works", () => {
  expect(
    getRootNote(getNotes(0, 0), 0).name
  ).toBe(
    "D"
  );
  expect(
    getRootNote(getNotes(2, -1), -1).name
  ).toBe(
    "E"
  );
  expect(
    getRootNote(getNotes(2, 0), 0).name
  ).toBe(
    "E"
  );
  expect(
    getRootNote(getNotes(-1, 3), 3).name
  ).toBe(
    "G"
  );
});

test("getNotes() works", () => {
  expect(
    getNotes(0, 0).map((note) => note.name)
  ).toStrictEqual(
    ["F", "C", "G", "D", "A", "E", "B"]
  );
  expect(
    getNotes(2, -1).map((note) => note.name)
  ).toStrictEqual(
    ["D", "A", "E", "B", "F♯", "C♯", "G♯"]
  );
  expect(
    getNotes(2, 0).map((note) => note.name)
  ).toStrictEqual(
    ["G", "D", "A", "E", "B", "F♯", "C♯"]
  );
  expect(
    getNotes(-1, 3).map((note) => note.name)
  ).toStrictEqual(
    ["D♭", "A♭", "E♭", "B♭", "F", "C", "G"]
  );
});

test("getSolfege() works", () => {
  expect(
    getSolfege(0, 3)
  ).toBe(
    "do"
  );
  expect(
    getSolfege(0, 0)
  ).toBe(
    "mi"
  );
  expect(
    getSolfege(0, 1)
  ).toBe(
    "ti"
  );

  expect(
    getSolfege(-2, 3)
  ).toBe(
    "re"
  );
  expect(
    getSolfege(-2, 0)
  ).toBe(
    "fa"
  );
  expect(
    getSolfege(-2, 1)
  ).toBe(
    "do"
  );
});

test("getDotMotionEndHour() works", () => {
  expect(
    getDotMotionEndHour(Motion.IncrementRoot, 3)
  ).toBe(
    10
  );
  expect(
    getDotMotionEndHour(Motion.IncrementRoot, 8)
  ).toBe(
    3
  );
  expect(
    getDotMotionEndHour(Motion.DecrementRoot, 3)
  ).toBe(
    8
  );
  expect(
    getDotMotionEndHour(Motion.DecrementRoot, 8)
  ).toBe(
    1
  );
  expect(
    getDotMotionEndHour(Motion.IncrementMode, 3)
  ).toBe(
    8
  );
  expect(
    getDotMotionEndHour(Motion.IncrementMode, 8)
  ).toBe(
    1
  );
  expect(
    getDotMotionEndHour(Motion.DecrementMode, 3)
  ).toBe(
    10
  );
  expect(
    getDotMotionEndHour(Motion.DecrementMode, 8)
  ).toBe(
    3
  );
});
