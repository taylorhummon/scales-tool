import { test, expect } from 'vitest';

import { Solfege, Motion } from "src/enumerations";
import {
  getKeyDegree,
  getModeNoteName,
  getModeName,
  getRootNoteHour,
  getRootNoteName,
  getNotes,
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

test("getRootNoteHour() works", () => {
  expect(
    getRootNoteHour(0)
  ).toBe(
    0
  );
  expect(
    getRootNoteHour(-2)
  ).toBe(
    10
  );
  expect(
    getRootNoteHour(3)
  ).toBe(
    9
  );
});

test("getRootNoteName() works", () => {
  expect(
    getRootNoteName(0, -2)
  ).toBe(
    "D"
  );
  expect(
    getRootNoteName(0, 3)
  ).toBe(
    "D"
  );
  expect(
    getRootNoteName(-1, -3)
  ).toBe(
    "G"
  );
  expect(
    getRootNoteName(10, 2)
  ).toBe(
    "B♯"
  );
});

test("getNotes() works", () => {
  expect(
    getNotes(0, 0)
  ).toStrictEqual(
    [
      {
        "hour": 0,
        "name": "D",
        "solfege": Solfege.Do,
      },
      {
        "hour": 2,
        "name": "E",
        "solfege": Solfege.Re,
      },
      {
        "hour": 3,
        "name": "F",
        "solfege": Solfege.Mi,
      },
      {
        "hour": 5,
        "name": "G",
        "solfege": Solfege.Fa,
      },
      {
        "hour": 7,
        "name": "A",
        "solfege": Solfege.Sol,
      },
      {
        "hour": 9,
        "name": "B",
        "solfege": Solfege.La,
      },
      {
        "hour": 10,
        "name": "C",
        "solfege": Solfege.Ti,
      },
    ]
  );
  expect(
    getNotes(-3, 2)
  ).toStrictEqual(
    [
      {
        "hour": 3,
        "name": "F",
        "solfege": Solfege.Do,
      },
      {
        "hour": 4,
        "name": "G♭",
        "solfege": Solfege.Re,
      },
      {
        "hour": 6,
        "name": "A♭",
        "solfege": Solfege.Mi,
      },
      {
        "hour": 8,
        "name": "B♭",
        "solfege": Solfege.Fa,
      },
      {
        "hour": 10,
        "name": "C",
        "solfege": Solfege.Sol,
      },
      {
        "hour": 11,
        "name": "D♭",
        "solfege": Solfege.La,
      },
      {
        "hour": 1,
        "name": "E♭",
        "solfege": Solfege.Ti,
      },
    ]
  );
  expect(
    getNotes(2, -1)
  ).toStrictEqual(
    [
      {
        "hour": 2,
        "name": "E",
        "solfege": Solfege.Do,
      },
      {
        "hour": 4,
        "name": "F♯",
        "solfege": Solfege.Re,
      },
      {
        "hour": 6,
        "name": "G♯",
        "solfege": Solfege.Mi,
      },
      {
        "hour": 7,
        "name": "A",
        "solfege": Solfege.Fa,
      },
      {
        "hour": 9,
        "name": "B",
        "solfege": Solfege.Sol,
      },
      {
        "hour": 11,
        "name": "C♯",
        "solfege": Solfege.La,
      },
      {
        "hour": 0,
        "name": "D",
        "solfege": Solfege.Ti,
      },
    ]
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
