import { test, expect } from "vitest";

import { NaturalNote, Solfege } from "src/enumerations";
import {
  MusicalKey,
  musicalKeyFromShorthand
} from "src/classes/MusicalKey";


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
    [3, 2, 1, 0, -1, -2, -3]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.name)
  ).toStrictEqual(
    ["B♭", "F", "C", "G", "D", "A", "E", "B", "F♯"]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.solfege)
  ).toStrictEqual(
    [Solfege.La, Solfege.Mi, Solfege.Ti, Solfege.Fa, Solfege.Do, Solfege.Sol, Solfege.Re, Solfege.La, Solfege.Mi]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.position)
  ).toStrictEqual(
    [4, 3, 2, 1, 0, -1, -2, -3, -4]
  );
  expect(
    musicalKey.shorthand
  ).toBe(
    "0D"
  );
  expect(
    musicalKey.noteAt(3).name
  ).toBe(
    "F"
  );
  expect(
    musicalKey.noteAt(0).name
  ).toBe(
    "D"
  );
  expect(
    musicalKey.noteAt(-3).name
  ).toBe(
    "B"
  );
});

test("MusicalKey works for A-Major", () => {
  const musicalKey = new MusicalKey(3, 2);
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
    [3, 2, 1, 0, -1, -2, -3]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.name)
  ).toStrictEqual(
    ["G", "D", "A", "E", "B", "F♯", "C♯", "G♯", "D♯"]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.solfege)
  ).toStrictEqual(
    [Solfege.Ti, Solfege.Fa, Solfege.Do, Solfege.Sol, Solfege.Re, Solfege.La, Solfege.Mi, Solfege.Ti, Solfege.Fa]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.position)
  ).toStrictEqual(
    [4, 3, 2, 1, 0, -1, -2, -3, -4]
  );
  expect(
    musicalKey.shorthand
  ).toBe(
    "3C"
  );
  expect(
    musicalKey.noteAt(3).name
  ).toBe(
    "D"
  );
  expect(
    musicalKey.noteAt(0).name
  ).toBe(
    "B"
  );
  expect(
    musicalKey.noteAt(-3).name
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
    [3, 2, 1, 0, -1, -2, -3]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.name)
  ).toStrictEqual(
    ["A♭", "E♭", "B♭", "F", "C", "G", "D", "A", "E"]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.solfege)
  ).toStrictEqual(
    [Solfege.Re, Solfege.La, Solfege.Mi, Solfege.Ti, Solfege.Fa, Solfege.Do, Solfege.Sol, Solfege.Re, Solfege.La]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.position)
  ).toStrictEqual(
    [4, 3, 2, 1, 0, -1, -2, -3, -4]
  );
  expect(
    musicalKey.shorthand
  ).toBe(
    "-2A"
  );
  expect(
    musicalKey.noteAt(3).name
  ).toBe(
    "E♭"
  );
  expect(
    musicalKey.noteAt(0).name
  ).toBe(
    "C"
  );
  expect(
    musicalKey.noteAt(-3).name
  ).toBe(
    "A"
  );
});

test("musicalKeyFromShorthand() works for D-Minor", () => {
  const musicalKey = musicalKeyFromShorthand("-1A");
  expect(
    musicalKey?.degree
  ).toBe(
    -1
  );
  expect(
    musicalKey?.modeNote
  ).toBe(
    NaturalNote.A
  );
});

test("musicalKeyFromShorthand() works for Phrygian F♯", () => {
  const musicalKey = musicalKeyFromShorthand("2e");
  expect(
    musicalKey?.degree
  ).toBe(
    2
  );
  expect(
    musicalKey?.modeNote
  ).toBe(
    NaturalNote.E
  );
});

test("musicalKeyFromShorthand() works for Lydian A", () => {
  const musicalKey = musicalKeyFromShorthand("4F");
  expect(
    musicalKey?.degree
  ).toBe(
    4
  );
  expect(
    musicalKey?.modeNote
  ).toBe(
    NaturalNote.F
  );
});
