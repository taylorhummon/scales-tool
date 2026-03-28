import { test, expect } from 'vitest';

import { Motion } from "src/enumerations"
import { LabelAnimation } from "src/classes/LabelAnimation";
import { MusicalKey } from "src/classes/MusicalKey";


test("LabelAnimation works for key degree = 0", () => {
  const musicalKey = new MusicalKey(2, 0);

  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).startNote.name
  ).toBe(
    "B"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).finishNote.name
  ).toBe(
    "B♭"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).noteWithLongerName.name
  ).toBe(
    "B♭"
  );

  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).startNote.name
  ).toBe(
    "F"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).finishNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).noteWithLongerName.name
  ).toBe(
    "F♯"
  );
});

test("LabelAnimation works for key degree = 1", () => {
  const musicalKey = new MusicalKey(1, 1);

  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).startNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).finishNote.name
  ).toBe(
    "F"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).isAddingCharacter
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).noteWithLongerName.name
  ).toBe(
    "F♯"
  );

  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).startNote.name
  ).toBe(
    "C"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).finishNote.name
  ).toBe(
    "C♯"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).noteWithLongerName.name
  ).toBe(
    "C♯"
  );
});

test("LabelAnimation works for key degree = -3", () => {
  const musicalKey = new MusicalKey(0, -3);

  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).startNote.name
  ).toBe(
    "D"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).finishNote.name
  ).toBe(
    "D♭"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementRight)).noteWithLongerName.name
  ).toBe(
    "D♭"
  );

  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).startNote.name
  ).toBe(
    "A♭"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).finishNote.name
  ).toBe(
    "A"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).isAddingCharacter
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementRight)).noteWithLongerName.name
  ).toBe(
    "A♭"
  );
});
