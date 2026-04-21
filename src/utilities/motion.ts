import { MAX_DEGREE, MIN_DEGREE } from "@/config";
import { MusicalKey } from "@/classes/MusicalKey";
import { MAX_MODE, MIN_MODE } from "@/utilities/mode";


export enum Motion {
  Still = "Still",
  DecrementRoot = "DecrementRoot",
  IncrementRoot = "IncrementRoot",
  IncrementDegree = "IncrementDegree",
  DecrementDegree = "DecrementDegree",
  IncrementBoth = "IncrementBoth",
  DecrementBoth = "DecrementBoth"
}

export function canPerformMotion(
  musicalKey: MusicalKey,
  motion: Motion
): boolean {
  if (motion === Motion.IncrementRoot) {
    return musicalKey.mode < MAX_MODE;
  }
  if (motion === Motion.DecrementRoot) {
    return musicalKey.mode > MIN_MODE;
  }
  if (motion === Motion.IncrementDegree) {
    return (
      musicalKey.degree < MAX_DEGREE &&
      musicalKey.mode > MIN_MODE
    );
  }
  if (motion === Motion.DecrementDegree) {
    return (
      musicalKey.degree > MIN_DEGREE &&
      musicalKey.mode < MAX_MODE
    );
  }
  if (motion === Motion.IncrementBoth) {
    return musicalKey.degree < MAX_DEGREE;
  }
  if (motion === Motion.DecrementBoth) {
    return musicalKey.degree > MIN_DEGREE;
  }
  return false;
}

export function getNextMusicalKey(
  musicalKey: MusicalKey,
  motion: Motion
): MusicalKey {
  if (motion === Motion.IncrementRoot) {
    return new MusicalKey(musicalKey.root + 1, musicalKey.degree);
  }
  if (motion === Motion.DecrementRoot) {
    return new MusicalKey(musicalKey.root - 1, musicalKey.degree);
  }
  if (motion === Motion.IncrementDegree) {
    return new MusicalKey(musicalKey.root, musicalKey.degree + 1);
  }
  if (motion === Motion.DecrementDegree) {
    return new MusicalKey(musicalKey.root, musicalKey.degree - 1);
  }
  if (motion === Motion.IncrementBoth) {
    return new MusicalKey(musicalKey.root + 1, musicalKey.degree + 1);
  }
  if (motion === Motion.DecrementBoth) {
    return new MusicalKey(musicalKey.root - 1, musicalKey.degree - 1);
  }
  return musicalKey;
}

export function getWillIncrementRoot(
  motion: Motion
): boolean {
  return motion === Motion.IncrementRoot || motion === Motion.IncrementBoth;
}

export function getWillDecrementRoot(
  motion: Motion
): boolean {
  return motion === Motion.DecrementRoot || motion === Motion.DecrementBoth;
}

export function getWillIncrementDegree(
  motion: Motion
): boolean {
  return motion === Motion.IncrementDegree || motion === Motion.IncrementBoth;
}

export function getWillDecrementDegree(
  motion: Motion
): boolean {
  return motion === Motion.DecrementDegree || motion === Motion.DecrementBoth;
}
