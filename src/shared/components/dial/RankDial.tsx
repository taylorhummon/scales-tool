import { SHARP, FLAT } from "@shared/classes/Note"
import { Dial } from "@shared/components/dial/Dial"
import { DialValue } from "@shared/components/dial/DialValue"
import { MAX_RANK, MIN_RANK } from "@shared/utilities/rank"
import { type Derived } from "@shared/utilities/derived"
import { EXTENDED_POSITIONS } from "@shared/utilities/dial"
import { isBetweenInclusive } from "@shared/utilities/math"
import { getWillIncrementRank, getWillDecrementRank } from "@shared/utilities/motion"


interface RankDialParameters {
  derived: Derived,
  clipPathId: string,
  className?: string,
}

export function RankDial({
  derived,
  clipPathId,
  className,
}: RankDialParameters): React.ReactNode {
  const { motion, currentMusicalKey, nextMusicalKey } = derived
  const pairs = EXTENDED_POSITIONS.map(
    (position) => ({ position, rank: currentMusicalKey.rank + position })
  ).filter(
    ({ rank }) => isBetweenInclusive(rank, MIN_RANK, MAX_RANK)
  )
  const rankDifference = nextMusicalKey.rank - currentMusicalKey.rank

  return (
    <Dial
      className={className}
      label="Rank"
      isIncrementing={getWillIncrementRank(motion)}
      isDecrementing={getWillDecrementRank(motion)}
      clipPathId={clipPathId}
    >
      {pairs.map(({ position, rank }) => (
        <DialValue
          key={position}
          currentPosition={position}
          nextPosition={position - rankDifference}
        >
          {getFancyRank(rank)}
        </DialValue>
      ))}
    </Dial>
  )
}

function getFancyRank(
  rank: number,
): React.ReactNode {
  const count = Math.abs(rank)
  if (rank > 0) {
    return <>{count}{SHARP}</>
  }
  if (rank < 0) {
    return <>{count}{FLAT}</>
  }
  return <>0</>
}
