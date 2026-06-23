export enum SimplifiedLetter {
  a = "a",
  b = "b",
  c = "c",
  d = "d",
  e = "e",
  f = "f",
  g = "g",
}

export const SIMPLIFIED_LETTERS = Object.values(SimplifiedLetter)

export function simplifiedLetterFromButterflyIndex(
  butterflyIndex: number,
): SimplifiedLetter {
  const possiblyUndefined = SIMPLIFIED_LETTER_BY_BUTTERFLY_INDEX.get(butterflyIndex)
  if (possiblyUndefined === undefined) {
    throw Error(`Invalid butterflyIndex: ${butterflyIndex}`)
  }
  return possiblyUndefined
}

export function simplifiedLetterFromCaterpillarIndex(
  caterpillarIndex: number,
): SimplifiedLetter {
  const possiblyUndefined = SIMPLIFIED_LETTER_BY_CATERPILLAR_INDEX.get(caterpillarIndex)
  if (possiblyUndefined === undefined) {
    throw Error(`Invalid caterpillarIndex: ${caterpillarIndex}`)
  }
  return possiblyUndefined
}

export function butterflyIndexFromSimplifiedLetter(
  simplifiedLetter: SimplifiedLetter,
): number {
  return BUTTERFLY_INDEX_BY_SIMPLIFIED_LETTER.get(simplifiedLetter) as number
}

export function caterpillarIndexFromSimplifiedLetter(
  simplifiedLetter: SimplifiedLetter,
): number {
  return CATERPILLAR_INDEX_BY_SIMPLIFIED_LETTER.get(simplifiedLetter) as number
}

const SIMPLIFIED_LETTER_BY_BUTTERFLY_INDEX: Map<number, SimplifiedLetter> = new Map([
  [-3, SimplifiedLetter.a],
  [-2, SimplifiedLetter.b],
  [-1, SimplifiedLetter.c],
  [0, SimplifiedLetter.d],
  [1, SimplifiedLetter.e],
  [2, SimplifiedLetter.f],
  [3, SimplifiedLetter.g],
])

const SIMPLIFIED_LETTER_BY_CATERPILLAR_INDEX: Map<number, SimplifiedLetter> = new Map([
  [-3, SimplifiedLetter.f],
  [-2, SimplifiedLetter.c],
  [-1, SimplifiedLetter.g],
  [0, SimplifiedLetter.d],
  [1, SimplifiedLetter.a],
  [2, SimplifiedLetter.e],
  [3, SimplifiedLetter.b],
])

const BUTTERFLY_INDEX_BY_SIMPLIFIED_LETTER: Map<SimplifiedLetter, number> = new Map([
  [SimplifiedLetter.a, -3],
  [SimplifiedLetter.b, -2],
  [SimplifiedLetter.c, -1],
  [SimplifiedLetter.d, 0],
  [SimplifiedLetter.e, 1],
  [SimplifiedLetter.f, 2],
  [SimplifiedLetter.g, 3],
])

const CATERPILLAR_INDEX_BY_SIMPLIFIED_LETTER: Map<SimplifiedLetter, number> = new Map([
  [SimplifiedLetter.f, -3],
  [SimplifiedLetter.c, -2],
  [SimplifiedLetter.g, -1],
  [SimplifiedLetter.d, 0],
  [SimplifiedLetter.a, 1],
  [SimplifiedLetter.e, 2],
  [SimplifiedLetter.b, 3],
])
