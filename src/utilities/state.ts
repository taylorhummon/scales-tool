import {
  DEFAULT_IS_CLUSTERING_NOTES,
  DEFAULT_IS_USING_SOLFEGE,
  DEFAULT_IS_USING_ANIMATION,
  DEFAULT_IS_USING_NOTES_BALLET,
} from "@/config";
import { MusicalKey } from "@/classes/MusicalKey";
import { Motion } from "@/utilities/motion";
import { musicalKeyFromCurrentURL } from "@/utilities/routing";


export interface State {
  isClusteringNotes: boolean;
  isUsingSolfege: boolean;
  isUsingAnimation: boolean;
  isUsingNotesBallet: boolean;
  motion: Motion;
  root: number;
  degree: number;
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
    isClusteringNotes: DEFAULT_IS_CLUSTERING_NOTES,
    isUsingSolfege: DEFAULT_IS_USING_SOLFEGE,
    isUsingAnimation: DEFAULT_IS_USING_ANIMATION,
    isUsingNotesBallet: DEFAULT_IS_USING_NOTES_BALLET,
    motion: Motion.Still,
    root: musicalKey.root,
    degree: musicalKey.degree,
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
