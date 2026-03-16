import { Motion } from "src/enumerations";
import { buildClassString } from "src/utilities/css";
import { getMotionEndHour } from "src/utilities/scale";

import cssModule from "src/components/NoteDot.module.css";


interface NoteDotProps {
  motion: Motion;
  noteHour: number;
  isRoot: boolean;
}

export default function NoteDot({
  motion,
  noteHour,
  isRoot
}: NoteDotProps): JSX.Element {
  return (
    <circle
      className={className(motion, noteHour, isRoot)}
      cx="0"
      cy="0"
      r="10"
    />
  );
}

function className(
  motion: Motion,
  noteHour: number,
  isRoot: boolean
): string {
  const classNames = ["note-dot"];
  if (isRoot) {
    if (
      motion === Motion.Still ||
      motion === Motion.IncrementRoot ||
      motion === Motion.DecrementRoot
    ) {
      // No need to show the root NoteDot behind the RootDot
      classNames.push("hide");
      return buildClassString(cssModule, classNames);
    }
  }
  if (
    motion === Motion.IncrementRoot ||
    motion === Motion.DecrementMode
  ) {
    const motionEndHour = getMotionEndHour(motion, noteHour);
    classNames.push("move");
    classNames.push(`from-${noteHour}-to-${motionEndHour}`);
  } else if (
    motion === Motion.DecrementRoot ||
    motion === Motion.IncrementMode
  ) {
    const motionEndHour = getMotionEndHour(motion, noteHour);
    classNames.push("move");
    classNames.push(`from-${noteHour}-to-${motionEndHour}`);
  } else {
    classNames.push(`hour-${noteHour}`);
  }
  return buildClassString(cssModule, classNames);
}
