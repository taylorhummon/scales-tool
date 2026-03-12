import Tick from "src/components/Tick";
import { buildIndicesArray } from "src/utilities/array";
import { CLOCK_RADIUS } from "src/utilities/clock";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/Clock.module.css";


interface ClockProps {
  rootHour: number;
  occupiedTickMarks: Set<number>;
}

export default function Clock({
  rootHour,
  occupiedTickMarks
}: ClockProps): JSX.Element {
  const ticks = buildIndicesArray(12).map((hour) => {
    const isRoot = hour === rootHour;
    const isOccupied = occupiedTickMarks.has(hour);
    return Tick({ hour, isRoot, isOccupied });
  });
  return (
    <>
      {ticks}
      <circle
        className={buildClassString(cssModule, ["clock"])}
        cx="0"
        cy="0"
        r={CLOCK_RADIUS}
      />
    </>
  );
}
