import {
  DEFAULT_IS_UNTANGLED,
  DEFAULT_IS_USING_SYMMETRY_DOT,
  DEFAULT_IS_USING_SOLFEGE,
  DEFAULT_IS_USING_DOTS_BALLET,
  DEFAULT_IS_USING_ANIMATION,
  DEFAULT_ROOT,
  DEFAULT_DEGREE,
} from "@scalesTool/config"

import { ActionType, Action } from "@shared/utilities/action"
import { Motion } from "@shared/utilities/motion"


export interface State {
  isUntangled: boolean,
  isUsingSymmetryDot: boolean,
  isUsingSolfege: boolean,
  isUsingDotsBallet: boolean,
  isUsingAnimation: boolean,
  motion: Motion,
  root: number,
  degree: number,
}

export function getInitialState(
): State {
  return {
    isUntangled: DEFAULT_IS_UNTANGLED,
    isUsingSymmetryDot: DEFAULT_IS_USING_SYMMETRY_DOT,
    isUsingSolfege: DEFAULT_IS_USING_SOLFEGE,
    isUsingDotsBallet: DEFAULT_IS_USING_DOTS_BALLET,
    isUsingAnimation: DEFAULT_IS_USING_ANIMATION,
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
  if (action.type === ActionType.SelectIsUntangled) {
    const { isUntangled } = action
    return { ...state, isUntangled }
  }
  if (action.type === ActionType.SelectIsUsingSymmetryDot) {
    const { isUsingSymmetryDot } = action
    return { ...state, isUsingSymmetryDot }
  }
  if (action.type === ActionType.SelectIsUsingSolfege) {
    const { isUsingSolfege } = action
    return { ...state, isUsingSolfege }
  }
  if (action.type === ActionType.SelectIsUsingDotsBallet) {
    const { isUsingDotsBallet } = action
    return { ...state, isUsingDotsBallet }
  }
  if (action.type === ActionType.SelectIsUsingAnimation) {
    const { isUsingAnimation } = action
    return { ...state, isUsingAnimation }
  }
  return state
}
