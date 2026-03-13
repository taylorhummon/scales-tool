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
    rootNumber: INITIAL_ROOT_NUMBER,
    modeNumber: INITIAL_MODE_NUMBER
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
      if (state.modeNumber >= 3) return undefined;
      if (derived.keyDegree <= -MAX_KEY_DEGREE) return undefined;
      return () => {
        if (state.motion !== Motion.Still) return;
        setState((state) => {
          const modeNumber = state.modeNumber + 1;
          return { ...state, modeNumber };
        });
      }
    } else {
      if (state.modeNumber <= -3) return undefined;
      if (derived.keyDegree >= MAX_KEY_DEGREE) return undefined;
      return () => {
        if (state.motion !== Motion.Still) return;
        setState((state) => {
          const modeNumber = state.modeNumber - 1;
          return { ...state, modeNumber };
        });
      };
    }
  }

  useEffect(() => {
    function animationEndHandler(): void {
      setState((state) => {
        if (state.motion === Motion.IncrementRoot) {
          const motion = Motion.Still;
          const rootNumber = state.rootNumber + 1;
          return { ...state, motion, rootNumber };
        }
        if (state.motion === Motion.DecrementRoot) {
          const motion = Motion.Still;
          const rootNumber = state.rootNumber - 1;
          return { ...state, motion, rootNumber };
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
