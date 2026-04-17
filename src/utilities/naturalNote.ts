export enum NaturalNote {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G"
}

export const NATURAL_NOTES_IN_FCGDAEB_ORDER = [
  NaturalNote.F,
  NaturalNote.C,
  NaturalNote.G,
  NaturalNote.D,
  NaturalNote.A,
  NaturalNote.E,
  NaturalNote.B
];

export const NATURAL_NOTES_IN_BEADGCF_ORDER = [...NATURAL_NOTES_IN_FCGDAEB_ORDER].reverse();

export const HOUR_BY_NATURAL_NOTE_NAME = new Map<NaturalNote, number>([
  [NaturalNote.A, -5],
  [NaturalNote.B, -3],
  [NaturalNote.C, -2],
  [NaturalNote.D, 0],
  [NaturalNote.E, 2],
  [NaturalNote.F, 3],
  [NaturalNote.G, 5],
]);
