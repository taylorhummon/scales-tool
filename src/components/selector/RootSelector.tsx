import { MAX_DEGREE, MIN_DEGREE } from "@/config";
import { Root } from "@/components/selector/Root";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassName } from "@/utilities/css";
import { isBetweenInclusive } from "@/utilities/math";
import type { Motion } from "@/utilities/motion";
import { getWillIncrementRoot, getWillDecrementRoot } from "@/utilities/motion";
import { EXTENDED_POSITIONS } from "@/utilities/fading";

import selectorCssModule from "@/components/selector/Selector.module.scss";


export function RootSelector(
): JSX.Element {
  const { musicalKey, motion } = useDerivedContext();
  const notes = EXTENDED_POSITIONS.map(
    (position) => musicalKey.noteAt(position)
  ).filter(
    (note) => isBetweenInclusive(note.value, MIN_DEGREE - 3, MAX_DEGREE + 3)
  );
  return (
    <g
      className={selectorCssModule["root-selector"]}
    >
      <text
        className={selectorCssModule["label"]}
        x="0"
        y="-115"
        textAnchor="middle"
      >
        root
      </text>
      <g
        clipPath="url(#selectors-clip-path)"
      >
        <g
          className={getClassName(motion)}
        >
          {notes.map((note) => (
            <Root
              key={note.position}
              note={note}
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
  if (getWillIncrementRoot(motion)) {
    classNames.push("move-up");
  } else if (getWillDecrementRoot(motion)) {
    classNames.push("move-down");
  }
  return buildClassName(selectorCssModule, classNames);
}
