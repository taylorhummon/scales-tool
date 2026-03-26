import { test, expect } from 'vitest';

import { Motion } from "src/enumerations"
import { LabelAnimation } from "src/classes/LabelAnimation";


test("LabelAnimation works for keyDegree = 0", () => {
  expect(
    (new LabelAnimation(Motion.DecrementKeyDegree, 2, 0)).startNote.name
  ).toBe(
    "B"
  );
  expect(
    (new LabelAnimation(Motion.DecrementKeyDegree, 2, 0)).finishNote.name
  ).toBe(
    "B♭"
  );
  expect(
    (new LabelAnimation(Motion.DecrementKeyDegree, 2, 0)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(Motion.DecrementKeyDegree, 2, 0)).isAddingCharacter
  ).toBe(
    true
  );

  expect(
    (new LabelAnimation(Motion.IncrementKeyDegree, 2, 0)).startNote.name
  ).toBe(
    "F"
  );
  expect(
    (new LabelAnimation(Motion.IncrementKeyDegree, 2, 0)).finishNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new LabelAnimation(Motion.IncrementKeyDegree, 2, 0)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(Motion.IncrementKeyDegree, 2, 0)).isAddingCharacter
  ).toBe(
    true
  );
});

test("LabelAnimation works for keyDegree = 2", () => {
  expect(
    (new LabelAnimation(Motion.DecrementKeyDegree, 1, 1)).startNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new LabelAnimation(Motion.DecrementKeyDegree, 1, 1)).finishNote.name
  ).toBe(
    "F"
  );
  expect(
    (new LabelAnimation(Motion.DecrementKeyDegree, 1, 1)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(Motion.DecrementKeyDegree, 1, 1)).isAddingCharacter
  ).toBe(
    false
  );

  expect(
    (new LabelAnimation(Motion.IncrementKeyDegree, 1, 1)).startNote.name
  ).toBe(
    "C"
  );
  expect(
    (new LabelAnimation(Motion.IncrementKeyDegree, 1, 1)).finishNote.name
  ).toBe(
    "C♯"
  );
  expect(
    (new LabelAnimation(Motion.IncrementKeyDegree, 1, 1)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(Motion.IncrementKeyDegree, 1, 1)).isAddingCharacter
  ).toBe(
    true
  );
});

test("LabelAnimation works for keyDegree = -3", () => {
  expect(
    (new LabelAnimation(Motion.DecrementKeyDegree, 0, -3)).startNote.name
  ).toBe(
    "D"
  );
  expect(
    (new LabelAnimation(Motion.DecrementKeyDegree, 0, -3)).finishNote.name
  ).toBe(
    "D♭"
  );
  expect(
    (new LabelAnimation(Motion.DecrementKeyDegree, 0, -3)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(Motion.DecrementKeyDegree, 0, -3)).isAddingCharacter
  ).toBe(
    true
  );

  expect(
    (new LabelAnimation(Motion.IncrementKeyDegree, 0, -3)).startNote.name
  ).toBe(
    "A♭"
  );
  expect(
    (new LabelAnimation(Motion.IncrementKeyDegree, 0, -3)).finishNote.name
  ).toBe(
    "A"
  );
  expect(
    (new LabelAnimation(Motion.IncrementKeyDegree, 0, -3)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(Motion.IncrementKeyDegree, 0, -3)).isAddingCharacter
  ).toBe(
    false
  );
});
