import type { Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import { NoteOnSlider } from "@/components/sliders/NoteOnSlider";
import { buildClassString } from "@/utilities/css";
import { getWillDecrementDegree, getWillIncrementDegree } from "@/utilities/motion";

import cssModule from "@/components/sliders/DegreeSlider.module.scss";


interface DegreeSliderProps {
  musicalKey: MusicalKey;
  motion: Motion;
}

export function DegreeSlider({
  musicalKey,
  motion
}: DegreeSliderProps): JSX.Element {
  return (
    <g
      className={buildClassString(cssModule, ["degree-slider"])}
    >
      <defs>
        <clipPath
          id="degree-slider-clip-path"
        >
          <rect
            x="-25"
            y="-118"
            width="50"
            height="236"
          />
        </clipPath>
      </defs>
      <g
        clipPath="url(#degree-slider-clip-path)"
      >
        <g
          className={getClassName(motion)}
        >
          {musicalKey.extendedScale.map((note) => (
            <NoteOnSlider
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
  const classNames = ["degree-slider-inner"];
  if (getWillDecrementDegree(motion)) {
    classNames.push("move-down");
  } else if (getWillIncrementDegree(motion)) {
    classNames.push("move-up");
  }
  return buildClassString(cssModule, classNames);
}
