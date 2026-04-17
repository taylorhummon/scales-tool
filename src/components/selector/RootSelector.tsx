import { MAX_DEGREE, MIN_DEGREE } from "@/config";
import { Root } from "@/components/selector/Root";
import { RootSegment } from "@/components/selector/RootSegment";
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
    (note) => isBetweenInclusive(note.value, MIN_DEGREE - 3, MAX_DEGREE + 3)
  );
  return (
    <g
      className={buildClassString(cssModule, ["root-selector"])}
    >
      <defs>
        <clipPath
          id="root-selector-clip-path"
        >
          <rect
            x="-25"
            y="-103"
            width="50"
            height="206"
          />
        </clipPath>
      </defs>
      <g
        clipPath="url(#root-selector-clip-path)"
      >
        <RootSegment />
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
