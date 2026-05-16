import { type MusicalKey } from "@shared/classes/MusicalKey"
import { type Motion } from "@shared/utilities/motion"


export enum ActionType {
  ActivateMotion = "activate-motion",
  ChangeKey = "change-key",
  SelectIsUntangled = "select-is-untangled",
  SelectIsUsingSymmetryDot = "select-is-using-symmetry-dot",
  SelectIsUsingSolfege = "select-is-using-solfege",
  SelectIsUsingAnimation = "select-is-using-animation",
}

export type Action =
  | { type: ActionType.ActivateMotion, motion: Motion }
  | { type: ActionType.ChangeKey, nextMusicalKey: MusicalKey }
  | { type: ActionType.SelectIsUntangled, isUntangled: boolean }
  | { type: ActionType.SelectIsUsingSymmetryDot, isUsingSymmetryDot: boolean }
  | { type: ActionType.SelectIsUsingSolfege, isUsingSolfege: boolean }
  | { type: ActionType.SelectIsUsingAnimation, isUsingAnimation: boolean }
