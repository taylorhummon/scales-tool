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
  #scale: Array<Note> | null = null;

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

  // NOTE: The bottom position will be a larger number than the top position due to
  // the y-axis being pointed downwards.

  get noteInTopPosition(
  ): Note {
    return this.scale[0];
  }

  get noteInBottomPosition(
  ): Note {
    return this.scale[6];
  }

  get scale(): Array<Note> {
    if (this.#scale === null) this.#scale = this.#getScale();
    return this.#scale;
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

  #getScale(
  ): Array<Note> {
    const centerPosition = - this.mode;
    const positions = buildInclusiveRange(centerPosition - 3, centerPosition + 3);
    return positions.map((position) => this.noteAt(position));
  }
}

export const DEFAULT_MUSICAL_KEY = new MusicalKey(DEFAULT_DEGREE, DEFAULT_ROOT);
