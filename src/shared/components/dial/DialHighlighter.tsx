import { HIGHLIGHTER_STROKE, HIGHLIGHTER_FILL } from "@shared/utilities/color"


const DECORATION_WIDTH = 8
const DECORATION_HEIGHT = 6


interface DialHighlighterParams {
  width: number,
  height: number,
  className?: string,
}

export function DialHighlighter({
  width,
  height,
  className,
}: DialHighlighterParams): React.ReactNode {
  const right = width / 2
  const left = - right
  const bottom = height / 2
  const top = - bottom

  return (
    <g className={className}>
      <rect
        x={left}
        y={top}
        width={width}
        height={height}
        stroke="none"
        fill={HIGHLIGHTER_FILL}
      />
      <g
        strokeWidth="1.5"
        stroke={HIGHLIGHTER_STROKE}
        fill="none"
      >
        <polyline
          points={`${left},${bottom - DECORATION_HEIGHT} ${left},${bottom} ${left + DECORATION_WIDTH},${bottom}`}
        />
        <polyline
          points={`${left},${top + DECORATION_HEIGHT} ${left},${top} ${left + DECORATION_WIDTH},${top}`}
        />
        <polyline
          points={`${right},${bottom - DECORATION_HEIGHT} ${right},${bottom} ${right - DECORATION_WIDTH},${bottom}`}
        />
        <polyline
          points={`${right},${top + DECORATION_HEIGHT} ${right},${top} ${right - DECORATION_WIDTH},${top}`}
        />
      </g>
    </g>
  )
}
