import { Motion } from "src/enumerations";
import type { Note } from "src/classes/Note";
import { buildClassString } from "src/utilities/css";
import { remainderFor } from "src/utilities/math";

import cssModule from "src/components/clock/NoteDot.module.css";


interface NoteDotProps {
  motion: Motion;
  note: Note;
}

export function NoteDot({
  motion,
  note
}: NoteDotProps): JSX.Element {
  return (
    <circle
      className={className(motion, note)}
      data-testid={`note-dot-${note.solfege}`}
      cx="0"
      cy="0"
      r="8"
    />
  );
}

function className(
  motion: Motion,
  note: Note
): string {
  const classNames = ["note-dot"];
  if (
    motion === Motion.Still ||
    motion === Motion.DecrementDoPosition ||
    motion === Motion.IncrementDoPosition
  ) {
    classNames.push(`hour-${note.hour}`);
  } else if (
    motion === Motion.DecrementKeyDegree ||
    motion === Motion.DecrementBoth
  ) {
    const startHour = note.hour;
    const finishHour = remainderFor(startHour - 7, 12);
    classNames.push("move");
    classNames.push(`from-${startHour}-to-${finishHour}`);
  } else if (
    motion === Motion.IncrementKeyDegree ||
    motion === Motion.IncrementBoth
  ) {
    const startHour = note.hour;
    const finishHour = remainderFor(startHour + 7, 12);
    classNames.push("move");
    classNames.push(`from-${startHour}-to-${finishHour}`);
  }
  return buildClassString(cssModule, classNames);
}
