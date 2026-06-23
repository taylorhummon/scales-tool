import { type DotAnimator } from "@shared/classes/DotAnimator"
import { getCurrentHour } from "@shared/utilities/clock"
import { buildClassName } from "@shared/utilities/css"
import { type Derived } from "@shared/utilities/derived"
import { SolfegeLetter } from "@shared/utilities/solfegeLetter"

import dotCssModule from "./Dot.module.scss"


interface DotParameters {
  derived: Derived,
  dotAnimator: DotAnimator,
  solfegeLetter: SolfegeLetter,
}

export function Dot({
  derived,
  dotAnimator,
  solfegeLetter,
}: DotParameters): React.ReactNode {
  const { currentMusicalKey } = derived
  const startNote = currentMusicalKey.noteFromSolfegeLetter(solfegeLetter)
  const startHour = getCurrentHour(derived, startNote)
  const finishHour = dotAnimator.getFinishHour(startHour, startNote.naturalNote, solfegeLetter)

  return (
    <circle
      className={getClassName(startHour, finishHour)}
      cx="0"
      cy="0"
      r="8"
      fill="black"
      data-testid={`dot-${solfegeLetter}`}
    />
  )
}

function getClassName(
  startHour: number,
  finishHour: number,
): string {
  const classNames = [ "dot" ]
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`)
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`)
  }
  return buildClassName(dotCssModule, classNames)
}
