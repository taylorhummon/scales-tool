import { Tick } from "@shared/components/clock/Tick"
import { buildIndicesArray } from "@shared/utilities/array"
import { CLOCK_STROKE } from "@shared/utilities/color"


export function Face(
): React.ReactNode {
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
        r="110"
        strokeWidth="2"
        stroke={CLOCK_STROKE}
        fill="none"
      />
    </>
  )
}
