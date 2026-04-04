import { test, expect, vi, beforeEach } from "vitest";

import * as config from "@/config.ts";
import { Motion, NaturalNote, Solfege } from "@/enumerations";
import { Note } from "@/classes/Note";
import { MusicalKey } from "@/classes/MusicalKey";
import {
  canPerformMotion,
  getNextMusicalKey,
  willDecrementDegree,
  willIncrementDegree,
  getWillDecrementMode,
  getWillIncrementMode,
  getNoteFinishHour,
  getRootDotFinishHour,
} from "@/utilities/motion";


const spy = vi.spyOn(config, "ALLOW_LYDIAN_LOCRIAN_LOOP", "get");

beforeEach(() => {
  spy.mockReset();
});


test("canPerformMotion() works for Dorian D", () => {
  spy.mockReturnValue(false);
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

test("canPerformMotion() works for Locrian B", () => {
  spy.mockReturnValue(false);
  const musicalKey = new MusicalKey(0, -3);
  expect(
    canPerformMotion(musicalKey, Motion.DecrementMode)
  ).toBe(
    false
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
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementBoth)
  ).toBe(
    true
  );
});

test("canPerformMotion() works for Lydian C", () => {
  spy.mockReturnValue(false);
  const musicalKey = new MusicalKey(1, 3);
  expect(
    canPerformMotion(musicalKey, Motion.DecrementMode)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementMode)
  ).toBe(
    false
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
    false
  );
});

test("canPerformMotion() works for 14 sharps", () => {
  spy.mockReturnValue(false);
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
  spy.mockReturnValue(false);
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

test("willDecrementDegree() works", () => {
  expect(
    willDecrementDegree(Motion.DecrementDegree)
  ).toBe(
    true
  );
  expect(
    willDecrementDegree(Motion.DecrementBoth)
  ).toBe(
    true
  );
  expect(
    willDecrementDegree(Motion.DecrementMode)
  ).toBe(
    false
  );
});

test("willIncrementDegree() works", () => {
  expect(
    willIncrementDegree(Motion.IncrementDegree)
  ).toBe(
    true
  );
  expect(
    willIncrementDegree(Motion.IncrementBoth)
  ).toBe(
    true
  );
  expect(
    willIncrementDegree(Motion.IncrementMode)
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
  expect(
    getNoteFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 0),
      Motion.DecrementDegree
    )
  ).toBe(
    5
  );
  expect(
    getNoteFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 0),
      Motion.IncrementDegree
    )
  ).toBe(
    7
  );
  expect(
    getNoteFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 0),
      Motion.DecrementMode
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 0),
      Motion.IncrementMode
    )
  ).toBe(
    0
  );
  expect(
    getNoteFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 0),
      Motion.DecrementBoth
    )
  ).toBe(
    5
  );
  expect(
    getNoteFinishHour(
      new Note(NaturalNote.D, 0, Solfege.Do, 0),
      Motion.IncrementBoth
    )
  ).toBe(
    7
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
