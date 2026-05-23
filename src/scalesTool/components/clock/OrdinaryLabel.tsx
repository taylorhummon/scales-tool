import { type MusicalKey } from "@scalesTool/classes/MusicalKey"
import { OrdinaryLabelText } from "@scalesTool/components/clock/OrdinaryLabelText"
import { type ClockSettings, getHour } from "@scalesTool/utilities/clock"
import { buildClassName } from "@scalesTool/utilities/css"
import { type NaturalNote } from "@scalesTool/utilities/naturalNote"

import ordinaryLabelCssModule from "./OrdinaryLabel.module.scss"


interface OrdinaryLabelParameters {
  clockSettings: ClockSettings,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  naturalNote: NaturalNote,
}

export function OrdinaryLabel({
  clockSettings,
  currentMusicalKey,
  nextMusicalKey,
  naturalNote,
}: OrdinaryLabelParameters): React.ReactNode {
  const startNote = currentMusicalKey.noteFromNaturalNote(naturalNote)
  const finishNote = nextMusicalKey.noteFromNaturalNote(naturalNote)
  const startHour = getHour({ clockSettings, musicalKey: currentMusicalKey, note: startNote })
  const finishHour = getHour({ clockSettings, musicalKey: nextMusicalKey, note: finishNote })
  const startCharacterCount = startNote.name.length
  const finishCharacterCount = finishNote.name.length

  return (
    <g
      className={getClassName(startHour, finishHour, startCharacterCount, finishCharacterCount)}
      data-testid={`ordinary-label-${naturalNote}`}
    >
      <OrdinaryLabelText
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
  const classNames = [ "ordinary-label" ]
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}-cc-${startCharacterCount}`)
  } else {
    classNames.push(`move-from-${startHour}-cc-${startCharacterCount}-to-${finishHour}-cc-${finishCharacterCount}`)
  }
  return buildClassName(ordinaryLabelCssModule, classNames, [ "fixed-width-font" ])
}
