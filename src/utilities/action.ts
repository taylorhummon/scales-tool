import type { State, Derived } from "src/types";
import { Motion } from "src/enumerations";


const MAX_DO_POSITION = 3;
const MAX_KEY_DEGREE = 14;  // this maximum is artificial


export function canPerformMotion(
  derived: Derived,
  motion: Motion
): boolean {
  if (motion === Motion.DecrementDoPosition) return canDecrementDoPosition(derived);
  if (motion === Motion.IncrementDoPosition) return canIncrementDoPosition(derived);
  if (motion === Motion.DecrementKeyDegree) return canDecrementKeyDegree(derived);
  if (motion === Motion.IncrementKeyDegree) return canIncrementKeyDegree(derived);
  if (motion === Motion.DecrementBoth) return canDecrementDoPosition(derived) && canDecrementKeyDegree(derived);
  if (motion === Motion.IncrementBoth) return canIncrementDoPosition(derived) && canIncrementKeyDegree(derived);
  return false;
}

function canDecrementDoPosition(
  derived: Derived
): boolean {
  return derived.doPosition > - MAX_DO_POSITION;
}

function canIncrementDoPosition(
  derived: Derived
): boolean {
  return derived.doPosition < MAX_DO_POSITION;
}

function canDecrementKeyDegree(
  derived: Derived
): boolean {
  return derived.keyDegree > - MAX_KEY_DEGREE;
}

function canIncrementKeyDegree(
  derived: Derived
): boolean {
  return derived.keyDegree < MAX_KEY_DEGREE;
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
