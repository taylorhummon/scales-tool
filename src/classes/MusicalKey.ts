import { Motion, NaturalNote, Solfege } from "src/enumerations";
import { Note } from "src/classes/Note";
import { quotientAndRemainderFor, remainderFor } from "src/utilities/math";


const MIN_LEFT_SLIDER_POSITION = -3;
const MAX_LEFT_SLIDER_POSITION = 3;
const MIN_RIGHT_SLIDER_POSITION = -14;
const MAX_RIGHT_SLIDER_POSITION = 14;

// default to C-Major
export const DEFAULT_LEFT_SLIDER_POSITION = 2;
export const DEFAULT_RIGHT_SLIDER_POSITION = 0;

/*
I'm using the name "MusicalKey" instead of "Key" in order to avoid names colliding with React.
*/

export class MusicalKey {
  #leftSliderPosition: number;
  #rightSliderPosition: number;
  modeNote: NaturalNote;
  rootNote: Note;
  #scale: Array<Note> | null = null;

  constructor(
    leftSliderPosition: number,
    rightSliderPosition: number
  ) {
    this.#leftSliderPosition = leftSliderPosition;
    this.#rightSliderPosition = rightSliderPosition;
    this.modeNote = getModeNote(leftSliderPosition);
    this.rootNote = getRootNote(leftSliderPosition, rightSliderPosition);
  }

  get degree(): number {
    return this.#rightSliderPosition;
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
    return getNote(this.#leftSliderPosition, this.#rightSliderPosition, position);
  }

  canPerformMotion(
    motion: Motion
  ): boolean {
    if (motion === Motion.DecrementLeft) return this.#leftSliderPosition > MIN_LEFT_SLIDER_POSITION;
    if (motion === Motion.IncrementLeft) return this.#leftSliderPosition < MAX_LEFT_SLIDER_POSITION;
    if (motion === Motion.DecrementRight) return this.#rightSliderPosition > MIN_RIGHT_SLIDER_POSITION;
    if (motion === Motion.IncrementRight) return this.#rightSliderPosition < MAX_RIGHT_SLIDER_POSITION;
    if (motion === Motion.DecrementBoth) {
      return (
        (this.#leftSliderPosition > MIN_LEFT_SLIDER_POSITION) &&
        (this.#rightSliderPosition > MIN_RIGHT_SLIDER_POSITION)
      );
    }
    if (motion === Motion.IncrementBoth) {
      return (
        (this.#leftSliderPosition < MAX_LEFT_SLIDER_POSITION) &&
        (this.#rightSliderPosition < MAX_RIGHT_SLIDER_POSITION)
      );
    }
    return false;
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
  leftSliderPosition: number
): NaturalNote {
  if (leftSliderPosition < -3 || leftSliderPosition > 3) {
    throw Error(`Invalid left slider position: ${leftSliderPosition}`);
  }
  return NATURAL_NOTES_IN_BEADGCF_ORDER[leftSliderPosition + 3];
}

function getLeftSliderPosition(
  modeNote: NaturalNote
): number {
  const index = NATURAL_NOTES_IN_BEADGCF_ORDER.indexOf(modeNote);
  if (index === null) throw(`Invalid mode note: ${modeNote}`);
  return index - 3;
}

function getRootNote(
  leftSliderPosition: number,
  rightSliderPosition: number
): Note {
  return getNote(leftSliderPosition, rightSliderPosition, leftSliderPosition);
}

function getNote(
  leftSliderPosition: number,
  rightSliderPosition: number,
  position: number
): Note {
  const solfege = getSolfege(leftSliderPosition, position);
  const bigStepCountFromD = rightSliderPosition - position;
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
  leftSliderPosition: number,
  position: number
): Solfege {
  return SOLFEGES[remainderFor(position - leftSliderPosition, 7)];
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
  const rightSliderPosition = parseInt(result[1], 10);
  if (
    rightSliderPosition > MAX_RIGHT_SLIDER_POSITION ||
    rightSliderPosition < MIN_RIGHT_SLIDER_POSITION
  ) {
    return null;
  }
  const modeNote = result[2].toUpperCase();
  if (! (modeNote in NaturalNote)) return null;
  const leftSliderPosition = getLeftSliderPosition(modeNote as NaturalNote);
  return new MusicalKey(leftSliderPosition, rightSliderPosition);
}

const KEY_SHORTHAND_REGULAR_EXPRESSION = /^(-?[0-9]+)([A-G])$/i;

function getDefaultMusicalKey(
): MusicalKey {
  return new MusicalKey(DEFAULT_LEFT_SLIDER_POSITION, DEFAULT_RIGHT_SLIDER_POSITION);
}
