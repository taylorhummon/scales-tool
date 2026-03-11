import { Location, NaturalNote, SolfegeName } from "src/enumerations";

export type Note = string;

export interface Derived {
  rootNumber: number;
  modeNumber: number;
  rootNote: Note;
  modeNote: NaturalNote;
  keyDegree: number;
  locatedNoteBySolfegeName: Map<SolfegeName, LocatedNote>;
  occupiedTickMarks: Set<number>;
}

export interface LocatedNote {
  location: Location;
  note: Note;
}
