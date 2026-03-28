import { test, expect } from 'vitest';

import { NaturalNote } from "src/enumerations";
import { getModeName } from "src/utilities/mode";


test("getModeName() works", () => {
  expect(
    getModeName(NaturalNote.D)
  ).toBe(
    "Dorian"
  );
  expect(
    getModeName(NaturalNote.C)
  ).toBe(
    "Ionian"
  );
  expect(
    getModeName(NaturalNote.B)
  ).toBe(
    "Locrian"
  );
});
