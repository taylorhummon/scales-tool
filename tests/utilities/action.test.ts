import { test, expect } from 'vitest';

import { Motion } from "src/enumerations";
import { MusicalKey } from "src/classes/MusicalKey";
import { canPerformMotion } from "src/utilities/action";


test("canPerformMotion() works for Dorian D", () => {
  const musicalKey = new MusicalKey(0, 0);
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDoPosition)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDoPosition)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementKeyDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementKeyDegree)
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
  const musicalKey = new MusicalKey(-3, 0);
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDoPosition)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDoPosition)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementKeyDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementKeyDegree)
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
  const musicalKey = new MusicalKey(3, 1);
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDoPosition)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDoPosition)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementKeyDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementKeyDegree)
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
  const musicalKey = new MusicalKey(0, 14);
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDoPosition)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDoPosition)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementKeyDegree)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementKeyDegree)
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
  const musicalKey = new MusicalKey(2, -14);
  expect(
    canPerformMotion(musicalKey, Motion.DecrementDoPosition)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementDoPosition)
  ).toBe(
    true
  );
  expect(
    canPerformMotion(musicalKey, Motion.DecrementKeyDegree)
  ).toBe(
    false
  );
  expect(
    canPerformMotion(musicalKey, Motion.IncrementKeyDegree)
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
