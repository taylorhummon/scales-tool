import { DEFAULT_DEGREE, DEFAULT_ROOT } from "@/config";
import { Note } from "@/classes/Note";
import { buildInclusiveRange } from "@/utilities/array";
import { quotientAndRemainderFor, ensureZeroIsPositive } from "@/utilities/math";
import { NaturalNote } from "@/utilities/natural-note";
import { ModeName } from "@/utilities/mode";


// The following equality always holds:
//    degree = root - mode


export class MusicalKey {
  degree: number;
  root: number;
  mode: number;
  #rootNote: Note | null = null;
  #extendedScale: Array<Note> | null = null;

  constructor(
    degree: number,
    root: number
  ) {
    this.degree = degree;
    this.root = root;
    const mode = root - degree;
    if (mode < -3 || mode > 3) throw Error(`Invalid mode: ${mode}`);
    this.mode = mode;
  }

  get rootNote(): Note {
    if (this.#rootNote === null) this.#rootNote = this.#getRootNote();
    return this.#rootNote;
  }

  get modeName(): string {
    return MODE_NAMES_IN_FCGDAEB_ORDER[this.mode + 3];
  }

  get modeNote(): NaturalNote {
    return NATURAL_NOTES_IN_FCGDAEB_ORDER[this.mode + 3];
  }

  get noteInFirstPosition(
  ): Note {
    return this.scale[0];
  }

  get noteInLastPosition(
  ): Note {
    return this.scale[6];
  }

  get scale(): Array<Note> {
    // drop first and last notes from extended scale
    return this.extendedScale.slice(1, -1);
  }

  get extendedScale(): Array<Note> {
    if (this.#extendedScale === null) this.#extendedScale = this.#getExtendedScale();
    return this.#extendedScale;
  }

  noteAt(
    position: number
  ): Note {
    return getNote(this.root, position);
  }

  #getRootNote(
  ): Note {
    return this.noteAt(0);
  }

  #getExtendedScale(
  ): Array<Note> {
    const extended_positions = buildInclusiveRange(this.mode - 4, this.mode + 4);
    return extended_positions.map((position) => this.noteAt(position));
  }
}

export function getDefaultMusicalKey(
): MusicalKey {
  return new MusicalKey(DEFAULT_DEGREE, DEFAULT_ROOT);
}

// *** Private constants and functions below this line ***

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

function getNote(
  root: number,
  position: number
): Note {
  const bigStepCountFromD = root - position;
  if (bigStepCountFromD > 0) {
    const { quotient, remainder } = quotientAndRemainderFor(3 + bigStepCountFromD, 7);
    const sharpsCount = quotient;
    const naturalNote = NATURAL_NOTES_IN_FCGDAEB_ORDER[remainder];
    return new Note(naturalNote, sharpsCount, position);
  }
  if (bigStepCountFromD < 0) {
    const { quotient, remainder } = quotientAndRemainderFor(3 - bigStepCountFromD, 7);
    const sharpsCount = ensureZeroIsPositive(- quotient);
    const naturalNote = NATURAL_NOTES_IN_BEADGCF_ORDER[remainder];
    return new Note(naturalNote, sharpsCount, position);
  }
  return new Note(NaturalNote.D, 0, position);
}
