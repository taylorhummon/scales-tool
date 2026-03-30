import { Motion } from "src/enumerations";
import { MIN_DEGREE, MAX_DEGREE, MIN_MODE, MAX_MODE, MusicalKey } from "src/classes/MusicalKey";


export function canPerformMotion(
  musicalKey: MusicalKey,
  motion: Motion
): boolean {
  if (motion === Motion.DecrementDegree) {
    return musicalKey.degree > MIN_DEGREE;
  }
  if (motion === Motion.IncrementDegree) {
    return musicalKey.degree < MAX_DEGREE;
  }
  if (motion === Motion.DecrementMode) {
    return musicalKey.mode > MIN_MODE;
  }
  if (motion === Motion.IncrementMode) {
    return musicalKey.mode < MAX_MODE;
  }
  if (motion === Motion.DecrementBoth) {
    return musicalKey.degree > MIN_DEGREE && musicalKey.mode > MIN_MODE;
  }
  if (motion === Motion.IncrementBoth) {
    return musicalKey.degree < MAX_DEGREE && musicalKey.mode < MAX_MODE;
  }
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
    return new MusicalKey(musicalKey.degree, musicalKey.mode - 1);
  }
  if (motion === Motion.IncrementMode) {
    return new MusicalKey(musicalKey.degree, musicalKey.mode + 1);
  }
  if (motion === Motion.DecrementBoth) {
    return new MusicalKey(musicalKey.degree - 1, musicalKey.mode - 1);
  }
  if (motion === Motion.IncrementBoth) {
    return new MusicalKey(musicalKey.degree + 1, musicalKey.mode + 1);
  }
  return musicalKey;
}
