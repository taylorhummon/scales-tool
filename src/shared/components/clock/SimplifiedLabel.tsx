import { getCurrentHour, getNextHour } from "@shared/utilities/clock"
import { buildClassName } from "@shared/utilities/css"
import { type Derived } from "@shared/utilities/derived"
import { type SimplifiedLetter } from "@shared/utilities/simplifiedLetter"

import simplifiedLabelCssModule from "./SimplifiedLabel.module.scss"


interface SimplifiedLabelParameters {
  derived: Derived,
  isInside: boolean,
  simplifiedLetter: SimplifiedLetter,
}

export function SimplifiedLabel({
  derived,
  isInside,
  simplifiedLetter,
}: SimplifiedLabelParameters): React.ReactNode {
  const { currentMusicalKey, nextMusicalKey } = derived
  const startNote = currentMusicalKey.noteFromSimplifiedLetter(simplifiedLetter)
  const finishNote = nextMusicalKey.noteFromSimplifiedLetter(simplifiedLetter)
  const startHour = getCurrentHour(derived, startNote)
  const finishHour = getNextHour(derived, finishNote)

  return (
    <g
      className={getClassName(isInside, startHour, finishHour)}
      data-testid={`simplified-label-${simplifiedLetter}`}
    >
      <g
        className={simplifiedLabelCssModule["width-1"]}
      >
        <text>
          {simplifiedLetter}
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
    classNames.push("simplified-label-inside")
  } else {
    classNames.push("simplified-label-outside")
  }
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`)
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`)
  }
  return buildClassName(simplifiedLabelCssModule, classNames, [ "fixed-width-font" ])
}
