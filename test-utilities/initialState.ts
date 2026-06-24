import {
  AnchorOption,
  AnimationOption,
  LabelsOption,
  TriadOriginOption,
} from "@shared/utilities/clock"
import { Motion } from "@shared/utilities/motion"
import { State } from "@shared/utilities/state"


export function getInitialState(
): State {
  return {
    anchorOption: AnchorOption.D,
    insideLabelsOption: LabelsOption.Ordinary,
    outsideLabelsOption: LabelsOption.None,
    triadOriginOption: TriadOriginOption.RankNote,
    animationOption: AnimationOption.None,
    isUsingRootSpotlight: true,
    isUsingRankSpotlight: true,
    motion: Motion.Still,
    root: 0,
    rank: 0,
    isCaterpillarPattern: false,
    triadOffset: 0,
  }
}
