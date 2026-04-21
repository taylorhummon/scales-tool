import { CENTRAL_BOX_STROKE, CENTRAL_BOX_FILL, CENTRAL_BOX_OVERLAP } from "@/utilities/color";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/selector/CentralBox.module.scss";


export function CentralBox(
): JSX.Element {
  return (
    <>
      <rect
        stroke="none"
        x="-53"
        y="-15"
        width="106"
        height="30"
        fill={CENTRAL_BOX_FILL}
      />
      <rect
        stroke="none"
        x="11"
        y="-15"
        width="30"
        height="30"
        fill={CENTRAL_BOX_OVERLAP}
      />
      <g
        strokeWidth="1.5"
        stroke={CENTRAL_BOX_STROKE}
        fill="none"
      >
        <polyline
          points="-53,9 -53,15 -45,15"
        />
        <polyline
          points="-53,-9 -53,-15 -45,-15"
        />
        <polyline
          points="53,9 53,15 45,15"
        />
        <polyline
          points="53,-9 53,-15 45,-15"
        />
      </g>
      <text
        className={buildClassString(cssModule, ["label"])}
        x="-26"
        y="-115"
        textAnchor="middle"
      >
        deg
      </text>
      <text
        className={buildClassString(cssModule, ["label"])}
        x="26"
        y="-115"
        textAnchor="middle"
      >
        root
      </text>
    </>
  );
}
