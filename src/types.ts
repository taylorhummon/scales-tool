import { Motion, NaturalNote, SolfegeName } from "src/enumerations";

export type Note = string;

export interface State {
  motion: Motion;
  rootNumber: number;
  modeNumber: number;
}

export interface Derived {
  motion: Motion;
  rootNumber: number;
  modeNumber: number;
  rootNote: Note;
  modeNote: NaturalNote;
  rootHour: number;
  nextRootHour: number;
  locatedNotes: Array<LocatedNote>;
  keyDegree: number;
}

export interface LocatedNote {
  hour: number;
  note: Note;
  solfegeName: SolfegeName;
}
