import { Note } from "@shared/classes/Note"
import { remainderFor } from "@shared/utilities/math"


export interface ClockSettings {
  isUntangled: boolean,
  isUsingSymmetryDot: boolean,
  isUsingSolfege: boolean,
  isUsingAnimation: boolean,
}

interface getHourInput {
  isUntangled: boolean,
  note: Note,
}

export function getHour({
  isUntangled,
  note,
}: getHourInput): number {
  if (isUntangled) {
    return remainderFor(note.value, 12)
  } else {
    return remainderFor(7 * note.value, 12)
  }
}
