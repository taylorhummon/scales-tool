import type { Motion } from "@/enumerations";
import { AnimationType } from "@/enumerations";
import type { Note } from "@/classes/Note";
import { buildClassString } from "@/utilities/css";
import { getNoteFinishHour } from "@/utilities/motion";

import cssModule from "@/components/clock/NoteDot.module.scss";


interface NoteDotProps {
  note: Note;
  animationType: AnimationType;
  motion: Motion;
}

export function NoteDot({
  note,
  animationType,
  motion
}: NoteDotProps): JSX.Element {
  return (
    <circle
      className={getClassName(note, animationType, motion)}
      data-testid={`note-dot-${note.solfege}`}
      cx="0"
      cy="0"
      r="8"
    />
  );
}

function getClassName(
  note: Note,
  animationType: AnimationType,
  motion: Motion
): string {
  const classNames = ["note-dot"];
  const startHour = note.hour;
  const finishHour = getNoteFinishHour(note, animationType, motion);
  if (finishHour === startHour) {
    classNames.push(`hour-${note.hour}`);
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  }
  return buildClassString(cssModule, classNames);
}
