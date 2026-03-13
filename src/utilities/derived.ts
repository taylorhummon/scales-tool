import { Motion } from "src/enumerations";
import type { State, Derived } from "src/types";
import { remainderFor } from "src/utilities/math";
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
    rootHour,
    nextRootHour: getNextRootHour(rootHour, motion),
    locatedNotes,
    keyDegree: getKeyDegree(rootNumber, modeNumber),
  };
}

function getNextRootHour(
  rootHour: number,
  motion: Motion
): number {
  if (motion === Motion.IncrementRoot) return remainderFor(rootHour + 7, 12);
  if (motion === Motion.DecrementRoot) return remainderFor(rootHour - 7, 12);
  return rootHour;
}
