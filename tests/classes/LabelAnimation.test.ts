import { test, expect } from 'vitest';

import { Motion } from "src/enumerations"
import { LabelAnimation } from "src/classes/LabelAnimation";


test("LabelAnimation works for keyDegree = 0", () => {
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 0, 0)).startNote.name
  ).toBe(
    "F"
  );
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 0, 0)).finishNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 0, 0)).isIncrementingKeyDegree
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 0, 0)).isAddingCharacter
  ).toBe(
    true
  );

  expect(
    (new LabelAnimation(Motion.DecrementRoot, 0, 0)).startNote.name
  ).toBe(
    "B"
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 0, 0)).finishNote.name
  ).toBe(
    "B♭"
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 0, 0)).isIncrementingKeyDegree
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 0, 0)).isAddingCharacter
  ).toBe(
    true
  );

  expect(
    (new LabelAnimation(Motion.IncrementMode, 0, 0)).startNote.name
  ).toBe(
    "B"
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 0, 0)).finishNote.name
  ).toBe(
    "B♭"
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 0, 0)).isIncrementingKeyDegree
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 0, 0)).isAddingCharacter
  ).toBe(
    true
  );

  expect(
    (new LabelAnimation(Motion.DecrementMode, 0, 0)).startNote.name
  ).toBe(
    "F"
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 0, 0)).finishNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 0, 0)).isIncrementingKeyDegree
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 0, 0)).isAddingCharacter
  ).toBe(
    true
  );
});

test("LabelAnimation works for keyDegree = 2", () => {
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 1, -1)).startNote.name
  ).toBe(
    "G"
  );
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 1, -1)).finishNote.name
  ).toBe(
    "G♯"
  );
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 1, -1)).isIncrementingKeyDegree
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 1, -1)).isAddingCharacter
  ).toBe(
    true
  );

  expect(
    (new LabelAnimation(Motion.DecrementRoot, 1, -1)).startNote.name
  ).toBe(
    "C♯"
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 1, -1)).finishNote.name
  ).toBe(
    "C"
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 1, -1)).isIncrementingKeyDegree
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 1, -1)).isAddingCharacter
  ).toBe(
    false
  );

  expect(
    (new LabelAnimation(Motion.IncrementMode, 1, -1)).startNote.name
  ).toBe(
    "C♯"
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 1, -1)).finishNote.name
  ).toBe(
    "C"
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 1, -1)).isIncrementingKeyDegree
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 1, -1)).isAddingCharacter
  ).toBe(
    false
  );

  expect(
    (new LabelAnimation(Motion.DecrementMode, 1, -1)).startNote.name
  ).toBe(
    "G"
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 1, -1)).finishNote.name
  ).toBe(
    "G♯"
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 1, -1)).isIncrementingKeyDegree
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 1, -1)).isAddingCharacter
  ).toBe(
    true
  );
});

test("LabelAnimation works for keyDegree = -3", () => {
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 0, 3)).startNote.name
  ).toBe(
    "A♭"
  );
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 0, 3)).finishNote.name
  ).toBe(
    "A"
  );
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 0, 3)).isIncrementingKeyDegree
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(Motion.IncrementRoot, 0, 3)).isAddingCharacter
  ).toBe(
    false
  );

  expect(
    (new LabelAnimation(Motion.DecrementRoot, 0, 3)).startNote.name
  ).toBe(
    "D"
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 0, 3)).finishNote.name
  ).toBe(
    "D♭"
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 0, 3)).isIncrementingKeyDegree
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(Motion.DecrementRoot, 0, 3)).isAddingCharacter
  ).toBe(
    true
  );

  expect(
    (new LabelAnimation(Motion.IncrementMode, 0, 3)).startNote.name
  ).toBe(
    "D"
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 0, 3)).finishNote.name
  ).toBe(
    "D♭"
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 0, 3)).isIncrementingKeyDegree
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(Motion.IncrementMode, 0, 3)).isAddingCharacter
  ).toBe(
    true
  );

  expect(
    (new LabelAnimation(Motion.DecrementMode, 0, 3)).startNote.name
  ).toBe(
    "A♭"
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 0, 3)).finishNote.name
  ).toBe(
    "A"
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 0, 3)).isIncrementingKeyDegree
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(Motion.DecrementMode, 0, 3)).isAddingCharacter
  ).toBe(
    false
  );
});
