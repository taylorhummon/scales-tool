import type { MusicalKey } from "@/classes/MusicalKey";
import type { Note } from "@/classes/Note";
import { remainderFor } from "@/utilities/math";


export enum AnimationType {
  None = "None",
  Simple = "Simple",
  Ballet = "Ballet",
}

export function getNoteFinishHour(
  animationType: AnimationType,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  note: Note,
): number {
  const currentDegree = musicalKey.degree;
  const nextDegree = nextMusicalKey.degree;
  if (animationType === AnimationType.Simple) {
    if (nextDegree === currentDegree + 1 && note.position === musicalKey.topPosition) {
      return remainderFor(note.hour + 1, 12);
    }
    if (nextDegree === currentDegree - 1 && note.position === musicalKey.bottomPosition) {
      return remainderFor(note.hour - 1, 12);
    }
  } else if (animationType === AnimationType.Ballet) {
    if (nextDegree === currentDegree + 1) {
      return remainderFor(note.hour + 7, 12);
    }
    if (nextDegree === currentDegree - 1) {
      return remainderFor(note.hour - 7, 12);
    }
  }
  return note.hour;
}
