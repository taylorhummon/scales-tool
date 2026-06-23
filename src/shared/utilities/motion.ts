import { MusicalKey } from "@shared/classes/MusicalKey"
import { MAX_RANK, MIN_RANK } from "@shared/utilities/rank"
import { getRemainder } from "@shared/utilities/math"
import { MAX_MODE, MIN_MODE } from "@shared/utilities/mode"


export enum Motion {
  Still = "Still",
  ToCaterpillarPattern = "ToCaterpillarPattern",
  ToButterlflyPattern = "ToButterlflyPattern",
  RotateTriadCW = "RotateTriadCW",
  RotateTriadCCW = "RotateTriadCCW",
  IncrementRoot = "IncrementRoot",
  DecrementRoot = "DecrementRoot",
  IncrementRank = "IncrementRank",
  DecrementRank = "DecrementRank",
  IncrementBoth = "IncrementBoth",
  DecrementBoth = "DecrementBoth",
}

interface canPerformMotionParameters {
  motion: Motion,
  musicalKey: MusicalKey,
}

export function canPerformMotion({
  motion,
  musicalKey,
}: canPerformMotionParameters): boolean {
  if (motion === Motion.IncrementRoot) {
    return musicalKey.mode < MAX_MODE
  }
  if (motion === Motion.DecrementRoot) {
    return musicalKey.mode > MIN_MODE
  }
  if (motion === Motion.IncrementRank) {
    return (
      musicalKey.rank < MAX_RANK &&
      musicalKey.mode > MIN_MODE
    )
  }
  if (motion === Motion.DecrementRank) {
    return (
      musicalKey.rank > MIN_RANK &&
      musicalKey.mode < MAX_MODE
    )
  }
  if (motion === Motion.IncrementBoth) {
    return musicalKey.rank < MAX_RANK
  }
  if (motion === Motion.DecrementBoth) {
    return musicalKey.rank > MIN_RANK
  }
  if (motion === Motion.RotateTriadCW || motion === Motion.RotateTriadCCW) {
    return true
  }
  return false
}

interface getNextMusicalKeyParameters {
  motion: Motion,
  currentMusicalKey: MusicalKey,
}

export function getNextMusicalKey({
  motion,
  currentMusicalKey,
}: getNextMusicalKeyParameters): MusicalKey {
  if (motion === Motion.IncrementRoot) {
    return new MusicalKey({
      root: currentMusicalKey.root + 1,
      rank: currentMusicalKey.rank,
    })
  }
  if (motion === Motion.DecrementRoot) {
    return new MusicalKey({
      root: currentMusicalKey.root - 1,
      rank: currentMusicalKey.rank,
    })
  }
  if (motion === Motion.IncrementRank) {
    return new MusicalKey({
      root: currentMusicalKey.root,
      rank: currentMusicalKey.rank + 1,
    })
  }
  if (motion === Motion.DecrementRank) {
    return new MusicalKey({
      root: currentMusicalKey.root,
      rank: currentMusicalKey.rank - 1,
    })
  }
  if (motion === Motion.IncrementBoth) {
    return new MusicalKey({
      root: currentMusicalKey.root + 1,
      rank: currentMusicalKey.rank + 1,
    })
  }
  if (motion === Motion.DecrementBoth) {
    return new MusicalKey({
      root: currentMusicalKey.root - 1,
      rank: currentMusicalKey.rank - 1,
    })
  }
  return currentMusicalKey
}

interface getNextIsCaterpillarPatternParameters {
  motion: Motion,
  currentIsCaterpillarPattern: boolean,
}

export function getNextIsCaterpillarPattern({
  motion,
  currentIsCaterpillarPattern,
}: getNextIsCaterpillarPatternParameters): boolean {
  return (
    motion === Motion.ToCaterpillarPattern ||
    (currentIsCaterpillarPattern && motion !== Motion.ToButterlflyPattern)
  )
}

interface getNextTriadOffsetParameters {
  motion: Motion,
  currentTriadOffset: number,
}

export function getNextTriadOffset({
  motion,
  currentTriadOffset,
}: getNextTriadOffsetParameters): number {
  if (motion === Motion.RotateTriadCW) {
    return getRemainder(currentTriadOffset + 1, 7)
  }
  if (motion === Motion.RotateTriadCCW) {
    return getRemainder(currentTriadOffset - 1, 7)
  }
  return currentTriadOffset
}

export function getWillIncrementMode(
  motion: Motion,
): boolean {
  return (
    motion === Motion.IncrementRoot ||
    motion === Motion.DecrementRank
  )
}

export function getWillDecrementMode(
  motion: Motion,
): boolean {
  return (
    motion === Motion.DecrementRoot ||
    motion === Motion.IncrementRank
  )
}

export function getWillIncrementRoot(
  motion: Motion,
): boolean {
  return (
    motion === Motion.IncrementRoot ||
    motion === Motion.IncrementBoth
  )
}

export function getWillDecrementRoot(
  motion: Motion,
): boolean {
  return (
    motion === Motion.DecrementRoot ||
    motion === Motion.DecrementBoth
  )
}

export function getWillIncrementRank(
  motion: Motion,
): boolean {
  return (
    motion === Motion.IncrementRank ||
    motion === Motion.IncrementBoth
  )
}

export function getWillDecrementRank(
  motion: Motion,
): boolean {
  return (
    motion === Motion.DecrementRank ||
    motion === Motion.DecrementBoth
  )
}
