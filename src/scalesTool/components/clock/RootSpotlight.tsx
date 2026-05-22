import { type MusicalKey } from "@scalesTool/classes/MusicalKey"
import { ROOT_SPOTLIGHT_STROKE, ROOT_SPOTLIGHT_FILL } from "@scalesTool/utilities/color"
import { type ClockSettings, getHour } from "@scalesTool/utilities/clock"
import { buildClassName } from "@scalesTool/utilities/css"

import rootSpotlightCssModule from "./RootSpotlight.module.scss"


interface RootSpotlightParameters {
  clockSettings: ClockSettings,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export function RootSpotlight({
  clockSettings,
  currentMusicalKey,
  nextMusicalKey,
}: RootSpotlightParameters): React.ReactNode {
  return (
    <circle
      className={getClassName(clockSettings, currentMusicalKey, nextMusicalKey)}
      data-testid={"clock-root-spotlight"}
      cx="0"
      cy="0"
      r="14"
      strokeWidth="1.6"
      stroke={ROOT_SPOTLIGHT_STROKE}
      fill={ROOT_SPOTLIGHT_FILL}
    />
  )
}

function getClassName(
  clockSettings: ClockSettings,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
): string {
  const classNames = [ "root-spotlight" ]
  const startHour = getHour({ clockSettings, musicalKey: currentMusicalKey, note: currentMusicalKey.rootNote })
  const finishHour = getHour({ clockSettings, musicalKey: nextMusicalKey, note: nextMusicalKey.rootNote })
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`)
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`)
  }
  return buildClassName(rootSpotlightCssModule, classNames)
}
