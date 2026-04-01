import type { Dispatch, SetStateAction } from "react";

import { Motion } from "src/enumerations";
import { MusicalKey } from "src/classes/MusicalKey";
import { Button } from "src/components/sliders/Button";
import { DegreeSlider } from "src/components/sliders/DegreeSlider";
import { ModeLabels } from "src/components/sliders/ModeLabels";
import { ModeSlider } from "src/components/sliders/ModeSlider";
import { buildClassString } from "src/utilities/css";
import type { State } from "src/utilities/state";

import cssModule from "src/components/sliders/Sliders.module.css";


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
      <DegreeSlider
        musicalKey={musicalKey}
        motion={motion}
      />
      <ModeSlider
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
