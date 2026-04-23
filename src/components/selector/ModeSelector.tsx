import { Mode } from "@/components/selector/Mode";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassName } from "@/utilities/css";
import { isBetweenInclusive } from "@/utilities/math";
import { MAX_MODE, MIN_MODE } from "@/utilities/mode";
import type { Motion } from "@/utilities/motion";
import { getWillIncrementMode, getWillDecrementMode } from "@/utilities/motion";
import { EXTENDED_POSITIONS } from "@/utilities/fading";

import selectorCssModule from "@/components/selector/Selector.module.scss";


export function ModeSelector(
): JSX.Element {
  const { musicalKey, motion } = useDerivedContext();
  const selectedMode = musicalKey.mode;
  const positions = EXTENDED_POSITIONS.filter(
    (position) => isBetweenInclusive(selectedMode + position, MIN_MODE, MAX_MODE)
  );
  return (
    <g
      className={selectorCssModule["mode-selector"]}
    >
      <text
        className={selectorCssModule["label"]}
        x="0"
        y="-115"
        textAnchor="middle"
      >
        mode
      </text>
      <g
        clipPath="url(#selectors-clip-path)"
      >
        <g
          className={getClassName(motion)}
        >
          {positions.map((position) => (
            <Mode
              key={position}
              mode={selectedMode + position}
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
  const classNames = ["selector-inner"];
  if (getWillIncrementMode(motion)) {
    classNames.push("move-up");
  } else if (getWillDecrementMode(motion)) {
    classNames.push("move-down");
  }
  return buildClassName(selectorCssModule, classNames);
}
