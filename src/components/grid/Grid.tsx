import { Dispatch, SetStateAction } from "react";

import { Motion } from "src/enumerations";
import type { State, Derived } from "src/types";
import { KeyDegree } from "src/components/grid/KeyDegree";
import { KeyDescription } from "src/components/grid/KeyDescription";
import { ModeNote } from "src/components/grid/ModeNote";
import { RootNote } from "src/components/grid/RootNote";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/grid/Grid.module.css";


const MAX_KEY_DEGREE = 14;


interface GridProps{
  derived: Derived;
  setState: Dispatch<SetStateAction<State>>;
}

export function Grid({
  derived,
  setState
}: GridProps): JSX.Element {
    function buildChangeRoot(
      isIncrement: boolean
    ): (() => void) | undefined {
      if (isIncrement) {
        if (derived.keyDegree >= MAX_KEY_DEGREE) return undefined;
        return () => {
          if (derived.motion !== Motion.Still) return;
          setState((state: State) => ({ ...state, motion: Motion.IncrementRoot }));
        }
      } else {
        if (derived.keyDegree <= -MAX_KEY_DEGREE) return undefined;
        return () => {
          if (derived.motion !== Motion.Still) return;
          setState((state: State) => ({ ...state, motion: Motion.DecrementRoot }));
        }
      }
    }

    function buildChangeMode(
      isIncrement: boolean
    ): (() => void) | undefined {
      if (isIncrement) {
        if (derived.mode >= 3) return undefined;
        if (derived.keyDegree <= -MAX_KEY_DEGREE) return undefined;
        return () => {
          if (derived.motion !== Motion.Still) return;
          setState((state: State) => ({ ...state, motion: Motion.IncrementMode }));
        }
      } else {
        if (derived.mode <= -3) return undefined;
        if (derived.keyDegree >= MAX_KEY_DEGREE) return undefined;
        return () => {
          if (derived.motion !== Motion.Still) return;
          setState((state: State) => ({ ...state, motion: Motion.DecrementMode }));
        };
      }
    }

  return (
    <div
      className={buildClassString(cssModule, ["grid"])}
    >
      <RootNote
        rootNoteName={derived.rootNote.name}
        buildChangeRoot={buildChangeRoot}
      />
      <ModeNote
        modeNoteName={derived.modeNoteName}
        buildChangeMode={buildChangeMode}
      />
      <KeyDescription
        mode={derived.mode}
        rootNoteName={derived.rootNote.name}
      />
      <KeyDegree
        keyDegree={derived.keyDegree}
      />
    </div>
  );
}
