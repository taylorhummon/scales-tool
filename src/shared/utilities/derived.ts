import { useMemo } from "react"

import { MusicalKey } from "@shared/classes/MusicalKey"
import { type ClockSettings } from "@shared/utilities/clock"
import {
  Motion,
  getNextMusicalKey,
  getNextIsCaterpillarPattern,
  getNextTriadOffset,
} from "@shared/utilities/motion"
import { type State } from "@shared/utilities/state"


export interface Derived {
  clockSettings: ClockSettings,
  motion: Motion,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  currentIsCaterpillarPattern: boolean,
  nextIsCaterpillarPattern: boolean,
  currentTriadOffset: number,
  nextTriadOffset: number,
}

export function useDerived(
  state: State,
): Derived {
  const {
    anchorOption,
    insideLabelsOption,
    outsideLabelsOption,
    triadOriginOption,
    animationOption,
    isUsingRootSpotlight,
    isUsingRankSpotlight,
    motion,
    root,
    rank,
    isCaterpillarPattern,
    triadOffset,
  } = state
  const clockSettings = useMemo(
    () => {
      return {
        anchorOption,
        insideLabelsOption,
        outsideLabelsOption,
        triadOriginOption,
        animationOption,
        isUsingRootSpotlight,
        isUsingRankSpotlight,
      }
    },
    [
      anchorOption,
      insideLabelsOption,
      outsideLabelsOption,
      triadOriginOption,
      animationOption,
      isUsingRootSpotlight,
      isUsingRankSpotlight,
    ]
  )
  const currentMusicalKey = useMemo(
    () => {
      return new MusicalKey({ root, rank })
    },
    [ root, rank ],
  )
  const nextMusicalKey = useMemo(
    () => {
      return getNextMusicalKey({ motion, currentMusicalKey })
    },
    [ motion, currentMusicalKey ],
  )
  const currentIsCaterpillarPattern = isCaterpillarPattern
  const nextIsCaterpillarPattern = useMemo(
    () => {
      return getNextIsCaterpillarPattern({ motion, currentIsCaterpillarPattern })
    },
    [ motion, currentIsCaterpillarPattern ]
  )
  const currentTriadOffset = triadOffset
  const nextTriadOffset = useMemo(
    () => {
      return getNextTriadOffset({ motion, currentTriadOffset })
    },
    [ motion, currentTriadOffset ]
  )
  return {
    clockSettings,
    motion,
    currentMusicalKey,
    nextMusicalKey,
    currentIsCaterpillarPattern,
    nextIsCaterpillarPattern,
    currentTriadOffset,
    nextTriadOffset,
  }
}
