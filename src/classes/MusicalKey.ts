import { DEFAULT_DEGREE, DEFAULT_ROOT } from "@/config";
import { Note, buildNote } from "@/classes/Note";
import { buildInclusiveRange } from "@/utilities/array";
import { ensureZeroIsPositive } from "@/utilities/math";
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

  get scale(): Array<Note> {
    if (this.#scale === null) this.#scale = this.#getScale();
    return this.#scale;
  }

  noteAt(
    position: number
  ): Note {
    return buildNote(this.root, position);
  }

  // NOTE: The bottom position will be a larger number than the top position due to
  // the y-axis being pointed downwards.

  get topPosition(
  ): number {
    return this.middlePosition - 3;
  }

  get bottomPosition(
  ): number {
    return this.middlePosition + 3;
  }

  get middlePosition(
  ): number {
    return ensureZeroIsPositive(- this.mode);
  }

  #getRootNote(
  ): Note {
    return this.noteAt(0);
  }

  #getScale(
  ): Array<Note> {
    return buildInclusiveRange(this.topPosition, this.bottomPosition).map(
      (position) => this.noteAt(position)
    );
  }
}

export const DEFAULT_MUSICAL_KEY = new MusicalKey(DEFAULT_DEGREE, DEFAULT_ROOT);
