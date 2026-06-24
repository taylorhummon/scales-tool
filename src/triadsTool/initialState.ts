import {
  AnchorOption,
  LabelsOption,
  TriadOriginOption,
  AnimationOption,
} from "@shared/utilities/clock"
import { Motion } from "@shared/utilities/motion"
import { State } from "@shared/utilities/state"


export function getInitialState(
): State {
  return {
    anchorOption: AnchorOption.RankNote,
    insideLabelsOption: LabelsOption.Ordinary,
    outsideLabelsOption: LabelsOption.None,
    triadOriginOption: TriadOriginOption.RankNote,
    animationOption: AnimationOption.Combo,
    isUsingRootSpotlight: false,
    isUsingRankSpotlight: false,
    motion: Motion.Still,
    root: 0,
    rank: 0,
    isCaterpillarPattern: false,
    triadOffset: -1,
  }
}
