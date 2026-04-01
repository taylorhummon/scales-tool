import { Motion } from "src/enumerations";
import { MusicalKey } from "src/classes/MusicalKey";
import { NoteOnSlider } from "src/components/sliders/NoteOnSlider";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/sliders/DegreeSlider.module.css";


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
          className={className(motion)}
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

function className(
  motion: Motion
): string {
  const classNames = ["degree-slider-inner"];
  if (
    motion === Motion.DecrementDegree ||
    motion === Motion.DecrementBoth
  ) {
    classNames.push("move-down");
  } else if (
    motion === Motion.IncrementDegree ||
    motion === Motion.IncrementBoth
  ) {
    classNames.push("move-up");
  }
  return buildClassString(cssModule, classNames);
}
