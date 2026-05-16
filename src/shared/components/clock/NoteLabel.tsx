import { type Note } from "@shared/classes/Note"
import { type NoteLabelAnimator } from "@shared/classes/NoteLabelAnimator"
import { NoteLabelText } from "@shared/components/clock/NoteLabelText"
import { type ClockSettings, getHour } from "@shared/utilities/clock"
import { buildClassName } from "@shared/utilities/css"
import { type SolfegeLetter } from "@shared/utilities/solfege"

import noteLabelCssModule from "./NoteLabel.module.scss"


interface NoteLabelInput {
  clockSettings: ClockSettings,
  noteLabelAnimator: NoteLabelAnimator,
  solfegeLetter: SolfegeLetter,
  note: Note,
}

export function NoteLabel({
  clockSettings,
  noteLabelAnimator,
  solfegeLetter,
  note,
}: NoteLabelInput): React.ReactNode {
  const { isUntangled } = clockSettings
  const finishNote = noteLabelAnimator.finishNote(note)

  return (
    <g
      className={getClassName(isUntangled, note, finishNote)}
      data-testid={`note-label-${solfegeLetter}`}
    >
      <NoteLabelText
        startNote={note}
        finishNote={finishNote}
      />
    </g>
  )
}

function getClassName(
  isUntangled: boolean,
  startNote: Note,
  finishNote: Note,
): string {
  const classNames = [ "note-label" ]
  if (finishNote.value === startNote.value) {
    const hour = getHour({ isUntangled, note: startNote })
    const characterCount = startNote.name.length
    classNames.push(`hour-${hour}-cc-${characterCount}`)
  } else {
    const startHour = getHour({ isUntangled, note: startNote })
    const startCharacterCount = startNote.name.length
    const finishHour = getHour({ isUntangled, note: finishNote })
    const finishCharacterCount = finishNote.name.length
    classNames.push(`move-from-${startHour}-cc-${startCharacterCount}-to-${finishHour}-cc-${finishCharacterCount}`)
  }
  return buildClassName(noteLabelCssModule, classNames, [ "fixed-width-font" ])
}
