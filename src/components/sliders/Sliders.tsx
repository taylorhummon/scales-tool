import type { Dispatch, SetStateAction } from "react";

import { Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import { Button } from "@/components/sliders/Button";
import { DegreeSlider } from "@/components/sliders/DegreeSlider";
import { ModeLabels } from "@/components/sliders/ModeLabels";
import { ModeSlider } from "@/components/sliders/ModeSlider";
import { buildClassString } from "@/utilities/css";
import type { State } from "@/utilities/state";

import cssModule from "@/components/sliders/Sliders.module.css";


interface SlidersProps {
  musicalKey: MusicalKey;
  motion: Motion;
  setState: Dispatch<SetStateAction<State>>;
}

export function Sliders({
  musicalKey,
  motion,
  setState
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
      <ModeLabels />
      <Button
        musicalKey={musicalKey}
        motion={motion}
        onClickMotion={Motion.DecrementDegree}
        setState={setState}
        dataTestid="decrement-degree"
      />
      <Button
        musicalKey={musicalKey}
        motion={motion}
        onClickMotion={Motion.IncrementDegree}
        setState={setState}
        dataTestid="increment-degree"
      />
      <Button
        musicalKey={musicalKey}
        motion={motion}
        onClickMotion={Motion.DecrementMode}
        setState={setState}
        dataTestid="decrement-mode"
      />
      <Button
        musicalKey={musicalKey}
        motion={motion}
        onClickMotion={Motion.IncrementMode}
        setState={setState}
        dataTestid="increment-mode"
      />
      <Button
        musicalKey={musicalKey}
        motion={motion}
        onClickMotion={Motion.DecrementBoth}
        setState={setState}
        dataTestid="decrement-both"
      />
      <Button
        musicalKey={musicalKey}
        motion={motion}
        onClickMotion={Motion.IncrementBoth}
        setState={setState}
        dataTestid="increment-both"
      />
    </g>
  );
}
