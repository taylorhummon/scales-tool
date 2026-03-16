import { Motion } from "src/enumerations";
import { buildClassString } from "src/utilities/css";
import { getMotionEndHour } from "src/utilities/scale";

import cssModule from "src/components/RootDot.module.css";


interface RootDotProps {
  motion: Motion;
  rootNoteHour: number;
}

export default function RootDot({
  motion,
  rootNoteHour
}: RootDotProps): JSX.Element {
  return (
    <circle
      className={className(motion, rootNoteHour)}
      cx="0"
      cy="0"
      r="10"
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
  }
  if (
    motion === Motion.IncrementRoot ||
    motion === Motion.DecrementRoot
  ) {
    const motionEndHour = getMotionEndHour(motion, rootNoteHour);
    classNames.push("move");
    classNames.push(`from-${rootNoteHour}-to-${motionEndHour}`);
  }
  return buildClassString(cssModule, classNames);
}
