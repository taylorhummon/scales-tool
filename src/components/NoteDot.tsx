import { Motion } from "src/enumerations";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/NoteDot.module.css";


interface NoteDotProps {
  motion: Motion;
  hour: number;
  movingNoteBegin: number | null;
  movingNoteEnd: number | null;
}

export default function NoteDot({
  motion,
  hour,
  movingNoteBegin,
  movingNoteEnd
}: NoteDotProps): JSX.Element {
  return (
    <circle
      className={className(motion, hour, movingNoteBegin, movingNoteEnd)}
      cx="0"
      cy="0"
      r="10"
    />
  );
}

function className(
  motion: Motion,
  hour: number,
  movingNoteBegin: number | null,
  movingNoteEnd: number | null
): string {
  const classNames = ["note-dot"];
  if (movingNoteBegin === hour) {
    if (
      motion === Motion.IncrementRoot ||
      motion === Motion.DecrementRoot ||
      motion === Motion.IncrementMode ||
      motion === Motion.DecrementMode
    ) {
      if (movingNoteBegin !== null && movingNoteEnd !== null) {
        classNames.push("move");
        classNames.push(`from-${movingNoteBegin}-to-${movingNoteEnd}`);
      }
    }
  } else {
    classNames.push(`hour-${hour}`);
  }
  return buildClassString(cssModule, classNames);
}
