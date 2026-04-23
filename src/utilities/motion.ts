import { MAX_DEGREE, MIN_DEGREE } from "@/config";
import { MusicalKey } from "@/classes/MusicalKey";
import { MAX_MODE, MIN_MODE } from "@/utilities/mode";


export enum Motion {
  Still = "Still",
  IncrementModeAndIncrementRoot = "IncrementModeAndIncrementRoot",
  DecrementModeAndDecrementRoot = "DecrementModeAndDecrementRoot",
  IncrementRootAndIncrementDegree = "IncrementRootAndIncrementDegree",
  DecrementRootAndDecrementDegree = "DecrementRootAndDecrementDegree",
  IncrementDegreeAndDecrementMode = "IncrementDegreeAndDecrementMode",
  DecrementDegreeAndIncrementMode = "DecrementDegreeAndIncrementMode",
}

export function canPerformMotion(
  musicalKey: MusicalKey,
  motion: Motion
): boolean {
  if (motion === Motion.IncrementModeAndIncrementRoot) {
    return musicalKey.mode < MAX_MODE;
  }
  if (motion === Motion.DecrementModeAndDecrementRoot) {
    return musicalKey.mode > MIN_MODE;
  }
  if (motion === Motion.IncrementDegreeAndDecrementMode) {
    return (
      musicalKey.degree < MAX_DEGREE &&
      musicalKey.mode > MIN_MODE
    );
  }
  if (motion === Motion.DecrementDegreeAndIncrementMode) {
    return (
      musicalKey.degree > MIN_DEGREE &&
      musicalKey.mode < MAX_MODE
    );
  }
  if (motion === Motion.IncrementRootAndIncrementDegree) {
    return musicalKey.degree < MAX_DEGREE;
  }
  if (motion === Motion.DecrementRootAndDecrementDegree) {
    return musicalKey.degree > MIN_DEGREE;
  }
  return false;
}

export function getNextMusicalKey(
  musicalKey: MusicalKey,
  motion: Motion
): MusicalKey {
  if (motion === Motion.IncrementModeAndIncrementRoot) {
    return new MusicalKey(musicalKey.root + 1, musicalKey.degree);
  }
  if (motion === Motion.DecrementModeAndDecrementRoot) {
    return new MusicalKey(musicalKey.root - 1, musicalKey.degree);
  }
  if (motion === Motion.IncrementDegreeAndDecrementMode) {
    return new MusicalKey(musicalKey.root, musicalKey.degree + 1);
  }
  if (motion === Motion.DecrementDegreeAndIncrementMode) {
    return new MusicalKey(musicalKey.root, musicalKey.degree - 1);
  }
  if (motion === Motion.IncrementRootAndIncrementDegree) {
    return new MusicalKey(musicalKey.root + 1, musicalKey.degree + 1);
  }
  if (motion === Motion.DecrementRootAndDecrementDegree) {
    return new MusicalKey(musicalKey.root - 1, musicalKey.degree - 1);
  }
  return musicalKey;
}

export function getWillIncrementMode(
  motion: Motion
): boolean {
  return motion === Motion.IncrementModeAndIncrementRoot || motion === Motion.DecrementDegreeAndIncrementMode;
}

export function getWillDecrementMode(
  motion: Motion
): boolean {
  return motion === Motion.DecrementModeAndDecrementRoot || motion === Motion.IncrementDegreeAndDecrementMode;
}

export function getWillIncrementRoot(
  motion: Motion
): boolean {
  return motion === Motion.IncrementModeAndIncrementRoot || motion === Motion.IncrementRootAndIncrementDegree;
}

export function getWillDecrementRoot(
  motion: Motion
): boolean {
  return motion === Motion.DecrementModeAndDecrementRoot || motion === Motion.DecrementRootAndDecrementDegree;
}

export function getWillIncrementDegree(
  motion: Motion
): boolean {
  return motion === Motion.IncrementDegreeAndDecrementMode || motion === Motion.IncrementRootAndIncrementDegree;
}

export function getWillDecrementDegree(
  motion: Motion
): boolean {
  return motion === Motion.DecrementDegreeAndIncrementMode || motion === Motion.DecrementRootAndDecrementDegree;
}
