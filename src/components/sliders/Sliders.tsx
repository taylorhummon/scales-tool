import type { Dispatch, SetStateAction } from "react";

import type { AnimationType, Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import { DegreeSlider } from "@/components/sliders/DegreeSlider";
import { RootSlider } from "@/components/sliders/RootSlider";
import { SelectionBox } from "@/components/sliders/SelectionBox";
import { SliderButtons } from "@/components/sliders/SliderButtons";
import { buildClassString } from "@/utilities/css";
import type { State } from "@/utilities/state";

import cssModule from "@/components/sliders/Sliders.module.scss";


interface SlidersProps {
  musicalKey: MusicalKey;
  animationType: AnimationType;
  motion: Motion;
  setState: Dispatch<SetStateAction<State>>;
}

export function Sliders({
  musicalKey,
  animationType,
  motion,
  setState
}: SlidersProps): JSX.Element {
  return (
    <g
      className={buildClassString(cssModule, ["sliders"])}
    >
      <SliderButtons
        musicalKey={musicalKey}
        animationType={animationType}
        motion={motion}
        setState={setState}
      />
      <SelectionBox />
      <DegreeSlider
        musicalKey={musicalKey}
        motion={motion}
      />
      <RootSlider
        musicalKey={musicalKey}
        motion={motion}
      />
    </g>
  );
}
