import { NaturalNote, ModeName } from "src/enumerations";


export function getModeName(
  modeNote: NaturalNote
): ModeName {
  const modeName = MODE_NAME_BY_NOTE.get(modeNote);
  if (modeName === undefined) throw Error(`Invalid mode note: ${modeNote}`);
  return modeName;
}

const MODE_NAME_BY_NOTE: Map<NaturalNote, ModeName> = new Map([
  [NaturalNote.A, ModeName.Aeolian],
  [NaturalNote.B, ModeName.Locrian],
  [NaturalNote.C, ModeName.Ionian],
  [NaturalNote.D, ModeName.Dorian],
  [NaturalNote.E, ModeName.Phrygian],
  [NaturalNote.F, ModeName.Lydian],
  [NaturalNote.G, ModeName.Mixolydian]
]);
