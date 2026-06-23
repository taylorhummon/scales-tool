import { CLOCK_STROKE } from "@shared/utilities/color"
import { UNIT_CIRCLE_XS, UNIT_CIRCLE_YS } from "@shared/utilities/unitCircle"


const OUTER_RADIUS = 116
const INNER_RADIUS = 104


interface TickParameters {
  hour: number,
}

export function Tick({
  hour,
}: TickParameters): React.ReactNode {
  return (
    <line
      x1={OUTER_RADIUS * UNIT_CIRCLE_XS[hour]}
      y1={OUTER_RADIUS * UNIT_CIRCLE_YS[hour]}
      x2={INNER_RADIUS * UNIT_CIRCLE_XS[hour]}
      y2={INNER_RADIUS * UNIT_CIRCLE_YS[hour]}
      strokeWidth="1.5"
      stroke={CLOCK_STROKE}
    />
  )
}
