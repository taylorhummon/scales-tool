import { type MusicalKey } from "@shared/classes/MusicalKey"
import { type LabelsOption } from "@shared/utilities/clock"
import { type Motion } from "@shared/utilities/motion"


export enum ActionType {
  SelectExtraNoteNames = "select-extra-note-names",
  SelectIsUsingSimplifiedNotes = "select-is-using-simplified-notes",
  ActivateMotion = "activate-motion",
  CompleteMotion = "complete-motion",
}

export type Action =
| {
    type: ActionType.SelectExtraNoteNames,
    outsideLabelsOption: LabelsOption,
  }
| {
    type: ActionType.SelectIsUsingSimplifiedNotes,
    isUsingSimplifiedNotes: boolean,
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
