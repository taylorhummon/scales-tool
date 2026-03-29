import type { State } from "src/types";
import { Motion } from "src/enumerations";
import { MIN_DEGREE, MAX_DEGREE, MIN_MODE, MAX_MODE, MusicalKey } from "src/classes/MusicalKey";


export function canPerformMotion(
  musicalKey: MusicalKey,
  motion: Motion
): boolean {
  if (motion === Motion.DecrementDegree) return musicalKey.degree > MIN_DEGREE;
  if (motion === Motion.IncrementDegree) return musicalKey.degree < MAX_DEGREE;
  if (motion === Motion.DecrementMode) return musicalKey.mode > MIN_MODE;
  if (motion === Motion.IncrementMode) return musicalKey.mode < MAX_MODE;
  if (motion === Motion.DecrementBoth) return musicalKey.degree > MIN_DEGREE && musicalKey.mode > MIN_MODE;
  if (motion === Motion.IncrementBoth) return musicalKey.degree < MAX_DEGREE && musicalKey.mode < MAX_MODE;
  return false;
}

export function updateStateAtEndOfAnimation(
  state: State
): State {
  if (state.motion === Motion.DecrementDegree) {
    return {
      ...state,
      degree: state.degree - 1,
      motion: Motion.Still
    };
  }
  if (state.motion === Motion.IncrementDegree) {
    return {
      ...state,
      degree: state.degree + 1,
      motion: Motion.Still
    };
  }
  if (state.motion === Motion.DecrementMode) {
    return {
      ...state,
      mode: state.mode - 1,
      motion: Motion.Still
    };
  }
  if (state.motion === Motion.IncrementMode) {
    return {
      ...state,
      mode: state.mode + 1,
      motion: Motion.Still
    };
  }
  if (state.motion === Motion.DecrementBoth) {
    return {
      ...state,
      degree: state.degree - 1,
      mode: state.mode - 1,
      motion: Motion.Still
    };
  }
  if (state.motion === Motion.IncrementBoth) {
    return {
      ...state,
      degree: state.degree + 1,
      mode: state.mode + 1,
      motion: Motion.Still
    };
  }
  return state;
}
