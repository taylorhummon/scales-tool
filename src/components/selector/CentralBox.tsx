import { CENTRAL_BOX_STROKE, CENTRAL_BOX_FILL } from "@/utilities/color";


const width = 156;
const height = 30;
const decorationWidth = 8;
const decorationHeight = 6;
const right = width / 2;
const left = - right;
const bottom = height / 2;
const top = - bottom;

export function CentralBox(
): JSX.Element {
  return (
    <>
      <rect
        stroke="none"
        x={left}
        y={top}
        width={width}
        height={height}
        fill={CENTRAL_BOX_FILL}
      />
      <g
        strokeWidth="1.5"
        stroke={CENTRAL_BOX_STROKE}
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
