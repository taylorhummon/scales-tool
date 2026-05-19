import { type MusicalKey } from "@shared/classes/MusicalKey"
import { type NoteLabelAnimator } from "@shared/classes/NoteLabelAnimator"
import { NoteLabelText } from "@shared/components/clock/NoteLabelText"
import { type ClockSettings, getHour } from "@shared/utilities/clock"
import { buildClassName } from "@shared/utilities/css"
import { type NaturalNote } from "@shared/utilities/naturalNote"

import noteLabelCssModule from "./NoteLabel.module.scss"


interface NoteLabelInput {
  clockSettings: ClockSettings,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  noteLabelAnimator: NoteLabelAnimator,
  naturalNote: NaturalNote,
}

export function NoteLabel({
  clockSettings,
  musicalKey,
  nextMusicalKey,
  noteLabelAnimator,
  naturalNote,
}: NoteLabelInput): React.ReactNode {
  const startNote = noteLabelAnimator.startNote(naturalNote)
  const finishNote = noteLabelAnimator.finishNote(naturalNote)
  const startHour = getHour({ clockSettings, musicalKey, note: startNote })
  const finishHour = getHour({ clockSettings, musicalKey: nextMusicalKey, note: finishNote })
  const startCharacterCount = startNote.name.length
  const finishCharacterCount = finishNote.name.length

  return (
    <g
      className={getClassName(startHour, finishHour, startCharacterCount, finishCharacterCount)}
      data-testid={`note-label-${naturalNote}`}
    >
      <NoteLabelText
        startNote={startNote}
        finishNote={finishNote}
      />
    </g>
  )
}

function getClassName(
  startHour: number,
  finishHour: number,
  startCharacterCount: number,
  finishCharacterCount: number,
): string {
  const classNames = [ "note-label" ]
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}-cc-${startCharacterCount}`)
  } else {
    classNames.push(`move-from-${startHour}-cc-${startCharacterCount}-to-${finishHour}-cc-${finishCharacterCount}`)
  }
  return buildClassName(noteLabelCssModule, classNames, [ "fixed-width-font" ])
}
