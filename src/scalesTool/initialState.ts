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
    triadOriginOption: TriadOriginOption.None,
    animationOption: AnimationOption.Combo,
    isUsingRootSpotlight: true,
    isUsingRankSpotlight: false,
    motion: Motion.Still,
    root: -2,
    rank: 0,
    isCaterpillarPattern: false,
    triadOffset: 0,
  }
}
