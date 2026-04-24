import { useDerivedContext } from "@/contexts/derived";
import { buildClassName } from "@/utilities/css";
import { getSelectorValueState } from "@/utilities/selector";
import { shortModeNameFromMode } from "@/utilities/mode";

import selectorValueCssModule from "@/components/selector/SelectorValue.module.scss";


interface ModeProps {
  mode: number;
  position: number;
  className?: string;
}

export function Mode({
  mode,
  position,
  className,
}: ModeProps): JSX.Element {
  const { musicalKey, nextMusicalKey } = useDerivedContext();
  const nextPosition = position - nextMusicalKey.mode + musicalKey.mode;
  return (
    <g className={getClassName(position, nextPosition, className)}>
      <text
        className={selectorValueCssModule["text"]}
        textAnchor="middle"
      >
        {shortModeNameFromMode(mode)}
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
    "mode",
    "selector-value",
    `position-${position}`,
    getSelectorValueState(position, nextPosition),
  ];
  const internal = buildClassName(selectorValueCssModule, classNames);
  return [internal, external].filter((className) => className !== undefined).join(" ");
}
