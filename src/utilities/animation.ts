import type { MusicalKey } from "@/classes/MusicalKey";
import type { Note } from "@/classes/Note";
import { remainderFor } from "@/utilities/math";


export function getNoteFinishHour(
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  isUsingNotesBallet: boolean,
  note: Note,
): number {
  const currentDegree = musicalKey.degree;
  const nextDegree = nextMusicalKey.degree;
  if (isUsingNotesBallet) {
    if (nextDegree === currentDegree + 1) {
      return remainderFor(note.hour + 7, 12);
    }
    if (nextDegree === currentDegree - 1) {
      return remainderFor(note.hour - 7, 12);
    }
  } else {
    if (nextDegree === currentDegree + 1 && note.position === musicalKey.topPosition) {
      return remainderFor(note.hour + 1, 12);
    }
    if (nextDegree === currentDegree - 1 && note.position === musicalKey.bottomPosition) {
      return remainderFor(note.hour - 1, 12);
    }
  }
  return note.hour;
}
