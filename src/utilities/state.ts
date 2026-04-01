import { Motion } from "src/enumerations";
import { getDefaultMusicalKey, MusicalKey } from "src/classes/MusicalKey";


export interface State {
  degree: number;
  mode: number;
  motion: Motion;
}

// We don't store the current motion in the brower's history.
export interface HistoricalState {
  degree: number;
  mode: number;
}


export function stateFromHistoricalState(
  historicalState: HistoricalState | null | undefined
): State {
  if (! historicalState) {
    return stateFromMusicalKey(getDefaultMusicalKey());
  }
  return { ...historicalState, motion: Motion.Still };
}

export function stateFromMusicalKey(
  musicalKey: MusicalKey
): State {
  return {
    degree: musicalKey.degree,
    mode: musicalKey.mode,
    motion: Motion.Still
  }
}

export function musicalKeyFromState(
  state: State
): MusicalKey {
  return new MusicalKey(state.degree, state.mode);
}

export function historicalStateFromMusicalKey(
  musicalKey: MusicalKey
): HistoricalState {
  return {
    degree: musicalKey.degree,
    mode: musicalKey.mode
  };
}
