export enum NaturalNote {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
}

export const NATURAL_NOTES = Object.values(NaturalNote)

export const NATURAL_NOTES_IN_FCGDAEB_ORDER = [
  NaturalNote.F,
  NaturalNote.C,
  NaturalNote.G,
  NaturalNote.D,
  NaturalNote.A,
  NaturalNote.E,
  NaturalNote.B,
]

export const NATURAL_NOTES_IN_BEADGCF_ORDER = [ ...NATURAL_NOTES_IN_FCGDAEB_ORDER ].reverse()

export function indexFromNaturalNote(
  naturalNote: NaturalNote,
): number {
  return indexByNaturalNote.get(naturalNote) as number
}

const indexByNaturalNote: Map<NaturalNote, number> = new Map(
  NATURAL_NOTES.map((naturalNote, index) => [naturalNote, index])
)
