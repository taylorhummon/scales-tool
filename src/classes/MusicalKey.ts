import { NaturalNote, Solfege, ModeName } from "src/enumerations";
import { Note } from "src/classes/Note";
import { quotientAndRemainderFor, remainderFor } from "src/utilities/math";


/*
Degree:
  * The position of the left slider: how far D is above/below center.
  * How many sharps/flats are in the scale.
Mode:
  * The position of the right slider: how far Do is above/below center.
  *  3 ~ F ~ Lydian
  *  2 ~ C ~ Ionian (a.k.a. Major)
  *  1 ~ G ~ Mixolydian
  *  0 ~ D ~ Dorian
  * -1 ~ A ~ Aeolian (a.k.a Minor)
  * -2 ~ E ~ Phrygian
  * -3 ~ B ~ Locrian
 */


export const MAX_DEGREE = 14;
export const MIN_DEGREE = - MAX_DEGREE;
export const MAX_MODE = 3;
export const MIN_MODE = - MAX_MODE;

// Default to Major with no sharps or flats, a.k.a. C-Major.
export const DEFAULT_MODE = 2;
export const DEFAULT_DEGREE = 0;

/*
I'm using the name "MusicalKey" instead of "Key" in order to avoid names colliding with React.
*/

export class MusicalKey {
  degree: number;
  mode: number;
  #rootNote: Note | null = null;
  #scale: Array<Note> | null = null;

  constructor(
    degree: number,
    mode: number
  ) {
    if (mode < -3 || mode > 3) throw Error(`Invalid mode: ${mode}`);
    this.degree = degree;
    this.mode = mode;
  }

  get modeName(): string {
    return MODE_NAMES_IN_FCGDAEB_ORDER[3 - this.mode];
  }

  get modeNote(): NaturalNote {
    return NATURAL_NOTES_IN_FCGDAEB_ORDER[3 - this.mode];
  }

  get rootNote(): Note {
    if (this.#rootNote === null) this.#rootNote = this.#getRootNote();
    return this.#rootNote;
  }

  get scale(): Array<Note> {
    if (this.#scale === null) this.#scale = this.#getScale();
    return this.#scale;
  }

  get shorthand(): string {
    return `${this.degree}${this.modeNote}`;
  }

  noteAt(
    position: number
  ): Note {
    return getNote(this.degree, this.mode, position);
  }

  #getRootNote(
  ): Note {
    return getNote(this.degree, this.mode, this.mode);
  }

  #getScale(
  ): Array<Note> {
    return POSITIONS.map((position) => this.noteAt(position));
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

const POSITIONS = [3, 2, 1, 0, -1, -2, -3];
const MODE_NAMES_IN_FCGDAEB_ORDER = [
  ModeName.Lydian,
  ModeName.Major,
  ModeName.Mixolydian,
  ModeName.Dorian,
  ModeName.Minor,
  ModeName.Phrygian,
  ModeName.Locrian
];
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
const SOLFEGES = [
  Solfege.Do,
  Solfege.Fa,
  Solfege.Ti,
  Solfege.Mi,
  Solfege.La,
  Solfege.Re,
  Solfege.Sol,
];

function getDefaultMusicalKey(
): MusicalKey {
  return new MusicalKey(DEFAULT_DEGREE, DEFAULT_MODE);
}

function getNote(
  degree: number,
  mode: number,
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

function getSolfege(
  mode: number,
  position: number
): Solfege {
  return SOLFEGES[remainderFor(position - mode, 7)];
}

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
  return new MusicalKey(degree, mode);
}

const KEY_SHORTHAND_REGULAR_EXPRESSION = /^(-?[0-9]+)([A-G])$/i;

function getMode(
  modeNote: NaturalNote
): number {
  const index = NATURAL_NOTES_IN_FCGDAEB_ORDER.indexOf(modeNote);
  if (index === null) throw(`Invalid mode note: ${modeNote}`);
  return 3 - index;
}
