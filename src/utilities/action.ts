import type { MusicalKey } from "@/classes/MusicalKey";
import type { AnimationType } from "@/utilities/animation";
import type { Motion } from "@/utilities/motion";


export enum ActionType {
  ActivateMotion = "activate-motion",
  ChangeKey = "change-key",
  SelectAnimationType = "select-animation-type",
  SelectIsUsingSolfege = "select-is-using-solfege"
}

export type Action =
  | { type: ActionType.ActivateMotion, motion: Motion }
  | { type: ActionType.ChangeKey, nextMusicalKey: MusicalKey }
  | { type: ActionType.SelectAnimationType, animationType: AnimationType }
  | { type: ActionType.SelectIsUsingSolfege, isUsingSolfege: boolean }
