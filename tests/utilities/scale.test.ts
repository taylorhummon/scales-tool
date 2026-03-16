import { test, expect } from 'vitest';

import { Solfege, Motion } from "src/enumerations";
import {
  getKeyDegree,
  getModeNoteName,
  getModeName,
  getRootNoteHour,
  getNoteNameBySolfege,
  getRootNoteName,
  getMotionEndHour,
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

test("getNoteNameBySolfege() for C-Major", () => {
  const noteNameBySolfege = getNoteNameBySolfege(-2, -2);
  expect(
    noteNameBySolfege.get(Solfege.Do)
  ).toBe(
    "C"
  );
  expect(
    noteNameBySolfege.get(Solfege.Re)
  ).toBe(
    "D"
  );
  expect(
    noteNameBySolfege.get(Solfege.Mi)
  ).toBe(
    "E"
  );
  expect(
    noteNameBySolfege.get(Solfege.Fa)
  ).toBe(
    "F"
  );
  expect(
    noteNameBySolfege.get(Solfege.Sol)
  ).toBe(
    "G"
  );
  expect(
    noteNameBySolfege.get(Solfege.La)
  ).toBe(
    "A"
  );
  expect(
    noteNameBySolfege.get(Solfege.Ti)
  ).toBe(
    "B"
  );
});

test("getNoteNameBySolfege() for D-Major", () => {
  const noteNameBySolfege = getNoteNameBySolfege(0, -2);
  expect(
    noteNameBySolfege.get(Solfege.Do)
  ).toBe(
    "D"
  );
  expect(
    noteNameBySolfege.get(Solfege.Re)
  ).toBe(
    "E"
  );
  expect(
    noteNameBySolfege.get(Solfege.Mi)
  ).toBe(
    "F♯"
  );
  expect(
    noteNameBySolfege.get(Solfege.Fa)
  ).toBe(
    "G"
  );
  expect(
    noteNameBySolfege.get(Solfege.Sol)
  ).toBe(
    "A"
  );
  expect(
    noteNameBySolfege.get(Solfege.La)
  ).toBe(
    "B"
  );
  expect(
    noteNameBySolfege.get(Solfege.Ti)
  ).toBe(
    "C♯"
  );
});

test("getNoteNameBySolfege() for Dorian D", () => {
  const noteNameBySolfege = getNoteNameBySolfege(0, 0);
  expect(
    noteNameBySolfege.get(Solfege.Do)
  ).toBe(
    "D"
  );
  expect(
    noteNameBySolfege.get(Solfege.Re)
  ).toBe(
    "E"
  );
  expect(
    noteNameBySolfege.get(Solfege.Mi)
  ).toBe(
    "F"
  );
  expect(
    noteNameBySolfege.get(Solfege.Fa)
  ).toBe(
    "G"
  );
  expect(
    noteNameBySolfege.get(Solfege.Sol)
  ).toBe(
    "A"
  );
  expect(
    noteNameBySolfege.get(Solfege.La)
  ).toBe(
    "B"
  );
  expect(
    noteNameBySolfege.get(Solfege.Ti)
  ).toBe(
    "C"
  );
});

test("getNoteNameBySolfege() for Dorian C", () => {
  const noteNameBySolfege = getNoteNameBySolfege(-2, 0);
  expect(
    noteNameBySolfege.get(Solfege.Do)
  ).toBe(
    "C"
  );
  expect(
    noteNameBySolfege.get(Solfege.Re)
  ).toBe(
    "D"
  );
  expect(
    noteNameBySolfege.get(Solfege.Mi)
  ).toBe(
    "E♭"
  );
  expect(
    noteNameBySolfege.get(Solfege.Fa)
  ).toBe(
    "F"
  );
  expect(
    noteNameBySolfege.get(Solfege.Sol)
  ).toBe(
    "G"
  );
  expect(
    noteNameBySolfege.get(Solfege.La)
  ).toBe(
    "A"
  );
  expect(
    noteNameBySolfege.get(Solfege.Ti)
  ).toBe(
    "B♭"
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

test("getMotionEndHour() works", () => {
  expect(
    getMotionEndHour(Motion.IncrementRoot, 3)
  ).toBe(
    10
  );
  expect(
    getMotionEndHour(Motion.IncrementRoot, 8)
  ).toBe(
    3
  );
  expect(
    getMotionEndHour(Motion.DecrementRoot, 3)
  ).toBe(
    8
  );
  expect(
    getMotionEndHour(Motion.DecrementRoot, 8)
  ).toBe(
    1
  );
  expect(
    getMotionEndHour(Motion.IncrementMode, 3)
  ).toBe(
    8
  );
  expect(
    getMotionEndHour(Motion.IncrementMode, 8)
  ).toBe(
    1
  );
  expect(
    getMotionEndHour(Motion.DecrementMode, 3)
  ).toBe(
    10
  );
  expect(
    getMotionEndHour(Motion.DecrementMode, 8)
  ).toBe(
    3
  );
});
