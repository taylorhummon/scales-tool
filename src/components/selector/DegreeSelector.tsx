import { MAX_DEGREE, MIN_DEGREE } from "@/config";
import { Degree } from "@/components/selector/Degree";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassName } from "@/utilities/css";
import { isBetweenInclusive } from "@/utilities/math";
import type { Motion } from "@/utilities/motion";
import { getWillIncrementDegree, getWillDecrementDegree } from "@/utilities/motion";
import { EXTENDED_POSITIONS } from "@/utilities/selector";

import selectorCssModule from "@/components/selector/Selector.module.scss";


export function DegreeSelector(
): JSX.Element {
  const { musicalKey, motion } = useDerivedContext();
  const selectedDegree = musicalKey.degree;
  const positions = EXTENDED_POSITIONS.filter(
    (position) => isBetweenInclusive(selectedDegree + position, MIN_DEGREE, MAX_DEGREE)
  );
  return (
    <g className={selectorCssModule["degree-selector"]}>
      <text className={selectorCssModule["label"]}>
        Deg
      </text>
      <g clipPath="url(#selectors-clip-path)">
        <g className={getClassName(motion)}>
          {positions.map((position) => (
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
  motion: Motion,
): string {
  const classNames = ["selector-inner"];
  if (getWillIncrementDegree(motion)) {
    classNames.push("move-up");
  } else if (getWillDecrementDegree(motion)) {
    classNames.push("move-down");
  }
  return buildClassName(selectorCssModule, classNames);
}
