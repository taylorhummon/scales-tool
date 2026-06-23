import { type MusicalKey } from "@shared/classes/MusicalKey"
import { ActionType, Action } from "@shared/utilities/action"
import {
  type AnchorOption,
  type AnimationOption,
  LabelsOption,
  TriadOriginOption,
} from "@shared/utilities/clock"
import { Motion } from "@shared/utilities/motion"


export interface State {
  // Settings
  anchorOption: AnchorOption,
  insideLabelsOption: LabelsOption,
  outsideLabelsOption: LabelsOption,
  triadOriginOption: TriadOriginOption,
  animationOption: AnimationOption,
  isUsingRootSpotlight: boolean,
  isUsingRankSpotlight: boolean,
  isUsingRankDial: boolean,
  // Changing causes animation
  motion: Motion,
  root: number,
  rank: number,
  isCaterpillarPattern: boolean,
  triadOffset: number,
}

export function reducer(
  state: State,
  action: Action,
): State {
  if (action.type === ActionType.SelectExtraNoteNames) {
    return reduceSelectExtraNoteNames(state, action.outsideLabelsOption)
  }
  if (action.type === ActionType.SelectIsUsingRankDial) {
    return reduceSelectIsUsingRankDial(state, action.isUsingRankDial)
  }
  if (action.type === ActionType.ActivateMotion) {
    return reduceActivateMotion(state, action.motion)
  }
  if (action.type === ActionType.CompleteMotion) {
    const { nextMusicalKey, nextIsCaterpillarPattern, nextTriadOffset } = action
    return reduceCompleteMotion(state, nextMusicalKey, nextIsCaterpillarPattern, nextTriadOffset)
  }
  return state
}

function reduceSelectExtraNoteNames(
  state: State,
  outsideLabelsOption: LabelsOption,
): State {
  const isUsingRankSpotlight = outsideLabelsOption === LabelsOption.Simplified
  return { ...state, outsideLabelsOption, isUsingRankSpotlight }
}

function reduceSelectIsUsingRankDial(
  state: State,
  isUsingRankDial: boolean,
): State {
  if (isUsingRankDial) {
    const insideLabelsOption = LabelsOption.Ordinary
    return { ...state, isUsingRankDial, insideLabelsOption }
  } else {
    const insideLabelsOption = LabelsOption.Simplified
    return { ...state, isUsingRankDial, insideLabelsOption }
  }
}

function reduceActivateMotion(
  state: State,
  motion: Motion,
): State {
  return { ...state, motion }
}

function reduceCompleteMotion(
  state: State,
  nextMusicalKey: MusicalKey,
  nextIsCaterpillarPattern: boolean,
  nextTriadOffset: number,
): State {
  return {
    ...state,
    motion: Motion.Still,
    root: nextMusicalKey.root,
    rank: nextMusicalKey.rank,
    isCaterpillarPattern: nextIsCaterpillarPattern,
    triadOffset: nextTriadOffset,
  }
}
