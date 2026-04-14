import { DEFAULT_DEGREE, DEFAULT_ROOT } from "@/config";
import { Note, buildNote } from "@/classes/Note";
import { buildInclusiveRange } from "@/utilities/array";
import { modeNameFromMode, modeNoteFromMode } from "@/utilities/mode";
import type { NaturalNote } from "@/utilities/natural-note";


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
    return modeNameFromMode(this.mode);
  }

  get modeNote(): NaturalNote {
    return modeNoteFromMode(this.mode);
  }

  get noteInTopPosition(
  ): Note {
    return this.scale[0];
  }

  get noteInBottomPosition(
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
    const centerPosition = - this.mode;
    const extendedPositions = buildInclusiveRange(centerPosition - 4, centerPosition + 4);
    return extendedPositions.map((position) => this.noteAt(position));
  }
}

export const DEFAULT_MUSICAL_KEY = new MusicalKey(DEFAULT_DEGREE, DEFAULT_ROOT);
