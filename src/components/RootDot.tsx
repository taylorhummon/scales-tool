import { Motion } from "src/enumerations";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/RootDot.module.css";


interface RootDotProps {
  motion: Motion;
  rootHour: number;
  nextRootHour: number;
}

export default function RootDot({
  motion,
  rootHour,
  nextRootHour
}: RootDotProps): JSX.Element {
  return (
    <circle
      className={className(motion, rootHour, nextRootHour)}
      cx="0"
      cy="0"
      r="10"
    />
  );
}

function className(
  motion: Motion,
  rootHour: number,
  nextRootHour: number
): string {
  const classNames = ["root-dot"];
  if (motion === Motion.Still) {
    classNames.push(`hour-${rootHour}`);
  }
  if (motion === Motion.IncrementRoot) {
    classNames.push("move");
    classNames.push(`from-${rootHour}-to-${nextRootHour}`);
  }
  if (motion === Motion.DecrementRoot) {
    classNames.push("move");
    classNames.push(`from-${rootHour}-to-${nextRootHour}`);
  }
  return buildClassString(cssModule, classNames);
}
