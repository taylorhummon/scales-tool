import type { State, Derived, LocatedNote } from "src/types";
import {
  getNoteBySolfegeName,
  getRootNote,
  rootHourFromRootNumber,
  getLocatedNotes,
  modeNoteFromModeNumber,
  getKeyDegree,
} from "src/utilities/scale";


export function derivedFromState({
  rootNumber,
  modeNumber
}: State): Derived {
  const rootHour = rootHourFromRootNumber(rootNumber);
  const noteBySolfegeName = getNoteBySolfegeName(rootNumber, modeNumber);
  const locatedNotes = getLocatedNotes(modeNumber, rootHour, noteBySolfegeName);
  return {
    rootNumber,
    modeNumber,
    rootNote: getRootNote(noteBySolfegeName),
    modeNote: modeNoteFromModeNumber(modeNumber),
    rootHour,
    locatedNotes,
    occupiedTickMarks: getOccupiedTickMarks(locatedNotes),
    keyDegree: getKeyDegree(rootNumber, modeNumber),
  };
}

function getOccupiedTickMarks(
  locatedNotes: Array<LocatedNote>
): Set<number> {
  return new Set(locatedNotes.map((locatedNote) => locatedNote.hour));
}
