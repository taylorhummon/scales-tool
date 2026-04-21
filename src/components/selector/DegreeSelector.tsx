import { MAX_DEGREE, MIN_DEGREE } from "@/config";
import { Degree } from "@/components/selector/Degree";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassString } from "@/utilities/css";
import { isBetweenInclusive } from "@/utilities/math";
import type { Motion } from "@/utilities/motion";
import { getWillIncrementDegree, getWillDecrementDegree } from "@/utilities/motion";
import { EXTENDED_POSITIONS } from "@/utilities/fading";

import cssModule from "@/components/selector/DegreeSelector.module.scss";


export function DegreeSelector(
): JSX.Element {
  const { musicalKey, motion } = useDerivedContext();
  const selectedDegree = musicalKey.degree;
  const positions = EXTENDED_POSITIONS.filter(
    (position) => isBetweenInclusive(selectedDegree + position, MIN_DEGREE, MAX_DEGREE)
  );
  return (
    <g
      className={buildClassString(cssModule, ["degree-selector"])}
    >
      <g
        clipPath="url(#degree-selector-clip-path)"
      >
        <g
          className={getClassName(motion)}
        >
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
  motion: Motion
): string {
  const classNames = ["degree-selector-inner"];
  if (getWillIncrementDegree(motion)) {
    classNames.push("move-up");
  } else if (getWillDecrementDegree(motion)) {
    classNames.push("move-down");
  }
  return buildClassString(cssModule, classNames);
}
