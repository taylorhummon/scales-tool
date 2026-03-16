import { test, expect } from 'vitest';

import { Motion } from "src/enumerations";
import { derivedFromState } from "src/utilities/derived";


test("derivedFromState() includes the root", () => {
  expect(
    derivedFromState({ motion: Motion.Still, root: 3, mode: 2 }).root
  ).toBe(
    3
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: -2, mode: -2 }).root
  ).toBe(
    -2
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: 8, mode: -1 }).root
  ).toBe(
    8
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: -5, mode: 2 }).root
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
    derivedFromState({ motion: Motion.Still, root: -2, mode: -2 }).mode
  ).toBe(
    -2
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: 8, mode: -1 }).mode
  ).toBe(
    -1
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: -5, mode: 2 }).mode
  ).toBe(
    2
  );
});

test("derivedFromState() includes the notes", () => {
  expect(
    derivedFromState({ motion: Motion.Still, root: 3, mode: 2 }).notes[1]
  ).toStrictEqual(
    {
      name: "C",
      hour: 10,
      solfege: "re"
    }
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: -2, mode: -2 }).notes[1]
  ).toStrictEqual(
    {
      name: "D",
      hour: 0,
      solfege: "re"
    }
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: 8, mode: -1 }).notes[1]
  ).toStrictEqual(
    {
      name: "B♯",
      hour: 10,
      solfege: "re"
    }
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: -5, mode: 2 }).notes[1]
  ).toStrictEqual(
    {
      name: "F♭",
      hour: 2,
      solfege: "re"
    }
  );
});

test("derivedFromState() includes the rootNoteHour", () => {
  expect(
    derivedFromState({ motion: Motion.Still, root: 3, mode: 2 }).rootNoteHour
  ).toBe(
    9
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: -2, mode: -2 }).rootNoteHour
  ).toBe(
    10
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: 8, mode: -1 }).rootNoteHour
  ).toBe(
    8
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: -5, mode: 2 }).rootNoteHour
  ).toBe(
    1
  );
});

test("derivedFromState() includes the rootNoteName", () => {
  expect(
    derivedFromState({ motion: Motion.Still, root: 3, mode: 2 }).rootNoteName
  ).toBe(
    "B"
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: -2, mode: -2 }).rootNoteName
  ).toBe(
    "C"
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: 8, mode: -1 }).rootNoteName
  ).toBe(
    "A♯"
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: -5, mode: 2 }).rootNoteName
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
    derivedFromState({ motion: Motion.Still, root: -2, mode: -2 }).modeNoteName
  ).toBe(
    "C"
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: 8, mode: -1 }).modeNoteName
  ).toBe(
    "G"
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: -5, mode: 2 }).modeNoteName
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
    derivedFromState({ motion: Motion.Still, root: -2, mode: -2 }).keyDegree
  ).toBe(
    0
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: 8, mode: -1 }).keyDegree
  ).toBe(
    9
  );
  expect(
    derivedFromState({ motion: Motion.Still, root: -5, mode: 2 }).keyDegree
  ).toBe(
    -7
  );
});
