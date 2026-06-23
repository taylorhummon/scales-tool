import { type MusicalKey } from "@shared/classes/MusicalKey"
import { Note } from "@shared/classes/Note"
import { type Derived } from "@shared/utilities/derived"
import { getRemainder } from "@shared/utilities/math"


export enum AnchorOption {
  D = "D",
  RootNote = "Root note",
  RankNote = "Rank note",
}

export enum LabelsOption {
  None = "None",
  Ordinary = "Ordinary",
  Solfege = "Solfège",
  Simplified = "Simplified",
}

export enum TriadOriginOption {
  None = "None",
  RootNote = "Root note",
  RankNote = "Rank note",
}

export enum AnimationOption {
  None = "None",
  FollowsOrdinaryLabel = "Follows ordinary label",
  FollowsSolfegeLabel = "Follows solfege label",
  FollowsSimplifiedLabel = "Follows simplified label",
  Minimal = "Minimal",
  Combo = "Combo",
}

export interface ClockSettings {
  anchorOption: AnchorOption,
  insideLabelsOption: LabelsOption,
  outsideLabelsOption: LabelsOption,
  triadOriginOption: TriadOriginOption,
  animationOption: AnimationOption,
  isUsingRootSpotlight: boolean,
  isUsingRankSpotlight: boolean,
  isUsingRankDial: boolean,
}

export function getCurrentHour(
  derived: Derived,
  note: Note,
): number {
  const { clockSettings, currentMusicalKey, currentIsCaterpillarPattern } = derived
  return getHour(
    clockSettings,
    currentMusicalKey,
    currentIsCaterpillarPattern,
    note,
  )
}

export function getNextHour(
  derived: Derived,
  note: Note,
): number {
  const { clockSettings, nextMusicalKey, nextIsCaterpillarPattern } = derived
  return getHour(
    clockSettings,
    nextMusicalKey,
    nextIsCaterpillarPattern,
    note,
  )
}

function getHour(
  clockSettings: ClockSettings,
  musicalKey: MusicalKey,
  isCaterpillarPattern: boolean,
  note: Note,
): number {
  const anchorValue = getAnchorValue(clockSettings, musicalKey)
  const multiplier = isCaterpillarPattern ? 1 : 7
  return getRemainder(multiplier * (note.value - anchorValue), 12)
}

function getAnchorValue(
  clockSettings: ClockSettings,
  musicalKey: MusicalKey,
): number {
  const { anchorOption } = clockSettings
  if (anchorOption === AnchorOption.D) {
    return 0
  }
  if (anchorOption === AnchorOption.RootNote) {
    return musicalKey.root
  }
  if (anchorOption === AnchorOption.RankNote) {
    return musicalKey.rank
  }
  throw Error(`Unrecognized anchor option ${anchorOption}`)
}
