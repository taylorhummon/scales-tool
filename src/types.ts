import { Motion, NaturalNoteName } from "src/enumerations";
import type { Note } from "src/classes/Note";


export interface State {
  motion: Motion;
  root: number;
  mode: number;
}

export interface Derived {
  motion: Motion;
  root: number;
  mode: number;
  notes: Array<Note>;
  rootNote: Note;
  modeNoteName: NaturalNoteName;
  keyDegree: number;
}
