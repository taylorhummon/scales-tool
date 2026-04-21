import { useDerivedContext } from "@/contexts/derived";
import { buildClassName } from "@/utilities/css";
import { getFadingClassName } from "@/utilities/fading";

import selectorValueCssModule from "@/components/selector/SelectorValue.module.scss";


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
        className={selectorValueCssModule["text"]}
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
  return buildClassName(selectorValueCssModule, classNames);
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
