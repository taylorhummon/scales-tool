export enum FadingClassName {
  Unselected = "unselected",
  Selected = "selected",
  FadeFromUnselectedToSelected = "fade-from-unselected-to-selected",
  FadeFromSelectedToUnselected = "fade-from-selected-to-unselected",
}

export function getFadingClassName(
  position: number,
  nextPosition: number
): FadingClassName {
  if (position === 0 && nextPosition === 0) {
    return FadingClassName.Selected;
  }
  if (
    nextPosition === position + 1 ||
    nextPosition === position - 1
  ) {
    if (position === 0) {
      return FadingClassName.FadeFromSelectedToUnselected;
    }
    if (nextPosition === 0) {
      return FadingClassName.FadeFromUnselectedToSelected;
    }
  }
  return FadingClassName.Unselected;
}
