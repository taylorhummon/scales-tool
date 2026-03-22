import { test, expect } from 'vitest';

import { Motion } from "src/enumerations";
import { derivedFromState } from "src/utilities/derived";


test("derivedFromState() includes the motion", () => {
  expect(
    derivedFromState({ motion: Motion.Still, root: 3, mode: 2 }).motion
  ).toBe(
    Motion.Still
  );
  expect(
    derivedFromState({ motion: Motion.IncrementRoot, root: -2, mode: -2 }).motion
  ).toBe(
    Motion.IncrementRoot
  );
  expect(
    derivedFromState({ motion: Motion.DecrementRoot, root: 8, mode: -1 }).motion
  ).toBe(
    Motion.DecrementRoot
  );
  expect(
    derivedFromState({ motion: Motion.IncrementMode, root: -5, mode: 2 }).motion
  ).toBe(
    Motion.IncrementMode
  );
});

test("derivedFromState() includes the root", () => {
  expect(
    derivedFromState({ motion: Motion.Still, root: 3, mode: 2 }).root
  ).toBe(
    3
  );
  expect(
    derivedFromState({ motion: Motion.IncrementRoot, root: -2, mode: -2 }).root
  ).toBe(
    -2
  );
  expect(
    derivedFromState({ motion: Motion.DecrementRoot, root: 8, mode: -1 }).root
  ).toBe(
    8
  );
  expect(
    derivedFromState({ motion: Motion.IncrementMode, root: -5, mode: 2 }).root
  ).toBe(
    -5
  );
});

test("derivedFromState() includes the mode", () => {
  expect(
    derivedFromState({ motion: Motion.Still, root: 3, mode: 2 }).mode
  ).toBe(
    2
  );
  expect(
    derivedFromState({ motion: Motion.IncrementRoot, root: -2, mode: -2 }).mode
  ).toBe(
    -2
  );
  expect(
    derivedFromState({ motion: Motion.DecrementRoot, root: 8, mode: -1 }).mode
  ).toBe(
    -1
  );
  expect(
    derivedFromState({ motion: Motion.IncrementMode, root: -5, mode: 2 }).mode
  ).toBe(
    2
  );
});

test("derivedFromState() includes the notes", () => {
  const noteA = derivedFromState({ motion: Motion.Still, root: 3, mode: 2 }).notes[0];
  expect(
    noteA.name
  ).toBe(
    "C"
  );
  expect(
    noteA.hour
  ).toBe(
    10
  );
  expect(
    noteA.solfege
  ).toBe(
    "re"
  );
  expect(
    noteA.location
  ).toBe(
    0
  );

  const noteB = derivedFromState({ motion: Motion.Still, root: -2, mode: -2 }).notes[3];
  expect(
    noteB.name
  ).toBe(
    "D"
  );
  expect(
    noteB.hour
  ).toBe(
    0
  );
  expect(
    noteB.solfege
  ).toBe(
    "re"
  );
  expect(
    noteB.location
  ).toBe(
    3
  );

  const noteC = derivedFromState({ motion: Motion.Still, root: 8, mode: -1 }).notes[4];
  expect(
    noteC.name
  ).toBe(
    "B♯"
  );
  expect(
    noteC.hour
  ).toBe(
    10
  );
  expect(
    noteC.solfege
  ).toBe(
    "re"
  );
  expect(
    noteC.location
  ).toBe(
    4
  );

  const noteD = derivedFromState({ motion: Motion.Still, root: -5, mode: 2 }).notes[1];
  expect(
    noteD.name
  ).toBe(
    "C♭"
  );
  expect(
    noteD.hour
  ).toBe(
    9
  );
  expect(
    noteD.solfege
  ).toBe(
    "la"
  );
  expect(
    noteD.location
  ).toBe(
    1
  );
});

test("derivedFromState() includes the rootNote", () => {
  const rootNoteA = derivedFromState({ motion: Motion.Still, root: 3, mode: 2 }).rootNote;
  expect(
    rootNoteA.hour
  ).toBe(
    9
  );
  expect(
    rootNoteA.name
  ).toBe(
    "B"
  );

  const rootNoteB = derivedFromState({ motion: Motion.Still, root: -2, mode: -2 }).rootNote;
  expect(
    rootNoteB.hour
  ).toBe(
    10
  );
  expect(
    rootNoteB.name
  ).toBe(
    "C"
  );

  const rootNoteC = derivedFromState({ motion: Motion.Still, root: 8, mode: -1 }).rootNote;
  expect(
    rootNoteC.hour
  ).toBe(
    8
  );
  expect(
    rootNoteC.name
  ).toBe(
    "A♯"
  );

  const rootNoteD = derivedFromState({ motion: Motion.Still, root: -5, mode: 2 }).rootNote;
  expect(
    rootNoteD.hour
  ).toBe(
    1
  );
  expect(
    rootNoteD.name
  ).toBe(
    "E♭"
  );
});

test("derivedFromState() includes the modeNoteName", () => {
  expect(
    derivedFromState({ motion: Motion.Still, root: 3, mode: 2 }).modeNoteName
  ).toBe(
    "E"
  );
  expect(
    derivedFromState({ motion: Motion.IncrementRoot, root: -2, mode: -2 }).modeNoteName
  ).toBe(
    "C"
  );
  expect(
    derivedFromState({ motion: Motion.DecrementRoot, root: 8, mode: -1 }).modeNoteName
  ).toBe(
    "G"
  );
  expect(
    derivedFromState({ motion: Motion.IncrementMode, root: -5, mode: 2 }).modeNoteName
  ).toBe(
    "E"
  );
});

test("derivedFromState() includes the keyDegree", () => {
  expect(
    derivedFromState({ motion: Motion.Still, root: 3, mode: 2 }).keyDegree
  ).toBe(
    1
  );
  expect(
    derivedFromState({ motion: Motion.IncrementRoot, root: -2, mode: -2 }).keyDegree
  ).toBe(
    0
  );
  expect(
    derivedFromState({ motion: Motion.DecrementRoot, root: 8, mode: -1 }).keyDegree
  ).toBe(
    9
  );
  expect(
    derivedFromState({ motion: Motion.IncrementMode, root: -5, mode: 2 }).keyDegree
  ).toBe(
    -7
  );
});
