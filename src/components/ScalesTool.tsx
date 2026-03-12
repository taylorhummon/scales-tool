import { useState } from "react";
import { State } from "src/types";
import Canvas from "src/components/Canvas";
import { buildClassString } from "src/utilities/css";
import { derivedFromState } from "src/utilities/derived";

import cssModule from "src/components/ScalesTool.module.css";


const INITIAL_ROOT_NUMBER = -2; // C
const INITIAL_MODE_NUMBER = -2; // Ionian
const MAX_KEY_DEGREE = 14;


export default function ScalesTool(): JSX.Element {
  const [rootNumber, setRootNumber] = useState(INITIAL_ROOT_NUMBER);
  const [modeNumber, setModeNumber] = useState(INITIAL_MODE_NUMBER);
  const state: State = {
    rootNumber,
    modeNumber
  }
  const derived = derivedFromState(state);

  function buildChangeRoot(
    isIncrement: boolean
  ): (() => void) | undefined {
    if (isIncrement) {
      if (derived.keyDegree >= MAX_KEY_DEGREE) return undefined;
      return () => {
        setRootNumber((rootNumber) => rootNumber + 1);
      }
    } else {
      if (derived.keyDegree <= -MAX_KEY_DEGREE) return undefined;
      return () => {
        setRootNumber((rootNumber) => rootNumber - 1);
      }
    }
  }

  function buildChangeMode(
    isIncrement: boolean
  ): (() => void) | undefined {
    if (isIncrement) {
      if (modeNumber >= 3) return undefined;
      if (derived.keyDegree <= -MAX_KEY_DEGREE) return undefined;
      return () => {
        setModeNumber((rootNumber) => rootNumber + 1);
      }
    } else {
      if (modeNumber <= -3) return undefined;
      if (derived.keyDegree >= MAX_KEY_DEGREE) return undefined;
      return () => {
        setModeNumber((rootNumber) => rootNumber - 1);
      }
    }
  }

  return (
    <div
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
