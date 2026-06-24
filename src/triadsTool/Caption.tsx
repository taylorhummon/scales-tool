import { Caption as CaptionCommon } from "@shared/components/caption/Caption"
import { LabelsOption } from "@shared/utilities/clock"
import { type Derived } from "@shared/utilities/derived"
import { getBalancedMod7 } from "@shared/utilities/math"
import { simplifiedLetterFromButterflyIndex } from "@shared/utilities/simplifiedLetter"
import { solfegeLetterFromButterflyIndex } from "@shared/utilities/solfegeLetter"
import { getTriadQuality } from "@shared/utilities/triad"


interface CaptionParameters {
  derived: Derived,
  className?: string,
}

export function Caption({
  derived,
  className,
}: CaptionParameters): React.ReactNode {
  return (
    <CaptionCommon
      firstLine={getFirstLine(derived)}
      className={className}
    />
  )
}

function getFirstLine(
  derived: Derived,
): React.ReactNode {
  if (derived.clockSettings.insideLabelsOption === LabelsOption.Ordinary) {
    return whenUsingOrdinaryLabels(derived)
  }
  if (derived.clockSettings.insideLabelsOption === LabelsOption.Simplified) {
    return whenUsingSimplifiedLabels(derived)
  }
  return null
}

function whenUsingOrdinaryLabels(
  derived: Derived,
): React.ReactNode {
  const { currentMusicalKey, currentTriadOffset } = derived
  const triadOffsetSolfegeLetter = solfegeLetterFromButterflyIndex(getBalancedMod7(currentTriadOffset))
  const triadOffsetNote = currentMusicalKey.noteFromSolfegeLetter(triadOffsetSolfegeLetter)
  const quality = getTriadQuality(currentMusicalKey, currentTriadOffset)

  return (
    <>
      The triad built on <tspan className="fixed-width-font">{triadOffsetNote.name}</tspan> is {quality}.
    </>
  )
}

function whenUsingSimplifiedLabels(
  derived: Derived,
): React.ReactNode {
  const { currentMusicalKey, currentTriadOffset } = derived
  const simplifiedLetter = simplifiedLetterFromButterflyIndex(getBalancedMod7(currentTriadOffset))
  const quality = getTriadQuality(currentMusicalKey, currentTriadOffset)

  return (
    <>
      The triad built on <tspan className="fixed-width-font">{simplifiedLetter}</tspan> is {quality}.
    </>
  )
}
