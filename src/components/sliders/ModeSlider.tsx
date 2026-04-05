import type { Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import { SolfegeOnSlider } from "@/components/sliders/SolfegeOnSlider";
import { buildClassString } from "@/utilities/css";
import { getWillDecrementMode, getWillIncrementMode } from "@/utilities/motion";

import cssModule from "@/components/sliders/ModeSlider.module.scss";


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
          className={getClassName(motion)}
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

function getClassName(
  motion: Motion
): string {
  const classNames = ["mode-slider-inner"];
  if (getWillDecrementMode(motion)) {
    classNames.push("move-down");
  } else if (getWillIncrementMode(motion)) {
    classNames.push("move-up");
  }
  return buildClassString(cssModule, classNames);
}
