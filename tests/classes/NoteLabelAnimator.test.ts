import { test, expect } from "vitest";

import { NoteLabelAnimator } from "@/classes/NoteLabelAnimator";
import { MusicalKey } from "@/classes/MusicalKey";
import { Motion } from "@/utilities/motion";


test("NoteLabelAnimator works for key degree = 0", () => {
  const musicalKey = new MusicalKey(0, 1);

  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).startNote.name
  ).toBe(
    "B"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).finishNote.name
  ).toBe(
    "B♭"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).noteWithLongerName.name
  ).toBe(
    "B♭"
  );

  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).startNote.name
  ).toBe(
    "F"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).finishNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).noteWithLongerName.name
  ).toBe(
    "F♯"
  );
});

test("NoteLabelAnimator works for key degree = 1", () => {
  const musicalKey = new MusicalKey(1, 1);

  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).startNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).finishNote.name
  ).toBe(
    "F"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).isAddingCharacter
  ).toBe(
    false
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).noteWithLongerName.name
  ).toBe(
    "F♯"
  );

  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).startNote.name
  ).toBe(
    "C"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).finishNote.name
  ).toBe(
    "C♯"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).noteWithLongerName.name
  ).toBe(
    "C♯"
  );
});

test("NoteLabelAnimator works for key degree = -3", () => {
  const musicalKey = new MusicalKey(-3, 0);

  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).startNote.name
  ).toBe(
    "D"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).finishNote.name
  ).toBe(
    "D♭"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegree)).noteWithLongerName.name
  ).toBe(
    "D♭"
  );

  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).startNote.name
  ).toBe(
    "A♭"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).finishNote.name
  ).toBe(
    "A"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).isAddingCharacter
  ).toBe(
    false
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegree)).noteWithLongerName.name
  ).toBe(
    "A♭"
  );
});
