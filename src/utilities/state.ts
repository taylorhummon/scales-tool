import {
  DEFAULT_IS_USING_SOLFEGE,
  DEFAULT_IS_USING_ANIMATION,
  DEFAULT_IS_USING_NOTES_BALLET,
} from "@/config";
import { MusicalKey } from "@/classes/MusicalKey";
import { Motion } from "@/utilities/motion";
import { musicalKeyFromCurrentURL } from "@/utilities/routing";


export interface State {
  root: number;
  degree: number;
  motion: Motion;
  isUsingSolfege: boolean;
  isUsingAnimation: boolean;
  isUsingNotesBallet: boolean;
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
    isUsingSolfege: DEFAULT_IS_USING_SOLFEGE,
    isUsingAnimation: DEFAULT_IS_USING_ANIMATION,
    isUsingNotesBallet: DEFAULT_IS_USING_NOTES_BALLET,
  };
}

export function historicalStateFromMusicalKey(
  musicalKey: MusicalKey,
): HistoricalState {
  return {
    root: musicalKey.root,
    degree: musicalKey.degree,
  };
}
