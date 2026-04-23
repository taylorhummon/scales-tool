import { test, expect } from "vitest";

import { SolfegeLabelAnimator } from "@/classes/SolfegeLabelAnimator";
import { MusicalKey } from "@/classes/MusicalKey";
import { Motion } from "@/utilities/motion";


test("SolfegeLabelAnimator works", () => {
  const musicalKey = new MusicalKey(1, 0);

  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.IncrementModeAndIncrementRoot)).finishHour(0)
  ).toBe(
    7
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.IncrementModeAndIncrementRoot)).finishHour(3)
  ).toBe(
    10
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.IncrementModeAndIncrementRoot)).finishHour(9)
  ).toBe(
    3
  );

  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.DecrementModeAndDecrementRoot)).finishHour(0)
  ).toBe(
    5
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.DecrementModeAndDecrementRoot)).finishHour(3)
  ).toBe(
    9
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.DecrementModeAndDecrementRoot)).finishHour(9)
  ).toBe(
    2
  );

  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).finishHour(0)
  ).toBe(
    null
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).finishHour(3)
  ).toBe(
    4
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).finishHour(9)
  ).toBe(
    null
  );

  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).finishHour(0)
  ).toBe(
    null
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).finishHour(3)
  ).toBe(
    null
  );
  expect(
    (new SolfegeLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).finishHour(9)
  ).toBe(
    8
  );
});
