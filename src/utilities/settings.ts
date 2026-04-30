import {
  DEFAULT_IS_CLUSTERING_NOTES,
  DEFAULT_IS_USING_SOLFEGE,
  DEFAULT_IS_USING_ANIMATION,
  DEFAULT_IS_USING_NOTES_BALLET,
} from "@/config";


export interface Settings {
  isClusteringNotes: boolean;
  isUsingSolfege: boolean;
  isUsingAnimation: boolean;
  isUsingNotesBallet: boolean;
}

export const DEFAULT_SETTINGS = {
  isClusteringNotes: DEFAULT_IS_CLUSTERING_NOTES,
  isUsingSolfege: DEFAULT_IS_USING_SOLFEGE,
  isUsingAnimation: DEFAULT_IS_USING_ANIMATION,
  isUsingNotesBallet: DEFAULT_IS_USING_NOTES_BALLET,
};
