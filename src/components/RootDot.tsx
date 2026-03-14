import { Motion } from "src/enumerations";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/RootDot.module.css";


interface RootDotProps {
  motion: Motion;
  rootHour: number;
  movingRootBegin: number | null;
  movingRootEnd: number | null;
}

export default function RootDot({
  motion,
  rootHour,
  movingRootBegin,
  movingRootEnd
}: RootDotProps): JSX.Element {
  return (
    <circle
      className={className(motion, rootHour, movingRootBegin, movingRootEnd)}
      cx="0"
      cy="0"
      r="10"
    />
  );
}

function className(
  motion: Motion,
  rootHour: number,
  movingRootBegin: number | null,
  movingRootEnd: number | null
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
    if (movingRootBegin !== null && movingRootEnd !== null) {
      classNames.push("move");
      classNames.push(`from-${movingRootBegin}-to-${movingRootEnd}`);
    }
  }
  return buildClassString(cssModule, classNames);
}
