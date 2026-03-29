import { useState } from "react";

import { Motion } from "src/enumerations";
import type { State } from "src/types";
import { DEFAULT_MODE, DEFAULT_DEGREE, MusicalKey } from "src/classes/MusicalKey";
import { Canvas } from "src/components/Canvas";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/ScalesTool.module.css";


interface ScalesToolProps {
  degree?: number;
  mode?: number;
}

export default function ScalesTool({
  degree = DEFAULT_DEGREE,
  mode = DEFAULT_MODE
}: ScalesToolProps): JSX.Element {
  const initialState: State = { motion: Motion.Still, mode, degree };
  const [state, setState] = useState(initialState);
  const musicalKey = new MusicalKey(state.degree, state.mode);

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
