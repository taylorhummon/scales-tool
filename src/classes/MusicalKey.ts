import { NaturalNote, Solfege } from "src/enumerations";
import { Note } from "src/classes/Note";
import { quotientAndRemainderFor, remainderFor } from "src/utilities/math";


/*
Mode:
  * The position of the left slider: how far Do is above/below center.
  *  3 ~ F ~ Lydian
  *  2 ~ C ~ Ionian
  *  1 ~ G ~ Mixolydian
  *  0 ~ D ~ Dorian
  * -1 ~ A ~ Aeolian
  * -2 ~ E ~ Phrygian
  * -3 ~ B ~ Locrian
Degree:
  * The position of the right slider: how far D is above/below center.
  * How many sharps/flats are in the scale.
 */


export const MAX_MODE = 3;
export const MIN_MODE = - MAX_MODE;
export const MAX_DEGREE = 14;
export const MIN_DEGREE = - MAX_DEGREE;

// Default to Ionian with no sharps or flats, a.k.a. C-Major.
export const DEFAULT_MODE = 2;
export const DEFAULT_DEGREE = 0;

/*
I'm using the name "MusicalKey" instead of "Key" in order to avoid names colliding with React.
*/

export class MusicalKey {
  mode: number;
  degree: number;
  modeNote: NaturalNote;
  rootNote: Note;
  #scale: Array<Note> | null = null;

  constructor(
    mode: number,
    degree: number
  ) {
    this.mode = mode;
    this.degree = degree;
    this.modeNote = getModeNote(mode);
    this.rootNote = getRootNote(mode, degree);
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
    return getNote(this.mode, this.degree, position);
  }

  #getScale(
  ): Array<Note> {
    return [3, 2, 1, 0, -1, -2, -3].map((position) => this.noteAt(position));
  }
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
  mode: number
): NaturalNote {
  if (mode < -3 || mode > 3) {
    throw Error(`Invalid mode: ${mode}`);
  }
  return NATURAL_NOTES_IN_BEADGCF_ORDER[mode + 3];
}

function getMode(
  modeNote: NaturalNote
): number {
  const index = NATURAL_NOTES_IN_BEADGCF_ORDER.indexOf(modeNote);
  if (index === null) throw(`Invalid mode note: ${modeNote}`);
  return index - 3;
}

function getRootNote(
  mode: number,
  degree: number
): Note {
  return getNote(mode, degree, mode);
}

function getNote(
  mode: number,
  degree: number,
  position: number
): Note {
  const solfege = getSolfege(mode, position);
  const bigStepCountFromD = degree - position;
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
  mode: number,
  position: number
): Solfege {
  return SOLFEGES[remainderFor(position - mode, 7)];
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
  const degree = parseInt(result[1], 10);
  if (degree > MAX_DEGREE || degree < MIN_DEGREE) return null;
  const modeNote = result[2].toUpperCase();
  if (! (modeNote in NaturalNote)) return null;
  const mode = getMode(modeNote as NaturalNote);
  return new MusicalKey(mode, degree);
}

const KEY_SHORTHAND_REGULAR_EXPRESSION = /^(-?[0-9]+)([A-G])$/i;

function getDefaultMusicalKey(
): MusicalKey {
  return new MusicalKey(DEFAULT_MODE, DEFAULT_DEGREE);
}
