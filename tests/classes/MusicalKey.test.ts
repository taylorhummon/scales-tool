import { test, expect } from 'vitest';

import { Motion, NaturalNote, Solfege } from "src/enumerations";
import {
  MusicalKey,
  musicalKeyFromShorthand
} from "src/classes/MusicalKey";


test("MusicalKey works for Dorian D", () => {
  const musicalKey = new MusicalKey(0, 0);
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
});

test("MusicalKey works for A-Major", () => {
  const musicalKey = new MusicalKey(2, 3);
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
});

test("MusicalKey works for G-Minor", () => {
  const musicalKey = new MusicalKey(-1, -2);
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
});

test("musicalKeyFromShorthand() works for D-Minor", () => {
  const musicalKey = musicalKeyFromShorthand("-1A");
  expect(
    musicalKey.degree
  ).toBe(
    -1
  );
  expect(
    musicalKey.modeNote
  ).toBe(
    NaturalNote.A
  );
});

test("musicalKeyFromShorthand() works for Phrygian F♯", () => {
  const musicalKey = musicalKeyFromShorthand("2e");
  expect(
    musicalKey.degree
  ).toBe(
    2
  );
  expect(
    musicalKey.modeNote
  ).toBe(
    NaturalNote.E
  );
});

test("musicalKeyFromShorthand() works for Lydian A", () => {
  const musicalKey = musicalKeyFromShorthand("4F");
  expect(
    musicalKey.degree
  ).toBe(
    4
  );
  expect(
    musicalKey.modeNote
  ).toBe(
    NaturalNote.F
  );
});

test("canPerformMotion() works for Dorian D", () => {
  const musicalKey = new MusicalKey(0, 0);
  expect(
    musicalKey.canPerformMotion(Motion.DecrementLeft)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementLeft)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.DecrementRight)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementRight)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.DecrementBoth)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementBoth)
  ).toBe(
    true
  );
});


test("canPerformMotion() works for Locrian B", () => {
  const musicalKey = new MusicalKey(-3, 0);
  expect(
    musicalKey.canPerformMotion(Motion.DecrementLeft)
  ).toBe(
    false
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementLeft)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.DecrementRight)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementRight)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.DecrementBoth)
  ).toBe(
    false
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementBoth)
  ).toBe(
    true
  );
});

test("canPerformMotion() works for Lydian C", () => {
  const musicalKey = new MusicalKey(3, 1);
  expect(
    musicalKey.canPerformMotion(Motion.DecrementLeft)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementLeft)
  ).toBe(
    false
  );
  expect(
    musicalKey.canPerformMotion(Motion.DecrementRight)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementRight)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.DecrementBoth)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementBoth)
  ).toBe(
    false
  );
});


test("canPerformMotion() works for 14 sharps", () => {
  const musicalKey = new MusicalKey(0, 14);
  expect(
    musicalKey.canPerformMotion(Motion.DecrementLeft)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementLeft)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.DecrementRight)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementRight)
  ).toBe(
    false
  );
  expect(
    musicalKey.canPerformMotion(Motion.DecrementBoth)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementBoth)
  ).toBe(
    false
  );
});

test("canPerformMotion() works for 14 flats", () => {
  const musicalKey = new MusicalKey(2, -14);
  expect(
    musicalKey.canPerformMotion(Motion.DecrementLeft)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementLeft)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.DecrementRight)
  ).toBe(
    false
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementRight)
  ).toBe(
    true
  );
  expect(
    musicalKey.canPerformMotion(Motion.DecrementBoth)
  ).toBe(
    false
  );
  expect(
    musicalKey.canPerformMotion(Motion.IncrementBoth)
  ).toBe(
    true
  );
});
