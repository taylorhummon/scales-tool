import { test, expect } from "vitest";

import { Note } from "@/classes/Note";
import { MusicalKey } from "@/classes/MusicalKey";
import { AnimationType } from "@/utilities/animation";
import {
  Motion,
  canPerformMotion,
  getNextMusicalKey,
  getWillIncrementRoot,
  getWillDecrementRoot,
  getWillIncrementDegree,
  getWillDecrementDegree,
  getNoteFinishHour,
  getRootDotFinishHour,
} from "@/utilities/motion";
import { NaturalNote } from "@/utilities/natural-note";


test("canPerformMotion() works for Dorian D", () => {
  const musicalKey = new MusicalKey(0, 0);
  expect(
    canPerformMotion(musicalKey, Motion.IncrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementBoth)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementBoth)
  ).toBe(
    true
  );
});

test("canPerformMotion() works for 14 sharps", () => {
  const musicalKey = new MusicalKey(14, 12);
  expect(
    canPerformMotion(musicalKey, Motion.IncrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDegree)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementBoth)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementBoth)
  ).toBe(
    true
  );
});

test("canPerformMotion() works for 14 flats", () => {
  const musicalKey = new MusicalKey(-14, -15);
  expect(
    canPerformMotion(musicalKey, Motion.IncrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDegree)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementBoth)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementBoth)
  ).toBe(
    false
  );
});

test("canPerformMotion() works for mode = 3", () => {
  const musicalKey = new MusicalKey(5, 2);
  expect(
    canPerformMotion(musicalKey, Motion.IncrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementRoot)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDegree)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementBoth)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementBoth)
  ).toBe(
    true
  );
});

test("getNextMusicalKey() works", () => {
  const musicalKey = new MusicalKey(0, 0);
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementRoot).root
  ).toBe(
    1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementRoot).degree
  ).toBe(
    0
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementRoot).root
  ).toBe(
    -1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementRoot).degree
  ).toBe(
    0
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementDegree).root
  ).toBe(
    0
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementDegree).degree
  ).toBe(
    1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementDegree).root
  ).toBe(
    0
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementDegree).degree
  ).toBe(
    -1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementBoth).root
  ).toBe(
    1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementBoth).degree
  ).toBe(
    1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementBoth).root
  ).toBe(
    -1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementBoth).degree
  ).toBe(
    -1
  );
});

test("getWillIncrementRoot() works", () => {
  expect(
    getWillIncrementRoot(Motion.IncrementRoot)
  ).toBe(
    true
  );
  expect(
    getWillIncrementRoot(Motion.IncrementDegree)
  ).toBe(
    false
  );
  expect(
    getWillIncrementRoot(Motion.IncrementBoth)
  ).toBe(
    true
  );
});

test("getWillDecrementRoot() works", () => {
  expect(
    getWillDecrementRoot(Motion.DecrementRoot)
  ).toBe(
    true
  );
  expect(
    getWillDecrementRoot(Motion.DecrementDegree)
  ).toBe(
    false
  );
  expect(
    getWillDecrementRoot(Motion.DecrementBoth)
  ).toBe(
    true
  );
});

test("getWillIncrementDegree() works", () => {
  expect(
    getWillIncrementDegree(Motion.IncrementRoot)
  ).toBe(
    false
  );
  expect(
    getWillIncrementDegree(Motion.IncrementDegree)
  ).toBe(
    true
  );
  expect(
    getWillIncrementDegree(Motion.IncrementBoth)
  ).toBe(
    true
  );
});

test("getWillDecrementDegree() works", () => {
  expect(
    getWillDecrementDegree(Motion.DecrementRoot)
  ).toBe(
    false
  );
  expect(
    getWillDecrementDegree(Motion.DecrementDegree)
  ).toBe(
    true
  );
  expect(
    getWillDecrementDegree(Motion.DecrementBoth)
  ).toBe(
    true
  );
});

test("getNoteFinishHour() works", () => {
  const musicalKey = new MusicalKey(0, 0);
  const noteD = new Note(NaturalNote.D, 0, 0);
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Simple,
      Motion.IncrementRoot,
      noteD
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Simple,
      Motion.DecrementRoot,
      noteD
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Simple,
      Motion.IncrementDegree,
      noteD
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Simple,
      Motion.DecrementDegree,
      noteD
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Simple,
      Motion.IncrementBoth,
      noteD
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Simple,
      Motion.DecrementBoth,
      noteD
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Ballet,
      Motion.IncrementRoot,
      noteD
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Ballet,
      Motion.DecrementRoot,
      noteD
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Ballet,
      Motion.IncrementDegree,
      noteD
    )
  ).toBe(
    7
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Ballet,
      Motion.DecrementDegree,
      noteD
    )
  ).toBe(
    5
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Ballet,
      Motion.IncrementBoth,
      noteD
    )
  ).toBe(
    7
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Ballet,
      Motion.DecrementBoth,
      noteD
    )
  ).toBe(
    5
  );


  const noteF = new Note(NaturalNote.F, 0, -3);
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Simple,
      Motion.IncrementRoot,
      noteF
    )
  ).toBe(
    3
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Simple,
      Motion.DecrementRoot,
      noteF
    )
  ).toBe(
    3
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Simple,
      Motion.IncrementDegree,
      noteF
    )
  ).toBe(
    4
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Simple,
      Motion.DecrementDegree,
      noteF
    )
  ).toBe(
    3
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Simple,
      Motion.IncrementBoth,
      noteF
    )
  ).toBe(
    4
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Simple,
      Motion.DecrementBoth,
      noteF
    )
  ).toBe(
    3
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Ballet,
      Motion.IncrementRoot,
      noteF
    )
  ).toBe(
    3
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Ballet,
      Motion.DecrementRoot,
      noteF
    )
  ).toBe(
    3
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Ballet,
      Motion.IncrementDegree,
      noteF
    )
  ).toBe(
    10
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Ballet,
      Motion.DecrementDegree,
      noteF
    )
  ).toBe(
    8
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Ballet,
      Motion.IncrementBoth,
      noteF
    )
  ).toBe(
    10
  );
  expect(
    getNoteFinishHour(
      musicalKey,
      AnimationType.Ballet,
      Motion.DecrementBoth,
      noteF
    )
  ).toBe(
    8
  );
});

test("getRootDotFinishHour() works", () => {
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, 0),
      Motion.IncrementRoot
    )
  ).toBe(
    7
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, 0),
      Motion.DecrementRoot
    )
  ).toBe(
    5
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, 0),
      Motion.IncrementDegree
    )
  ).toBe(
    0
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, 0),
      Motion.DecrementDegree
    )
  ).toBe(
    0
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, 0),
      Motion.IncrementBoth
    )
  ).toBe(
    7
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, 0),
      Motion.DecrementBoth
    )
  ).toBe(
    5
  );
});
