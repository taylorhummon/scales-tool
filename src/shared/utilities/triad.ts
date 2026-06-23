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
  if (getRemainder(7 * (note2.value - note1.value), 12) === 3) {
    if (getRemainder(7 * (note3.value - note1.value), 12) === 7) {
      return "minor"
    }
    if (getRemainder(7 * (note3.value - note1.value), 12) === 6) {
      return "diminished"
    }
  }
  if (getRemainder(7 * (note2.value - note1.value), 12) === 4) {
    if (getRemainder(7 * (note3.value - note1.value), 12) === 7) {
      return "major"
    }
  }
  throw Error("Unexpected triad quality")
}
