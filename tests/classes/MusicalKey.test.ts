import { test, expect } from "vitest";

import { MusicalKey } from "@/classes/MusicalKey";
import { NaturalNote } from "@/utilities/naturalNote";
import { SOLFEGE_LETTERS } from "@/utilities/solfege";

test("new MusicalKey() works with different parameter subsets", () => {
  expect(
    new MusicalKey({ mode: 0, root: 0, degree: 0 }).mode
  ).toBe(
    0
  );
  expect(
    new MusicalKey({ mode: 0, root: 0, degree: 0 }).root
  ).toBe(
    0
  );
  expect(
    new MusicalKey({ mode: 0, root: 0, degree: 0 }).degree
  ).toBe(
    0
  );

  expect(
    new MusicalKey({ mode: 1, root: 3, degree: 2 }).mode
  ).toBe(
    1
  );
  expect(
    new MusicalKey({ mode: 1, root: 3, degree: 2 }).root
  ).toBe(
    3
  );
  expect(
    new MusicalKey({ mode: 1, root: 3, degree: 2 }).degree
  ).toBe(
    2
  );

  expect(
    new MusicalKey({ mode: 1, root: 3 }).mode
  ).toBe(
    1
  );
  expect(
    new MusicalKey({ mode: 1, root: 3 }).root
  ).toBe(
    3
  );
  expect(
    new MusicalKey({ mode: 1, root: 3 }).degree
  ).toBe(
    2
  );

  expect(
    new MusicalKey({ mode: 1, degree: 2 }).mode
  ).toBe(
    1
  );
  expect(
    new MusicalKey({ mode: 1, degree: 2 }).root
  ).toBe(
    3
  );
  expect(
    new MusicalKey({ mode: 1, degree: 2 }).degree
  ).toBe(
    2
  );

  expect(
    new MusicalKey({ root: 3, degree: 2 }).mode
  ).toBe(
    1
  );
  expect(
    new MusicalKey({ root: 3, degree: 2 }).root
  ).toBe(
    3
  );
  expect(
    new MusicalKey({ root: 3, degree: 2 }).degree
  ).toBe(
    2
  );

  expect(() => {
    new MusicalKey({ mode: 1 }).mode
  }).toThrow();
  expect(() => {
    new MusicalKey({ root: 3 }).mode
  }).toThrow();
  expect(() => {
    new MusicalKey({ degree: 2 }).mode
  }).toThrow();

  expect(() => {
    new MusicalKey({ mode: 1, root: 3, degree: 4 }).mode
  }).toThrow();
});

test("MusicalKey works for Dorian D", () => {
  const musicalKey = new MusicalKey({ root: 0, mode: 0 });
  expect(
    musicalKey.modeName
  ).toBe(
    "Dorian"
  );
  expect(
    musicalKey.modeNote
  ).toBe(
    NaturalNote.D
  );
  expect(
    musicalKey.rootNote.name
  ).toBe(
    NaturalNote.D
  );
  expect(
    musicalKey.topPosition
  ).toBe(
    -3
  );
  expect(
    musicalKey.bottomPosition
  ).toBe(
    3
  );
  const notes = SOLFEGE_LETTERS.map((solfegeLetter) => musicalKey.scale.get(solfegeLetter));
  expect(
    notes.map((note) => note?.name)
  ).toStrictEqual(
    ["D", "E", "F", "G", "A", "B", "C"]
  );
  expect(
    notes.map((note) => note?.position)
  ).toStrictEqual(
    [0, 2, -3, -1, 1, 3, -2]
  );
  expect(
    musicalKey.noteAt(-3).name
  ).toBe(
    "F"
  );
  expect(
    musicalKey.noteAt(0).name
  ).toBe(
    "D"
  );
  expect(
    musicalKey.noteAt(3).name
  ).toBe(
    "B"
  );
});

test("MusicalKey works for A-Major", () => {
  const musicalKey = new MusicalKey({ mode: -2, root: 1 });
  expect(
    musicalKey.modeName
  ).toBe(
    "Major"
  );
  expect(
    musicalKey.modeNote
  ).toBe(
    NaturalNote.C
  );
  expect(
    musicalKey.rootNote.name
  ).toBe(
    "A"
  );
  expect(
    musicalKey.topPosition
  ).toBe(
    -1
  );
  expect(
    musicalKey.bottomPosition
  ).toBe(
    5
  );
  const notes = SOLFEGE_LETTERS.map((solfegeLetter) => musicalKey.scale.get(solfegeLetter));
  expect(
    notes.map((note) => note?.name)
  ).toStrictEqual(
    ["A", "B", "C♯", "D", "E", "F♯", "G♯"]
  );
  expect(
    notes.map((note) => note?.position)
  ).toStrictEqual(
    [0, 2, 4, -1, 1, 3, 5]
  );
  expect(
    musicalKey.noteAt(-1).name
  ).toBe(
    "D"
  );
  expect(
    musicalKey.noteAt(2).name
  ).toBe(
    "B"
  );
  expect(
    musicalKey.noteAt(5).name
  ).toBe(
    "G♯"
  );
});

test("MusicalKey works for G-Minor", () => {
  const musicalKey = new MusicalKey({ mode: 1, root: -1 });
  expect(
    musicalKey.modeName
  ).toBe(
    "Minor"
  );
  expect(
    musicalKey.modeNote
  ).toBe(
    NaturalNote.A
  );
  expect(
    musicalKey.rootNote.name
  ).toBe(
    NaturalNote.G
  );
  expect(
    musicalKey.topPosition
  ).toBe(
    -4
  );
  expect(
    musicalKey.bottomPosition
  ).toBe(
    2
  );
  const notes = SOLFEGE_LETTERS.map((solfegeLetter) => musicalKey.scale.get(solfegeLetter));
  expect(
    notes.map((note) => note?.name)
  ).toStrictEqual(
    ["G", "A", "B♭", "C", "D", "E♭", "F"]
  );
  expect(
    notes.map((note) => note?.position)
  ).toStrictEqual(
    [0, 2, -3, -1, 1, -4, -2]
  );
  expect(
    musicalKey.noteAt(-4).name
  ).toBe(
    "E♭"
  );
  expect(
    musicalKey.noteAt(-1).name
  ).toBe(
    "C"
  );
  expect(
    musicalKey.noteAt(2).name
  ).toBe(
    "A"
  );
});
