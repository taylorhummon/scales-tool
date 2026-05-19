import { type MusicalKey } from "@shared/classes/MusicalKey"
import { SYMMETRY_DOT_STROKE, SYMMETRY_DOT_FILL } from "@shared/utilities/color"
import { type ClockSettings, getHour } from "@shared/utilities/clock"
import { buildClassName } from "@shared/utilities/css"

import symmetryDotCssModule from "./SymmetryDot.module.scss"


interface SymmetryDotInput {
  clockSettings: ClockSettings,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export function SymmetryDot({
  clockSettings,
  musicalKey,
  nextMusicalKey,
}: SymmetryDotInput): React.ReactNode {
  if (! clockSettings.isUsingSymmetryDot) return null

  return (
    <circle
      className={getClassName(clockSettings, musicalKey, nextMusicalKey)}
      data-testid={"clock-symmetry-dot"}
      cx="0"
      cy="0"
      r="14"
      strokeWidth="1.6"
      stroke={SYMMETRY_DOT_STROKE}
      fill={SYMMETRY_DOT_FILL}
    />
  )
}

function getClassName(
  clockSettings: ClockSettings,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
): string {
  const classNames = [ "symmetry-dot" ]
  const startHour = getHour({ clockSettings, musicalKey, note: musicalKey.symmetryNote })
  const finishHour = getHour({ clockSettings, musicalKey: nextMusicalKey, note: nextMusicalKey.symmetryNote })
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`)
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`)
  }
  return buildClassName(symmetryDotCssModule, classNames)
}
