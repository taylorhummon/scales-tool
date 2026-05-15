import { type MusicalKey } from "@shared/classes/MusicalKey"
import { SHARP, FLAT } from "@shared/classes/Note"
import { Selector } from "@shared/components/selector/Selector"
import { SelectorValue } from "@shared/components/selector/SelectorValue"
import { isBetweenInclusive } from "@shared/utilities/math"
import { type Motion, getWillIncrementDegree, getWillDecrementDegree } from "@shared/utilities/motion"
import { EXTENDED_POSITIONS } from "@shared/utilities/selector"

import degreeSelectorCssModule from "./DegreeSelector.module.scss"


interface DegreeSelectorInput {
  maxDegree: number,
  minDegree: number,
  motion: Motion,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export function DegreeSelector({
  maxDegree,
  minDegree,
  motion,
  musicalKey,
  nextMusicalKey,
}: DegreeSelectorInput): React.ReactNode {
  const pairs = EXTENDED_POSITIONS.map(
    (position) => ({ position, degree: musicalKey.degree + position })
  ).filter(
    ({ degree }) => isBetweenInclusive(degree, minDegree, maxDegree)
  )
  const degreeDifference = nextMusicalKey.degree - musicalKey.degree

  return (
    <Selector
      className={degreeSelectorCssModule["degree-selector"]}
      label="Deg"
      isIncrementing={getWillIncrementDegree(motion)}
      isDecrementing={getWillDecrementDegree(motion)}
    >
      {pairs.map(({ position, degree }) => (
        <SelectorValue
          key={position}
          currentPosition={position}
          nextPosition={position - degreeDifference}
        >
          {getFancyDegree(degree)}
        </SelectorValue>
      ))}
    </Selector>
  )
}

function getFancyDegree(
  degree: number,
): React.ReactNode {
  const count = Math.abs(degree)
  if (degree > 0) {
    return <>{count}{SHARP}</>
  }
  if (degree < 0) {
    return <>{count}{FLAT}</>
  }
  return <>0</>
}
