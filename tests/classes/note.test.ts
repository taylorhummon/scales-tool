import { test, expect } from 'vitest';

import { NaturalNote, Solfege } from "src/enumerations"
import { Note } from "src/classes/Note";


test("Note.hour works", () => {
  expect(
    (new Note(NaturalNote.D, 0, Solfege.Do, 0)).hour
  ).toBe(
    0
  );
  expect(
    (new Note(NaturalNote.F, 1, Solfege.Do, 0)).hour
  ).toBe(
    4
  );
  expect(
    (new Note(NaturalNote.E, -2, Solfege.Do, 0)).hour
  ).toBe(
    0
  );
});

test("Note.name works", () => {
  expect(
    (new Note(NaturalNote.D, 0, Solfege.Do, 0)).name
  ).toBe(
    "D"
  );
  expect(
    (new Note(NaturalNote.F, 1, Solfege.Do, 0)).name
  ).toBe(
    "F♯"
  );
  expect(
    (new Note(NaturalNote.E, -2, Solfege.Do, 0)).name
  ).toBe(
    "E♭♭"
  );
});
