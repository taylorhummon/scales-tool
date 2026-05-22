export enum SolfegeLetter {
  Do = "do",
  Re = "re",
  Mi = "mi",
  Fa = "fa",
  Sol = "sol",
  La = "la",
  Ti = "ti",
}

export const SOLFEGE_LETTERS = Object.values(SolfegeLetter)

export function indexFromSolfegeLetter(
  solfegeLetter: SolfegeLetter,
): number {
  return indexBySolfegeLetter.get(solfegeLetter) as number
}

const indexBySolfegeLetter: Map<SolfegeLetter, number> = new Map(
  SOLFEGE_LETTERS.map((solfegeLetter, index) => [solfegeLetter, index])
)
