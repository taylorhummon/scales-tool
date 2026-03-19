import { test, expect } from 'vitest';

import { Solfege, Motion } from "src/enumerations";
import type { Note } from "src/classes/Note";
import {
  getKeyDegree,
  getModeNoteName,
  getModeName,
  getNoteBySolfege,
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

test("getNoteBySolfege() works", () => {
  const noteBySolfegeA = getNoteBySolfege(0, 0);
  expect(
    (noteBySolfegeA.get(Solfege.Do) as Note).hour
  ).toBe(
    0
  );
  expect(
    (noteBySolfegeA.get(Solfege.Do) as Note).name
  ).toBe(
    "D"
  );
  expect(
    (noteBySolfegeA.get(Solfege.Re) as Note).hour
  ).toBe(
    2
  );
  expect(
    (noteBySolfegeA.get(Solfege.Re) as Note).name
  ).toBe(
    "E"
  );
  expect(
    (noteBySolfegeA.get(Solfege.Mi) as Note).hour
  ).toBe(
    3
  );
  expect(
    (noteBySolfegeA.get(Solfege.Mi) as Note).name
  ).toBe(
    "F"
  );
  expect(
    (noteBySolfegeA.get(Solfege.Fa) as Note).hour
  ).toBe(
    5
  );
  expect(
    (noteBySolfegeA.get(Solfege.Fa) as Note).name
  ).toBe(
    "G"
  );
  expect(
    (noteBySolfegeA.get(Solfege.Sol) as Note).hour
  ).toBe(
    7
  );
  expect(
    (noteBySolfegeA.get(Solfege.Sol) as Note).name
  ).toBe(
    "A"
  );
  expect(
    (noteBySolfegeA.get(Solfege.La) as Note).hour
  ).toBe(
    9
  );
  expect(
    (noteBySolfegeA.get(Solfege.La) as Note).name
  ).toBe(
    "B"
  );
  expect(
    (noteBySolfegeA.get(Solfege.Ti) as Note).hour
  ).toBe(
    10
  );
  expect(
    (noteBySolfegeA.get(Solfege.Ti) as Note).name
  ).toBe(
    "C"
  );

  const noteBySolfegeB = getNoteBySolfege(-3, 2);
  expect(
    (noteBySolfegeB.get(Solfege.Do) as Note).hour
  ).toBe(
    3
  );
  expect(
    (noteBySolfegeB.get(Solfege.Do) as Note).name
  ).toBe(
    "F"
  );
  expect(
    (noteBySolfegeB.get(Solfege.Re) as Note).hour
  ).toBe(
    4
  );
  expect(
    (noteBySolfegeB.get(Solfege.Re) as Note).name
  ).toBe(
    "G♭"
  );
  expect(
    (noteBySolfegeB.get(Solfege.Mi) as Note).hour
  ).toBe(
    6
  );
  expect(
    (noteBySolfegeB.get(Solfege.Mi) as Note).name
  ).toBe(
    "A♭"
  );
  expect(
    (noteBySolfegeB.get(Solfege.Fa) as Note).hour
  ).toBe(
    8
  );
  expect(
    (noteBySolfegeB.get(Solfege.Fa) as Note).name
  ).toBe(
    "B♭"
  );
  expect(
    (noteBySolfegeB.get(Solfege.Sol) as Note).hour
  ).toBe(
    10
  );
  expect(
    (noteBySolfegeB.get(Solfege.Sol) as Note).name
  ).toBe(
    "C"
  );
  expect(
    (noteBySolfegeB.get(Solfege.La) as Note).hour
  ).toBe(
    11
  );
  expect(
    (noteBySolfegeB.get(Solfege.La) as Note).name
  ).toBe(
    "D♭"
  );
  expect(
    (noteBySolfegeB.get(Solfege.Ti) as Note).hour
  ).toBe(
    1
  );
  expect(
    (noteBySolfegeB.get(Solfege.Ti) as Note).name
  ).toBe(
    "E♭"
  );

  const noteBySolfegeC = getNoteBySolfege(2, -1);
  expect(
    (noteBySolfegeC.get(Solfege.Do) as Note).hour
  ).toBe(
    2
  );
  expect(
    (noteBySolfegeC.get(Solfege.Do) as Note).name
  ).toBe(
    "E"
  );
  expect(
    (noteBySolfegeC.get(Solfege.Re) as Note).hour
  ).toBe(
    4
  );
  expect(
    (noteBySolfegeC.get(Solfege.Re) as Note).name
  ).toBe(
    "F♯"
  );
  expect(
    (noteBySolfegeC.get(Solfege.Mi) as Note).hour
  ).toBe(
    6
  );
  expect(
    (noteBySolfegeC.get(Solfege.Mi) as Note).name
  ).toBe(
    "G♯"
  );
  expect(
    (noteBySolfegeC.get(Solfege.Fa) as Note).hour
  ).toBe(
    7
  );
  expect(
    (noteBySolfegeC.get(Solfege.Fa) as Note).name
  ).toBe(
    "A"
  );
  expect(
    (noteBySolfegeC.get(Solfege.Sol) as Note).hour
  ).toBe(
    9
  );
  expect(
    (noteBySolfegeC.get(Solfege.Sol) as Note).name
  ).toBe(
    "B"
  );
  expect(
    (noteBySolfegeC.get(Solfege.La) as Note).hour
  ).toBe(
    11
  );
  expect(
    (noteBySolfegeC.get(Solfege.La) as Note).name
  ).toBe(
    "C♯"
  );
  expect(
    (noteBySolfegeC.get(Solfege.Ti) as Note).hour
  ).toBe(
    0
  );
  expect(
    (noteBySolfegeC.get(Solfege.Ti) as Note).name
  ).toBe(
    "D"
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
