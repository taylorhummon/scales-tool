import { CLOCK_RADIUS, TICK_LENGTH, xOnClockAt, yOnClockAt } from "src/utilities/clock";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/Tick.module.css";


interface TickProps {
  hour: number;
  isRoot: boolean;
  isOccupied: boolean;
}

export default function Tick({
  hour,
  isRoot,
  isOccupied
}: TickProps): JSX.Element {
  return (
    <line
      className={className(hour, isRoot, isOccupied)}
      key={hour}
      x1={xOnClockAt(hour)}
      y1={yOnClockAt(hour)}
      x2={xOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
      y2={yOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
    />
  );
}

function className(
  hour: number,
  isRoot: boolean,
  isOccupied: boolean
): string {
  const classNames = ["tick", `hour-${hour}`];
  if (isRoot) classNames.push("root");
  if (isOccupied) classNames.push("occupied");
  return buildClassString(cssModule, classNames);
}
