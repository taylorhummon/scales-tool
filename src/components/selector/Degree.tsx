import { useDerivedContext } from "@/contexts/derived";
import { buildClassString } from "@/utilities/css";
import { getFadingClassName } from "@/utilities/fading";

import cssModule from "@/components/selector/Selector.module.scss";


interface DegreeProps {
  degree: number;
  position: number;
}

export function Degree({
  degree,
  position
}: DegreeProps): JSX.Element {
  const { musicalKey, nextMusicalKey } = useDerivedContext();
  const nextPosition = position - nextMusicalKey.degree + musicalKey.degree;
  return (
    <g
      className={getClassName(position, nextPosition)}
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
  nextPosition: number
): string {
  const classNames = [
    "degree",
    "selector-value",
    `position-${position}`,
    getFadingClassName(position, nextPosition),
  ];
  return buildClassString(cssModule, classNames);
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
  return <>0</>;
}
