import { test, expect } from "vitest";

import {
  MusicalKey
} from "@/classes/MusicalKey";
import { NaturalNote } from "@/utilities/natural-note";
import { Solfege } from "@/utilities/solfege";


test("MusicalKey works for Dorian D", () => {
  const musicalKey = new MusicalKey(0, 0);
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
    musicalKey.noteInTopPosition.name
  ).toBe(
    "F"
  );
  expect(
    musicalKey.noteInBottomPosition.name
  ).toBe(
    "B"
  );
  expect(
    musicalKey.scale.map((note) => note.name)
  ).toStrictEqual(
    ["F", "C", "G", "D", "A", "E", "B"]
  );
  expect(
    musicalKey.scale.map((note) => note.solfege)
  ).toStrictEqual(
    [Solfege.Mi, Solfege.Ti, Solfege.Fa, Solfege.Do, Solfege.Sol, Solfege.Re, Solfege.La]
  );
  expect(
    musicalKey.scale.map((note) => note.position)
  ).toStrictEqual(
    [-3, -2, -1, 0, 1, 2, 3]
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
  const musicalKey = new MusicalKey(3, 1);
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
    musicalKey.noteInTopPosition.name
  ).toBe(
    "D"
  );
  expect(
    musicalKey.noteInBottomPosition.name
  ).toBe(
    "G♯"
  );
  expect(
    musicalKey.scale.map((note) => note.name)
  ).toStrictEqual(
    ["D", "A", "E", "B", "F♯", "C♯", "G♯"]
  );
  expect(
    musicalKey.scale.map((note) => note.solfege)
  ).toStrictEqual(
    [Solfege.Fa, Solfege.Do, Solfege.Sol, Solfege.Re, Solfege.La, Solfege.Mi, Solfege.Ti]
  );
  expect(
    musicalKey.scale.map((note) => note.position)
  ).toStrictEqual(
    [-1, 0, 1, 2, 3, 4, 5]
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
  const musicalKey = new MusicalKey(-2, -1);
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
    musicalKey.noteInTopPosition.name
  ).toBe(
    "E♭"
  );
  expect(
    musicalKey.noteInBottomPosition.name
  ).toBe(
    "A"
  );
  expect(
    musicalKey.scale.map((note) => note.name)
  ).toStrictEqual(
    ["E♭", "B♭", "F", "C", "G", "D", "A"]
  );
  expect(
    musicalKey.scale.map((note) => note.solfege)
  ).toStrictEqual(
    [Solfege.La, Solfege.Mi, Solfege.Ti, Solfege.Fa, Solfege.Do, Solfege.Sol, Solfege.Re]
  );
  expect(
    musicalKey.scale.map((note) => note.position)
  ).toStrictEqual(
    [-4, -3, -2, -1, 0, 1, 2]
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
