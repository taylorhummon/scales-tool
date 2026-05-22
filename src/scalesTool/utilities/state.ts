import {
  DEFAULT_IS_UNTANGLED,
  DEFAULT_IS_USING_SYMMETRY_DOT,
  DEFAULT_IS_USING_SOLFEGE,
  DEFAULT_IS_USING_ANIMATION,
  DEFAULT_ANIMATION_OPTION,
  DEFAULT_ROOT,
  DEFAULT_DEGREE,
} from "@scalesTool/config"
import { ActionType, Action } from "@scalesTool/utilities/action"
import { type AnimationOption } from "@scalesTool/utilities/clock"
import { Motion } from "@scalesTool/utilities/motion"


export interface State {
  isUsingAnimation: boolean,
  isUntangled: boolean,
  isUsingSymmetrySpotlight: boolean,
  isUsingSolfege: boolean,
  animationOption: AnimationOption,
  motion: Motion,
  root: number,
  degree: number,
}

export function getInitialState(
): State {
  return {
    isUsingAnimation: DEFAULT_IS_USING_ANIMATION,
    isUntangled: DEFAULT_IS_UNTANGLED,
    isUsingSymmetrySpotlight: DEFAULT_IS_USING_SYMMETRY_DOT,
    isUsingSolfege: DEFAULT_IS_USING_SOLFEGE,
    animationOption: DEFAULT_ANIMATION_OPTION,
    motion: Motion.Still,
    root: DEFAULT_ROOT,
    degree: DEFAULT_DEGREE,
  }
}

export function reducer(
  state: State,
  action: Action,
): State {
  if (action.type === ActionType.ActivateMotion) {
    const { motion } = action
    return { ...state, motion }
  }
  if (action.type === ActionType.ChangeKey) {
    return {
      ...state,
      motion: Motion.Still,
      root: action.nextMusicalKey.root,
      degree: action.nextMusicalKey.degree,
    }
  }
  if (action.type === ActionType.SelectIsUsingAnimation) {
    const { isUsingAnimation } = action
    return { ...state, isUsingAnimation }
  }
  if (action.type === ActionType.SelectIsUntangled) {
    const { isUntangled } = action
    return { ...state, isUntangled }
  }
  if (action.type === ActionType.SelectIsUsingSymmetrySpotlight) {
    const { isUsingSymmetrySpotlight } = action
    return { ...state, isUsingSymmetrySpotlight }
  }
  if (action.type === ActionType.SelectIsUsingSolfege) {
    const { isUsingSolfege } = action
    return { ...state, isUsingSolfege }
  }
  if (action.type === ActionType.SelectAnimationOption) {
    const { animationOption } = action
    return { ...state, animationOption }
  }
  return state
}
