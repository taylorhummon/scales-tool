import {
  NATURAL_NOTES_IN_FCGDAEB_ORDER,
  NaturalNote,
  SolfegeName,
} from "src/enumerations";
import type { Derived, LocatedNote, Note } from "src/types";
import { getNoteBySolfegeName } from "src/utilities/music";


export function derivedFromState(
  rootHour: number,
  rootNumber: number,
  modeNumber: number
): Derived {
  const noteBySolfegeName = getNoteBySolfegeName(modeNumber, rootNumber);
  const locatedNotes = getLocatedNotes(noteBySolfegeName, modeNumber, rootHour);
  return {
    rootHour,
    rootNumber,
    modeNumber,
    rootNote: getRootNote(noteBySolfegeName),
    modeNote: getModeNote(modeNumber),
    keyDegree: rootNumber - modeNumber,
    locatedNotes,
    occupiedTickMarks: getOccupiedTickMarks(locatedNotes),
  };
}

function getModeNote(
  modeNumber: number
): NaturalNote {
  return NATURAL_NOTES_IN_FCGDAEB_ORDER[modeNumber + 3];
}

function getRootNote(
  noteBySolfegeName: Map<SolfegeName, Note>
): Note {
  const note = noteBySolfegeName.get(SolfegeName.Do);
  if (! note) throw "Oops. Could not find root note";
  return note;
}

const SOLFEGE_NAMES = Object.values(SolfegeName);

function getLocatedNotes(
  noteBySolfegeName: Map<SolfegeName, Note>,
  modeNumber: number,
  rootHour: number
): Array<LocatedNote> {
  return SOLFEGE_NAMES.map((solfegeName: SolfegeName, solfegeIndex: number) => ({
    hour: getHour(modeNumber, solfegeIndex, rootHour),
    note: getNote(noteBySolfegeName, solfegeName),
    solfegeName: solfegeName
  }));
}

const HOUR_TABLE = [
  [0, 2, 4, 6, 7, 9, 11],  // modeNumber = -3
  [0, 2, 4, 5, 7, 9, 11],
  [0, 2, 4, 5, 7, 9, 10],
  [0, 2, 3, 5, 7, 9, 10],  // modeNumber = 0
  [0, 2, 3, 5, 7, 8, 10],
  [0, 1, 3, 5, 7, 8, 10],
  [0, 1, 3, 5, 6, 8, 10],  // modeNumber = 3
];

function getHour(
  modeNumber: number,
  solfegeIndex: number,
  rootHour: number
): number {
  const modeIndex = modeNumber + 3;
  return (rootHour + HOUR_TABLE[modeIndex][solfegeIndex]) % 12;
}

function getNote(
  noteBySolfegeName: Map<SolfegeName, Note>,
  solfegeName: SolfegeName
): Note {
  const note = noteBySolfegeName.get(solfegeName);
  if (! note) throw "Oops. Could not find note!";
  return note;
}

function getOccupiedTickMarks(
  locatedNotes: Array<LocatedNote>
): Set<number> {
  return new Set(locatedNotes.map((locatedNote) => locatedNote.hour));
}
