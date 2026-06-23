export enum SolfegeLetter {
  sol = "sol",
  la = "la",
  ti = "ti",
  do = "do",
  re = "re",
  mi = "mi",
  fa = "fa",
}

export const SOLFEGE_LETTERS = Object.values(SolfegeLetter)

export function solfegeLetterFromButterflyIndex(
  butterflyIndex: number,
): SolfegeLetter {
  const possiblyUndefined = SOLFEGE_LETTER_BY_BUTTERFLY_INDEX.get(butterflyIndex)
  if (possiblyUndefined === undefined) throw Error(`Invalid butterflyIndex: ${butterflyIndex}`)
  return possiblyUndefined
}

export function solfegeLetterFromCaterpillarIndex(
  caterpillarIndex: number,
): SolfegeLetter {
  const possiblyUndefined = SOLFEGE_LETTER_BY_CATERPILLAR_INDEX.get(caterpillarIndex)
  if (possiblyUndefined === undefined) throw `Invalid caterpillarIndex: ${caterpillarIndex}`
  return possiblyUndefined
}

export function butterflyIndexFromSolfegeLetter(
  solfegeLetter: SolfegeLetter,
): number {
  return BUTTERFLY_INDEX_BY_SOLFEGE_LETTER.get(solfegeLetter) as number
}

export function caterpillarIndexFromSolfegeLetter(
  solfegeLetter: SolfegeLetter,
): number {
  return CATERPILLAR_INDEX_BY_SOLFEGE_LETTER.get(solfegeLetter) as number
}

const SOLFEGE_LETTER_BY_BUTTERFLY_INDEX: Map<number, SolfegeLetter> = new Map([
  [-3, SolfegeLetter.sol],
  [-2, SolfegeLetter.la],
  [-1, SolfegeLetter.ti],
  [0, SolfegeLetter.do],
  [1, SolfegeLetter.re],
  [2, SolfegeLetter.mi],
  [3, SolfegeLetter.fa],
])

const SOLFEGE_LETTER_BY_CATERPILLAR_INDEX: Map<number, SolfegeLetter> = new Map([
  [-3, SolfegeLetter.mi],
  [-2, SolfegeLetter.ti],
  [-1, SolfegeLetter.fa],
  [0, SolfegeLetter.do],
  [1, SolfegeLetter.sol],
  [2, SolfegeLetter.re],
  [3, SolfegeLetter.la],
])

const BUTTERFLY_INDEX_BY_SOLFEGE_LETTER: Map<SolfegeLetter, number> = new Map([
  [SolfegeLetter.sol, -3],
  [SolfegeLetter.la, -2],
  [SolfegeLetter.ti, -1],
  [SolfegeLetter.do, 0],
  [SolfegeLetter.re, 1],
  [SolfegeLetter.mi, 2],
  [SolfegeLetter.fa, 3],
])

const CATERPILLAR_INDEX_BY_SOLFEGE_LETTER: Map<SolfegeLetter, number> = new Map([
  [SolfegeLetter.mi, -3],
  [SolfegeLetter.ti, -2],
  [SolfegeLetter.fa, -1],
  [SolfegeLetter.do, 0],
  [SolfegeLetter.sol, 1],
  [SolfegeLetter.re, 2],
  [SolfegeLetter.la, 3],
])
