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
  const keyDegree = getKeyDegree(rootNumber, modeNumber);
  return {
    motion,
    rootNumber,
    modeNumber,
    rootNote: getRootNote(noteBySolfegeName),
    modeNote: modeNoteFromModeNumber(modeNumber),
    locatedNotes,
    keyDegree,
    rootHour,
    movingRootBegin: getMovingRootBegin(motion, rootHour),
    movingRootEnd: getMovingRootEnd(motion, rootHour),
    movingNoteBegin: getMovingNoteBegin(motion, keyDegree),
    movingNoteEnd: getMovingNoteEnd(motion, keyDegree),
  };
}

function getMovingRootBegin(
  motion: Motion,
  rootHour: number
): number | null {
  if (motion === Motion.IncrementRoot || motion === Motion.DecrementRoot) {
    return rootHour;
  }
  return null;
}

function getMovingRootEnd(
  motion: Motion,
  rootHour: number
): number | null {
  if (motion === Motion.IncrementRoot) {
    return remainderFor(rootHour + 7, 12);
  }
  if (motion === Motion.DecrementRoot) {
    return remainderFor(rootHour - 7, 12);
  }
  return null;
}

function getMovingNoteBegin(
  motion: Motion,
  keyDegree: number,
): number | null {
  if (motion === Motion.IncrementRoot || motion === Motion.DecrementMode) {
    return remainderFor(7 * keyDegree + 3, 12);
  }
  if (motion === Motion.DecrementRoot || motion === Motion.IncrementMode) {
    return remainderFor(7 * keyDegree - 3, 12);
  }
  return null;
}

function getMovingNoteEnd(
  motion: Motion,
  keyDegree: number,
): number | null {
  if (motion === Motion.IncrementRoot || motion === Motion.DecrementMode) {
    return remainderFor(7 * keyDegree + 4, 12);
  }
  if (motion === Motion.DecrementRoot || motion === Motion.IncrementMode) {
    return remainderFor(7 * keyDegree - 4, 12);
  }
  return null;
}
