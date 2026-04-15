import { SELECTION_BOX_STROKE_COLOR, SELECTION_BOX_FILL_COLOR } from "@/utilities/color";


export function CentralBox(
): JSX.Element {
  return (
    <>
      <rect
        stroke="none"
        x="-50"
        y="-15"
        width="100"
        height="30"
        fill={SELECTION_BOX_FILL_COLOR}
      />
      <g
        strokeWidth="1.5"
        stroke={SELECTION_BOX_STROKE_COLOR}
        fill="none"
      >
        <polyline
          points="-50,9 -50,15 -42,15"
        />
        <polyline
          points="-50,-9 -50,-15 -42,-15"
        />
        <polyline
          points="50,9 50,15 42,15"
        />
        <polyline
          points="50,-9 50,-15 42,-15"
        />
      </g>
    </>
  );
}
