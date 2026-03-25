import { Motion, Solfege } from "src/enumerations";
import type { Note } from "src/classes/Note";
import { buildClassString } from "src/utilities/css";
import { getDotMotionEndHour } from "src/utilities/scale";

import cssModule from "src/components/clock/NoteDot.module.css";


interface NoteDotProps {
  motion: Motion;
  note: Note;
  solfege: Solfege;
}

export function NoteDot({
  motion,
  note,
  solfege
}: NoteDotProps): JSX.Element {
  return (
    <circle
      className={className(motion, note.hour)}
      data-testid={`note-dot-${solfege}`}
      cx="0"
      cy="0"
      r="8"
    />
  );
}

function className(
  motion: Motion,
  noteHour: number,): string {
  const classNames = ["note-dot"];
  if (motion === Motion.Still) {
    classNames.push(`hour-${noteHour}`);
  } else if (
    motion === Motion.IncrementRoot ||
    motion === Motion.DecrementRoot ||
    motion === Motion.IncrementMode ||
    motion === Motion.DecrementMode
  ) {
    const motionEndHour = getDotMotionEndHour(motion, noteHour);
    classNames.push("move");
    classNames.push(`from-${noteHour}-to-${motionEndHour}`);
  }
  return buildClassString(cssModule, classNames);
}
