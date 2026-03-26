import { test, expect } from 'vitest';

import { Motion, NaturalNote, Solfege } from "src/enumerations";
import { derivedFromState } from "src/utilities/derived";


test("derivedFromState() includes the motion", () => {
  expect(
    derivedFromState({ motion: Motion.Still, doPosition: -2, keyDegree: 3 }).motion
  ).toBe(
    Motion.Still
  );
  expect(
    derivedFromState({ motion: Motion.IncrementDoPosition, doPosition: 2, keyDegree: -2 }).motion
  ).toBe(
    Motion.IncrementDoPosition
  );
  expect(
    derivedFromState({ motion: Motion.DecrementKeyDegree, doPosition: 1, keyDegree: 8 }).motion
  ).toBe(
    Motion.DecrementKeyDegree
  );
  expect(
    derivedFromState({ motion: Motion.IncrementBoth, doPosition: -2, keyDegree: -5 }).motion
  ).toBe(
    Motion.IncrementBoth
  );
});

test("derivedFromState() includes the doPosition", () => {
  expect(
    derivedFromState({ motion: Motion.Still, doPosition: -2, keyDegree: 3 }).doPosition
  ).toBe(
    -2
  );
  expect(
    derivedFromState({ motion: Motion.IncrementDoPosition, doPosition: 2, keyDegree: -2 }).doPosition
  ).toBe(
    2
  );
  expect(
    derivedFromState({ motion: Motion.DecrementKeyDegree, doPosition: 1, keyDegree: 8 }).doPosition
  ).toBe(
    1
  );
  expect(
    derivedFromState({ motion: Motion.IncrementBoth, doPosition: -2, keyDegree: -5 }).doPosition
  ).toBe(
    -2
  );
});

test("derivedFromState() includes the keyDegree", () => {
  expect(
    derivedFromState({ motion: Motion.Still, doPosition: -2, keyDegree: 3 }).keyDegree
  ).toBe(
    3
  );
  expect(
    derivedFromState({ motion: Motion.IncrementDoPosition, doPosition: 2, keyDegree: -2 }).keyDegree
  ).toBe(
    -2
  );
  expect(
    derivedFromState({ motion: Motion.DecrementKeyDegree, doPosition: 1, keyDegree: 8 }).keyDegree
  ).toBe(
    8
  );
  expect(
    derivedFromState({ motion: Motion.IncrementBoth, doPosition: -2, keyDegree: -5 }).keyDegree
  ).toBe(
    -5
  );
});

test("derivedFromState() includes the modeNote", () => {
  expect(
    derivedFromState({ motion: Motion.Still, doPosition: -2, keyDegree: 3 }).modeNote
  ).toBe(
    NaturalNote.E
  );
  expect(
    derivedFromState({ motion: Motion.IncrementDoPosition, doPosition: 2, keyDegree: -2 }).modeNote
  ).toBe(
    NaturalNote.C
  );
  expect(
    derivedFromState({ motion: Motion.DecrementKeyDegree, doPosition: 1, keyDegree: 8 }).modeNote
  ).toBe(
    NaturalNote.G
  );
  expect(
    derivedFromState({ motion: Motion.IncrementBoth, doPosition: -2, keyDegree: -5 }).modeNote
  ).toBe(
    NaturalNote.E
  );
});

test("derivedFromState() includes the rootNote", () => {
  const rootNoteA = derivedFromState({ motion: Motion.Still, doPosition: -2, keyDegree: 3 }).rootNote;
  expect(
    rootNoteA.hour
  ).toBe(
    11
  );
  expect(
    rootNoteA.name
  ).toBe(
    "C♯"
  );

  const rootNoteB = derivedFromState({ motion: Motion.IncrementDoPosition, doPosition: 2, keyDegree: -2 }).rootNote;
  expect(
    rootNoteB.hour
  ).toBe(
    8
  );
  expect(
    rootNoteB.name
  ).toBe(
    "B♭"
  );

  const rootNoteC = derivedFromState({ motion: Motion.DecrementKeyDegree, doPosition: 1, keyDegree: 8 }).rootNote;
  expect(
    rootNoteC.hour
  ).toBe(
    1
  );
  expect(
    rootNoteC.name
  ).toBe(
    "D♯"
  );

  const rootNoteD = derivedFromState({ motion: Motion.IncrementBoth, doPosition: -2, keyDegree: -5 }).rootNote;
  expect(
    rootNoteD.hour
  ).toBe(
    3
  );
  expect(
    rootNoteD.name
  ).toBe(
    "F"
  );
});


test("derivedFromState() includes the scale", () => {
  const noteA = derivedFromState({ motion: Motion.Still, doPosition: -2, keyDegree: 3 }).scale[0];
  expect(
    noteA.name
  ).toBe(
    "D"
  );
  expect(
    noteA.hour
  ).toBe(
    0
  );
  expect(
    noteA.solfege
  ).toBe(
    Solfege.Re
  );
  expect(
    noteA.position
  ).toBe(
    3
  );

  const noteB = derivedFromState({ motion: Motion.IncrementDoPosition, doPosition: 2, keyDegree: -2 }).scale[3];
  expect(
    noteB.name
  ).toBe(
    "C"
  );
  expect(
    noteB.hour
  ).toBe(
    10
  );
  expect(
    noteB.solfege
  ).toBe(
    Solfege.Re
  );
  expect(
    noteB.position
  ).toBe(
    0
  );

  const noteC = derivedFromState({ motion: Motion.DecrementKeyDegree, doPosition: 1, keyDegree: 8 }).scale[4];
  expect(
    noteC.name
  ).toBe(
    "E♯"
  );
  expect(
    noteC.hour
  ).toBe(
    3
  );
  expect(
    noteC.solfege
  ).toBe(
    Solfege.Re
  );
  expect(
    noteC.position
  ).toBe(
    -1
  );

  const noteD = derivedFromState({ motion: Motion.IncrementBoth, doPosition: -2, keyDegree: -5 }).scale[1];
  expect(
    noteD.name
  ).toBe(
    "D♭"
  );
  expect(
    noteD.hour
  ).toBe(
    11
  );
  expect(
    noteD.solfege
  ).toBe(
    Solfege.La
  );
  expect(
    noteD.position
  ).toBe(
    2
  );
});
