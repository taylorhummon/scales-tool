import { getCurrentHour, getNextHour } from "@shared/utilities/clock"
import { RANK_SPOTLIGHT_STROKE, RANK_SPOTLIGHT_FILL } from "@shared/utilities/color"
import { buildClassName } from "@shared/utilities/css"
import { type Derived } from "@shared/utilities/derived"

import rankSpotlightCssModule from "./RankSpotlight.module.scss"


interface RankSpotlightParameters {
  derived: Derived,
}

export function RankSpotlight({
  derived,
}: RankSpotlightParameters): React.ReactNode {
  const { clockSettings } = derived
  const { isUsingRankSpotlight } = clockSettings
  if (! isUsingRankSpotlight) return null

  return (
    <circle
      className={getClassName(derived)}
      data-testid={"clock-rank-spotlight"}
      cx="0"
      cy="0"
      r="14"
      strokeWidth="1.6"
      stroke={RANK_SPOTLIGHT_STROKE}
      fill={RANK_SPOTLIGHT_FILL}
    />
  )
}

function getClassName(
  derived: Derived,
): string {
  const { currentMusicalKey, nextMusicalKey } = derived
  const classNames = [ "rank-spotlight" ]
  const startHour = getCurrentHour(derived, currentMusicalKey.rankNote)
  const finishHour = getNextHour(derived, nextMusicalKey.rankNote)
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`)
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`)
  }
  return buildClassName(rankSpotlightCssModule, classNames)
}
