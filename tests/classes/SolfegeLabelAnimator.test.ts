import { test, expect } from "vitest";

import { MusicalKey } from "@/classes/MusicalKey";
import { SolfegeLabelAnimator } from "@/classes/SolfegeLabelAnimator";
import { Motion } from "@/utilities/motion";


test("SolfegeLabelAnimator works", () => {
  const musicalKey = new MusicalKey({ mode: 1, root: 1 });

  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.IncrementRoot)).finishHour(0)
  ).toBe(
    7
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.IncrementRoot)).finishHour(3)
  ).toBe(
    10
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.IncrementRoot)).finishHour(9)
  ).toBe(
    3
  );

  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.DecrementRoot)).finishHour(0)
  ).toBe(
    5
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.DecrementRoot)).finishHour(3)
  ).toBe(
    9
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.DecrementRoot)).finishHour(9)
  ).toBe(
    2
  );

  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.IncrementDegree)).finishHour(0)
  ).toBe(
    null
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.IncrementDegree)).finishHour(3)
  ).toBe(
    4
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.IncrementDegree)).finishHour(9)
  ).toBe(
    null
  );

  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.DecrementDegree)).finishHour(0)
  ).toBe(
    null
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.DecrementDegree)).finishHour(3)
  ).toBe(
    null
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.DecrementDegree)).finishHour(9)
  ).toBe(
    8
  );
});
