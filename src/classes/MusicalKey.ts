import { DEFAULT_DEGREE, DEFAULT_ROOT } from "@/config";
import { Note } from "@/classes/Note";
import { buildInclusiveRange } from "@/utilities/array";
import { MAX_MODE, MIN_MODE, modeNameFromMode, modeNoteFromMode } from "@/utilities/mode";
import type { NaturalNote } from "@/utilities/naturalNote";
import type { SolfegeLetter } from "@/utilities/solfege";
import { SOLFEGE_LETTERS } from "@/utilities/solfege";


export class MusicalKey {
  mode: number;
  root: number;
  degree: number;
  #rootNote: Note | null = null;
  #scale: Map<SolfegeLetter, Note> | null = null;

  constructor(
    root: number,
    degree: number
  ) {
    this.root = root;
    this.degree = degree;
    this.mode = root - degree;
    if (this.mode > MAX_MODE || this.mode < MIN_MODE) throw Error(`Invalid mode: ${this.mode}`);
  }

  get modeName(): string {
    return modeNameFromMode(this.mode);
  }

  get modeNote(): NaturalNote {
    return modeNoteFromMode(this.mode);
  }

  get rootNote(): Note {
    if (this.#rootNote === null) this.#rootNote = this.#getRootNote();
    return this.#rootNote;
  }

  get scale(): Map<SolfegeLetter, Note> {
    if (this.#scale === null) this.#scale = this.#getScale();
    return this.#scale;
  }

  noteAt(
    position: number
  ): Note {
    return new Note(this.root, position);
  }

  // NOTE: The bottom position will be a larger number than the top position due to
  // the y-axis being pointed downwards.

  get topPosition(): number {
    return - this.mode - 3;
  }

  get bottomPosition(): number {
    return - this.mode + 3;
  }

  #getRootNote(
  ): Note {
    return this.noteAt(0);
  }

  #getScale(
  ): Map<SolfegeLetter, Note> {
    const positions = buildInclusiveRange(this.topPosition, this.bottomPosition);
    const notes = positions.map((position) => this.noteAt(position));
    return scaleFromNotes(notes);
  }
}

export const DEFAULT_MUSICAL_KEY = new MusicalKey(DEFAULT_ROOT, DEFAULT_DEGREE);

// *** Private functions below this line ***

function scaleFromNotes(
  notes: Array<Note>
): Map<SolfegeLetter, Note> {
  const scale: Map<SolfegeLetter, Note> = new Map();
  for (const solfegeLetter of SOLFEGE_LETTERS) {
    const note = notes.find((note) => note.solfegeLetter === solfegeLetter);
    if (note === undefined) {
      throw Error(`Did not find a note with solfege letter ${solfegeLetter}`);
    }
    scale.set(solfegeLetter, note);
  }
  return scale;
}
