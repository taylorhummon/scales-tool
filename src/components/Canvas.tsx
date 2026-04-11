import type { Dispatch, SetStateAction } from "react";

import type { AnimationType, Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import { Clock } from "@/components/clock/Clock";
import { Sliders } from "@/components/sliders/Sliders";
import { buildClassString } from "@/utilities/css";
import type { State } from "@/utilities/state";

import cssModule from "@/components/Canvas.module.scss";


interface CanvasProps {
  musicalKey: MusicalKey;
  motion: Motion;
  animationType: AnimationType;
  isUsingSolfege: boolean;
  setState: Dispatch<SetStateAction<State>>;
}


export function Canvas({
  musicalKey,
  motion,
  animationType,
  isUsingSolfege,
  setState
}: CanvasProps): JSX.Element {
  return (
    <svg
      className={buildClassString(cssModule, ["canvas"])}
      viewBox="0 -210 500 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Clock
        musicalKey={musicalKey}
        animationType={animationType}
        motion={motion}
        isUsingSolfege={isUsingSolfege}
      />
      <Sliders
        musicalKey={musicalKey}
        animationType={animationType}
        motion={motion}
        setState={setState}
      />
    </svg>
  );
}
