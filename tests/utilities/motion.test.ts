import { test, expect } from "vitest";

import { AnimationType, Motion, NaturalNote, Solfege } from "@/enumerations";
import { Note } from "@/classes/Note";
import { MusicalKey } from "@/classes/MusicalKey";
import {
  canPerformMotion,
  getNextMusicalKey,
  getWillDecrementDegree,
  getWillIncrementDegree,
  getWillDecrementMode,
  getWillIncrementMode,
  getNoteFinishHour,
  getRootDotFinishHour,
} from "@/utilities/motion";


test("canPerformMotion() works for Dorian D", () => {
  const musicalKey = new MusicalKey(0, 0);
  expect(
    canPerformMotion(musicalKey, Motion.DecrementMode)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementMode)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementBoth)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementBoth)
  ).toBe(
    true
  );
});

test("canPerformMotion() works for 14 sharps", () => {
  const musicalKey = new MusicalKey(14, 0);
  expect(
    canPerformMotion(musicalKey, Motion.DecrementMode)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementMode)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDegree)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementBoth)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementBoth)
  ).toBe(
    false
  );
});

test("canPerformMotion() works for 14 flats", () => {
  const musicalKey = new MusicalKey(-14, 2);
  expect(
    canPerformMotion(musicalKey, Motion.DecrementMode)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementMode)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDegree)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementBoth)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementBoth)
  ).toBe(
    true
  );
});

test("getNextMusicalKey() works", () => {
  const musicalKey = new MusicalKey(0, 0);
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementMode).degree
  ).toBe(
    0
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementMode).mode
  ).toBe(
    -1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementMode).degree
  ).toBe(
    0
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementMode).mode
  ).toBe(
    1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementDegree).degree
  ).toBe(
    -1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementDegree).mode
  ).toBe(
    0
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementDegree).degree
  ).toBe(
    1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementDegree).mode
  ).toBe(
    0
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementBoth).degree
  ).toBe(
    -1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementBoth).mode
  ).toBe(
    -1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementBoth).degree
  ).toBe(
    1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementBoth).mode
  ).toBe(
    1
  );
});

test("getWillDecrementDegree() works", () => {
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
  expect(
    getWillDecrementDegree(Motion.DecrementMode)
  ).toBe(
    false
  );
});

test("getWillIncrementDegree() works", () => {
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
  expect(
    getWillIncrementDegree(Motion.IncrementMode)
  ).toBe(
    false
  );
});

test("getWillDecrementMode() works", () => {
  expect(
    getWillDecrementMode(Motion.DecrementMode)
  ).toBe(
    true
  );
  expect(
    getWillDecrementMode(Motion.DecrementBoth)
  ).toBe(
    true
  );
  expect(
    getWillDecrementMode(Motion.DecrementDegree)
  ).toBe(
    false
  );
});

test("getWillIncrementMode() works", () => {
  expect(
    getWillIncrementMode(Motion.IncrementMode)
  ).toBe(
    true
  );
  expect(
    getWillIncrementMode(Motion.IncrementBoth)
  ).toBe(
    true
  );
  expect(
    getWillIncrementMode(Motion.IncrementDegree)
  ).toBe(
    false
  );
});

test("getNoteFinishHour() works", () => {
  const noteD = new Note(NaturalNote.D, 0, Solfege.Do, 0);
  expect(
    getNoteFinishHour(
      noteD,
      AnimationType.Simple,
      Motion.DecrementDegree
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      noteD,
      AnimationType.Simple,
      Motion.IncrementDegree
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      noteD,
      AnimationType.Simple,
      Motion.DecrementMode
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      noteD,
      AnimationType.Simple,
      Motion.IncrementMode
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      noteD,
      AnimationType.Simple,
      Motion.DecrementBoth
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      noteD,
      AnimationType.Simple,
      Motion.IncrementBoth
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      noteD,
      AnimationType.Ballet,
      Motion.DecrementDegree
    )
  ).toBe(
    5
  );
  expect(
    getNoteFinishHour(
      noteD,
      AnimationType.Ballet,
      Motion.IncrementDegree
    )
  ).toBe(
    7
  );
  expect(
    getNoteFinishHour(
      noteD,
      AnimationType.Ballet,
      Motion.DecrementMode
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      noteD,
      AnimationType.Ballet,
      Motion.IncrementMode
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      noteD,
      AnimationType.Ballet,
      Motion.DecrementBoth
    )
  ).toBe(
    5
  );
  expect(
    getNoteFinishHour(
      noteD,
      AnimationType.Ballet,
      Motion.IncrementBoth
    )
  ).toBe(
    7
  );

  const noteF = new Note(NaturalNote.F, 0, Solfege.Mi, 3);
  expect(
    getNoteFinishHour(
      noteF,
      AnimationType.Simple,
      Motion.DecrementDegree
    )
  ).toBe(
    3
  );
  expect(
    getNoteFinishHour(
      noteF,
      AnimationType.Simple,
      Motion.IncrementDegree
    )
  ).toBe(
    4
  );
  expect(
    getNoteFinishHour(
      noteF,
      AnimationType.Simple,
      Motion.DecrementMode
    )
  ).toBe(
    3
  );
  expect(
    getNoteFinishHour(
      noteF,
      AnimationType.Simple,
      Motion.IncrementMode
    )
  ).toBe(
    3
  );
  expect(
    getNoteFinishHour(
      noteF,
      AnimationType.Simple,
      Motion.DecrementBoth
    )
  ).toBe(
    3
  );
  expect(
    getNoteFinishHour(
      noteF,
      AnimationType.Simple,
      Motion.IncrementBoth
    )
  ).toBe(
    4
  );
  expect(
    getNoteFinishHour(
      noteF,
      AnimationType.Ballet,
      Motion.DecrementDegree
    )
  ).toBe(
    8
  );
  expect(
    getNoteFinishHour(
      noteF,
      AnimationType.Ballet,
      Motion.IncrementDegree
    )
  ).toBe(
    10
  );
  expect(
    getNoteFinishHour(
      noteF,
      AnimationType.Ballet,
      Motion.DecrementMode
    )
  ).toBe(
    3
  );
  expect(
    getNoteFinishHour(
      noteF,
      AnimationType.Ballet,
      Motion.IncrementMode
    )
  ).toBe(
    3
  );
  expect(
    getNoteFinishHour(
      noteF,
      AnimationType.Ballet,
      Motion.DecrementBoth
    )
  ).toBe(
    8
  );
  expect(
    getNoteFinishHour(
      noteF,
      AnimationType.Ballet,
      Motion.IncrementBoth
    )
  ).toBe(
    10
  );
});

test("getRootDotFinishHour() works", () => {
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 0),
      Motion.DecrementDegree
    )
  ).toBe(
    5
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 0),
      Motion.IncrementDegree
    )
  ).toBe(
    7
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 0),
      Motion.DecrementMode
    )
  ).toBe(
    7
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 0),
      Motion.IncrementMode
    )
  ).toBe(
    5
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 0),
      Motion.DecrementBoth
    )
  ).toBe(
    0
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 0),
      Motion.IncrementBoth
    )
  ).toBe(
    0
  );

  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, -3),
      Motion.DecrementDegree
    )
  ).toBe(
    5
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, -3),
      Motion.IncrementDegree
    )
  ).toBe(
    7
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, -3),
      Motion.DecrementMode
    )
  ).toBe(
    6
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, -3),
      Motion.IncrementMode
    )
  ).toBe(
    5
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, -3),
      Motion.DecrementBoth
    )
  ).toBe(
    11
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, -3),
      Motion.IncrementBoth
    )
  ).toBe(
    0
  );

  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 3),
      Motion.DecrementDegree
    )
  ).toBe(
    5
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 3),
      Motion.IncrementDegree
    )
  ).toBe(
    7
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 3),
      Motion.DecrementMode
    )
  ).toBe(
    7
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 3),
      Motion.IncrementMode
    )
  ).toBe(
    6
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 3),
      Motion.DecrementBoth
    )
  ).toBe(
    0
  );
  expect(
    getRootDotFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 3),
      Motion.IncrementBoth
    )
  ).toBe(
    1
  );
});
