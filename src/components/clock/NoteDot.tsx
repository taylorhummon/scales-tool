import { Motion } from "@/enumerations";
import type { Note } from "@/classes/Note";
import { buildClassString } from "@/utilities/css";
import { remainderFor } from "@/utilities/math";

import cssModule from "@/components/clock/NoteDot.module.css";


interface NoteDotProps {
  note: Note;
  motion: Motion;
}

export function NoteDot({
  note,
  motion
}: NoteDotProps): JSX.Element {
  return (
    <circle
      className={className(note, motion)}
      data-testid={`note-dot-${note.solfege}`}
      cx="0"
      cy="0"
      r="8"
    />
  );
}

function className(
  note: Note,
  motion: Motion
): string {
  const classNames = ["note-dot"];
  if (
    motion === Motion.Still ||
    motion === Motion.DecrementMode ||
    motion === Motion.IncrementMode
  ) {
    classNames.push(`hour-${note.hour}`);
  } else if (
    motion === Motion.DecrementDegree ||
    motion === Motion.DecrementBoth
  ) {
    const startHour = note.hour;
    const finishHour = remainderFor(startHour - 7, 12);
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  } else if (
    motion === Motion.IncrementDegree ||
    motion === Motion.IncrementBoth
  ) {
    const startHour = note.hour;
    const finishHour = remainderFor(startHour + 7, 12);
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  }
  return buildClassString(cssModule, classNames);
}
