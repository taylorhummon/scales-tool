import { test, expect } from 'vitest';

import { NaturalNoteName, Solfege } from "src/enumerations"
import { Note } from "src/classes/Note";


test("Note.name works", () => {
  expect(
    (new Note(NaturalNoteName.D, 0, Solfege.Do, 0)).name
  ).toBe(
    "D"
  );
  expect(
    (new Note(NaturalNoteName.F, 1, Solfege.Do, 0)).name
  ).toBe(
    "F♯"
  );
  expect(
    (new Note(NaturalNoteName.E, -2, Solfege.Do, 0)).name
  ).toBe(
    "E♭♭"
  );
});

test("Note.hour works", () => {
  expect(
    (new Note(NaturalNoteName.D, 0, Solfege.Do, 0)).hour
  ).toBe(
    0
  );
  expect(
    (new Note(NaturalNoteName.F, 1, Solfege.Do, 0)).hour
  ).toBe(
    4
  );
  expect(
    (new Note(NaturalNoteName.E, -2, Solfege.Do, 0)).hour
  ).toBe(
    0
  );
});
