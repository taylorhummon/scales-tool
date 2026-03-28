import { test, expect } from 'vitest';

import { Motion } from "src/enumerations"
import { LabelAnimation } from "src/classes/LabelAnimation";
import { MusicalKey } from "src/classes/MusicalKey";


test("LabelAnimation works for keyDegree = 0", () => {
  const musicalKey = new MusicalKey(2, 0);

  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).startNote.name
  ).toBe(
    "B"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).finishNote.name
  ).toBe(
    "B♭"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).noteWithLongerName.name
  ).toBe(
    "B♭"
  );

  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).startNote.name
  ).toBe(
    "F"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).finishNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).noteWithLongerName.name
  ).toBe(
    "F♯"
  );
});

test("LabelAnimation works for keyDegree = 1", () => {
  const musicalKey = new MusicalKey(1, 1);

  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).startNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).finishNote.name
  ).toBe(
    "F"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).isAddingCharacter
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).noteWithLongerName.name
  ).toBe(
    "F♯"
  );

  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).startNote.name
  ).toBe(
    "C"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).finishNote.name
  ).toBe(
    "C♯"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).noteWithLongerName.name
  ).toBe(
    "C♯"
  );
});

test("LabelAnimation works for keyDegree = -3", () => {
  const musicalKey = new MusicalKey(0, -3);

  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).startNote.name
  ).toBe(
    "D"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).finishNote.name
  ).toBe(
    "D♭"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementKeyDegree)).noteWithLongerName.name
  ).toBe(
    "D♭"
  );

  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).startNote.name
  ).toBe(
    "A♭"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).finishNote.name
  ).toBe(
    "A"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).isAddingCharacter
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementKeyDegree)).noteWithLongerName.name
  ).toBe(
    "A♭"
  );
});
