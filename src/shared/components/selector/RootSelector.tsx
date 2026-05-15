import { type MusicalKey } from "@shared/classes/MusicalKey"
import { Selector } from "@shared/components/selector/Selector"
import { SelectorValue } from "@shared/components/selector/SelectorValue"
import { isBetweenInclusive } from "@shared/utilities/math"
import { type Motion, getWillIncrementRoot, getWillDecrementRoot } from "@shared/utilities/motion"
import { EXTENDED_POSITIONS, noteAt } from "@shared/utilities/selector"

import rootSelectorCssModule from "./RootSelector.module.scss"


interface RootSelectorInput {
  maxDegree: number,
  minDegree: number,
  motion: Motion,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export function RootSelector({
  maxDegree,
  minDegree,
  motion,
  musicalKey,
  nextMusicalKey,
}: RootSelectorInput): React.ReactNode {
  const pairs = EXTENDED_POSITIONS.map(
    (position) => ({ position, note: noteAt(musicalKey, position) })
  ).filter(
    ({ note }) => isBetweenInclusive(note.value, minDegree - 3, maxDegree + 3)
  )
  const rootDifference = nextMusicalKey.root - musicalKey.root

  return (
    <Selector
      className={rootSelectorCssModule["root-selector"]}
      label="Deg"
      isIncrementing={getWillIncrementRoot(motion)}
      isDecrementing={getWillDecrementRoot(motion)}
    >
      {pairs.map(({ position, note }) => (
        <SelectorValue
          key={position}
          currentPosition={position}
          nextPosition={position - rootDifference}
        >
          {note.name}
        </SelectorValue>
      ))}
    </Selector>
  )
}
