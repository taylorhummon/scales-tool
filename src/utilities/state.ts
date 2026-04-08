import type { Dispatch, SetStateAction } from "react";

import { AnimationType, Motion } from "@/enumerations";
import { MusicalKey, getDefaultMusicalKey } from "@/classes/MusicalKey";
import { getNextMusicalKey } from "@/utilities/motion";
import { musicalKeyFromCurrentURL, addToBrowserHistory } from "@/utilities/routing";


export interface State {
  degree: number;
  mode: number;
  animationType: AnimationType;
  motion: Motion;
}

// The state that's stored in the browser's history
export interface HistoricalState {
  degree: number;
  mode: number;
}

export function getInitialState(
): State {
  const musicalKey = musicalKeyFromCurrentURL();
  return {
    degree: musicalKey.degree,
    mode: musicalKey.mode,
    animationType: AnimationType.Simple,
    motion: Motion.Still
  };
}

export function handleBrowserHistoryPop(
  state: State,
  historicalState: HistoricalState | undefined
): State {
  const musicalKey = historicalState ? musicalKeyFromHistoricalState(historicalState) : getDefaultMusicalKey();
  return {
    ...state,
    degree: musicalKey.degree,
    mode: musicalKey.mode,
    motion: Motion.Still
  };
}

export function advanceStateUsingMusicalKey(
  state: State,
  nextMusicalKey: MusicalKey
): State {
  return {
    ...state,
    degree: nextMusicalKey.degree,
    mode: nextMusicalKey.mode,
    motion: Motion.Still
  };
}

export function musicalKeyFromHistoricalState(
  historicalState: HistoricalState
): MusicalKey {
  return new MusicalKey(historicalState.degree, historicalState.mode);
}

export function historicalStateFromMusicalKey(
  musicalKey: MusicalKey
): HistoricalState {
  return {
    degree: musicalKey.degree,
    mode: musicalKey.mode
  };
}

export function advanceToNextMusicalKey(
  musicalKey: MusicalKey,
  motion: Motion,
  setState: Dispatch<SetStateAction<State>>
): void {
  const nextMusicalKey = getNextMusicalKey(musicalKey, motion);
  addToBrowserHistory(nextMusicalKey);
  setState((state: State) => advanceStateUsingMusicalKey(state, nextMusicalKey));
}
