import { useState } from "react";

import { Motion } from "src/enumerations";
import type { State } from "src/types";
import { MusicalKey, DEFAULT_DO_POSITION, DEFAULT_KEY_DEGREE } from "src/classes/MusicalKey";
import { Canvas } from "src/components/Canvas";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/ScalesTool.module.css";


interface ScalesToolProps {
  doPosition?: number;
  keyDegree?: number;
}


export default function ScalesTool({
  doPosition = DEFAULT_DO_POSITION,
  keyDegree = DEFAULT_KEY_DEGREE
}: ScalesToolProps): JSX.Element {
  const initialState: State = {
    motion: Motion.Still,
    doPosition,
    keyDegree
  };
  const [state, setState] = useState(initialState);
  const musicalKey = new MusicalKey(state.doPosition, state.keyDegree);

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
