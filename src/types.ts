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
  locatedNotes: Array<LocatedNote>;
  keyDegree: number;
  rootHour: number;
  nextRootHour: number;
  movingNoteBegin: number | null;
  movingNoteEnd: number | null;
}

export interface LocatedNote {
  hour: number;
  note: Note;
  solfegeName: SolfegeName;
}
