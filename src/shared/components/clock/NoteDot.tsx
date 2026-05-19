import { type MusicalKey } from "@shared/classes/MusicalKey"
import { type Note } from "@shared/classes/Note"
import { type NoteDotAnimator } from "@shared/classes/NoteDotAnimator"
import { type ClockSettings, getHour } from "@shared/utilities/clock"
import { buildClassName } from "@shared/utilities/css"
import { SolfegeLetter } from "@shared/utilities/solfege"

import noteDotCssModule from "./NoteDot.module.scss"


interface NoteDotInput {
  clockSettings: ClockSettings,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  noteDotAnimator: NoteDotAnimator,
  solfegeLetter: SolfegeLetter,
  note: Note,
}

export function NoteDot({
  clockSettings,
  musicalKey,
  nextMusicalKey,
  noteDotAnimator,
  solfegeLetter,
  note,
}: NoteDotInput): React.ReactNode {
  const finishNote = noteDotAnimator.finishNote(note)
  const startHour = getHour({ clockSettings, musicalKey, note })
  const finishHour = getHour({ clockSettings, musicalKey: nextMusicalKey, note: finishNote })

  return (
    <circle
      className={getClassName(startHour, finishHour)}
      cx="0"
      cy="0"
      r="8"
      fill="black"
      data-testid={`note-dot-${solfegeLetter}`}
    />
  )
}

function getClassName(
  startHour: number,
  finishHour: number,
): string {
  const classNames = [ "note-dot" ]
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`)
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`)
  }
  return buildClassName(noteDotCssModule, classNames)
}
