import { NaturalNote, Solfege } from "src/enumerations";
import { Note } from "src/classes/Note";
import { quotientAndRemainderFor, remainderFor } from "src/utilities/math";


export const MAX_DO_POSITION = 3;
export const MAX_KEY_DEGREE = 14;

// default to C-Major
export const DEFAULT_DO_POSITION = 2;
export const DEFAULT_KEY_DEGREE = 0;

/*
I'm using the name "MusicalKey" instead of "Key" in order to avoid names colliding with React.
*/

export class MusicalKey {
  doPosition: number;
  degree: number;
  modeNote: NaturalNote;
  rootNote: Note;
  #scale: Array<Note> | null = null;

  constructor(
    doPosition: number,
    degree: number
  ) {
    this.doPosition = doPosition;
    this.degree = degree;
    this.modeNote = getModeNote(doPosition);
    this.rootNote = getRootNote(doPosition, degree);
  }

  // Compute the scale lazily---it's a little expensive and we don't always need it.
  get scale(): Array<Note> {
    if (this.#scale === null) {
      this.#scale = this.#getScale();
    }
    return this.#scale;
  }

  get shorthand(): string {
    return `${this.degree}${this.modeNote}`;
  }

  noteAt(
    position: number
  ): Note {
    return getNote(this.doPosition, this.degree, position);
  }

  #getScale(
  ): Array<Note> {
    return [3, 2, 1, 0, -1, -2, -3].map((position) => this.noteAt(position));
  }
}

export function musicalKeyFromDegreeAndModeNote(
  degree: number,
  modeNote: NaturalNote
): MusicalKey {
  return new MusicalKey(getDoPosition(modeNote), degree);
}

// TODO: Use key shorthand as path segment in routing.

export function musicalKeyFromShorthand(
  keyShorthand: string | undefined
): MusicalKey {
  if (keyShorthand === undefined) return getDefaultMusicalKey();
  const musicalKey = _musicalKeyFromShorthand(keyShorthand);
  if (musicalKey === null) {
    console.log(`Could not parse key shorthand: ${keyShorthand}`);
    return getDefaultMusicalKey();
  }
  return musicalKey;
}

// *** Private constants and functions below this line ***

function getModeNote(
  doPosition: number
): NaturalNote {
  if (doPosition < -3 || doPosition > 3) throw Error(`Invalid position for Do: ${doPosition}`);
  return NATURAL_NOTES_IN_BEADGCF_ORDER[doPosition + 3];
}

function getDoPosition(
  modeNote: NaturalNote
): number {
  const index = NATURAL_NOTES_IN_BEADGCF_ORDER.indexOf(modeNote);
  if (index === null) throw(`Invalid mode note: ${modeNote}`);
  return index - 3;
}

function getRootNote(
  doPosition: number,
  keyDegree: number
): Note {
  return getNote(doPosition, keyDegree, doPosition);
}

function getNote(
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

function _musicalKeyFromShorthand(
  keyShorthand: string
): MusicalKey | null {
  const result = KEY_SHORTHAND_REGULAR_EXPRESSION.exec(keyShorthand);
  if (result === null) return null;
  const keyDegree = parseInt(result[1], 10);
  if (keyDegree > MAX_KEY_DEGREE || keyDegree < - MAX_KEY_DEGREE) return null;
  const modeNote = result[2].toUpperCase();
  if (! (modeNote in NaturalNote)) return null;
  return musicalKeyFromDegreeAndModeNote(keyDegree, modeNote as NaturalNote);
}

const KEY_SHORTHAND_REGULAR_EXPRESSION = /^(-?[0-9]+)([A-G])$/i;

function getDefaultMusicalKey(
): MusicalKey {
  return new MusicalKey(DEFAULT_DO_POSITION, DEFAULT_KEY_DEGREE);
}
