import { type MusicalKey } from "@scalesTool/classes/MusicalKey"

import descriptionCssModule from "./Description.module.scss"


interface DescriptionParameters {
  currentMusicalKey: MusicalKey,
}

export function Description({
  currentMusicalKey,
}: DescriptionParameters): React.ReactNode {
  return (
    <>
      <text
        className={descriptionCssModule["key-description"]}
        textAnchor="middle"
      >
        <TextContent
          currentMusicalKey={currentMusicalKey}
        />
        {"\n"}
      </text>
      <text
        className={descriptionCssModule["degree-description"]}
        textAnchor="middle"
      >
        {getDegreeExplanation(currentMusicalKey.degree)}
      </text>
    </>
  )
}

interface TextContentParameters {
  currentMusicalKey: MusicalKey,
}

function TextContent({
  currentMusicalKey,
}: TextContentParameters): React.ReactNode {
  const noteFontClassName = "fixed-width-font"
  const rootNoteName = currentMusicalKey.rootNote.name
  if (currentMusicalKey.mode === -2) {
    return (
      <>
        <tspan className={noteFontClassName}>{rootNoteName}</tspan>-Major.
      </>
    )
  }
  if (currentMusicalKey.mode === 1) {
    return (
      <>
        <tspan className={noteFontClassName}>{rootNoteName}</tspan>-Minor.
      </>
    )
  }
  return (
    <>
      The {currentMusicalKey.modeName} mode on <tspan className={noteFontClassName}>{rootNoteName}</tspan>.
    </>
  )
}

function getDegreeExplanation(
  degree: number,
): string {
  if (degree === 0)  return "No sharps or flats."
  if (degree === 1)  return "One sharp."
  if (degree === -1) return "One flat."
  if (degree >= 2)   return `${getWrittenOutNumber(degree)} sharps.`
  if (degree <= -2)  return `${getWrittenOutNumber(- degree)} flats.`
  throw `Unexpected degree ${degree}`
}

function getWrittenOutNumber(
  n: number,
): string {
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
