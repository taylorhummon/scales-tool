import type { MusicalKey } from "@/classes/MusicalKey";
import type { Note } from "@/classes/Note";
import { remainderFor } from "@/utilities/math";
import type { Settings } from "@/utilities/settings";


export function getNoteFinishHour(
  settings: Settings,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  note: Note,
): number {
  if (settings.isClusteringNotes) {
    return whenClusteringNotes(
      settings,
      musicalKey,
      nextMusicalKey,
      note,
    );
  } else {
    return whenNotClusteringNotes(
      settings,
      musicalKey,
      nextMusicalKey,
      note,
    );
  }
}

function whenNotClusteringNotes(
  settings: Settings,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  note: Note,
) {
  const currentDegree = musicalKey.degree;
  const nextDegree = nextMusicalKey.degree;
  if (settings.isUsingNotesBallet) {
    if (nextDegree === currentDegree + 1) {
      return remainderFor(note.getHour(settings) + 7, 12);
    }
    if (nextDegree === currentDegree - 1) {
      return remainderFor(note.getHour(settings) - 7, 12);
    }
  } else {
    if (nextDegree === currentDegree + 1 && note.position === musicalKey.topPosition) {
      return remainderFor(note.getHour(settings) + 1, 12);
    }
    if (nextDegree === currentDegree - 1 && note.position === musicalKey.bottomPosition) {
      return remainderFor(note.getHour(settings) - 1, 12);
    }
  }
  return note.getHour(settings);
}

function whenClusteringNotes(
  settings: Settings,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  note: Note,
) {
  const currentDegree = musicalKey.degree;
  const nextDegree = nextMusicalKey.degree;
  if (settings.isUsingNotesBallet) {
    if (nextDegree === currentDegree + 1) {
      return remainderFor(note.getHour(settings) + 1, 12);
    }
    if (nextDegree === currentDegree - 1) {
      return remainderFor(note.getHour(settings) - 1, 12);
    }
  } else {
    if (nextDegree === currentDegree + 1 && note.position === musicalKey.topPosition) {
      return remainderFor(note.getHour(settings) + 7, 12);
    }
    if (nextDegree === currentDegree - 1 && note.position === musicalKey.bottomPosition) {
      return remainderFor(note.getHour(settings) - 7, 12);
    }
  }
  return note.getHour(settings);
}
