import { HIGHLIGHTER_STROKE, HIGHLIGHTER_FILL } from "@/utilities/color";


const width = 104;
const height = 30;
const decorationWidth = 8;
const decorationHeight = 6;
const right = width / 2;
const left = - right;
const bottom = height / 2;
const top = - bottom;


export function Highlighter(
): JSX.Element {
  return (
    <>
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
          points={`${left},${bottom - decorationHeight} ${left},${bottom} ${left + decorationWidth},${bottom}`}
        />
        <polyline
          points={`${left},${top + decorationHeight} ${left},${top} ${left + decorationWidth},${top}`}
        />
        <polyline
          points={`${right},${bottom - decorationHeight} ${right},${bottom} ${right - decorationWidth},${bottom}`}
        />
        <polyline
          points={`${right},${top + decorationHeight} ${right},${top} ${right - decorationWidth},${top}`}
        />
      </g>
    </>
  );
}
