export enum Location {
  Only = "only",    // The root note, Do, only has one position
  Early = "early",  // The earlier of the two possible positions on the clockface
  Late = "late",    // The later of the two possible positions on the clockface
}

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
]

export enum SolfegeName {
  Do = "do",
  Re = "re",
  Mi = "mi",
  Fa = "fa",
  Sol = "sol",
  La = "la",
  Ti = "ti"
}

export const SOLFEGE_NAMES_IN_FCGDAEB_ORDER = [
  SolfegeName.Fa,
  SolfegeName.Ti,
  SolfegeName.Mi,
  SolfegeName.La,
  SolfegeName.Re,
  SolfegeName.Sol,
  SolfegeName.Do
];

export enum ModeName {
  Aeolian = "Aeolian",
  Locrian = "Locrian",
  Ionian = "Ionian",
  Dorian = "Dorian",
  Phrygian = "Phrygian",
  Lydian = "Lydian",
  Mixolydian = "Mixolydian"
}

export const MODE_NAMES_IN_FCGDAEB_ORDER = [
  ModeName.Lydian,
  ModeName.Ionian,
  ModeName.Mixolydian,
  ModeName.Dorian,
  ModeName.Aeolian,
  ModeName.Phrygian,
  ModeName.Locrian
];
