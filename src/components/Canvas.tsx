import type { Dispatch, SetStateAction } from "react";

import type { Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import { Clock } from "@/components/clock/Clock";
import { Sliders } from "@/components/sliders/Sliders";
import { buildClassString } from "@/utilities/css";
import type { State } from "@/utilities/state";

import cssModule from "@/components/Canvas.module.scss";


interface CanvasProps {
  musicalKey: MusicalKey;
  motion: Motion;
  setState: Dispatch<SetStateAction<State>>;
}


export function Canvas({
  musicalKey,
  motion,
  setState
}: CanvasProps): JSX.Element {
  return (
    <svg
      className={buildClassString(cssModule, ["canvas"])}
      viewBox="0 -220 550 440"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Clock
        musicalKey={musicalKey}
        motion={motion}
      />
      <Sliders
        musicalKey={musicalKey}
        motion={motion}
        setState={setState}
      />
    </svg>
  );
}
