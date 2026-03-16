import { useState, useRef, useEffect } from "react";

import { Motion } from "src/enumerations";
import Canvas from "src/components/Canvas";
import { buildClassString } from "src/utilities/css";
import { derivedFromState } from "src/utilities/derived";

import cssModule from "src/components/ScalesTool.module.css";


const INITIAL_ROOT_NUMBER = -2; // C
const INITIAL_MODE_NUMBER = -2; // Ionian
const MAX_KEY_DEGREE = 14;


export default function ScalesTool(): JSX.Element {
  const domNodeRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    motion: Motion.Still,
    root: INITIAL_ROOT_NUMBER,
    mode: INITIAL_MODE_NUMBER
  });
  const derived = derivedFromState(state);

  function buildChangeRoot(
    isIncrement: boolean
  ): (() => void) | undefined {
    if (isIncrement) {
      if (derived.keyDegree >= MAX_KEY_DEGREE) return undefined;
      return () => {
        if (state.motion !== Motion.Still) return;
        setState((state) => {
          return { ...state, motion: Motion.IncrementRoot };
        });
      }
    } else {
      if (derived.keyDegree <= -MAX_KEY_DEGREE) return undefined;
      return () => {
        if (state.motion !== Motion.Still) return;
        setState((state) => {
          return { ...state, motion: Motion.DecrementRoot };
        });
      }
    }
  }

  function buildChangeMode(
    isIncrement: boolean
  ): (() => void) | undefined {
    if (isIncrement) {
      if (state.mode >= 3) return undefined;
      if (derived.keyDegree <= -MAX_KEY_DEGREE) return undefined;
      return () => {
        if (state.motion !== Motion.Still) return;
        setState((state) => {
          return { ...state, motion: Motion.IncrementMode };
        });
      }
    } else {
      if (state.mode <= -3) return undefined;
      if (derived.keyDegree >= MAX_KEY_DEGREE) return undefined;
      return () => {
        if (state.motion !== Motion.Still) return;
        setState((state) => {
          return { ...state, motion: Motion.DecrementMode };
        });
      };
    }
  }

  useEffect(() => {
    function animationEndHandler(): void {
      setState((state) => {
        if (state.motion === Motion.IncrementRoot) {
          const root = state.root + 1;
          return { ...state, motion: Motion.Still, root };
        }
        if (state.motion === Motion.DecrementRoot) {
          const root = state.root - 1;
          return { ...state, motion: Motion.Still, root };
        }
        if (state.motion === Motion.IncrementMode) {
          const mode = state.mode + 1;
          return { ...state, motion: Motion.Still, mode };
        }
        if (state.motion === Motion.DecrementMode) {
          const mode = state.mode - 1;
          return { ...state, motion: Motion.Still, mode };
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
        buildChangeRoot={buildChangeRoot}
        buildChangeMode={buildChangeMode}
      />
    </div>
  );
}
