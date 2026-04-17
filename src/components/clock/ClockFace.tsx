import { Tick } from "@/components/clock/Tick";
import { buildIndicesArray } from "@/utilities/array";
import { CLOCK_STROKE } from "@/utilities/color";


const RADIUS = 120;

export function ClockFace(
): JSX.Element {
  return (
    <>
      {buildIndicesArray(12).map((hour) =>
        <Tick
          key={hour}
          hour={hour}
        />
      )}
      <circle
        cx="0"
        cy="0"
        r={RADIUS}
        strokeWidth="2"
        stroke={CLOCK_STROKE}
        fill="none"
      />
    </>
  );
}
