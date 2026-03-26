import { Motion, NaturalNote } from "src/enumerations";
import type { Note } from "src/classes/Note";


export interface State {
  motion: Motion;
  doPosition: number;
  keyDegree: number;
}

export interface Derived {
  motion: Motion;
  doPosition: number;
  keyDegree: number;
  modeNote: NaturalNote;
  rootNote: Note;
  scale: Array<Note>;
}
