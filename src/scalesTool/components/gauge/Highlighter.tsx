import { HIGHLIGHTER_STROKE, HIGHLIGHTER_FILL } from "@scalesTool/utilities/color"
import { buildClassName } from "@scalesTool/utilities/css"

import highlighterCssModule from "./Highlighter.module.scss"


interface HighlighterParameters {
  currentMode: number,
  nextMode: number,
}

export function Highlighter({
  currentMode,
  nextMode,
}: HighlighterParameters): React.ReactNode {
  return (
    <g className={getClassName(currentMode, nextMode)}>
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
  currentMode: number,
  nextMode: number,
): string {
  const classNames = [ "highlighter" ]
  if (nextMode === currentMode) {
    classNames.push(`position-${currentMode}`)
  } else {
    classNames.push(`move-from-${currentMode}-to-${nextMode}`)
  }
  return buildClassName(highlighterCssModule, classNames)
}
