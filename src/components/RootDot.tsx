import { Motion } from "src/enumerations";
import { buildClassString } from "src/utilities/css";
import { getMovingNoteEndHour } from "src/utilities/scale";

import cssModule from "src/components/RootDot.module.css";


interface RootDotProps {
  motion: Motion;
  rootHour: number;
}

export default function RootDot({
  motion,
  rootHour
}: RootDotProps): JSX.Element {
  return (
    <circle
      className={className(motion, rootHour)}
      cx="0"
      cy="0"
      r="10"
    />
  );
}

function className(
  motion: Motion,
  rootHour: number
): string {
  const classNames = ["root-dot"];
  if (
    motion === Motion.Still ||
    motion === Motion.IncrementMode ||
    motion === Motion.DecrementMode
  ) {
    classNames.push(`hour-${rootHour}`);
  }
  if (
    motion === Motion.IncrementRoot ||
    motion === Motion.DecrementRoot
  ) {
    const rootEndHour = getMovingNoteEndHour(motion, rootHour);
    classNames.push("move");
    classNames.push(`from-${rootHour}-to-${rootEndHour}`);
  }
  return buildClassString(cssModule, classNames);
}
