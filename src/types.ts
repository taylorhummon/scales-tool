import { Motion, NaturalNoteName, Solfege } from "src/enumerations";
import type { Note } from "src/classes/note";


export interface State {
  motion: Motion;
  root: number;
  mode: number;
}

export interface Derived {
  motion: Motion;
  root: number;
  mode: number;
  noteBySolfege: Map<Solfege, Note>;
  rootNote: Note;
  modeNoteName: NaturalNoteName;
  keyDegree: number;
}
