import { useDerivedContext } from "@/contexts/derived";
import { buildClassName } from "@/utilities/css";
import { getSelectorValueState } from "@/utilities/selector";

import selectorValueCssModule from "@/components/selector/SelectorValue.module.scss";


interface DegreeProps {
  degree: number;
  position: number;
  className?: string;
}

export function Degree({
  degree,
  position,
  className,
}: DegreeProps): JSX.Element {
  const { musicalKey, nextMusicalKey } = useDerivedContext();
  const nextPosition = position - nextMusicalKey.degree + musicalKey.degree;
  return (
    <g className={getClassName(position, nextPosition, className)}>
      <text
        className={selectorValueCssModule["text"]}
        textAnchor="middle"
      >
        {getFancyDegree(degree)}
      </text>
    </g>
  );
}

function getClassName(
  position: number,
  nextPosition: number,
  external: string | undefined,
): string {
  const classNames = [
    "degree",
    "selector-value",
    `position-${position}`,
    getSelectorValueState(position, nextPosition),
  ];
  const internal = buildClassName(selectorValueCssModule, classNames);
  return [internal, external].filter((className) => className !== undefined).join(" ");
}

function getFancyDegree(
  degree: number,
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
