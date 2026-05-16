import { type Note } from "@shared/classes/Note"
import { type NoteDotAnimator } from "@shared/classes/NoteDotAnimator"
import { type ClockSettings, getHour } from "@shared/utilities/clock"
import { buildClassName } from "@shared/utilities/css"
import { SolfegeLetter } from "@shared/utilities/solfege"

import noteDotCssModule from "./NoteDot.module.scss"


interface NoteDotInput {
  clockSettings: ClockSettings,
  noteDotAnimator: NoteDotAnimator,
  solfegeLetter: SolfegeLetter,
  note: Note,
}

export function NoteDot({
  clockSettings,
  noteDotAnimator,
  solfegeLetter,
  note,
}: NoteDotInput): React.ReactNode {
  const { isUntangled } = clockSettings

  return (
    <circle
      className={getClassName(isUntangled, noteDotAnimator, note)}
      cx="0"
      cy="0"
      r="8"
      fill="black"
      data-testid={`note-dot-${solfegeLetter}`}
    />
  )
}

function getClassName(
  isUntangled: boolean,
  noteDotAnimator: NoteDotAnimator,
  note: Note,
): string {
  const classNames = [ "note-dot" ]
  const startHour = getHour({ isUntangled, note })
  const finishHour = getHour({ isUntangled, note: noteDotAnimator.finishNote(note) })
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`)
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`)
  }
  return buildClassName(noteDotCssModule, classNames)
}
