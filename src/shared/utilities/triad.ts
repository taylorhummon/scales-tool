import { type MusicalKey } from "@shared/classes/MusicalKey"
import { getRemainder, getBalancedMod7 } from "@shared/utilities/math"
import { solfegeLetterFromButterflyIndex } from "@shared/utilities/solfegeLetter"


export function getTriadQuality(
  musicalKey: MusicalKey,
  triadOffset: number,
): string {
  const note1 = musicalKey.noteFromSolfegeLetter(solfegeLetterFromButterflyIndex(getBalancedMod7(triadOffset)))
  const note2 = musicalKey.noteFromSolfegeLetter(solfegeLetterFromButterflyIndex(getBalancedMod7(triadOffset + 2)))
  const note3 = musicalKey.noteFromSolfegeLetter(solfegeLetterFromButterflyIndex(getBalancedMod7(triadOffset + 4)))
  const diff1 = getRemainder(7 * (note2.value - note1.value), 12)
  const diff2 = getRemainder(7 * (note3.value - note2.value), 12)
  if (diff1 === 4 && diff2 === 3) return "major"
  if (diff1 === 3 && diff2 === 4) return "minor"
  if (diff1 === 3 && diff2 === 3) return "diminished"
  throw Error("Unexpected triad quality")
}
