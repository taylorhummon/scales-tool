import { Motion } from "src/enumerations";
import { buildClassString } from "src/utilities/css";
import { getDotMotionEndHour } from "src/utilities/scale";

import cssModule from "src/components/clock/RootDot.module.css";


interface RootDotProps {
  motion: Motion;
  rootNoteHour: number;
}

export function RootDot({
  motion,
  rootNoteHour
}: RootDotProps): JSX.Element {
  return (
    <circle
      className={className(motion, rootNoteHour)}
      data-testid={"root-dot"}
      cx="0"
      cy="0"
      r="11"
    />
  );
}

function className(
  motion: Motion,
  rootNoteHour: number
): string {
  const classNames = ["root-dot"];
  if (
    motion === Motion.Still ||
    motion === Motion.IncrementMode ||
    motion === Motion.DecrementMode
  ) {
    classNames.push(`hour-${rootNoteHour}`);
  } else if (
    motion === Motion.IncrementRoot ||
    motion === Motion.DecrementRoot
  ) {
    const motionEndHour = getDotMotionEndHour(motion, rootNoteHour);
    classNames.push("move");
    classNames.push(`from-${rootNoteHour}-to-${motionEndHour}`);
  }
  return buildClassString(cssModule, classNames);
}
