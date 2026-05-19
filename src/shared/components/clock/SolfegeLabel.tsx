import { type MusicalKey } from "@shared/classes/MusicalKey"
import { type Note } from "@shared/classes/Note"
import { SolfegeLabelAnimator } from "@shared/classes/SolfegeLabelAnimator"
import { type ClockSettings, getHour } from "@shared/utilities/clock"
import { buildClassName } from "@shared/utilities/css"
import { SolfegeLetter } from "@shared/utilities/solfege"

import solfegeLabelCssModule from "./SolfegeLabel.module.scss"


interface SolfegeLabelInput {
  clockSettings: ClockSettings,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  solfegeLabelAnimator: SolfegeLabelAnimator,
  solfegeLetter: SolfegeLetter,
}

export function SolfegeLabel({
  clockSettings,
  musicalKey,
  nextMusicalKey,
  solfegeLabelAnimator,
  solfegeLetter,
}: SolfegeLabelInput): React.ReactNode {
  const { isUsingSolfege } = clockSettings
  if (! isUsingSolfege) return null
  const startNote = solfegeLabelAnimator.startNote(solfegeLetter)
  const finishNote = solfegeLabelAnimator.finishNote(solfegeLetter)
  const startHour = getHour({ clockSettings, musicalKey, note: startNote })
  const finishHour = getHour({ clockSettings, musicalKey: nextMusicalKey, note: finishNote })

  return (
    <g
      className={getClassName(startHour, finishHour)}
      data-testid={`solfege-label-${solfegeLetter}`}
    >
      <g className={getInnerClassName(solfegeLetter)}>
        <text className={solfegeLabelCssModule["text"]}>
          {solfegeLetter}
        </text>
      </g>
    </g>
  )
}

function getClassName(
  startHour: number,
  finishHour: number,
): string {
  const classNames = [ "solfege-label" ]
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`)
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`)
  }
  return buildClassName(solfegeLabelCssModule, classNames, [ "fixed-width-font" ])
}

function getInnerClassName(
  solfegeLetter: SolfegeLetter
): string {
  const classNames = [ "solfege-label-inner" ]
  if (solfegeLetter === SolfegeLetter.Sol) {
    classNames.push("wide")
  } else {
    classNames.push("regular")
  }
  return buildClassName(solfegeLabelCssModule, classNames)
}
