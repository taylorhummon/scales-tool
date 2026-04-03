import { MAX_DEGREE, MIN_DEGREE, DEFAULT_MODE, DEFAULT_DEGREE } from "@/config";
import { NaturalNote, Solfege, ModeName } from "@/enumerations";
import { Note } from "@/classes/Note";
import { quotientAndRemainderFor, remainderFor } from "@/utilities/math";


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


export class MusicalKey {
  degree: number;
  mode: number;
  #rootNote: Note | null = null;
  #extendedScale: Array<Note> | null = null;

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
    // drop first and last notes from extended scale
    return this.extendedScale.slice(1, -1);
  }

  get extendedScale(): Array<Note> {
    if (this.#extendedScale === null) this.#extendedScale = this.#getScale(true);
    return this.#extendedScale;
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
    return this.noteAt(this.mode);
  }

  #getScale(
    isExtended: boolean = false
  ): Array<Note> {
    const positions = isExtended ? EXTENDED_POSITIONS : POSITIONS;
    return positions.map((position) => this.noteAt(position));
  }
}

export function musicalKeyFromShorthand(
  keyShorthand: string
): MusicalKey | null {
  const result = /^(-?[0-9]+)([A-Ga-g])$/.exec(keyShorthand);
  if (result === null) return null;
  const degree = parseInt(result[1], 10);
  if (degree > MAX_DEGREE || degree < MIN_DEGREE) return null;
  const modeNote = result[2].toUpperCase();
  if (! (modeNote in NaturalNote)) return null;
  const mode = getMode(modeNote as NaturalNote);
  return new MusicalKey(degree, mode);
}

export function getDefaultMusicalKey(
): MusicalKey {
  return new MusicalKey(DEFAULT_DEGREE, DEFAULT_MODE);
}

// *** Private constants and functions below this line ***

const POSITIONS = [3, 2, 1, 0, -1, -2, -3];
const EXTENDED_POSITIONS = [4, 3, 2, 1, 0, -1, -2, -3, -4];  // positions 4 and -4 are useful when animating
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

function getMode(
  modeNote: NaturalNote
): number {
  const index = NATURAL_NOTES_IN_FCGDAEB_ORDER.indexOf(modeNote);
  if (index === null) throw(`Invalid mode note: ${modeNote}`);
  return 3 - index;
}
