import { MusicalKey } from "@scalesTool/classes/MusicalKey"
import { MAX_MODE, MIN_MODE } from "@scalesTool/utilities/mode"


export enum Motion {
  Still = "Still",
  IncrementRoot = "IncrementRoot",
  DecrementRoot = "DecrementRoot",
  IncrementDegree = "IncrementDegree",
  DecrementDegree = "DecrementDegree",
  IncrementBoth = "IncrementBoth",
  DecrementBoth = "DecrementBoth",
}

interface canPerformMotionParameters {
  maxDegree: number,
  minDegree: number,
  musicalKey: MusicalKey,
  motion: Motion,
}

export function canPerformMotion({
  maxDegree,
  minDegree,
  musicalKey,
  motion,
}: canPerformMotionParameters): boolean {
  if (motion === Motion.IncrementRoot) {
    return musicalKey.mode < MAX_MODE
  }
  if (motion === Motion.DecrementRoot) {
    return musicalKey.mode > MIN_MODE
  }
  if (motion === Motion.IncrementDegree) {
    return (
      musicalKey.degree < maxDegree &&
      musicalKey.mode > MIN_MODE
    )
  }
  if (motion === Motion.DecrementDegree) {
    return (
      musicalKey.degree > minDegree &&
      musicalKey.mode < MAX_MODE
    )
  }
  if (motion === Motion.IncrementBoth) {
    return musicalKey.degree < maxDegree
  }
  if (motion === Motion.DecrementBoth) {
    return musicalKey.degree > minDegree
  }
  return false
}

interface getNextMusicalKeyParameters {
  currentMusicalKey: MusicalKey,
  motion: Motion,
}

export function getNextMusicalKey({
  currentMusicalKey,
  motion,
}: getNextMusicalKeyParameters): MusicalKey {
  if (motion === Motion.IncrementRoot) {
    return new MusicalKey({
      root: currentMusicalKey.root + 1,
      degree: currentMusicalKey.degree,
    })
  }
  if (motion === Motion.DecrementRoot) {
    return new MusicalKey({
      root: currentMusicalKey.root - 1,
      degree: currentMusicalKey.degree,
    })
  }
  if (motion === Motion.IncrementDegree) {
    return new MusicalKey({
      root: currentMusicalKey.root,
      degree: currentMusicalKey.degree + 1,
    })
  }
  if (motion === Motion.DecrementDegree) {
    return new MusicalKey({
      root: currentMusicalKey.root,
      degree: currentMusicalKey.degree - 1,
    })
  }
  if (motion === Motion.IncrementBoth) {
    return new MusicalKey({
      root: currentMusicalKey.root + 1,
      degree: currentMusicalKey.degree + 1,
    })
  }
  if (motion === Motion.DecrementBoth) {
    return new MusicalKey({
      root: currentMusicalKey.root - 1,
      degree: currentMusicalKey.degree - 1,
    })
  }
  return currentMusicalKey
}

export function getWillIncrementMode(
  motion: Motion,
): boolean {
  return (
    motion === Motion.IncrementRoot ||
    motion === Motion.DecrementDegree
  )
}

export function getWillDecrementMode(
  motion: Motion,
): boolean {
  return (
    motion === Motion.DecrementRoot ||
    motion === Motion.IncrementDegree
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

export function getWillIncrementDegree(
  motion: Motion,
): boolean {
  return (
    motion === Motion.IncrementDegree ||
    motion === Motion.IncrementBoth
  )
}

export function getWillDecrementDegree(
  motion: Motion,
): boolean {
  return (
    motion === Motion.DecrementDegree ||
    motion === Motion.DecrementBoth
  )
}
