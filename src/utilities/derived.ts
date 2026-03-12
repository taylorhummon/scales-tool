import type { State, Derived, LocatedNote } from "src/types";
import {
  getNoteBySolfegeName,
  rootHourFromRootNumber,
  getLocatedNotes,
  getRootNote,
  modeNoteFromModeNumber,
  getKeyDegree,
} from "src/utilities/music";


export function derivedFromState({
  rootNumber,
  modeNumber
}: State): Derived {
  const noteBySolfegeName = getNoteBySolfegeName(modeNumber, rootNumber);
  const rootHour = rootHourFromRootNumber(rootNumber);
  const locatedNotes = getLocatedNotes(noteBySolfegeName, modeNumber, rootHour);
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
