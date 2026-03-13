import { test, expect } from 'vitest';

import { SolfegeName } from "src/enumerations";
import {
  getKeyDegree,
  modeNoteFromModeNumber,
  modeNameFromModeNumber,
  rootHourFromRootNumber,
  getNoteBySolfegeName,
  getRootNote,
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

test("modeNoteFromModeNumber() works", () => {
  expect(
    modeNoteFromModeNumber(0)
  ).toBe(
    "D"
  );
  expect(
    modeNoteFromModeNumber(-2)
  ).toBe(
    "C"
  );
  expect(
    modeNoteFromModeNumber(3)
  ).toBe(
    "B"
  );
});

test("modeNameFromModeNumber() works", () => {
  expect(
    modeNameFromModeNumber(0)
  ).toBe(
    "Dorian"
  );
  expect(
    modeNameFromModeNumber(-2)
  ).toBe(
    "Ionian"
  );
  expect(
    modeNameFromModeNumber(3)
  ).toBe(
    "Locrian"
  );
});

test("rootHourFromRootNumber() works", () => {
  expect(
    rootHourFromRootNumber(0)
  ).toBe(
    0
  );
  expect(
    rootHourFromRootNumber(-2)
  ).toBe(
    10
  );
  expect(
    rootHourFromRootNumber(3)
  ).toBe(
    9
  );
});

test("getNoteBySolfegeName() for C-Major", () => {
  const noteBySolfegeName = getNoteBySolfegeName(-2, -2);
  expect(
    noteBySolfegeName.get(SolfegeName.Do)
  ).toBe(
    "C"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Re)
  ).toBe(
    "D"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Mi)
  ).toBe(
    "E"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Fa)
  ).toBe(
    "F"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Sol)
  ).toBe(
    "G"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.La)
  ).toBe(
    "A"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Ti)
  ).toBe(
    "B"
  );
});

test("getNoteBySolfegeName() for D-Major", () => {
  const noteBySolfegeName = getNoteBySolfegeName(0, -2);
  expect(
    noteBySolfegeName.get(SolfegeName.Do)
  ).toBe(
    "D"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Re)
  ).toBe(
    "E"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Mi)
  ).toBe(
    "F♯"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Fa)
  ).toBe(
    "G"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Sol)
  ).toBe(
    "A"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.La)
  ).toBe(
    "B"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Ti)
  ).toBe(
    "C♯"
  );
});

test("getNoteBySolfegeName() for Dorian D", () => {
  const noteBySolfegeName = getNoteBySolfegeName(0, 0);
  expect(
    noteBySolfegeName.get(SolfegeName.Do)
  ).toBe(
    "D"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Re)
  ).toBe(
    "E"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Mi)
  ).toBe(
    "F"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Fa)
  ).toBe(
    "G"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Sol)
  ).toBe(
    "A"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.La)
  ).toBe(
    "B"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Ti)
  ).toBe(
    "C"
  );
});

test("getNoteBySolfegeName() for Dorian C", () => {
  const noteBySolfegeName = getNoteBySolfegeName(-2, 0);
  expect(
    noteBySolfegeName.get(SolfegeName.Do)
  ).toBe(
    "C"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Re)
  ).toBe(
    "D"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Mi)
  ).toBe(
    "E♭"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Fa)
  ).toBe(
    "F"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Sol)
  ).toBe(
    "G"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.La)
  ).toBe(
    "A"
  );
  expect(
    noteBySolfegeName.get(SolfegeName.Ti)
  ).toBe(
    "B♭"
  );
});

test("getRootNote() works", () => {
  expect(
    getRootNote(getNoteBySolfegeName(0, -2))
  ).toBe(
    "D"
  );
  expect(
    getRootNote(getNoteBySolfegeName(0, 3))
  ).toBe(
    "D"
  );
  expect(
    getRootNote(getNoteBySolfegeName(-1, -3))
  ).toBe(
    "G"
  );
  expect(
    getRootNote(getNoteBySolfegeName(10, 2))
  ).toBe(
    "B♯"
  );
});
