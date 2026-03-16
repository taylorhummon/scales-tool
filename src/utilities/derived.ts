import type { State, Derived } from "src/types";
import {
  getRootNoteName,
  getRootNoteHour,
  getNotes,
  getModeNoteName,
  getKeyDegree,
} from "src/utilities/scale";


export function derivedFromState({
  motion,
  root,
  mode
}: State): Derived {
  return {
    motion,
    root,
    mode,
    notes: getNotes(root, mode),
    rootNoteHour: getRootNoteHour(root),
    rootNoteName: getRootNoteName(root, mode),
    modeNoteName: getModeNoteName(mode),
    keyDegree: getKeyDegree(root, mode),
  };
}
