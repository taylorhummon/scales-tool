import { type MusicalKey } from "@scalesTool/classes/MusicalKey"
import { type AnimationOption } from "@scalesTool/utilities/clock"
import { type Motion } from "@scalesTool/utilities/motion"


export enum ActionType {
  ActivateMotion = "activate-motion",
  ChangeKey = "change-key",
  SelectIsUntangled = "select-is-untangled",
  SelectIsUsingSymmetrySpotlight = "select-is-using-symmetry-dot",
  SelectIsUsingSolfege = "select-is-using-solfege",
  SelectIsAnchoringRoot = "select-is-anchoring-root",
  SelectAnimationOption = "select-animation-option",
}

export type Action =
  | { type: ActionType.ActivateMotion, motion: Motion }
  | { type: ActionType.ChangeKey, nextMusicalKey: MusicalKey }
  | { type: ActionType.SelectIsUntangled, isUntangled: boolean }
  | { type: ActionType.SelectIsUsingSymmetrySpotlight, isUsingSymmetrySpotlight: boolean }
  | { type: ActionType.SelectIsUsingSolfege, isUsingSolfege: boolean }
  | { type: ActionType.SelectIsAnchoringRoot, isAnchoringRoot: boolean }
  | { type: ActionType.SelectAnimationOption, animationOption: AnimationOption }
