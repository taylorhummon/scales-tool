import { type MusicalKey } from "@scalesTool/classes/MusicalKey"
import { type ClockSettings, getHour } from "@scalesTool/utilities/clock"
import { buildClassName } from "@scalesTool/utilities/css"
import { SolfegeLetter } from "@scalesTool/utilities/solfege"

import solfegeLabelCssModule from "./SolfegeLabel.module.scss"


interface SolfegeLabelParameters {
  clockSettings: ClockSettings,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  solfegeLetter: SolfegeLetter,
}

export function SolfegeLabel({
  clockSettings,
  currentMusicalKey,
  nextMusicalKey,
  solfegeLetter,
}: SolfegeLabelParameters): React.ReactNode {
  const { isUsingSolfege } = clockSettings
  if (! isUsingSolfege) return null
  const startNote = currentMusicalKey.noteFromSolfegeLetter(solfegeLetter)
  const finishNote = nextMusicalKey.noteFromSolfegeLetter(solfegeLetter)
  const startHour = getHour({ clockSettings, note: startNote })
  const finishHour = getHour({ clockSettings, note: finishNote })

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
