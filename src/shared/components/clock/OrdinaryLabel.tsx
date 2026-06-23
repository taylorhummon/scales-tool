import { OrdinaryLabelText } from "@shared/components/clock/OrdinaryLabelText"
import { getCurrentHour, getNextHour } from "@shared/utilities/clock"
import { buildClassName } from "@shared/utilities/css"
import { type Derived } from "@shared/utilities/derived"
import { type NaturalNote } from "@shared/utilities/naturalNote"

import ordinaryLabelCssModule from "./OrdinaryLabel.module.scss"


interface OrdinaryLabelParameters {
  derived: Derived,
  isInside: boolean,
  naturalNote: NaturalNote,
}

export function OrdinaryLabel({
  derived,
  isInside,
  naturalNote,
}: OrdinaryLabelParameters): React.ReactNode {
  if (! isInside) {
    console.error("Ordinary labels not implemented on outside of clock")
    return null
  }
  const { currentMusicalKey, nextMusicalKey } = derived
  const startNote = currentMusicalKey.noteFromNaturalNote(naturalNote)
  const finishNote = nextMusicalKey.noteFromNaturalNote(naturalNote)
  const startHour = getCurrentHour(derived, startNote)
  const finishHour = getNextHour(derived, finishNote)
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
