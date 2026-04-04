import { MIN_DEGREE, MAX_DEGREE, ALLOW_LYDIAN_LOCRIAN_LOOP } from "@/config";
import { Motion } from "@/enumerations";
import { MusicalKey } from "@/classes/MusicalKey";
import type { Note } from "@/classes/Note";
import { remainderFor } from "@/utilities/math";
import { MIN_MODE, MAX_MODE } from "@/utilities/mode";


export function canPerformMotion(
  musicalKey: MusicalKey,
  motion: Motion
): boolean {
  if (motion === Motion.DecrementDegree) return canDecrementDegree(musicalKey);
  if (motion === Motion.IncrementDegree) return canIncrementDegree(musicalKey);
  if (motion === Motion.DecrementMode) return canDecrementMode(musicalKey);
  if (motion === Motion.IncrementMode) return canIncrementMode(musicalKey);
  if (motion === Motion.DecrementBoth) return canDecrementDegree(musicalKey) && canDecrementMode(musicalKey);
  if (motion === Motion.IncrementBoth) return canIncrementDegree(musicalKey) && canIncrementMode(musicalKey);
  return false;
}

export function getNextMusicalKey(
  musicalKey: MusicalKey,
  motion: Motion
): MusicalKey {
  if (motion === Motion.DecrementDegree) {
    return new MusicalKey(musicalKey.degree - 1, musicalKey.mode);
  }
  if (motion === Motion.IncrementDegree) {
    return new MusicalKey(musicalKey.degree + 1, musicalKey.mode);
  }
  if (motion === Motion.DecrementMode) {
    return new MusicalKey(musicalKey.degree, decrementMode(musicalKey.mode));
  }
  if (motion === Motion.IncrementMode) {
    return new MusicalKey(musicalKey.degree, incrementMode(musicalKey.mode));
  }
  if (motion === Motion.DecrementBoth) {
    return new MusicalKey(musicalKey.degree - 1, decrementMode(musicalKey.mode));
  }
  if (motion === Motion.IncrementBoth) {
    return new MusicalKey(musicalKey.degree + 1, incrementMode(musicalKey.mode));
  }
  return musicalKey;
}

export function willDecrementDegree(
  motion: Motion
): boolean {
  return motion === Motion.DecrementDegree || motion === Motion.DecrementBoth;
}

export function willIncrementDegree(
  motion: Motion
): boolean {
  return motion === Motion.IncrementDegree || motion === Motion.IncrementBoth;
}

export function getWillDecrementMode(
  motion: Motion
): boolean {
  return motion === Motion.DecrementMode || motion === Motion.DecrementBoth;
}

export function getWillIncrementMode(
  motion: Motion
): boolean {
  return motion === Motion.IncrementMode || motion === Motion.IncrementBoth;
}

export function getNoteFinishHour(
  note: Note,
  motion: Motion
): number {
  if (willDecrementDegree(motion)) {
    return remainderFor(note.hour - 7, 12);
  } else if (willIncrementDegree(motion)) {
    return remainderFor(note.hour + 7, 12);
  } else {
    return note.hour;
  }
}

export function getRootDotFinishHour(
  rootNote: Note,
  motion: Motion
): number {
  if (rootNote.position === MIN_MODE) {
    if (motion === Motion.DecrementBoth) {
      return remainderFor(rootNote.hour - 1, 12);
    }
    if (motion === Motion.DecrementMode) {
      return remainderFor(rootNote.hour - 6, 12);
    }
  }
  if (rootNote.position === MAX_MODE) {
    if (motion === Motion.IncrementBoth) {
      return remainderFor(rootNote.hour + 1, 12);
    }
    if (motion === Motion.IncrementMode) {
      return remainderFor(rootNote.hour + 6, 12);
    }
  }
  if (motion === Motion.IncrementMode || motion === Motion.DecrementDegree) {
    return remainderFor(rootNote.hour - 7, 12);
  }
  if (motion === Motion.DecrementMode || motion === Motion.IncrementDegree) {
    return remainderFor(rootNote.hour + 7, 12);
  }
  return rootNote.hour;
}

// *** Private functions below this line ***

function canDecrementDegree(
  musicalKey: MusicalKey
): boolean {
  return musicalKey.degree > MIN_DEGREE && musicalKey.degree <= MAX_DEGREE;
}

function canIncrementDegree(
  musicalKey: MusicalKey
): boolean {
  return musicalKey.degree < MAX_DEGREE && musicalKey.degree >= MIN_DEGREE;
}

function canDecrementMode(
  musicalKey: MusicalKey
): boolean {
  if (musicalKey.mode > MIN_MODE && musicalKey.mode <= MAX_MODE) return true;
  if (musicalKey.mode === MIN_MODE && ALLOW_LYDIAN_LOCRIAN_LOOP) return true;
  return false;
}

function canIncrementMode(
  musicalKey: MusicalKey
): boolean {
  if (musicalKey.mode < MAX_MODE && musicalKey.mode >= MIN_MODE) return true;
  if (musicalKey.mode === MAX_MODE && ALLOW_LYDIAN_LOCRIAN_LOOP) return true;
  return false;
}

function decrementMode(
  mode: number
): number {
  if (mode === MIN_MODE) return MAX_MODE;
  return mode - 1;
}

function incrementMode(
  mode: number
): number {
  if (mode === MAX_MODE) return MIN_MODE;
  return mode + 1;
}
