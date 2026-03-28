import { useState } from "react";

import { Motion } from "src/enumerations";
import type { State } from "src/types";
import { DEFAULT_MODE, DEFAULT_DEGREE, MusicalKey } from "src/classes/MusicalKey";
import { Canvas } from "src/components/Canvas";
import { KeySummary } from "src/components/KeySummary";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/ScalesTool.module.css";


interface ScalesToolProps {
  mode?: number;
  degree?: number;
}

export default function ScalesTool({
  mode = DEFAULT_MODE,
  degree = DEFAULT_DEGREE
}: ScalesToolProps): JSX.Element {
  const initialState: State = { motion: Motion.Still, mode, degree };
  const [state, setState] = useState(initialState);
  const musicalKey = new MusicalKey(state.mode, state.degree);

  return (
    <div
      className={buildClassString(cssModule, ["scales-tool"])}
    >
      <Canvas
        musicalKey={musicalKey}
        motion={state.motion}
        setState={setState}
      />
      <KeySummary
        musicalKey={musicalKey}
        isEnabled={true}
      />
    </div>
  );
}
