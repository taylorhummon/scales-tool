import { useDerivedContext } from "@/contexts/derived";
import { HIGHLIGHTER_STROKE, HIGHLIGHTER_FILL } from "@/utilities/color";
import { buildClassName } from "@/utilities/css";

import highlighterCssModule from "@/components/gauge/Highlighter.module.scss";


export function Highlighter(
): JSX.Element {
  const { musicalKey, nextMusicalKey } = useDerivedContext();

  return (
    <g
      className={getClassName(musicalKey.mode, nextMusicalKey.mode)}
    >
      <polygon
        points={"-25,15 -34,0 -25,-15 25,-15 34,0 25,15"}
        fill={HIGHLIGHTER_FILL}
      />
      <g
        strokeWidth="1.5"
        stroke={HIGHLIGHTER_STROKE}
        fill="none"
      >
        <polyline
          points={"25,15 34,0 25,-15"}
        />
        <polyline
          points={"-25,15 -34,0 -25,-15"}
        />
      </g>
    </g>
  );
}

function getClassName(
  currentMode: number,
  nextMode: number,
): string {
  const classNames = ["highlighter"];
  if (nextMode === currentMode) {
    classNames.push(`position-${currentMode}`);
  } else {
    classNames.push(`move-from-${currentMode}-to-${nextMode}`);
  }
  return buildClassName(highlighterCssModule, classNames);
}
