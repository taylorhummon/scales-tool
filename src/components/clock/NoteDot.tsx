import type { Motion } from "@/enumerations";
import type { Note } from "@/classes/Note";
import { buildClassString } from "@/utilities/css";
import { remainderFor } from "@/utilities/math";
import { willDecrementDegree, willIncrementDegree } from "@/utilities/motion";

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
  if (willDecrementDegree(motion)) {
    const startHour = note.hour;
    const finishHour = remainderFor(startHour - 7, 12);
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  } else if (willIncrementDegree(motion)) {
    const startHour = note.hour;
    const finishHour = remainderFor(startHour + 7, 12);
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  } else {
    classNames.push(`hour-${note.hour}`);
  }
  return buildClassString(cssModule, classNames);
}
