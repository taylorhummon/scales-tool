import type { Motion } from "@/enumerations";
import { AnimationType } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import type { Note } from "@/classes/Note";
import { buildClassString } from "@/utilities/css";
import { getNoteFinishHour } from "@/utilities/motion";

import cssModule from "@/components/clock/NoteDot.module.scss";


interface NoteDotProps {
  musicalKey: MusicalKey;
  animationType: AnimationType;
  motion: Motion;
  note: Note;
}

export function NoteDot({
  musicalKey,
  animationType,
  motion,
  note
}: NoteDotProps): JSX.Element {
  return (
    <circle
      className={getClassName(musicalKey, animationType, motion, note)}
      data-testid={`note-dot-${note.solfege}`}
      cx="0"
      cy="0"
      r="8"
    />
  );
}

function getClassName(
  musicalKey: MusicalKey,
  animationType: AnimationType,
  motion: Motion,
  note: Note
): string {
  const classNames = ["note-dot"];
  const startHour = note.hour;
  const finishHour = getNoteFinishHour(musicalKey, animationType, motion, note);
  if (finishHour === startHour) {
    classNames.push(`hour-${note.hour}`);
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  }
  return buildClassString(cssModule, classNames);
}
