import { Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import { DegreeSlider } from "@/components/sliders/DegreeSlider";
import { ModeLabels } from "@/components/sliders/ModeLabels";
import { ModeSlider } from "@/components/sliders/ModeSlider";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/sliders/Sliders.module.scss";


interface SlidersProps {
  musicalKey: MusicalKey;
  motion: Motion;
}

export function Sliders({
  musicalKey,
  motion
}: SlidersProps): JSX.Element {
  return (
    <g
      className={buildClassString(cssModule, ["sliders"])}
    >
      <ModeSlider
        musicalKey={musicalKey}
        motion={motion}
      />
      <DegreeSlider
        musicalKey={musicalKey}
        motion={motion}
      />
      <ModeLabels
        musicalKey={musicalKey}
        motion={motion}
      />
    </g>
  );
}
