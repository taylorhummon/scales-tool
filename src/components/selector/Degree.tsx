import { useDerivedContext } from "@/contexts/derived";
import { buildClassString } from "@/utilities/css";
import type { Motion } from "@/utilities/motion";
import { getWillIncrementDegree, getWillDecrementDegree } from "@/utilities/motion";

import cssModule from "@/components/selector/Degree.module.scss";


interface DegreeProps {
  degree: number;
  position: number;
}

export function Degree({
  degree,
  position
}: DegreeProps): JSX.Element {
  const { motion } = useDerivedContext();
  return (
    <g
      className={getClassName(position, motion)}
    >
      <text
        className={buildClassString(cssModule, ["text"])}
      >
        {getFancyDegree(degree)}
      </text>
    </g>
  );
}

function getClassName(
  position: number,
  motion: Motion
): string {
  const classNames = ["degree", `position-${position}`];
  classNames.push(getFadingClassName(position, motion));
  return buildClassString(cssModule, classNames);
}

function getFadingClassName(
  position: number,
  motion: Motion
): string {
  if (position === 0) {
    if (getWillIncrementDegree(motion) || getWillDecrementDegree(motion)) {
      return "fade-from-selected-to-unselected";
    } else {
      return "selected";
    }
  }
  if (
    (position === 1 && getWillIncrementDegree(motion)) ||
    (position === -1 && getWillDecrementDegree(motion))
  ) {
    return "fade-from-unselected-to-selected";
  }
  return "unselected";
}

function getFancyDegree(
  degree: number
): JSX.Element {
  const count = Math.abs(degree);
  if (degree > 0) {
    return <>{count}♯</>;
  }
  if (degree < 0) {
    return <>{count}♭</>;
  }
  return <>0&nbsp;</>;
}
