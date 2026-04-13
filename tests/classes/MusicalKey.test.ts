import { test, expect } from "vitest";

import {
  MusicalKey,
  musicalKeyFromShorthand
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
    musicalKey.noteInFirstPosition.name
  ).toBe(
    "B"
  );
  expect(
    musicalKey.noteInLastPosition.name
  ).toBe(
    "F"
  );
  expect(
    musicalKey.scale.map((note) => note.name)
  ).toStrictEqual(
    ["B", "E", "A", "D", "G", "C", "F"]
  );
  expect(
    musicalKey.scale.map((note) => note.solfege)
  ).toStrictEqual(
    [Solfege.La, Solfege.Re, Solfege.Sol, Solfege.Do, Solfege.Fa, Solfege.Ti, Solfege.Mi]
  );
  expect(
    musicalKey.scale.map((note) => note.position)
  ).toStrictEqual(
    [-3, -2, -1, 0, 1, 2, 3]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.name)
  ).toStrictEqual(
    ["F♯", "B", "E", "A", "D", "G", "C", "F", "B♭"]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.solfege)
  ).toStrictEqual(
    [Solfege.Mi, Solfege.La, Solfege.Re, Solfege.Sol, Solfege.Do, Solfege.Fa, Solfege.Ti, Solfege.Mi, Solfege.La]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.position)
  ).toStrictEqual(
    [-4, -3, -2, -1, 0, 1, 2, 3, 4]
  );
  expect(
    musicalKey.shorthand
  ).toBe(
    "D0"
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

// mode = -2
// degree = 3
// root - mode = degree
// root = 1

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
    musicalKey.noteInFirstPosition.name
  ).toBe(
    "G♯"
  );
  expect(
    musicalKey.noteInLastPosition.name
  ).toBe(
    "D"
  );
  expect(
    musicalKey.scale.map((note) => note.name)
  ).toStrictEqual(
    ["G♯", "C♯", "F♯", "B", "E", "A", "D"]
  );
  expect(
    musicalKey.scale.map((note) => note.solfege)
  ).toStrictEqual(
    [Solfege.Ti, Solfege.Mi, Solfege.La, Solfege.Re, Solfege.Sol, Solfege.Do, Solfege.Fa]
  );
  expect(
    musicalKey.scale.map((note) => note.position)
  ).toStrictEqual(
    [-5, -4, -3, -2, -1, 0, 1]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.name)
  ).toStrictEqual(
    ["D♯", "G♯", "C♯", "F♯", "B", "E", "A", "D", "G"]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.solfege)
  ).toStrictEqual(
    [Solfege.Fa, Solfege.Ti, Solfege.Mi, Solfege.La, Solfege.Re, Solfege.Sol, Solfege.Do, Solfege.Fa, Solfege.Ti]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.position)
  ).toStrictEqual(
    [-6, -5, -4, -3, -2, -1, 0, 1, 2]
  );
  expect(
    musicalKey.shorthand
  ).toBe(
    "C3"
  );
  expect(
    musicalKey.noteAt(1).name
  ).toBe(
    "D"
  );
  expect(
    musicalKey.noteAt(-2).name
  ).toBe(
    "B"
  );
  expect(
    musicalKey.noteAt(-5).name
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
    musicalKey.noteInFirstPosition.name
  ).toBe(
    "A"
  );
  expect(
    musicalKey.noteInLastPosition.name
  ).toBe(
    "E♭"
  );
  expect(
    musicalKey.scale.map((note) => note.name)
  ).toStrictEqual(
    ["A", "D", "G", "C", "F", "B♭", "E♭"]
  );
  expect(
    musicalKey.scale.map((note) => note.solfege)
  ).toStrictEqual(
    [Solfege.Re, Solfege.Sol, Solfege.Do, Solfege.Fa, Solfege.Ti, Solfege.Mi, Solfege.La]
  );
  expect(
    musicalKey.scale.map((note) => note.position)
  ).toStrictEqual(
    [-2, -1, 0, 1, 2, 3, 4]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.name)
  ).toStrictEqual(
    ["E", "A", "D", "G", "C", "F", "B♭", "E♭", "A♭"]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.solfege)
  ).toStrictEqual(
    [Solfege.La, Solfege.Re, Solfege.Sol, Solfege.Do, Solfege.Fa, Solfege.Ti, Solfege.Mi, Solfege.La, Solfege.Re]
  );
  expect(
    musicalKey.extendedScale.map((note) => note.position)
  ).toStrictEqual(
    [-3, -2, -1, 0, 1, 2, 3, 4, 5]
  );
  expect(
    musicalKey.shorthand
  ).toBe(
    "A-2"
  );
  expect(
    musicalKey.noteAt(4).name
  ).toBe(
    "E♭"
  );
  expect(
    musicalKey.noteAt(1).name
  ).toBe(
    "C"
  );
  expect(
    musicalKey.noteAt(-2).name
  ).toBe(
    "A"
  );
});

test("musicalKeyFromShorthand() works for D-Minor", () => {
  const musicalKey = musicalKeyFromShorthand("A-1");
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
  const musicalKey = musicalKeyFromShorthand("e2");
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
  const musicalKey = musicalKeyFromShorthand("F4");
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
