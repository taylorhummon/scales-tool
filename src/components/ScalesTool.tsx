import { useState, useRef, useEffect } from "react";

import { Motion } from "src/enumerations";
import type { State } from "src/types";
import { Clock } from "src/components/clock/Clock";
import { Grid } from "src/components/grid/Grid";
import { Slider } from "src/components/slider/Slider";
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
  const domNodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function animationEndHandler(): void {
      setState((state: State) => {
        if (state.motion === Motion.IncrementRoot) {
          return { ...state, motion: Motion.Still, root: state.root + 1 };
        }
        if (state.motion === Motion.DecrementRoot) {
          return { ...state, motion: Motion.Still, root: state.root - 1 };
        }
        if (state.motion === Motion.IncrementMode) {
          return { ...state, motion: Motion.Still, mode: state.mode + 1 };
        }
        if (state.motion === Motion.DecrementMode) {
          return { ...state, motion: Motion.Still, mode: state.mode - 1 };
        }
        return state;
      });
    }

    const domNode = domNodeRef.current;
    if (domNode) domNode.addEventListener("animationend", animationEndHandler, false);
    return () => {
      if (domNode) domNode.removeEventListener("animationend", animationEndHandler);
    };
  }, [setState]);

  return (
    <div
      className={buildClassString(cssModule, ["scales-tool"])}
      ref={domNodeRef}
    >
      <Clock
        derived={derived}
      />
      <Slider
        derived={derived}
      />
      <Grid
        derived={derived}
        setState={setState}
      />
    </div>
  );
}
