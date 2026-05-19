import { type Note, SHARP, FLAT } from "@shared/classes/Note"

import noteLabelTextCssModule from "./NoteLabelText.module.scss"


interface NoteLabelTextInput {
  startNote: Note,
  finishNote: Note,
}

export function NoteLabelText({
  startNote,
  finishNote,
}: NoteLabelTextInput): React.ReactNode {
  if (finishNote.value !== startNote.value) {
    // The startCharacterCount and finishCharacterCount differ by exactly one
    const startCharacterCount = startNote.name.length
    const finishCharacterCount = finishNote.name.length
    const longerNote = finishCharacterCount > startCharacterCount ? finishNote : startNote
    const appearOrDisappear = finishCharacterCount > startCharacterCount ? "appear" : "disappear"
    if (longerNote.sharpsCount > 0) {
      return (
        <SharpsNoteLabelText
          longerNote={longerNote}
          appearOrDisappear={appearOrDisappear}
        />
      )
    }
    if (longerNote.sharpsCount < 0) {
      return (
        <FlatsNoteLabelText
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

interface SharpsNoteLabelTextInput {
  longerNote: Note,
  appearOrDisappear: "appear" | "disappear",
}

function SharpsNoteLabelText({
  longerNote,
  appearOrDisappear,
}: SharpsNoteLabelTextInput): React.ReactNode {
  return (
    <text>
      {longerNote.naturalNote}
      {SHARP.repeat(Math.abs(longerNote.sharpsCount) - 1)}
      <tspan className={noteLabelTextCssModule[appearOrDisappear]}>
        {SHARP}
      </tspan>
    </text>
  )
}

interface FlatsNoteLabelTextInput {
  longerNote: Note,
  appearOrDisappear: "appear" | "disappear",
}

function FlatsNoteLabelText({
  longerNote,
  appearOrDisappear,
}: FlatsNoteLabelTextInput): React.ReactNode {
  return (
    <text>
      {longerNote.naturalNote}
      {FLAT.repeat(Math.abs(longerNote.sharpsCount) - 1)}
      <tspan className={noteLabelTextCssModule[appearOrDisappear]}>
        {FLAT}
      </tspan>
    </text>
  )
}
