import type { State, Derived } from "src/types";
import {
  getNotes,
  getRootNote,
  getModeNoteName,
  getKeyDegree
} from "src/utilities/scale";


export function derivedFromState({
  motion,
  root,
  mode
}: State): Derived {
  const notes = getNotes(root, mode);
  return {
    motion,
    root,
    mode,
    notes,
    rootNote: getRootNote(notes, mode),
    modeNoteName: getModeNoteName(mode),
    keyDegree: getKeyDegree(root, mode),
  };
}
