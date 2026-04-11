import type { Dispatch, SetStateAction } from "react";

import { AnimationType, Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import { SliderButton } from "@/components/sliders/SliderButton";
import type { State } from "@/utilities/state";


interface SliderButtonsProps {
  musicalKey: MusicalKey;
  animationType: AnimationType;
  motion: Motion;
  setState: Dispatch<SetStateAction<State>>;
}

export function SliderButtons({
  musicalKey,
  animationType,
  motion,
  setState
}: SliderButtonsProps): JSX.Element {

  return (
    <>
      <SliderButton
        musicalKey={musicalKey}
        animationType={animationType}
        motion={motion}
        onClickMotion={Motion.IncrementBoth}
        setState={setState}
        dataTestid="increment-both"
      />
      <SliderButton
        musicalKey={musicalKey}
        animationType={animationType}
        motion={motion}
        onClickMotion={Motion.IncrementDegree}
        setState={setState}
        dataTestid="increment-degree"
      />
      <SliderButton
        musicalKey={musicalKey}
        animationType={animationType}
        motion={motion}
        onClickMotion={Motion.IncrementRoot}
        setState={setState}
        dataTestid="increment-root"
      />
      <SliderButton
        musicalKey={musicalKey}
        animationType={animationType}
        motion={motion}
        onClickMotion={Motion.DecrementDegree}
        setState={setState}
        dataTestid="decrement-degree"
      />
      <SliderButton
        musicalKey={musicalKey}
        animationType={animationType}
        motion={motion}
        onClickMotion={Motion.DecrementRoot}
        setState={setState}
        dataTestid="decrement-root"
      />
      <SliderButton
        musicalKey={musicalKey}
        animationType={animationType}
        motion={motion}
        onClickMotion={Motion.DecrementBoth}
        setState={setState}
        dataTestid="decrement-both"
      />
    </>
  );
}
