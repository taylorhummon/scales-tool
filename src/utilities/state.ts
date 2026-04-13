import { MusicalKey } from "@/classes/MusicalKey";
import { AnimationType } from "@/utilities/animation";
import { Motion } from "@/utilities/motion";
import { musicalKeyFromCurrentURL } from "@/utilities/routing";


export interface State {
  degree: number;
  root: number;
  motion: Motion;
  animationType: AnimationType;
  isUsingSolfege: boolean;
}

// The state that's stored in the browser's history
export interface HistoricalState {
  degree: number;
  root: number;
}

export function getInitialState(
): State {
  const musicalKey = musicalKeyFromCurrentURL();
  return {
    degree: musicalKey.degree,
    root: musicalKey.root,
    motion: Motion.Still,
    animationType: AnimationType.Simple,
    isUsingSolfege: false
  };
}

export function historicalStateFromMusicalKey(
  musicalKey: MusicalKey
): HistoricalState {
  return {
    degree: musicalKey.degree,
    root: musicalKey.root
  };
}
