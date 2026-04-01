import { Motion } from "src/enumerations";
import { MusicalKey } from "src/classes/MusicalKey";
import { SolfegeOnSlider } from "src/components/sliders/SolfegeOnSlider";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/sliders/ModeSlider.module.css";


interface ModeSliderProps {
  musicalKey: MusicalKey;
  motion: Motion;
}

export function ModeSlider({
  musicalKey,
  motion
}: ModeSliderProps): JSX.Element {
  return (
    <g
      className={buildClassString(cssModule, ["mode-slider"])}
    >
      <defs>
        <clipPath
          id="mode-slider-clip-path"
        >
          <rect
            x="-40"
            y="-118"
            width="80"
            height="236"
          />
        </clipPath>
      </defs>
      <g
        clipPath="url(#mode-slider-clip-path)"
      >
        <g
          className={className(motion)}
        >
          {musicalKey.extendedScale.map((note) => (
            <SolfegeOnSlider
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
  const classNames = ["mode-slider-inner"];
  if (
    motion === Motion.DecrementMode ||
    motion === Motion.DecrementBoth
  ) {
    classNames.push("move-down");
  } else if (
    motion === Motion.IncrementMode ||
    motion === Motion.IncrementBoth
  ) {
    classNames.push("move-up");
  }
  return buildClassString(cssModule, classNames);
}
