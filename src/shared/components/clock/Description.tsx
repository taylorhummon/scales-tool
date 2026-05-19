import { type MusicalKey } from "@shared/classes/MusicalKey"

import descriptionCssModule from "./Description.module.scss"


interface DescriptionInput {
  musicalKey: MusicalKey,
}

export function Description({
  musicalKey,
}: DescriptionInput): React.ReactNode {
  return (
    <>
      <text
        className={descriptionCssModule["key-description"]}
        textAnchor="middle"
      >
        <TextContent
          musicalKey={musicalKey}
        />
        {"\n"}
      </text>
      <text
        className={descriptionCssModule["degree-description"]}
        textAnchor="middle"
      >
        {getDegreeExplanation(musicalKey.degree)}
      </text>
    </>
  )
}

interface TextContentInput {
  musicalKey: MusicalKey,
}

function TextContent({
  musicalKey,
}: TextContentInput): React.ReactNode {
  const noteFontClassName = "fixed-width-font"
  const rootNoteName = musicalKey.rootNote.name
  if (musicalKey.mode === -2) {
    return (
      <>
        <tspan className={noteFontClassName}>{rootNoteName}</tspan>-Major.
      </>
    )
  }
  if (musicalKey.mode === 1) {
    return (
      <>
        <tspan className={noteFontClassName}>{rootNoteName}</tspan>-Minor.
      </>
    )
  }
  return (
    <>
      The {musicalKey.modeName} mode on <tspan className={noteFontClassName}>{rootNoteName}</tspan>.
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
