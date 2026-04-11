import { test, expect } from "vitest";

import { Motion } from "@/enumerations"
import { LabelAnimation } from "@/classes/LabelAnimation";
import { MusicalKey } from "@/classes/MusicalKey";


test("LabelAnimation works for key degree = 0", () => {
  const musicalKey = new MusicalKey(0, 1);

  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).startNote.name
  ).toBe(
    "B"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).finishNote.name
  ).toBe(
    "B♭"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).noteWithLongerName.name
  ).toBe(
    "B♭"
  );

  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).startNote.name
  ).toBe(
    "F"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).finishNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).noteWithLongerName.name
  ).toBe(
    "F♯"
  );
});

test("LabelAnimation works for key degree = 1", () => {
  const musicalKey = new MusicalKey(1, 1);

  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).startNote.name
  ).toBe(
    "F♯"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).finishNote.name
  ).toBe(
    "F"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).isAddingCharacter
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).noteWithLongerName.name
  ).toBe(
    "F♯"
  );

  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).startNote.name
  ).toBe(
    "C"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).finishNote.name
  ).toBe(
    "C♯"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).noteWithLongerName.name
  ).toBe(
    "C♯"
  );
});

test("LabelAnimation works for key degree = -3", () => {
  const musicalKey = new MusicalKey(-3, 0);

  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).startNote.name
  ).toBe(
    "D"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).finishNote.name
  ).toBe(
    "D♭"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).isIncrement
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).isAddingCharacter
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.DecrementDegree)).noteWithLongerName.name
  ).toBe(
    "D♭"
  );

  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).startNote.name
  ).toBe(
    "A♭"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).finishNote.name
  ).toBe(
    "A"
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).isIncrement
  ).toBe(
    true
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).isAddingCharacter
  ).toBe(
    false
  );
  expect(
    (new LabelAnimation(musicalKey, Motion.IncrementDegree)).noteWithLongerName.name
  ).toBe(
    "A♭"
  );
});
