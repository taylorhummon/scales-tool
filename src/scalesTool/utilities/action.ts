import { type MusicalKey } from "@scalesTool/classes/MusicalKey"
import { type AnimationOption } from "@scalesTool/utilities/clock"
import { type Motion } from "@scalesTool/utilities/motion"


export enum ActionType {
  ActivateMotion = "activate-motion",
  ChangeKey = "change-key",
  SelectIsUsingAnimation = "select-is-using-animation",
  SelectIsUntangled = "select-is-untangled",
  SelectIsUsingSymmetrySpotlight = "select-is-using-symmetry-dot",
  SelectIsUsingSolfege = "select-is-using-solfege",
  SelectAnimationOption = "select-animation-option",
}

export type Action =
  | { type: ActionType.ActivateMotion, motion: Motion }
  | { type: ActionType.ChangeKey, nextMusicalKey: MusicalKey }
  | { type: ActionType.SelectIsUsingAnimation, isUsingAnimation: boolean }
  | { type: ActionType.SelectIsUntangled, isUntangled: boolean }
  | { type: ActionType.SelectIsUsingSymmetrySpotlight, isUsingSymmetrySpotlight: boolean }
  | { type: ActionType.SelectIsUsingSolfege, isUsingSolfege: boolean }
  | { type: ActionType.SelectAnimationOption, animationOption: AnimationOption }
