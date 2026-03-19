import { useState } from "react";

import { Motion } from "src/enumerations";
import type { State } from "src/types";
import { Canvas } from "src/components/Canvas";
import { Grid } from "src/components/Grid";
import { buildClassString } from "src/utilities/css";
import { derivedFromState } from "src/utilities/derived";

import cssModule from "src/components/ScalesTool.module.css";


export default function ScalesTool({
  root = -2,   // C
  mode = -2    // Ionian
}): JSX.Element {
  const initialState: State = { motion: Motion.Still, root, mode };
  const [state, setState] = useState(initialState);
  const derived = derivedFromState(state);

  return (
    <div
      className={buildClassString(cssModule, ["scales-tool"])}
    >
      <Canvas
        derived={derived}
        setState={setState}
      />
      <Grid
        derived={derived}
        setState={setState}
      />
    </div>
  );
}
