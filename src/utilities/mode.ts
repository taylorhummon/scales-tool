export const MAX_MODE = 3;
export const MIN_MODE = - MAX_MODE;

export enum ModeName {
  Minor = "Minor",    // Aeolian
  Locrian = "Locrian",
  Major = "Major",    // Ionian
  Dorian = "Dorian",
  Phrygian = "Phrygian",
  Lydian = "Lydian",
  Mixolydian = "Mixolydian"
}

export const MODE_NAMES_IN_FCGDAEB_ORDER = [
  ModeName.Lydian,
  ModeName.Major,
  ModeName.Mixolydian,
  ModeName.Dorian,
  ModeName.Minor,
  ModeName.Phrygian,
  ModeName.Locrian
];
