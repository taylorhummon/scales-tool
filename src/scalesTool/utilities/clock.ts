import { type MusicalKey } from "@scalesTool/classes/MusicalKey"
import { Note } from "@scalesTool/classes/Note"
import { getRemainder } from "@scalesTool/utilities/math"


export enum AnimationOption {
  Minimal = "Minimal",
  Ballet = "Ballet",
  FollowsOrdinaryLabel = "Follows ordinary label",
  FollowsSolfegeLabel = "Follows solfege label",
}

export interface ClockSettings {
  isUsingAnimation: boolean,
  isUntangled: boolean,
  isUsingSymmetrySpotlight: boolean,
  isUsingSolfege: boolean,
  isAnchoringRoot: boolean,
  animationOption: AnimationOption,
}

interface getHourParameters {
  clockSettings: ClockSettings,
  musicalKey: MusicalKey,
  note: Note,
}

export function getHour({
  clockSettings,
  musicalKey,
  note,
}: getHourParameters): number {
  const anchorValue = clockSettings.isAnchoringRoot ? musicalKey.rootNote.value : 0
  const untangledMultiplier = clockSettings.isUntangled ? 1 : 7
  return getRemainder(untangledMultiplier * (note.value - anchorValue), 12)
}
