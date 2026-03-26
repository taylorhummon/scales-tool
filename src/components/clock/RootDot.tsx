import { Motion } from "src/enumerations";
import { Note } from "src/classes/Note";
import { buildClassString } from "src/utilities/css";
import { remainderFor } from "src/utilities/math";

import cssModule from "src/components/clock/RootDot.module.css";


interface RootDotProps {
  motion: Motion;
  rootNote: Note;
}

export function RootDot({
  motion,
  rootNote
}: RootDotProps): JSX.Element {
  return (
    <circle
      className={className(motion, rootNote)}
      data-testid={"root-dot"}
      cx="0"
      cy="0"
      r="14"
      strokeWidth={1.3}
      stroke="rgb(4, 51, 255)"
      fill="rgb(208, 214, 253)"
    />
  );
}

function className(
  motion: Motion,
  rootNote: Note
): string {
  const classNames = ["root-dot"];
  if (
    motion === Motion.Still ||
    motion === Motion.DecrementBoth ||
    motion === Motion.IncrementBoth
  ) {
    classNames.push(`hour-${rootNote.hour}`);
  } else if (
    motion === Motion.IncrementDoPosition ||
    motion === Motion.DecrementKeyDegree
  ) {
    const startHour = rootNote.hour;
    const finishHour = remainderFor(startHour - 7, 12);
    classNames.push("move");
    classNames.push(`from-${startHour}-to-${finishHour}`);
  } else if (
    motion === Motion.DecrementDoPosition ||
    motion === Motion.IncrementKeyDegree
   ) {
    const startHour = rootNote.hour;
    const finishHour = remainderFor(startHour + 7, 12);
    classNames.push("move");
    classNames.push(`from-${startHour}-to-${finishHour}`);
  }
  return buildClassString(cssModule, classNames);
}
