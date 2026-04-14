import { MAX_DEGREE, MIN_DEGREE } from "@/config";
import { MusicalKey } from "@/classes/MusicalKey";
import type { Note } from "@/classes/Note";
import { AnimationType } from "@/utilities/animation";
import { remainderFor } from "@/utilities/math";
import { MAX_MODE, MIN_MODE } from "@/utilities/mode";


export enum Motion {
  Still = "Still",
  IncrementDegree = "IncrementDegree",
  DecrementDegree = "DecrementDegree",
  DecrementRoot = "DecrementRoot",
  IncrementRoot = "IncrementRoot",
  IncrementBoth = "IncrementBoth",
  DecrementBoth = "DecrementBoth"
}

export function canPerformMotion(
  musicalKey: MusicalKey,
  motion: Motion
): boolean {
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
  if (motion === Motion.IncrementRoot) {
    return musicalKey.mode < MAX_MODE;
  }
  if (motion === Motion.DecrementRoot) {
    return musicalKey.mode > MIN_MODE;
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
  if (motion === Motion.IncrementDegree) {
    return new MusicalKey(musicalKey.degree + 1, musicalKey.root);
  }
  if (motion === Motion.DecrementDegree) {
    return new MusicalKey(musicalKey.degree - 1, musicalKey.root);
  }
  if (motion === Motion.IncrementRoot) {
    return new MusicalKey(musicalKey.degree, musicalKey.root + 1);
  }
  if (motion === Motion.DecrementRoot) {
    return new MusicalKey(musicalKey.degree, musicalKey.root - 1);
  }
  if (motion === Motion.IncrementBoth) {
    return new MusicalKey(musicalKey.degree + 1, musicalKey.root + 1);
  }
  if (motion === Motion.DecrementBoth) {
    return new MusicalKey(musicalKey.degree - 1, musicalKey.root - 1);
  }
  return musicalKey;
}

export function getNoteFinishHour(
  musicalKey: MusicalKey,
  animationType: AnimationType,
  motion: Motion,
  note: Note
): number {
  if (animationType === AnimationType.Simple) {
    if (getWillIncrementDegree(motion) && note.position === musicalKey.noteInTopPosition.position) {
      return remainderFor(note.hour + 1, 12);
    } else if (getWillDecrementDegree(motion) && note.position === musicalKey.noteInBottomPosition.position) {
      return remainderFor(note.hour - 1, 12);
    }
  } else if (animationType === AnimationType.Ballet) {
    if (getWillIncrementDegree(motion)) {
      return remainderFor(note.hour + 7, 12);
    } else if (getWillDecrementDegree(motion)) {
      return remainderFor(note.hour - 7, 12);
    }
  }
  return note.hour;
}

export function getRootDotFinishHour(
  rootNote: Note,
  motion: Motion
): number {
  if (getWillIncrementRoot(motion)) {
    return remainderFor(rootNote.hour + 7, 12);
  }
  if (getWillDecrementRoot(motion)) {
    return remainderFor(rootNote.hour - 7, 12);
  }
  return rootNote.hour;
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
