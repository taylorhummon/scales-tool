import { test, expect } from 'vitest';

import { Motion } from "src/enumerations";
import { MusicalKey } from "src/classes/MusicalKey";
import { canPerformMotion } from "src/utilities/action";


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

test("canPerformMotion() works for Locrian B", () => {
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
