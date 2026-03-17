import { useState, useRef, useEffect } from "react";

import { Motion } from "src/enumerations";
import Canvas from "src/components/Canvas";
import Grid from "src/components/Grid";
import { buildClassString } from "src/utilities/css";
import { derivedFromState } from "src/utilities/derived";

import cssModule from "src/components/ScalesTool.module.css";


const INITIAL_STATE = {
  motion: Motion.Still,
  root: -2,   // C
  mode: -2    // Ionian
}


export default function ScalesTool(): JSX.Element {
  const domNodeRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(INITIAL_STATE);
  const derived = derivedFromState(state);

  useEffect(() => {
    function animationEndHandler(): void {
      setState((state) => {
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
  }, []);

  return (
    <div
      ref={domNodeRef}
      className={buildClassString(cssModule, ["scales-tool"])}
    >
      <Canvas
        derived={derived}
      />
      <Grid
        derived={derived}
        setState={setState}
      />
    </div>
  );
}
