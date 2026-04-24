export const EXTENDED_POSITIONS = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

export enum SelectorValueState {
  Unselected = "unselected",
  Selected = "selected",
  FadeFromUnselectedToSelected = "fade-from-unselected-to-selected",
  FadeFromSelectedToUnselected = "fade-from-selected-to-unselected",
}

export function getSelectorValueState(
  position: number,
  nextPosition: number,
): SelectorValueState {
  if (position === 0 && nextPosition === 0) {
    return SelectorValueState.Selected;
  }
  if (
    nextPosition === position + 1 ||
    nextPosition === position - 1
  ) {
    if (position === 0) {
      return SelectorValueState.FadeFromSelectedToUnselected;
    }
    if (nextPosition === 0) {
      return SelectorValueState.FadeFromUnselectedToSelected;
    }
  }
  return SelectorValueState.Unselected;
}
