import { test, expect } from 'vitest';

import { Motion } from "src/enumerations"
import { LabelAnimation } from "src/classes/label_animation";


test("LabelAnimation works for keyDegree = 0", () => {
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 0, 0)).fromHour
  ).toBe(
    3
  );
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 0, 0)).toHour
  ).toBe(
    4
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 0, 0)).fromHour
  ).toBe(
    9
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 0, 0)).toHour
  ).toBe(
    8
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 0, 0)).fromHour
  ).toBe(
    9
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 0, 0)).toHour
  ).toBe(
    8
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 0, 0)).fromHour
  ).toBe(
    3
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 0, 0)).toHour
  ).toBe(
    4
  );
});

test("LabelAnimation works for keyDegree = 2", () => {
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 1, -1)).fromHour
  ).toBe(
    5
  );
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 1, -1)).toHour
  ).toBe(
    6
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 1, -1)).fromHour
  ).toBe(
    11
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 1, -1)).toHour
  ).toBe(
    10
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 1, -1)).fromHour
  ).toBe(
    11
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 1, -1)).toHour
  ).toBe(
    10
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 1, -1)).fromHour
  ).toBe(
    5
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 1, -1)).toHour
  ).toBe(
    6
  );
});

test("LabelAnimation works for keyDegree = -3", () => {
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 0, 3)).fromHour
  ).toBe(
    6
  );
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 0, 3)).toHour
  ).toBe(
    7
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 0, 3)).fromHour
  ).toBe(
    0
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 0, 3)).toHour
  ).toBe(
    11
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 0, 3)).fromHour
  ).toBe(
    0
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 0, 3)).toHour
  ).toBe(
    11
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 0, 3)).fromHour
  ).toBe(
    6
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 0, 3)).toHour
  ).toBe(
    7
  );
});
