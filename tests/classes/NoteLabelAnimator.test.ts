import { test, expect } from "vitest";

import { NoteLabelAnimator } from "@/classes/NoteLabelAnimator";
import { MusicalKey } from "@/classes/MusicalKey";
import { Motion } from "@/utilities/motion";


test("NoteLabelAnimator works for key degree = 0", () => {
  const musicalKey = new MusicalKey(1, 0);

  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).startNote.name
  ).toBe(
    "B"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).finishNote.name
  ).toBe(
    "B♭"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).noteWithLongerName.name
  ).toBe(
    "B♭"
  );

  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).startNote.name
  ).toBe(
    "F"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).finishNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).noteWithLongerName.name
  ).toBe(
    "F♯"
  );
});

test("NoteLabelAnimator works for key degree = 1", () => {
  const musicalKey = new MusicalKey(1, 1);

  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).startNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).finishNote.name
  ).toBe(
    "F"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).isAddingCharacter
  ).toBe(
    false
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).noteWithLongerName.name
  ).toBe(
    "F♯"
  );

  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).startNote.name
  ).toBe(
    "C"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).finishNote.name
  ).toBe(
    "C♯"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).noteWithLongerName.name
  ).toBe(
    "C♯"
  );
});

test("NoteLabelAnimator works for key degree = -3", () => {
  const musicalKey = new MusicalKey(0, -3);

  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).startNote.name
  ).toBe(
    "D"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).finishNote.name
  ).toBe(
    "D♭"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.DecrementDegreeAndIncrementMode)).noteWithLongerName.name
  ).toBe(
    "D♭"
  );

  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).startNote.name
  ).toBe(
    "A♭"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).finishNote.name
  ).toBe(
    "A"
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).isAddingCharacter
  ).toBe(
    false
  );
  expect(
    (new NoteLabelAnimator(musicalKey, Motion.IncrementDegreeAndDecrementMode)).noteWithLongerName.name
  ).toBe(
    "A♭"
  );
});
