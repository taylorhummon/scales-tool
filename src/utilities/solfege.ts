import { remainderFor } from "@/utilities/math";

export enum Solfege {
  Do = "do",
  Re = "re",
  Mi = "mi",
  Fa = "fa",
  Sol = "sol",
  La = "la",
  Ti = "ti"
}

const SOLFEGES = Object.values(Solfege);

export function solfegeFromPosition(
  position: number
): Solfege {
  return SOLFEGES[remainderFor(4 * position, 7)];
}
