import { remainderFor } from "@/utilities/math";

export enum SolfegeLetter {
  Do = "do",
  Re = "re",
  Mi = "mi",
  Fa = "fa",
  Sol = "sol",
  La = "la",
  Ti = "ti"
}

export const SOLFEGE_LETTERS = Object.values(SolfegeLetter);

export function solfegeLetterFromPosition(
  position: number
): SolfegeLetter {
  return SOLFEGE_LETTERS[remainderFor(4 * position, 7)];
}
