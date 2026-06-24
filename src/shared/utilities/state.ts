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
  if (action.type === ActionType.SelectIsUsingSimplifiedNotes) {
    return reduceSelectIsUsingSimplifiedNotes(state, action.isUsingSimplifiedNotes)
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

function reduceSelectIsUsingSimplifiedNotes(
  state: State,
  isUsingSimplifiedNotes: boolean,
): State {
  const insideLabelsOption = isUsingSimplifiedNotes ? LabelsOption.Simplified : LabelsOption.Ordinary
  return { ...state, insideLabelsOption }
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
