import { test, expect } from 'vitest';

import { SolfegeName } from "src/enumerations";
import { derivedFromState } from "src/utilities/derived";


test("derivedFromState() includes the rootNumber", () => {
  expect(
    derivedFromState(3, 2).rootNumber
  ).toBe(
    3
  );
  expect(
    derivedFromState(-2, -2).rootNumber
  ).toBe(
    -2
  );
  expect(
    derivedFromState(8, -1).rootNumber
  ).toBe(
    8
  );
  expect(
    derivedFromState(-5, 2).rootNumber
  ).toBe(
    -5
  );
});

test("derivedFromState() includes the modeNumber", () => {
  expect(
    derivedFromState(3, 2).modeNumber
  ).toBe(
    2
  );
  expect(
    derivedFromState(-2, -2).modeNumber
  ).toBe(
    -2
  );
  expect(
    derivedFromState(8, -1).modeNumber
  ).toBe(
    -1
  );
  expect(
    derivedFromState(-5, 2).modeNumber
  ).toBe(
    2
  );
});

test("derivedFromState() includes the rootNote", () => {
  expect(
    derivedFromState(3, 2).rootNote
  ).toBe(
    "B"
  );
  expect(
    derivedFromState(-2, -2).rootNote
  ).toBe(
    "C"
  );
  expect(
    derivedFromState(8, -1).rootNote
  ).toBe(
    "A♯"
  );
  expect(
    derivedFromState(-5, 2).rootNote
  ).toBe(
    "E♭"
  );
});

test("derivedFromState() includes the modeNote", () => {
  expect(
    derivedFromState(3, 2).modeNote
  ).toBe(
    "E"
  );
  expect(
    derivedFromState(-2, -2).modeNote
  ).toBe(
    "C"
  );
  expect(
    derivedFromState(8, -1).modeNote
  ).toBe(
    "G"
  );
  expect(
    derivedFromState(-5, 2).modeNote
  ).toBe(
    "E"
  );
});

test("derivedFromState() includes the keyDegree", () => {
  expect(
    derivedFromState(3, 2).keyDegree
  ).toBe(
    1
  );
  expect(
    derivedFromState(-2, -2).keyDegree
  ).toBe(
    0
  );
  expect(
    derivedFromState(8, -1).keyDegree
  ).toBe(
    9
  );
  expect(
    derivedFromState(-5, 2).keyDegree
  ).toBe(
    -7
  );
});

test("derivedFromState() includes the locatedNoteBySolfegeName", () => {
  expect(
    derivedFromState(3, 2).locatedNoteBySolfegeName.get(SolfegeName.Re)
  ).toStrictEqual(
    {
      note: "C",
      location: "early"
    }
  );
  expect(
    derivedFromState(-2, -2).locatedNoteBySolfegeName.get(SolfegeName.Re)
  ).toStrictEqual(
    {
      note: "D",
      location: "late"
    }
  );
  expect(
    derivedFromState(8, -1).locatedNoteBySolfegeName.get(SolfegeName.Re)
  ).toStrictEqual(
    {
      note: "B♯",
      location: "late"
    }
  );
  expect(
    derivedFromState(-5, 2).locatedNoteBySolfegeName.get(SolfegeName.Re)
  ).toStrictEqual(
    {
      note: "F♭",
      location: "early"
    }
  );
});
