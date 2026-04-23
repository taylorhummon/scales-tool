import { CENTRAL_BOX_STROKE, CENTRAL_BOX_FILL } from "@/utilities/color";


interface CentralBoxProps {
  width: number;
  height: number;
  decorationWidth: number;
  decorationHeight: number;
}

export function CentralBox({
  width,
  height,
  decorationWidth,
  decorationHeight
}: CentralBoxProps): JSX.Element {
  const right = width / 2;
  const left = - right;
  const bottom = height / 2;
  const top = - bottom;
  const topLeftDecoration = `${left},${top + decorationHeight} ${left},${top} ${left + decorationWidth},${top}`;
  const topRightDecoration = `${right},${top + decorationHeight} ${right},${top} ${right - decorationWidth},${top}`;
  const bottomLeftDecoration = `${left},${bottom - decorationHeight} ${left},${bottom} ${left + decorationWidth},${bottom}`;
  const bottomRightDecoration = `${right},${bottom - decorationHeight} ${right},${bottom} ${right - decorationWidth},${bottom}`;

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
          points={bottomLeftDecoration}
        />
        <polyline
          points={topLeftDecoration}
        />
        <polyline
          points={bottomRightDecoration}
        />
        <polyline
          points={topRightDecoration}
        />
      </g>
    </>
  );
}
