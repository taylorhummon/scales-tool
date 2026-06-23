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

export function naturalNoteFromButterflyIndex(
  butterflyIndex: number,
): NaturalNote {
  const possiblyUndefined = NATURAL_NOTE_BY_BUTTERFLY_INDEX.get(butterflyIndex)
  if (possiblyUndefined === undefined) throw `Invalid butterflyIndex: ${butterflyIndex}`
  return possiblyUndefined
}

export function naturalNoteFromCaterpillarIndex(
  caterpillarIndex: number,
): NaturalNote {
  const possiblyUndefined = NATURAL_NOTE_BY_CATERPILLAR_INDEX.get(caterpillarIndex)
  if (possiblyUndefined === undefined) throw `Invalid caterpillarIndex: ${caterpillarIndex}`
  return possiblyUndefined
}

export function butterflyIndexFromNaturalNote(
  naturalNote: NaturalNote,
): number {
  return BUTTERFLY_INDEX_BY_NATURAL_NOTE.get(naturalNote) as number
}

export function caterpillarIndexFromNaturalNote(
  naturalNote: NaturalNote,
): number {
  return CATERPILLAR_INDEX_BY_NATURAL_NOTE.get(naturalNote) as number
}

const NATURAL_NOTE_BY_BUTTERFLY_INDEX: Map<number, NaturalNote> = new Map([
  [-3, NaturalNote.A],
  [-2, NaturalNote.B],
  [-1, NaturalNote.C],
  [0, NaturalNote.D],
  [1, NaturalNote.E],
  [2, NaturalNote.F],
  [3, NaturalNote.G],
])

const NATURAL_NOTE_BY_CATERPILLAR_INDEX: Map<number, NaturalNote> = new Map([
  [-3, NaturalNote.F],
  [-2, NaturalNote.C],
  [-1, NaturalNote.G],
  [0, NaturalNote.D],
  [1, NaturalNote.A],
  [2, NaturalNote.E],
  [3, NaturalNote.B],
])

const BUTTERFLY_INDEX_BY_NATURAL_NOTE: Map<NaturalNote, number> = new Map([
  [NaturalNote.A, -3],
  [NaturalNote.B, -2],
  [NaturalNote.C, -1],
  [NaturalNote.D, 0],
  [NaturalNote.E, 1],
  [NaturalNote.F, 2],
  [NaturalNote.G, 3],
])

const CATERPILLAR_INDEX_BY_NATURAL_NOTE: Map<NaturalNote, number> = new Map([
  [NaturalNote.F, -3],
  [NaturalNote.C, -2],
  [NaturalNote.G, -1],
  [NaturalNote.D, 0],
  [NaturalNote.A, 1],
  [NaturalNote.E, 2],
  [NaturalNote.B, 3],
])
