import { useMemo } from "react"

import { type State } from "@scalesTool/utilities/state"

import { MusicalKey } from "@shared/classes/MusicalKey"
import { type ClockSettings } from "@shared/utilities/clock"
import { Motion, getNextMusicalKey } from "@shared/utilities/motion"


export interface Derived {
  clockSettings: ClockSettings,
  motion: Motion,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export function useDerived(
  state: State,
): Derived {
  const {
    isUntangled,
    isUsingSymmetryDot,
    isUsingSolfege,
    isUsingAnimation,
    motion,
    root,
    degree,
  } = state
  const clockSettings = useMemo(
    () => {
      return {
        isUntangled,
        isUsingSymmetryDot,
        isUsingSolfege,
        isUsingAnimation,
      }
    },
    [ isUntangled, isUsingSymmetryDot, isUsingSolfege, isUsingAnimation ]
  )
  const musicalKey = useMemo(
    () => {
      return new MusicalKey({ root, degree })
    },
    [ root, degree ],
  )
  const nextMusicalKey = useMemo(
    () => {
      return getNextMusicalKey({ musicalKey, motion })
    },
    [ musicalKey, motion ],
  )
  return {
    clockSettings,
    motion,
    musicalKey,
    nextMusicalKey,
  }
}
