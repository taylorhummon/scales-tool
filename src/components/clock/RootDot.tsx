import { Motion } from "@/enumerations";
import { Note } from "@/classes/Note";
import { buildClassString } from "@/utilities/css";
import { remainderFor } from "@/utilities/math";

import cssModule from "@/components/clock/RootDot.module.css";


interface RootDotProps {
  rootNote: Note;
  motion: Motion;
}

export function RootDot({
  rootNote,
  motion
}: RootDotProps): JSX.Element {
  return (
    <circle
      className={className(rootNote, motion)}
      data-testid={"clock-root-dot"}
      cx="0"
      cy="0"
      r="14"
      strokeWidth="1.3"
      stroke="rgb(4, 51, 255)"
      fill="rgb(208, 214, 253)"
    />
  );
}

function className(
  rootNote: Note,
  motion: Motion
): string {
  const classNames = ["root-dot"];
  if (
    motion === Motion.Still ||
    motion === Motion.DecrementBoth ||
    motion === Motion.IncrementBoth
  ) {
    classNames.push(`hour-${rootNote.hour}`);
  } else if (
    motion === Motion.IncrementMode ||
    motion === Motion.DecrementDegree
  ) {
    const startHour = rootNote.hour;
    const finishHour = remainderFor(startHour - 7, 12);
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  } else if (
    motion === Motion.DecrementMode ||
    motion === Motion.IncrementDegree
   ) {
    const startHour = rootNote.hour;
    const finishHour = remainderFor(startHour + 7, 12);
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  }
  return buildClassString(cssModule, classNames);
}
