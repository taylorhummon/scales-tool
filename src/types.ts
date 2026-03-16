import { Motion, NaturalNoteName, Solfege } from "src/enumerations";

export type NoteName = string;

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
  rootNoteHour: number;
  rootNoteName: NoteName;
  modeNoteName: NaturalNoteName;
  keyDegree: number;
}

export interface Note {
  name: NoteName;
  hour: number;
  solfege: Solfege;
}
