import type { State, Derived } from "src/types";
import {
  getModeNote,
  getRootNote,
  getScale
} from "src/utilities/scale";


export function derivedFromState({
  motion,
  doPosition,
  keyDegree
}: State): Derived {
  return {
    motion,
    doPosition,
    keyDegree,
    modeNote: getModeNote(doPosition),
    rootNote: getRootNote(doPosition, keyDegree),
    scale: getScale(doPosition, keyDegree)
  };
}
