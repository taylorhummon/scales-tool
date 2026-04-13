import { MAX_DEGREE, MIN_DEGREE } from "@/config";
import type { Motion } from "@/enumerations";
import { Degree } from "@/components/sliders/Degree";
import { useDerivedContext } from "@/contexts/DerivedContext";
import { buildClassString } from "@/utilities/css";
import { isBetweenInclusive } from "@/utilities/math";
import { getWillIncrementDegree, getWillDecrementDegree } from "@/utilities/motion";

import cssModule from "@/components/sliders/DegreeSlider.module.scss";


const EXTENDED_POSITIONS = [-4, -3, -2, -1, 0, 1, 2, 3, 4];


export function DegreeSlider(
): JSX.Element {
  const { musicalKey, motion } = useDerivedContext();
  const selectedDegree = musicalKey.degree;
  const positions = EXTENDED_POSITIONS.filter(
    (position) => isBetweenInclusive(selectedDegree - position, MIN_DEGREE, MAX_DEGREE)
  );
  return (
    <g
      className={buildClassString(cssModule, ["degree-slider"])}
    >
      <defs>
        <clipPath
          id="degree-slider-clip-path"
        >
          <rect
            x="-40"
            y="-105"
            width="80"
            height="210"
          />
        </clipPath>
      </defs>
      <g
        clipPath="url(#degree-slider-clip-path)"
      >
        <g
          className={getClassName(motion)}
        >
          {positions.map((position) => (
            <Degree
              key={position}
              degree={selectedDegree - position}
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
  const classNames = ["degree-slider-inner"];
  if (getWillIncrementDegree(motion)) {
    classNames.push("move-up");
  } else if (getWillDecrementDegree(motion)) {
    classNames.push("move-down");
  }
  return buildClassString(cssModule, classNames);
}
