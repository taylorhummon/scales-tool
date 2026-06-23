import { HIGHLIGHTER_STROKE, HIGHLIGHTER_FILL } from "@shared/utilities/color"
import { buildClassName } from "@shared/utilities/css"

import sliderHighlighterCssModule from "./SliderHighlighter.module.scss"


interface SliderHighlighterParameters {
  currentValue: number,
  nextValue: number,
}

export function SliderHighlighter({
  currentValue,
  nextValue,
}: SliderHighlighterParameters): React.ReactNode {
  return (
    <g className={getClassName(currentValue, nextValue)}>
      <polygon
        points={"-25,15 -34,0 -25,-15 25,-15 34,0 25,15"}
        fill={HIGHLIGHTER_FILL}
      />
      <g
        strokeWidth="1.5"
        stroke={HIGHLIGHTER_STROKE}
        fill="none"
      >
        <polyline
          points={"25,15 34,0 25,-15"}
        />
        <polyline
          points={"-25,15 -34,0 -25,-15"}
        />
      </g>
    </g>
  )
}

function getClassName(
  currentValue: number,
  nextValue: number,
): string {
  const classNames = [ "highlighter" ]
  if (nextValue === currentValue) {
    classNames.push(`position-${currentValue}`)
  } else {
    classNames.push(`move-from-${currentValue}-to-${nextValue}`)
  }
  return buildClassName(sliderHighlighterCssModule, classNames)
}
