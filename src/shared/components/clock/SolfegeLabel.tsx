import { getCurrentHour, getNextHour } from "@shared/utilities/clock"
import { buildClassName } from "@shared/utilities/css"
import { type Derived } from "@shared/utilities/derived"
import { SolfegeLetter } from "@shared/utilities/solfegeLetter"

import solfegeLabelCssModule from "./SolfegeLabel.module.scss"


interface SolfegeLabelParameters {
  derived: Derived,
  isInside: boolean,
  solfegeLetter: SolfegeLetter,
}

export function SolfegeLabel({
  derived,
  isInside,
  solfegeLetter,
}: SolfegeLabelParameters): React.ReactNode {
  const { currentMusicalKey, nextMusicalKey } = derived
  const startNote = currentMusicalKey.noteFromSolfegeLetter(solfegeLetter)
  const finishNote = nextMusicalKey.noteFromSolfegeLetter(solfegeLetter)
  const startHour = getCurrentHour(derived, startNote)
  const finishHour = getNextHour(derived, finishNote)

  return (
    <g
      className={getClassName(isInside, startHour, finishHour)}
      data-testid={`solfege-label-${solfegeLetter}`}
    >
      <g
        className={solfegeLabelCssModule[`width-${solfegeLetter.length}`]}
      >
        <text>
          {solfegeLetter}
        </text>
      </g>
    </g>
  )
}

function getClassName(
  isInside: boolean,
  startHour: number,
  finishHour: number,
): string {
  const classNames = []
  if (isInside) {
    classNames.push("solfege-label-inside")
  } else {
    classNames.push("solfege-label-outside")
  }
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`)
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`)
  }
  return buildClassName(solfegeLabelCssModule, classNames, [ "fixed-width-font" ])
}
