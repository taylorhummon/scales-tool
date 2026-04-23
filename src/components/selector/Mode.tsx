import { useDerivedContext } from "@/contexts/derived";
import { buildClassName } from "@/utilities/css";
import { getFadingClassName } from "@/utilities/fading";
import { shortModeNameFromMode } from "@/utilities/mode";

import selectorValueCssModule from "@/components/selector/SelectorValue.module.scss";


interface ModeProps {
  mode: number;
  position: number;
}

export function Mode({
  mode,
  position
}: ModeProps): JSX.Element {
  const { musicalKey, nextMusicalKey } = useDerivedContext();
  const nextPosition = position - nextMusicalKey.mode + musicalKey.mode;
  return (
    <g
      className={getClassName(position, nextPosition)}
    >
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
  nextPosition: number
): string {
  const classNames = [
    "mode",
    "selector-value",
    `position-${position}`,
    getFadingClassName(position, nextPosition),
  ];
  return buildClassName(selectorValueCssModule, classNames);
}
