import { test, expect } from "vitest";

import { Note } from "@/classes/Note";
import { NaturalNote } from "@/utilities/natural-note";
import { Solfege } from "@/utilities/solfege";


test("Note.hour works", () => {
  expect(
    (new Note(NaturalNote.D, 0, 0)).hour
  ).toBe(
    0
  );
  expect(
    (new Note(NaturalNote.F, 1, 0)).hour
  ).toBe(
    4
  );
  expect(
    (new Note(NaturalNote.E, -2, 0)).hour
  ).toBe(
    0
  );
});

test("Note.name works", () => {
  expect(
    (new Note(NaturalNote.D, 0, 0)).name
  ).toBe(
    "D"
  );
  expect(
    (new Note(NaturalNote.F, 1, 0)).name
  ).toBe(
    "F♯"
  );
  expect(
    (new Note(NaturalNote.E, -2, 0)).name
  ).toBe(
    "E♭♭"
  );
});

test("Note.solfege works", () => {
  expect(
    (new Note(NaturalNote.D, 0, 0)).solfege
  ).toBe(
    Solfege.Do
  );
  expect(
    (new Note(NaturalNote.F, 1, 2)).solfege
  ).toBe(
    Solfege.Ti
  );
  expect(
    (new Note(NaturalNote.E, -2, -1)).solfege
  ).toBe(
    Solfege.Sol
  );
});
