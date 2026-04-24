import { NaturalNote } from "@/utilities/naturalNote";
import { buildInclusiveRange } from "@/utilities/array";


export const MAX_MODE = 3;
export const MIN_MODE = -3;

export const MODES = buildInclusiveRange(MIN_MODE, MAX_MODE);

export enum ModeName {
  Minor = "Minor",    // Aeolian
  Locrian = "Locrian",
  Major = "Major",    // Ionian
  Dorian = "Dorian",
  Phrygian = "Phrygian",
  Lydian = "Lydian",
  Mixolydian = "Mixolydian",
}

export function modeNameFromMode(
  mode: number,
): ModeName {
  if (mode === -3) return ModeName.Lydian;
  if (mode === -2) return ModeName.Major;
  if (mode === -1) return ModeName.Mixolydian;
  if (mode === 0) return ModeName.Dorian;
  if (mode === 1) return ModeName.Minor;
  if (mode === 2) return ModeName.Phrygian;
  if (mode === 3) return ModeName.Locrian;
  throw Error(`Invalid mode: ${mode}`);
}

export function shortModeNameFromMode(
  mode: number,
): string {
  if (mode === -3) return "Lyd";
  if (mode === -2) return "Maj";
  if (mode === -1) return "Mix";
  if (mode === 0) return "Dor";
  if (mode === 1) return "Min";
  if (mode === 2) return "Phr";
  if (mode === 3) return "Loc";
  throw Error(`Invalid mode: ${mode}`);
}

export function modeNoteFromMode(
  mode: number,
): NaturalNote {
  if (mode === -3) return NaturalNote.F;
  if (mode === -2) return NaturalNote.C;
  if (mode === -1) return NaturalNote.G;
  if (mode === 0) return NaturalNote.D;
  if (mode === 1) return NaturalNote.A;
  if (mode === 2) return NaturalNote.E;
  if (mode === 3) return NaturalNote.B;
  throw Error(`Invalid mode: ${mode}`);
}
