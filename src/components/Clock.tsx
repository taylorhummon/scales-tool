import Tick from "src/components/Tick";
import { buildIndicesArray } from "src/utilities/array";
import { CLOCK_RADIUS } from "src/utilities/clock";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/Clock.module.css";


export default function Clock(
): JSX.Element {
  console.log("building clock");
  const ticks = buildIndicesArray(12).map((hour) => {
    return Tick({ hour });
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
