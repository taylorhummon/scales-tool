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

export function solfegeFromPosition(
  position: number
): Solfege {
  return SOLFEGES[remainderFor(position, 7)];
}

const SOLFEGES = [
  Solfege.Do,
  Solfege.Sol,
  Solfege.Re,
  Solfege.La,
  Solfege.Mi,
  Solfege.Ti,
  Solfege.Fa
];
