import { DEFAULT_ANIMATION_TYPE, DEFAULT_IS_USING_SOLFEGE } from "@/config";
import { MusicalKey } from "@/classes/MusicalKey";
import { AnimationType } from "@/utilities/animation";
import { Motion } from "@/utilities/motion";
import { musicalKeyFromCurrentURL } from "@/utilities/routing";


export interface State {
  root: number;
  degree: number;
  motion: Motion;
  animationType: AnimationType;
  isUsingSolfege: boolean;
}

// The state that's stored in the browser's history
export interface HistoricalState {
  root: number;
  degree: number;
}

export function getInitialState(
): State {
  const musicalKey = musicalKeyFromCurrentURL();
  return {
    root: musicalKey.root,
    degree: musicalKey.degree,
    motion: Motion.Still,
    animationType: DEFAULT_ANIMATION_TYPE,
    isUsingSolfege: DEFAULT_IS_USING_SOLFEGE
  };
}

export function historicalStateFromMusicalKey(
  musicalKey: MusicalKey
): HistoricalState {
  return {
    root: musicalKey.root,
    degree: musicalKey.degree
  };
}
