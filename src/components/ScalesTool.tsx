import { useState } from "react";

import { Motion } from "src/enumerations";
import type { State } from "src/types";
import {
  DEFAULT_LEFT_SLIDER_POSITION,
  DEFAULT_RIGHT_SLIDER_POSITION,
  MusicalKey
} from "src/classes/MusicalKey";
import { Canvas } from "src/components/Canvas";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/ScalesTool.module.css";


interface ScalesToolProps {
  leftSliderPosition?: number;
  rightSliderPosition?: number;
}


export default function ScalesTool({
  leftSliderPosition = DEFAULT_LEFT_SLIDER_POSITION,
  rightSliderPosition = DEFAULT_RIGHT_SLIDER_POSITION
}: ScalesToolProps): JSX.Element {
  const initialState: State = {
    motion: Motion.Still,
    leftSliderPosition,
    rightSliderPosition
  };
  const [state, setState] = useState(initialState);
  const musicalKey = new MusicalKey(state.leftSliderPosition, state.rightSliderPosition);

  return (
    <div
      className={buildClassString(cssModule, ["scales-tool"])}
    >
      <Canvas
        musicalKey={musicalKey}
        motion={state.motion}
        setState={setState}
      />
    </div>
  );
}
