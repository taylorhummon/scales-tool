import { Motion } from "src/enumerations";
import { buildClassString } from "src/utilities/css";
import { getMovingNoteEndHour } from "src/utilities/scale";

import cssModule from "src/components/NoteDot.module.css";


interface NoteDotProps {
  motion: Motion;
  hour: number;
  isRoot: boolean;
}

export default function NoteDot({
  motion,
  hour,
  isRoot
}: NoteDotProps): JSX.Element {
  return (
    <circle
      className={className(motion, hour, isRoot)}
      cx="0"
      cy="0"
      r="10"
    />
  );
}

function className(
  motion: Motion,
  hour: number,
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
    const endHour = getMovingNoteEndHour(motion, hour);
    classNames.push("move");
    classNames.push(`from-${hour}-to-${endHour}`);
  } else if (
    motion === Motion.DecrementRoot ||
    motion === Motion.IncrementMode
  ) {
    const endHour = getMovingNoteEndHour(motion, hour);
    classNames.push("move");
    classNames.push(`from-${hour}-to-${endHour}`);
  } else {
    classNames.push(`hour-${hour}`);
  }
  return buildClassString(cssModule, classNames);
}
