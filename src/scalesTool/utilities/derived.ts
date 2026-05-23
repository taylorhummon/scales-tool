import { useMemo } from "react"

import { MusicalKey } from "@scalesTool/classes/MusicalKey"
import { type ClockSettings } from "@scalesTool/utilities/clock"
import { Motion, getNextMusicalKey } from "@scalesTool/utilities/motion"
import { type State } from "@scalesTool/utilities/state"


export interface Derived {
  clockSettings: ClockSettings,
  motion: Motion,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export function useDerived(
  state: State,
): Derived {
  const {
    isUsingAnimation,
    isUntangled,
    isUsingSymmetrySpotlight,
    isUsingSolfege,
    isAnchoringRoot,
    animationOption,
    motion,
    root,
    degree,
  } = state
  const clockSettings = useMemo(
    () => {
      return {
        isUsingAnimation,
        isUntangled,
        isUsingSymmetrySpotlight,
        isUsingSolfege,
        isAnchoringRoot,
        animationOption,
      }
    },
    [
      isUsingAnimation,
      isUntangled,
      isUsingSymmetrySpotlight,
      isUsingSolfege,
      isAnchoringRoot,
      animationOption,
    ]
  )
  const currentMusicalKey = useMemo(
    () => {
      return new MusicalKey({ root, degree })
    },
    [ root, degree ],
  )
  const nextMusicalKey = useMemo(
    () => {
      return getNextMusicalKey({ currentMusicalKey, motion })
    },
    [ currentMusicalKey, motion ],
  )
  return {
    clockSettings,
    motion,
    currentMusicalKey,
    nextMusicalKey,
  }
}
