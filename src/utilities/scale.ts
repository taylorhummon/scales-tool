import { NaturalNote, Solfege, ModeName } from "src/enumerations";
import { Note } from "src/classes/Note";
import { quotientAndRemainderFor, remainderFor } from "src/utilities/math";


const NATURAL_NOTES_IN_FCGDAEB_ORDER = [
  NaturalNote.F,
  NaturalNote.C,
  NaturalNote.G,
  NaturalNote.D,
  NaturalNote.A,
  NaturalNote.E,
  NaturalNote.B
];
const NATURAL_NOTES_IN_BEADGCF_ORDER = [...NATURAL_NOTES_IN_FCGDAEB_ORDER].reverse();
const MODE_NAME_BY_NOTE: Map<NaturalNote, ModeName> = new Map([
  [NaturalNote.A, ModeName.Aeolian],
  [NaturalNote.B, ModeName.Locrian],
  [NaturalNote.C, ModeName.Ionian],
  [NaturalNote.D, ModeName.Dorian],
  [NaturalNote.E, ModeName.Phrygian],
  [NaturalNote.F, ModeName.Lydian],
  [NaturalNote.G, ModeName.Mixolydian]
]);


export function getModeName(
  modeNote: NaturalNote
): ModeName {
  const modeName = MODE_NAME_BY_NOTE.get(modeNote);
  if (modeName === undefined) throw Error(`Invalid mode note: ${modeNote}`);
  return modeName;
}

export function getModeNote(
  doPosition: number
): NaturalNote {
  if (doPosition < -3 || doPosition > 3) throw Error(`Invalid position for Do: ${doPosition}`);
  return NATURAL_NOTES_IN_BEADGCF_ORDER[doPosition + 3];
}

export function getRootNote(
  doPosition: number,
  keyDegree: number
): Note {
  return getNote(doPosition, keyDegree, doPosition);
}

export function getScale(
  doPosition: number,
  keyDegree: number
): Array<Note> {
  return [3, 2, 1, 0, -1, -2, -3].map((position) => getNote(doPosition, keyDegree, position));
}

export function getNote(
  doPosition: number,
  keyDegree: number,
  position: number
): Note {
  const solfege = getSolfege(doPosition, position);
  const bigStepCountFromD = keyDegree - position;
  if (bigStepCountFromD > 0) {
    const { quotient, remainder } = quotientAndRemainderFor(3 + bigStepCountFromD, 7);
    const sharpsCount = quotient;
    const naturalNote = NATURAL_NOTES_IN_FCGDAEB_ORDER[remainder];
    return new Note(naturalNote, sharpsCount, solfege, position);
  }
  if (bigStepCountFromD < 0) {
    const { quotient, remainder } = quotientAndRemainderFor(3 - bigStepCountFromD, 7);
    const sharpsCount = - quotient;
    const naturalNote = NATURAL_NOTES_IN_BEADGCF_ORDER[remainder];
    return new Note(naturalNote, sharpsCount, solfege, position);
  }
  return new Note(NaturalNote.D, 0, solfege, position);
}

function getSolfege(
  doPosition: number,
  position: number
): Solfege {
  return SOLFEGES[remainderFor(position - doPosition, 7)];
}

const SOLFEGES = [
  Solfege.Do,
  Solfege.Fa,
  Solfege.Ti,
  Solfege.Mi,
  Solfege.La,
  Solfege.Re,
  Solfege.Sol,
];
