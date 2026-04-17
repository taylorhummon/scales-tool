import { Root } from "@/components/selector/Root";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassString } from "@/utilities/css";
import { isBetweenInclusive } from "@/utilities/math";
import type { Motion } from "@/utilities/motion";
import { getWillIncrementRoot, getWillDecrementRoot } from "@/utilities/motion";
import { EXTENDED_POSITIONS } from "@/utilities/fading";

import cssModule from "@/components/selector/RootSelector.module.scss";


export function RootSelector(
): JSX.Element {
  const { musicalKey, motion } = useDerivedContext();
  const notes = EXTENDED_POSITIONS.map(
    (position) => musicalKey.noteAt(position)
  ).filter(
    (note) => isBetweenInclusive(note.sharpsCount, -2, 2)
  );
  return (
    <g
      className={buildClassString(cssModule, ["root-selector"])}
    >
      <g
        clipPath="url(#root-selector-clip-path)"
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
  const classNames = ["root-selector-inner"];
  if (getWillIncrementRoot(motion)) {
    classNames.push("move-up");
  } else if (getWillDecrementRoot(motion)) {
    classNames.push("move-down");
  }
  return buildClassString(cssModule, classNames);
}
