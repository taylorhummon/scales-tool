import type { State, Derived } from "src/types";
import {
  getNoteBySolfegeName,
  getRootNote,
  rootHourFromRootNumber,
  getLocatedNotes,
  modeNoteFromModeNumber,
  getKeyDegree,
} from "src/utilities/scale";


export function derivedFromState({
  motion,
  rootNumber,
  modeNumber
}: State): Derived {
  const rootHour = rootHourFromRootNumber(rootNumber);
  const noteBySolfegeName = getNoteBySolfegeName(rootNumber, modeNumber);
  const locatedNotes = getLocatedNotes(modeNumber, rootHour, noteBySolfegeName);
  return {
    motion,
    rootNumber,
    modeNumber,
    rootNote: getRootNote(noteBySolfegeName),
    modeNote: modeNoteFromModeNumber(modeNumber),
    locatedNotes,
    keyDegree: getKeyDegree(rootNumber, modeNumber),
    rootHour,
  };
}
