import { test, expect } from 'vitest';

import { derivedFromState } from "src/utilities/derived";


test("derivedFromState() includes the rootNumber", () => {
  expect(
    derivedFromState({ rootNumber: 3, modeNumber: 2}).rootNumber
  ).toBe(
    3
  );
  expect(
    derivedFromState({ rootNumber: -2, modeNumber: -2 }).rootNumber
  ).toBe(
    -2
  );
  expect(
    derivedFromState({ rootNumber: 8, modeNumber: -1 }).rootNumber
  ).toBe(
    8
  );
  expect(
    derivedFromState({ rootNumber: -5, modeNumber: 2 }).rootNumber
  ).toBe(
    -5
  );
});

test("derivedFromState() includes the modeNumber", () => {
  expect(
    derivedFromState({ rootNumber: 3, modeNumber: 2 }).modeNumber
  ).toBe(
    2
  );
  expect(
    derivedFromState({ rootNumber: -2, modeNumber: -2 }).modeNumber
  ).toBe(
    -2
  );
  expect(
    derivedFromState({ rootNumber: 8, modeNumber: -1 }).modeNumber
  ).toBe(
    -1
  );
  expect(
    derivedFromState({ rootNumber: -5, modeNumber: 2 }).modeNumber
  ).toBe(
    2
  );
});

test("derivedFromState() includes the rootNote", () => {
  expect(
    derivedFromState({ rootNumber: 3, modeNumber: 2 }).rootNote
  ).toBe(
    "B"
  );
  expect(
    derivedFromState({ rootNumber: -2, modeNumber: -2 }).rootNote
  ).toBe(
    "C"
  );
  expect(
    derivedFromState({ rootNumber: 8, modeNumber: -1 }).rootNote
  ).toBe(
    "A♯"
  );
  expect(
    derivedFromState({ rootNumber: -5, modeNumber: 2 }).rootNote
  ).toBe(
    "E♭"
  );
});

test("derivedFromState() includes the modeNote", () => {
  expect(
    derivedFromState({ rootNumber: 3, modeNumber: 2 }).modeNote
  ).toBe(
    "E"
  );
  expect(
    derivedFromState({ rootNumber: -2, modeNumber: -2 }).modeNote
  ).toBe(
    "C"
  );
  expect(
    derivedFromState({ rootNumber: 8, modeNumber: -1 }).modeNote
  ).toBe(
    "G"
  );
  expect(
    derivedFromState({ rootNumber: -5, modeNumber: 2 }).modeNote
  ).toBe(
    "E"
  );
});

test("derivedFromState() includes the keyDegree", () => {
  expect(
    derivedFromState({ rootNumber: 3, modeNumber: 2 }).keyDegree
  ).toBe(
    1
  );
  expect(
    derivedFromState({ rootNumber: -2, modeNumber: -2 }).keyDegree
  ).toBe(
    0
  );
  expect(
    derivedFromState({ rootNumber: 8, modeNumber: -1 }).keyDegree
  ).toBe(
    9
  );
  expect(
    derivedFromState({ rootNumber: -5, modeNumber: 2 }).keyDegree
  ).toBe(
    -7
  );
});

test("derivedFromState() includes the locatedNotes", () => {
  expect(
    derivedFromState({ rootNumber: 3, modeNumber: 2 }).locatedNotes[1]
  ).toStrictEqual(
    {
      hour: 10,
      note: "C",
      solfegeName: "re"
    }
  );
  expect(
    derivedFromState({ rootNumber: -2, modeNumber: -2 }).locatedNotes[1]
  ).toStrictEqual(
    {
      hour: 0,
      note: "D",
      solfegeName: "re"
    }
  );
  expect(
    derivedFromState({ rootNumber: 8, modeNumber: -1 }).locatedNotes[1]
  ).toStrictEqual(
    {
      hour: 10,
      note: "B♯",
      solfegeName: "re"
    }
  );
  expect(
    derivedFromState({ rootNumber: -5, modeNumber: 2 }).locatedNotes[1]
  ).toStrictEqual(
    {
      hour: 2,
      note: "F♭",
      solfegeName: "re"
    }
  );
});
