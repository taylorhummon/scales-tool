import { test, expect } from 'vitest';

import { derivedFromState } from "src/utilities/derived";


test("derivedFromState() includes the rootNumber", () => {
  expect(
    derivedFromState(0, 3, 2).rootNumber
  ).toBe(
    3
  );
  expect(
    derivedFromState(0, -2, -2).rootNumber
  ).toBe(
    -2
  );
  expect(
    derivedFromState(0, 8, -1).rootNumber
  ).toBe(
    8
  );
  expect(
    derivedFromState(0, -5, 2).rootNumber
  ).toBe(
    -5
  );
});

test("derivedFromState() includes the modeNumber", () => {
  expect(
    derivedFromState(0, 3, 2).modeNumber
  ).toBe(
    2
  );
  expect(
    derivedFromState(0, -2, -2).modeNumber
  ).toBe(
    -2
  );
  expect(
    derivedFromState(0, 8, -1).modeNumber
  ).toBe(
    -1
  );
  expect(
    derivedFromState(0, -5, 2).modeNumber
  ).toBe(
    2
  );
});

test("derivedFromState() includes the rootNote", () => {
  expect(
    derivedFromState(0, 3, 2).rootNote
  ).toBe(
    "B"
  );
  expect(
    derivedFromState(0, -2, -2).rootNote
  ).toBe(
    "C"
  );
  expect(
    derivedFromState(0, 8, -1).rootNote
  ).toBe(
    "A♯"
  );
  expect(
    derivedFromState(0, -5, 2).rootNote
  ).toBe(
    "E♭"
  );
});

test("derivedFromState() includes the modeNote", () => {
  expect(
    derivedFromState(0, 3, 2).modeNote
  ).toBe(
    "E"
  );
  expect(
    derivedFromState(0, -2, -2).modeNote
  ).toBe(
    "C"
  );
  expect(
    derivedFromState(0, 8, -1).modeNote
  ).toBe(
    "G"
  );
  expect(
    derivedFromState(0, -5, 2).modeNote
  ).toBe(
    "E"
  );
});

test("derivedFromState() includes the keyDegree", () => {
  expect(
    derivedFromState(0, 3, 2).keyDegree
  ).toBe(
    1
  );
  expect(
    derivedFromState(0, -2, -2).keyDegree
  ).toBe(
    0
  );
  expect(
    derivedFromState(0, 8, -1).keyDegree
  ).toBe(
    9
  );
  expect(
    derivedFromState(0, -5, 2).keyDegree
  ).toBe(
    -7
  );
});

test("derivedFromState() includes the locatedNotes", () => {
  expect(
    derivedFromState(0, 3, 2).locatedNotes[1]
  ).toStrictEqual(
    {
      hour: 1,
      note: "C",
      solfegeName: "re"
    }
  );
  expect(
    derivedFromState(0, -2, -2).locatedNotes[1]
  ).toStrictEqual(
    {
      hour: 2,
      note: "D",
      solfegeName: "re"
    }
  );
  expect(
    derivedFromState(0, 8, -1).locatedNotes[1]
  ).toStrictEqual(
    {
      hour: 2,
      note: "B♯",
      solfegeName: "re"
    }
  );
  expect(
    derivedFromState(0, -5, 2).locatedNotes[1]
  ).toStrictEqual(
    {
      hour: 1,
      note: "F♭",
      solfegeName: "re"
    }
  );
});
