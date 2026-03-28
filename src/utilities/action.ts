import type { State } from "src/types";
import { Motion } from "src/enumerations";
import { MIN_MODE, MAX_MODE, MIN_DEGREE, MAX_DEGREE, MusicalKey } from "src/classes/MusicalKey";


export function canPerformMotion(
  musicalKey: MusicalKey,
  motion: Motion
): boolean {
  if (motion === Motion.DecrementMode) return musicalKey.mode > MIN_MODE;
  if (motion === Motion.IncrementMode) return musicalKey.mode < MAX_MODE;
  if (motion === Motion.DecrementDegree) return musicalKey.degree > MIN_DEGREE;
  if (motion === Motion.IncrementDegree) return musicalKey.degree < MAX_DEGREE;
  if (motion === Motion.DecrementBoth) return (musicalKey.mode > MIN_MODE) && (musicalKey.degree > MIN_DEGREE);
  if (motion === Motion.IncrementBoth) return (musicalKey.mode < MAX_MODE) && (musicalKey.degree < MAX_DEGREE);
  return false;
}

export function updateStateAtEndOfAnimation(
  state: State
): State {
  if (state.motion === Motion.DecrementMode) {
    return {
      ...state,
      motion: Motion.Still,
      mode: state.mode - 1
    };
  }
  if (state.motion === Motion.IncrementMode) {
    return {
      ...state,
      motion: Motion.Still,
      mode: state.mode + 1
    };
  }
  if (state.motion === Motion.DecrementDegree) {
    return {
      ...state,
      motion: Motion.Still,
      degree: state.degree - 1
    };
  }
  if (state.motion === Motion.IncrementDegree) {
    return {
      ...state,
      motion: Motion.Still,
      degree: state.degree + 1
    };
  }
  if (state.motion === Motion.DecrementBoth) {
    return {
      ...state,
      motion: Motion.Still,
      mode: state.mode - 1,
      degree: state.degree - 1
    };
  }
  if (state.motion === Motion.IncrementBoth) {
    return {
      ...state,
      motion: Motion.Still,
      mode: state.mode + 1,
      degree: state.degree + 1
    };
  }
  return state;
}
