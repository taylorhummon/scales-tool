import type { MusicalKey } from "@/classes/MusicalKey";
import type { Motion } from "@/utilities/motion";


export enum ActionType {
  ActivateMotion = "activate-motion",
  ChangeKey = "change-key",
  SelectIsClusteringNotes = "select-is-clustering-notes",
  SelectIsUsingSolfege = "select-is-using-solfege",
  SelectIsUsingAnimation = "select-is-using-animation",
  SelectIsUsingNotesBallet = "select-is-using-notes-ballet",
}

export type Action =
  | { type: ActionType.ActivateMotion, motion: Motion }
  | { type: ActionType.ChangeKey, nextMusicalKey: MusicalKey }
  | { type: ActionType.SelectIsClusteringNotes, isClusteringNotes: boolean }
  | { type: ActionType.SelectIsUsingSolfege, isUsingSolfege: boolean }
  | { type: ActionType.SelectIsUsingAnimation, isUsingAnimation: boolean }
  | { type: ActionType.SelectIsUsingNotesBallet, isUsingNotesBallet: boolean }
