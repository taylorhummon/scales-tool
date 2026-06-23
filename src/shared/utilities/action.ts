import { type MusicalKey } from "@shared/classes/MusicalKey"
import { type LabelsOption } from "@shared/utilities/clock"
import { type Motion } from "@shared/utilities/motion"


export enum ActionType {
  SelectExtraNoteNames = "select-extra-note-names",
  SelectIsUsingRankDial = "select-is-using-rank-dial",
  ActivateMotion = "activate-motion",
  CompleteMotion = "complete-motion",
}

export type Action =
| {
    type: ActionType.SelectExtraNoteNames,
    outsideLabelsOption: LabelsOption,
  }
| {
    type: ActionType.SelectIsUsingRankDial,
    isUsingRankDial: boolean,
  }
| {
    type: ActionType.ActivateMotion,
    motion: Motion,
  }
| {
    type: ActionType.CompleteMotion,
    nextMusicalKey: MusicalKey,
    nextIsCaterpillarPattern: boolean,
    nextTriadOffset: number,
  }
