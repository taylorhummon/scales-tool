import { type MusicalKey } from "@shared/classes/MusicalKey"
import { ROOT_DOT_STROKE, ROOT_DOT_FILL } from "@shared/utilities/color"
import { type ClockSettings, getHour } from "@shared/utilities/clock"
import { buildClassName } from "@shared/utilities/css"

import rootDotCssModule from "./RootDot.module.scss"


interface RootDotInput {
  clockSettings: ClockSettings,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export function RootDot({
  clockSettings,
  musicalKey,
  nextMusicalKey,
}: RootDotInput): React.ReactNode {
  return (
    <circle
      className={getClassName(clockSettings, musicalKey, nextMusicalKey)}
      data-testid={"clock-root-dot"}
      cx="0"
      cy="0"
      r="14"
      strokeWidth="1.6"
      stroke={ROOT_DOT_STROKE}
      fill={ROOT_DOT_FILL}
    />
  )
}

function getClassName(
  clockSettings: ClockSettings,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
): string {
  const classNames = [ "root-dot" ]
  const startHour = getHour({ clockSettings, musicalKey, note: musicalKey.rootNote })
  const finishHour = getHour({ clockSettings, musicalKey: nextMusicalKey, note: nextMusicalKey.rootNote })
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`)
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`)
  }
  return buildClassName(rootDotCssModule, classNames)
}
