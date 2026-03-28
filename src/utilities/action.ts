import type { State } from "src/types";
import { Motion } from "src/enumerations";
import { MusicalKey } from "src/classes/MusicalKey";
import { MAX_DO_POSITION, MAX_KEY_DEGREE } from "src/classes/MusicalKey";


export function canPerformMotion(
  musicalKey: MusicalKey,
  motion: Motion
): boolean {
  if (motion === Motion.DecrementDoPosition) return canDecrementDoPosition(musicalKey);
  if (motion === Motion.IncrementDoPosition) return canIncrementDoPosition(musicalKey);
  if (motion === Motion.DecrementKeyDegree) return canDecrementKeyDegree(musicalKey);
  if (motion === Motion.IncrementKeyDegree) return canIncrementKeyDegree(musicalKey);
  if (motion === Motion.DecrementBoth) return canDecrementDoPosition(musicalKey) && canDecrementKeyDegree(musicalKey);
  if (motion === Motion.IncrementBoth) return canIncrementDoPosition(musicalKey) && canIncrementKeyDegree(musicalKey);
  return false;
}

export function updateStateAtEndOfAnimation(
  state: State
): State {
  if (state.motion === Motion.DecrementDoPosition) {
    return {
      ...state,
      motion: Motion.Still,
      doPosition: state.doPosition - 1
    };
  }
  if (state.motion === Motion.IncrementDoPosition) {
    return {
      ...state,
      motion: Motion.Still,
      doPosition: state.doPosition + 1
    };
  }
  if (state.motion === Motion.DecrementKeyDegree) {
    return {
      ...state,
      motion: Motion.Still,
      keyDegree: state.keyDegree - 1
    };
  }
  if (state.motion === Motion.IncrementKeyDegree) {
    return {
      ...state,
      motion: Motion.Still,
      keyDegree: state.keyDegree + 1
    };
  }
  if (state.motion === Motion.DecrementBoth) {
    return {
      ...state,
      motion: Motion.Still,
      doPosition: state.doPosition - 1,
      keyDegree: state.keyDegree - 1
    };
  }
  if (state.motion === Motion.IncrementBoth) {
    return {
      ...state,
      motion: Motion.Still,
      doPosition: state.doPosition + 1,
      keyDegree: state.keyDegree + 1
    };
  }
  return state;
}

// *** Private functions below this line ***

function canDecrementDoPosition(
  musicalKey: MusicalKey
): boolean {
  return musicalKey.doPosition > - MAX_DO_POSITION;
}

function canIncrementDoPosition(
  musicalKey: MusicalKey
): boolean {
  return musicalKey.doPosition < MAX_DO_POSITION;
}

function canDecrementKeyDegree(
  musicalKey: MusicalKey
): boolean {
  return musicalKey.degree > - MAX_KEY_DEGREE;
}

function canIncrementKeyDegree(
  musicalKey: MusicalKey
): boolean {
  return musicalKey.degree < MAX_KEY_DEGREE;
}
