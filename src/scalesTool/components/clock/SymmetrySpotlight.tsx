import { type MusicalKey } from "@scalesTool/classes/MusicalKey"
import { SYMMETRY_SPOTLIGHT_STROKE, SYMMETRY_SPOTLIGHT_FILL } from "@scalesTool/utilities/color"
import { type ClockSettings, getHour } from "@scalesTool/utilities/clock"
import { buildClassName } from "@scalesTool/utilities/css"

import symmetryDotCssModule from "./SymmetrySpotlight.module.scss"


interface SymmetrySpotlightParameters {
  clockSettings: ClockSettings,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export function SymmetrySpotlight({
  clockSettings,
  currentMusicalKey,
  nextMusicalKey,
}: SymmetrySpotlightParameters): React.ReactNode {
  if (! clockSettings.isUsingSymmetrySpotlight) return null

  return (
    <circle
      className={getClassName(clockSettings, currentMusicalKey, nextMusicalKey)}
      data-testid={"clock-symmetry-spotlight"}
      cx="0"
      cy="0"
      r="14"
      strokeWidth="1.6"
      stroke={SYMMETRY_SPOTLIGHT_STROKE}
      fill={SYMMETRY_SPOTLIGHT_FILL}
    />
  )
}

function getClassName(
  clockSettings: ClockSettings,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
): string {
  const classNames = [ "symmetry-spotlight" ]
  const startHour = getHour({ clockSettings, note: currentMusicalKey.degreeNote })
  const finishHour = getHour({ clockSettings, note: nextMusicalKey.degreeNote })
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`)
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`)
  }
  return buildClassName(symmetryDotCssModule, classNames)
}
