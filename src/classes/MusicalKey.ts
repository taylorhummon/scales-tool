import { DEFAULT_DEGREE, DEFAULT_ROOT } from "@/config";
import { Note, buildNote } from "@/classes/Note";
import { buildInclusiveRange } from "@/utilities/array";
import { MODE_NAMES_IN_FCGDAEB_ORDER } from "@/utilities/mode";
import { NaturalNote, NATURAL_NOTES_IN_FCGDAEB_ORDER } from "@/utilities/natural-note";


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
    return buildNote(this.root, position);
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

export const DEFAULT_MUSICAL_KEY = new MusicalKey(DEFAULT_DEGREE, DEFAULT_ROOT);
