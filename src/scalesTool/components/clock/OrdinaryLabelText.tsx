import { type Note, SHARP, FLAT } from "@scalesTool/classes/Note"

import ordinaryLabelTextCssModule from "./OrdinaryLabelText.module.scss"


interface OrdinaryLabelTextParameters {
  startNote: Note,
  finishNote: Note,
}

export function OrdinaryLabelText({
  startNote,
  finishNote,
}: OrdinaryLabelTextParameters): React.ReactNode {
  if (finishNote.value !== startNote.value) {
    // The startCharacterCount and finishCharacterCount differ by exactly one
    const startCharacterCount = startNote.name.length
    const finishCharacterCount = finishNote.name.length
    const longerNote = finishCharacterCount > startCharacterCount ? finishNote : startNote
    const appearOrDisappear = finishCharacterCount > startCharacterCount ? "appear" : "disappear"
    if (longerNote.sharpsCount > 0) {
      return (
        <SharpsOrdinaryLabelText
          longerNote={longerNote}
          appearOrDisappear={appearOrDisappear}
        />
      )
    }
    if (longerNote.sharpsCount < 0) {
      return (
        <FlatsOrdinaryLabelText
          longerNote={longerNote}
          appearOrDisappear={appearOrDisappear}
        />
      )
    }
  }
  return (
    <text>
      {startNote.name}
    </text>
  )
}

interface SharpsOrdinaryLabelTextParameters {
  longerNote: Note,
  appearOrDisappear: "appear" | "disappear",
}

function SharpsOrdinaryLabelText({
  longerNote,
  appearOrDisappear,
}: SharpsOrdinaryLabelTextParameters): React.ReactNode {
  return (
    <text>
      {longerNote.naturalNote}
      {SHARP.repeat(Math.abs(longerNote.sharpsCount) - 1)}
      <tspan className={ordinaryLabelTextCssModule[appearOrDisappear]}>
        {SHARP}
      </tspan>
    </text>
  )
}

interface FlatsOrdinaryLabelTextParameters {
  longerNote: Note,
  appearOrDisappear: "appear" | "disappear",
}

function FlatsOrdinaryLabelText({
  longerNote,
  appearOrDisappear,
}: FlatsOrdinaryLabelTextParameters): React.ReactNode {
  return (
    <text>
      {longerNote.naturalNote}
      {FLAT.repeat(Math.abs(longerNote.sharpsCount) - 1)}
      <tspan className={ordinaryLabelTextCssModule[appearOrDisappear]}>
        {FLAT}
      </tspan>
    </text>
  )
}
