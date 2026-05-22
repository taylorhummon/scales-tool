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
  animationOption: AnimationOption,
}

interface getHourParameters {
  clockSettings: ClockSettings,
  note: Note,
}

export function getHour({
  clockSettings,
  note,
}: getHourParameters): number {
  const untangledValue = clockSettings.isUntangled ? 1 : 7
  return getRemainder(untangledValue * note.value, 12)
}
