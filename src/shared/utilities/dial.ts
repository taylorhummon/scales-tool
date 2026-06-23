import { type MusicalKey } from "@shared/classes/MusicalKey"
import { Note } from "@shared/classes/Note"


export const EXTENDED_POSITIONS = [ -4, -3, -2, -1, 0, 1, 2, 3, 4 ]

export function noteAt(
  musicalKey: MusicalKey,
  position: number,
): Note {
  return new Note({ value: musicalKey.root + position })
}
