import { Degree } from "@/components/selector/Degree";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassName } from "@/utilities/css";
import type { Motion } from "@/utilities/motion";
import { getWillIncrementDegree, getWillDecrementDegree } from "@/utilities/motion";
import { EXTENDED_POSITIONS } from "@/utilities/fading";

import selectorCssModule from "@/components/selector/Selector.module.scss";


export function DegreeSelector(
): JSX.Element {
  const { musicalKey, motion } = useDerivedContext();
  const selectedDegree = musicalKey.degree;
  return (
    <g
      className={selectorCssModule["degree-selector"]}
    >
      <text
        className={selectorCssModule["label"]}
        x="0"
        y="-115"
        textAnchor="middle"
      >
        deg
      </text>
      <g
        clipPath="url(#degree-selector-clip-path)"
      >
        <g
          className={getClassName(motion)}
        >
          {EXTENDED_POSITIONS.map((position) => (
            <Degree
              key={position}
              degree={selectedDegree + position}
              position={position}
            />
          ))}
        </g>
      </g>
    </g>
  );
}

function getClassName(
  motion: Motion
): string {
  const classNames = ["selector-inner"];
  if (getWillIncrementDegree(motion)) {
    classNames.push("move-up");
  } else if (getWillDecrementDegree(motion)) {
    classNames.push("move-down");
  }
  return buildClassName(selectorCssModule, classNames);
}
