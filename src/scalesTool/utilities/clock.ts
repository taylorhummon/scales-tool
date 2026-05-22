import { type MusicalKey } from "@scalesTool/classes/MusicalKey"
import { Note } from "@scalesTool/classes/Note"
import { getRemainder } from "@scalesTool/utilities/math"


export enum AnimationOption {
  Minimal = "Minimal",
  Ballet = "Ballet",
  FollowsOrdinaryLabel = "Follows ordinary label",
  FollowsSolfegeLabel = "Follows solfege label",
}

export enum AnchorOption {
  D = "D",
  RootNote = "Root note",
  DegreeNote = "Symmetry note",
}

export interface ClockSettings {
  isUsingAnimation: boolean,
  isUntangled: boolean,
  isUsingSymmetrySpotlight: boolean,
  isUsingSolfege: boolean,
  animationOption: AnimationOption,
  anchorOption: AnchorOption,
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
  const anchorValue = getAnchorValue(clockSettings, musicalKey)
  const untangledValue = clockSettings.isUntangled ? 1 : 7
  return getRemainder(untangledValue * (note.value - anchorValue), 12)
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
    return musicalKey.rootNote.value
  }
  if (anchorOption === AnchorOption.DegreeNote) {
    return musicalKey.degreeNote.value
  }
  throw Error(`Unrecognized anchor option: ${anchorOption}`)
}
