import type { MusicalKey } from "@/classes/MusicalKey";
import type { Note } from "@/classes/Note";
import { useDerivedContext } from "@/contexts/derived";
import { AnimationType } from "@/utilities/animation";
import { buildClassString } from "@/utilities/css";
import { remainderFor } from "@/utilities/math";

import cssModule from "@/components/clock/NoteDot.module.scss";


interface NoteDotProps {
  note: Note;
}

export function NoteDot({
  note
}: NoteDotProps): JSX.Element {
  const { animationType, musicalKey, nextMusicalKey } = useDerivedContext();

  return (
    <circle
      className={getClassName(animationType, musicalKey, nextMusicalKey, note)}
      data-testid={`note-dot-${note.solfegeLetter}`}
      cx="0"
      cy="0"
      r="8"
      fill="black"
    />
  );
}

function getClassName(
  animationType: AnimationType,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  note: Note
): string {
  const classNames = ["note-dot"];
  const startHour = note.hour;
  const finishHour = getNoteFinishHour(animationType, musicalKey, nextMusicalKey, note);
  if (finishHour === startHour) {
    classNames.push(`hour-${note.hour}`);
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  }
  return buildClassString(cssModule, classNames);
}

function getNoteFinishHour(
  animationType: AnimationType,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  note: Note
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
