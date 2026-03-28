import type { State } from "src/types";
import { Motion } from "src/enumerations";


export function updateStateAtEndOfAnimation(
  state: State
): State {
  if (state.motion === Motion.DecrementLeft) {
    return {
      ...state,
      motion: Motion.Still,
      leftSliderPosition: state.leftSliderPosition - 1
    };
  }
  if (state.motion === Motion.IncrementLeft) {
    return {
      ...state,
      motion: Motion.Still,
      leftSliderPosition: state.leftSliderPosition + 1
    };
  }
  if (state.motion === Motion.DecrementRight) {
    return {
      ...state,
      motion: Motion.Still,
      rightSliderPosition: state.rightSliderPosition - 1
    };
  }
  if (state.motion === Motion.IncrementRight) {
    return {
      ...state,
      motion: Motion.Still,
      rightSliderPosition: state.rightSliderPosition + 1
    };
  }
  if (state.motion === Motion.DecrementBoth) {
    return {
      ...state,
      motion: Motion.Still,
      leftSliderPosition: state.leftSliderPosition - 1,
      rightSliderPosition: state.rightSliderPosition - 1
    };
  }
  if (state.motion === Motion.IncrementBoth) {
    return {
      ...state,
      motion: Motion.Still,
      leftSliderPosition: state.leftSliderPosition + 1,
      rightSliderPosition: state.rightSliderPosition + 1
    };
  }
  return state;
}
