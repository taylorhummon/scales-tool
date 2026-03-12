import { NaturalNote, SolfegeName } from "src/enumerations";

export type Note = string;

export interface Derived {
  rootHour: number;
  rootNumber: number;
  modeNumber: number;
  rootNote: Note;
  modeNote: NaturalNote;
  keyDegree: number;
  locatedNotes: Array<LocatedNote>;
  occupiedTickMarks: Set<number>;
}

export interface LocatedNote {
  hour: number;
  note: Note;
  solfegeName: SolfegeName;
}
