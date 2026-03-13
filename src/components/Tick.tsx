import { CLOCK_RADIUS, TICK_LENGTH, xOnClockAt, yOnClockAt } from "src/utilities/clock";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/Tick.module.css";


interface TickProps {
  hour: number;
}

export default function Tick({
  hour
}: TickProps): JSX.Element {
  console.log("DRAWING LINE");
  return (
    <line
      className={className(hour)}
      key={hour}
      x1={xOnClockAt(hour)}
      y1={yOnClockAt(hour)}
      x2={xOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
      y2={yOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
    />
  );
}

function className(
  hour: number
): string {
  const classNames = ["tick", `hour-${hour}`];
  return buildClassString(cssModule, classNames);
}
