import { CENTRAL_BOX_STROKE, CENTRAL_BOX_FILL } from "@/utilities/color";


export function CentralBox(
): JSX.Element {
  return (
    <>
      <rect
        stroke="none"
        x="-55"
        y="-15"
        width="110"
        height="30"
        fill={CENTRAL_BOX_FILL}
      />
      <g
        strokeWidth="1.5"
        stroke={CENTRAL_BOX_STROKE}
        fill="none"
      >
        <polyline
          points="-55,9 -55,15 -47,15"
        />
        <polyline
          points="-55,-9 -55,-15 -47,-15"
        />
        <polyline
          points="55,9 55,15 47,15"
        />
        <polyline
          points="55,-9 55,-15 47,-15"
        />
      </g>
    </>
  );
}
