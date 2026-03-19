import { Solfege } from "src/enumerations";
import type { State, Derived } from "src/types";
import type { Note } from "src/classes/Note";
import {
  getNoteBySolfege,
  getModeNoteName,
  getKeyDegree,
} from "src/utilities/scale";


export function derivedFromState({
  motion,
  root,
  mode
}: State): Derived {
  const noteBySolfege = getNoteBySolfege(root, mode);
  const rootNote = noteBySolfege.get(Solfege.Do) as Note;
  return {
    motion,
    root,
    mode,
    noteBySolfege,
    rootNote,
    modeNoteName: getModeNoteName(mode),
    keyDegree: getKeyDegree(root, mode),
  };
}
