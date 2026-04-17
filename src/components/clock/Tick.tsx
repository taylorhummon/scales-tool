import { UNIT_CIRCLE_XS, UNIT_CIRCLE_YS } from "@/utilities/unitCircle";
import { CLOCK_STROKE_COLOR } from "@/utilities/color";


const OUTER_RADIUS = 120;
const INNER_RADIUS = 100;


interface TickProps {
  hour: number;
}

export function Tick({
  hour
}: TickProps): JSX.Element {
  return (
    <line
      x1={OUTER_RADIUS * UNIT_CIRCLE_XS[hour]}
      y1={OUTER_RADIUS * UNIT_CIRCLE_YS[hour]}
      x2={INNER_RADIUS * UNIT_CIRCLE_XS[hour]}
      y2={INNER_RADIUS * UNIT_CIRCLE_YS[hour]}
      strokeWidth="1.5"
      stroke={CLOCK_STROKE_COLOR}
    />
  );
}
