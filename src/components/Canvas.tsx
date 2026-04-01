import type { Dispatch, SetStateAction } from "react";

import { Motion } from "src/enumerations";
import { MusicalKey } from "src/classes/MusicalKey";
import { Clock } from "src/components/clock/Clock";
import { Sliders } from "src/components/sliders/Sliders";
import { buildClassString } from "src/utilities/css";
import { State } from "src/utilities/state";

import cssModule from "src/components/Canvas.module.css";


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
