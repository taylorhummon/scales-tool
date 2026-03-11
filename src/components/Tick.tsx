import { CLOCK_RADIUS, TICK_LENGTH, xOnClockAt, yOnClockAt } from "src/utilities/clock";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/Tick.module.css";


interface TickProps {
  hour: number;
  isOccupied: boolean;
}

export default function Tick({
  hour,
  isOccupied
}: TickProps): JSX.Element {
  return (
    <line
      className={className(hour, isOccupied)}
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
  isOccupied: boolean
): string {
  const classNames = ["tick"];
  if (hour === 0) classNames.push("root");
  if (isOccupied) classNames.push("occupied");
  return buildClassString(cssModule, classNames);
}
