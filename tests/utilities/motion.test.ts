import { test, expect } from "vitest";

import { MusicalKey } from "@/classes/MusicalKey";
import {
  Motion,
  canPerformMotion,
  getNextMusicalKey,
  getWillIncrementMode,
  getWillDecrementMode,
  getWillIncrementRoot,
  getWillDecrementRoot,
  getWillIncrementDegree,
  getWillDecrementDegree,
} from "@/utilities/motion";


test("canPerformMotion() works for Dorian D", () => {
  const musicalKey = new MusicalKey({ mode: 0, root: 0 });
  expect(
    canPerformMotion(musicalKey, Motion.IncrementModeAndIncrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementModeAndDecrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDegreeAndDecrementMode)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDegreeAndIncrementMode)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementRootAndIncrementDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementRootAndDecrementDegree)
  ).toBe(
    true
  );
});

test("canPerformMotion() works for 14 sharps", () => {
  const musicalKey = new MusicalKey({ mode: -2, degree: 14 });
  expect(
    canPerformMotion(musicalKey, Motion.IncrementModeAndIncrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementModeAndDecrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDegreeAndDecrementMode)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDegreeAndIncrementMode)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementRootAndIncrementDegree)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementRootAndDecrementDegree)
  ).toBe(
    true
  );
});

test("canPerformMotion() works for 14 flats", () => {
  const musicalKey = new MusicalKey({ mode: -1, degree: -14 });
  expect(
    canPerformMotion(musicalKey, Motion.IncrementModeAndIncrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementModeAndDecrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDegreeAndDecrementMode)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDegreeAndIncrementMode)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementRootAndIncrementDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementRootAndDecrementDegree)
  ).toBe(
    false
  );
});

test("canPerformMotion() works for mode = -3", () => {
  const musicalKey = new MusicalKey({ mode: -3, root: 2 });
  expect(
    canPerformMotion(musicalKey, Motion.IncrementModeAndIncrementRoot)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementModeAndDecrementRoot)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDegreeAndDecrementMode)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDegreeAndIncrementMode)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementRootAndIncrementDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementRootAndDecrementDegree)
  ).toBe(
    true
  );
});

test("getNextMusicalKey() works", () => {
  const musicalKey = new MusicalKey({ mode: 0, root: 0 });
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementModeAndIncrementRoot).root
  ).toBe(
    1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementModeAndIncrementRoot).degree
  ).toBe(
    0
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementModeAndDecrementRoot).root
  ).toBe(
    -1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementModeAndDecrementRoot).degree
  ).toBe(
    0
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementDegreeAndDecrementMode).root
  ).toBe(
    0
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementDegreeAndDecrementMode).degree
  ).toBe(
    1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementDegreeAndIncrementMode).root
  ).toBe(
    0
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementDegreeAndIncrementMode).degree
  ).toBe(
    -1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementRootAndIncrementDegree).root
  ).toBe(
    1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.IncrementRootAndIncrementDegree).degree
  ).toBe(
    1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementRootAndDecrementDegree).root
  ).toBe(
    -1
  );
  expect(
    getNextMusicalKey(musicalKey, Motion.DecrementRootAndDecrementDegree).degree
  ).toBe(
    -1
  );
});

test("getWillIncrementMode() works", () => {
  expect(
    getWillIncrementMode(Motion.IncrementModeAndIncrementRoot)
  ).toBe(
    true
  );
  expect(
    getWillIncrementMode(Motion.IncrementDegreeAndDecrementMode)
  ).toBe(
    false
  );
  expect(
    getWillIncrementMode(Motion.IncrementRootAndIncrementDegree)
  ).toBe(
    false
  );
  expect(
    getWillIncrementMode(Motion.DecrementModeAndDecrementRoot)
  ).toBe(
    false
  );
  expect(
    getWillIncrementMode(Motion.DecrementDegreeAndIncrementMode)
  ).toBe(
    true
  );
  expect(
    getWillIncrementMode(Motion.DecrementRootAndDecrementDegree)
  ).toBe(
    false
  );
});

test("getWillDecrementMode() works", () => {
  expect(
    getWillDecrementMode(Motion.IncrementModeAndIncrementRoot)
  ).toBe(
    false
  );
  expect(
    getWillDecrementMode(Motion.IncrementDegreeAndDecrementMode)
  ).toBe(
    true
  );
  expect(
    getWillDecrementMode(Motion.IncrementRootAndIncrementDegree)
  ).toBe(
    false
  );
  expect(
    getWillDecrementMode(Motion.DecrementModeAndDecrementRoot)
  ).toBe(
    true
  );
  expect(
    getWillDecrementMode(Motion.DecrementDegreeAndIncrementMode)
  ).toBe(
    false
  );
  expect(
    getWillDecrementMode(Motion.DecrementRootAndDecrementDegree)
  ).toBe(
    false
  );
});

test("getWillIncrementRoot() works", () => {
  expect(
    getWillIncrementRoot(Motion.IncrementModeAndIncrementRoot)
  ).toBe(
    true
  );
  expect(
    getWillIncrementRoot(Motion.IncrementDegreeAndDecrementMode)
  ).toBe(
    false
  );
  expect(
    getWillIncrementRoot(Motion.IncrementRootAndIncrementDegree)
  ).toBe(
    true
  );
});

test("getWillDecrementRoot() works", () => {
  expect(
    getWillDecrementRoot(Motion.DecrementModeAndDecrementRoot)
  ).toBe(
    true
  );
  expect(
    getWillDecrementRoot(Motion.DecrementDegreeAndIncrementMode)
  ).toBe(
    false
  );
  expect(
    getWillDecrementRoot(Motion.DecrementRootAndDecrementDegree)
  ).toBe(
    true
  );
});

test("getWillIncrementDegree() works", () => {
  expect(
    getWillIncrementDegree(Motion.IncrementModeAndIncrementRoot)
  ).toBe(
    false
  );
  expect(
    getWillIncrementDegree(Motion.IncrementDegreeAndDecrementMode)
  ).toBe(
    true
  );
  expect(
    getWillIncrementDegree(Motion.IncrementRootAndIncrementDegree)
  ).toBe(
    true
  );
});

test("getWillDecrementDegree() works", () => {
  expect(
    getWillDecrementDegree(Motion.DecrementModeAndDecrementRoot)
  ).toBe(
    false
  );
  expect(
    getWillDecrementDegree(Motion.DecrementDegreeAndIncrementMode)
  ).toBe(
    true
  );
  expect(
    getWillDecrementDegree(Motion.DecrementRootAndDecrementDegree)
  ).toBe(
    true
  );
});
