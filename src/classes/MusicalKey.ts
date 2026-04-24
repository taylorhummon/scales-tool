import { DEFAULT_MODE, DEFAULT_ROOT } from "@/config";
import { Note } from "@/classes/Note";
import { buildInclusiveRange } from "@/utilities/array";
import { MAX_MODE, MIN_MODE, modeNameFromMode, modeNoteFromMode } from "@/utilities/mode";
import type { NaturalNote } from "@/utilities/naturalNote";
import type { SolfegeLetter } from "@/utilities/solfege";
import { SOLFEGE_LETTERS } from "@/utilities/solfege";


interface MusicalKeyConstructorParams {
  mode?: number;
  root?: number;
  degree?: number;
}

export class MusicalKey {
  mode: number;
  root: number;
  degree: number;
  #rootNote: Note | null = null;
  #scale: Map<SolfegeLetter, Note> | null = null;

  constructor(params: MusicalKeyConstructorParams) {
    const { mode, root, degree } = clean(params);
    if (mode > MAX_MODE || mode < MIN_MODE) throw Error(`Invalid mode: ${mode}`);
    this.mode = mode;
    this.root = root;
    this.degree = degree;
  }

  get modeName(
  ): string {
    return modeNameFromMode(this.mode);
  }

  get modeNote(
  ): NaturalNote {
    return modeNoteFromMode(this.mode);
  }

  get rootNote(
  ): Note {
    if (this.#rootNote === null) this.#rootNote = this.#getRootNote();
    return this.#rootNote;
  }

  get scale(
  ): Map<SolfegeLetter, Note> {
    if (this.#scale === null) this.#scale = this.#getScale();
    return this.#scale;
  }

  noteAt(
    position: number,
  ): Note {
    return new Note(this.root, position);
  }

  // NOTE: The bottom position will be a larger number than the top position due to
  // the y-axis being pointed downwards.

  get topPosition(
  ): number {
    return - this.mode - 3;
  }

  get bottomPosition(
  ): number {
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

interface cleanedParams {
  mode: number;
  root: number;
  degree: number;
}

export const DEFAULT_MUSICAL_KEY = new MusicalKey({ mode: DEFAULT_MODE, root: DEFAULT_ROOT });

// *** Private functions below this line ***

function clean({
  mode,
  root,
  degree,
}: MusicalKeyConstructorParams): cleanedParams {
  if (mode !== undefined && root !== undefined && degree !== undefined && degree !== root - mode) {
    throw Error(`The equation, degree = root - mode, should hold for all keys. Found ${degree} = ${root} - ${mode}`);
  }
  if (mode !== undefined && root !== undefined) {
    const degree = root - mode;
    return { mode, root, degree };
  }
  if (mode !== undefined && degree !== undefined) {
    const root = mode + degree;
    return { mode, root, degree };
  }
  if (root !== undefined && degree !== undefined) {
    const mode = root - degree;
    return { mode, root, degree };
  }
  throw Error("new MusicalKey() requires at least two of its parameters to be given");
}

function scaleFromNotes(
  notes: Array<Note>,
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
