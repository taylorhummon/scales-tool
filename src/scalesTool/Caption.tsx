import { Caption as CaptionCommon } from "@shared/components/caption/Caption"
import { type Derived } from "@shared/utilities/derived"


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
      secondLine={getSecondLine(derived)}
      thirdLine={getThirdLine(derived)}
      className={className}
    />
  )
}

function getFirstLine(
  derived: Derived,
): React.ReactNode {
  const noteFontClassName = "fixed-width-font"
  const { currentMusicalKey } = derived
  const rootNoteName = currentMusicalKey.rootNote.name
  if (currentMusicalKey.mode === -2) {
    return (
      <>
        <tspan className={noteFontClassName}>{rootNoteName}</tspan> major.
      </>
    )
  }
  if (currentMusicalKey.mode === 1) {
    return (
      <>
        <tspan className={noteFontClassName}>{rootNoteName}</tspan> minor.
      </>
    )
  }
  return (
    <>
      The {currentMusicalKey.modeName} mode on <tspan className={noteFontClassName}>{rootNoteName}</tspan>.
    </>
  )
}

function getSecondLine(
  derived: Derived,
): React.ReactNode {
  const { currentMusicalKey } = derived
  const { rank } = currentMusicalKey
  if (rank === 0)  return "No sharps or flats."
  if (rank === 1)  return "One sharp."
  if (rank === -1) return "One flat."
  if (rank >= 2)   return `${getWrittenOutNumber(rank)} sharps.`
  if (rank <= -2)  return `${getWrittenOutNumber(- rank)} flats.`
  throw `Unexpected rank ${rank}`
}

function getWrittenOutNumber(
  n: number,
): string {
  if (n < 0) throw Error("Expected non-negative number")
  if (n >= WRITTEN_OUT_NUMBERS.length) return "Many"
  return WRITTEN_OUT_NUMBERS[n]
}

const WRITTEN_OUT_NUMBERS = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
]

function getThirdLine(
  derived: Derived,
): React.ReactNode {
  const { currentIsCaterpillarPattern } = derived
  if (currentIsCaterpillarPattern) {
    return "Caterpillar pattern."
  } else {
    return "Butterfly pattern."
  }
}
