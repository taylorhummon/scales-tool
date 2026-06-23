import { getCurrentHour, getNextHour } from "@shared/utilities/clock"
import { ROOT_SPOTLIGHT_STROKE, ROOT_SPOTLIGHT_FILL } from "@shared/utilities/color"
import { buildClassName } from "@shared/utilities/css"
import { type Derived } from "@shared/utilities/derived"

import rootSpotlightCssModule from "./RootSpotlight.module.scss"


interface RootSpotlightParameters {
  derived: Derived,
}

export function RootSpotlight({
  derived,
}: RootSpotlightParameters): React.ReactNode {
  const { clockSettings: { isUsingRootSpotlight } } = derived
  if (! isUsingRootSpotlight) return null

  return (
    <circle
      className={getClassName(derived)}
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
  derived: Derived,
): string {
  const { currentMusicalKey, nextMusicalKey } = derived
  const classNames = [ "root-spotlight" ]
  const startHour = getCurrentHour(derived, currentMusicalKey.rootNote)
  const finishHour = getNextHour(derived, nextMusicalKey.rootNote)
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`)
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`)
  }
  return buildClassName(rootSpotlightCssModule, classNames)
}
