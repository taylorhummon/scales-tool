import { Motion, Solfege } from "src/enumerations";
import type { Note } from "src/classes/note";
import { buildClassString } from "src/utilities/css";
import { getDotMotionEndHour } from "src/utilities/scale";

import cssModule from "src/components/NoteDot.module.css";


interface NoteDotProps {
  motion: Motion;
  note: Note;
  solfege: Solfege;
}

export default function NoteDot({
  motion,
  note,
  solfege
}: NoteDotProps): JSX.Element {
  return (
    <circle
      className={className(motion, note.hour, solfege)}
      data-testid={`note-dot-${solfege}`}
      cx="0"
      cy="0"
      r="10"
    />
  );
}

function className(
  motion: Motion,
  noteHour: number,
  solfege: Solfege
): string {
  const classNames = ["note-dot"];
  if (
    solfege === Solfege.Do && (
      motion === Motion.Still ||
      motion === Motion.IncrementRoot ||
      motion === Motion.DecrementRoot
    )
  ) {
    // No need to show the root NoteDot behind the RootDot
    classNames.push("hide");
    return buildClassString(cssModule, classNames);
  }
  if (
    motion === Motion.Still
  ) {
    classNames.push(`hour-${noteHour}`);
  } else if (
    motion === Motion.IncrementRoot ||
    motion === Motion.DecrementMode
  ) {
    const motionEndHour = getDotMotionEndHour(motion, noteHour);
    classNames.push("move");
    classNames.push(`from-${noteHour}-to-${motionEndHour}`);
  } else if (
    motion === Motion.DecrementRoot ||
    motion === Motion.IncrementMode
  ) {
    const motionEndHour = getDotMotionEndHour(motion, noteHour);
    classNames.push("move");
    classNames.push(`from-${noteHour}-to-${motionEndHour}`);
  }
  return buildClassString(cssModule, classNames);
}
