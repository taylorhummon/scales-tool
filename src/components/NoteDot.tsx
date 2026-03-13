import { Motion } from "src/enumerations";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/NoteDot.module.css";


interface NoteDotProps {
  motion: Motion;
  hour: number;
  nextHour: number;
}

export default function NoteDot({
  motion,
  hour,
  nextHour
}: NoteDotProps): JSX.Element {
  return (
    <circle
      className={className(motion, hour, nextHour)}
      cx="0"
      cy="0"
      r="10"
    />
  );
}

function className(
  motion: Motion,
  hour: number,
  nextHour: number
): string {
  const classNames = ["note-dot"];
  if (motion === Motion.Still) {
    classNames.push(`hour-${hour}`);
  }
  if (motion === Motion.IncrementRoot) {
    classNames.push("move");
    classNames.push(`from-${hour}-to-${nextHour}`);
  }
  if (motion === Motion.DecrementRoot) {
    classNames.push("move");
    classNames.push(`from-${hour}-to-${nextHour}`);
  }
  return buildClassString(cssModule, classNames);
}
