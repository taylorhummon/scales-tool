import { test, expect } from 'vitest';

import { NaturalNoteName } from "src/enumerations"
import { Note } from "src/classes/Note";


test("Note.name works", () => {
  expect(
    (new Note(NaturalNoteName.D, 0)).name
  ).toBe(
    "D"
  );
  expect(
    (new Note(NaturalNoteName.F, 1)).name
  ).toBe(
    "F♯"
  );
  expect(
    (new Note(NaturalNoteName.E, -2)).name
  ).toBe(
    "E♭♭"
  );
});

test("Note.hour works", () => {
  expect(
    (new Note(NaturalNoteName.D, 0)).hour
  ).toBe(
    0
  );
  expect(
    (new Note(NaturalNoteName.F, 1)).hour
  ).toBe(
    4
  );
  expect(
    (new Note(NaturalNoteName.E, -2)).hour
  ).toBe(
    0
  );
});
