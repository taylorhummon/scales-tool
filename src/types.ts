import { NaturalNote, SolfegeName } from "src/enumerations";

export type Note = string;

export interface State {
  rootNumber: number;
  modeNumber: number;
}

export interface Derived {
  rootNumber: number;
  modeNumber: number;
  rootNote: Note;
  modeNote: NaturalNote;
  rootHour: number;
  locatedNotes: Array<LocatedNote>;
  occupiedTickMarks: Set<number>;
  keyDegree: number;
}

export interface LocatedNote {
  hour: number;
  note: Note;
  solfegeName: SolfegeName;
}
