import { type MusicalKey } from "@shared/classes/MusicalKey"
import { Note } from "@shared/classes/Note"
import { remainderFor } from "@shared/utilities/math"


export interface ClockSettings {
  isUntangled: boolean,
  isUsingSymmetryDot: boolean,
  isUsingSolfege: boolean,
  isUsingAnimation: boolean,
}

interface getHourInput {
  clockSettings: ClockSettings,
  musicalKey: MusicalKey,
  note: Note,
}

export function getHour({
  clockSettings,
  musicalKey,
  note,
}: getHourInput): number {
  const difference = note.value
  // const difference = note.value - musicalKey.rootNote.value
  // const difference = note.value - musicalKey.symmetryNote.value
  if (clockSettings.isUntangled) {
    return remainderFor(difference, 12)
  } else {
    return remainderFor(7 * difference, 12)
  }
}
