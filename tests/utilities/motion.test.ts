import { test, expect } from "vitest";

import { MusicalKey } from "@/classes/MusicalKey";
import {
  Motion,
  canPerformMotion,
  getNextMusicalKey,
  getWillIncrementRoot,
  getWillDecrementRoot,
  getWillIncrementDegree,
  getWillDecrementDegree,
} from "@/utilities/motion";


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
