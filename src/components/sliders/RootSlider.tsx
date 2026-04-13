import { Root } from "@/components/sliders/Root";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassString } from "@/utilities/css";
import { isBetweenInclusive } from "@/utilities/math";
import type { Motion } from "@/utilities/motion";
import { getWillIncrementRoot, getWillDecrementRoot } from "@/utilities/motion";


import cssModule from "@/components/sliders/RootSlider.module.scss";


export function RootSlider(
): JSX.Element {
  const { musicalKey, motion } = useDerivedContext();
  const firstPosition = musicalKey.noteInFirstPosition.position;
  const lastPosition = musicalKey.noteInLastPosition.position;
  const notes = musicalKey.extendedScale.filter(
    (note) => isBetweenInclusive(note.position, -4, 4)
  );
  return (
    <g
      className={buildClassString(cssModule, ["root-slider"])}
    >
      <defs>
        <clipPath
          id="root-slider-clip-path"
        >
          <rect
            x="-25"
            y="-105"
            width="50"
            height="210"
          />
        </clipPath>
      </defs>
      <g
        clipPath="url(#root-slider-clip-path)"
      >
        <g
          className={getClassName(motion)}
        >
          {notes.map((note) => (
            <Root
              key={note.position}
              note={note}
              firstPosition={firstPosition}
              lastPosition={lastPosition}
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
  const classNames = ["root-slider-inner"];
  if (getWillIncrementRoot(motion)) {
    classNames.push("move-up");
  } else if (getWillDecrementRoot(motion)) {
    classNames.push("move-down");
  }
  return buildClassString(cssModule, classNames);
}
