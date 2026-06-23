import { Dial } from "@shared/components/dial/Dial"
import { DialValue } from "@shared/components/dial/DialValue"
import { MAX_RANK, MIN_RANK } from "@shared/utilities/rank"
import { type Derived } from "@shared/utilities/derived"
import { EXTENDED_POSITIONS, noteAt } from "@shared/utilities/dial"
import { isBetweenInclusive } from "@shared/utilities/math"
import { getWillIncrementRoot, getWillDecrementRoot } from "@shared/utilities/motion"


interface RootDialParameters {
  derived: Derived,
  clipPathId: string,
  className?: string,
}

export function RootDial({
  derived,
  clipPathId,
  className,
}: RootDialParameters): React.ReactNode {
  const { motion, currentMusicalKey, nextMusicalKey } = derived
  const pairs = EXTENDED_POSITIONS.map(
    (position) => ({ position, note: noteAt(currentMusicalKey, position) })
  ).filter(
    ({ note }) => isBetweenInclusive(note.value, MIN_RANK - 3, MAX_RANK + 3)
  )
  const rootDifference = nextMusicalKey.root - currentMusicalKey.root

  return (
    <Dial
      className={className}
      label="Root"
      isIncrementing={getWillIncrementRoot(motion)}
      isDecrementing={getWillDecrementRoot(motion)}
      clipPathId={clipPathId}
    >
      {pairs.map(({ position, note }) => (
        <DialValue
          key={position}
          currentPosition={position}
          nextPosition={position - rootDifference}
        >
          {note.name}
        </DialValue>
      ))}
    </Dial>
  )
}
