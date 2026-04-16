import { useDerivedContext } from "@/contexts/derived";
import { buildClassString } from "@/utilities/css";
import { modeNameFromMode } from "@/utilities/mode";
import { FadingClassName } from "@/utilities/selector";

import cssModule from "@/components/gauge/Mode.module.scss";


interface ModeProps {
  mode: number
}

export function Mode({
  mode
}: ModeProps): JSX.Element {
  const { musicalKey, nextMusicalKey } = useDerivedContext();
  const currentMode = musicalKey.mode;
  const nextMode = nextMusicalKey.mode;
  return (
    <text
      key={mode}
      className={getClassName(mode, currentMode, nextMode)}
    >
      {modeNameFromMode(mode)}
    </text>
  );
}

function getClassName(
  mode: number,
  currentMode: number,
  nextMode: number
): string {
  const classNames = [
    "mode",
    "gauge-value",
    `position-${mode}`,
    getFadingClassName(mode, currentMode, nextMode),
  ];
  return buildClassString(cssModule, classNames);
}

function getFadingClassName(
  mode: number,
  currentMode: number,
  nextMode: number
): FadingClassName {
  if (
    mode === currentMode &&
    mode === nextMode
  ) {
    return FadingClassName.Selected;
  }
  if (
    nextMode === currentMode + 1 ||
    nextMode === currentMode - 1
  ) {
    if (mode === currentMode) {
      return FadingClassName.FadeFromSelectedToUnselected;
    }
    if (mode === nextMode) {
      return FadingClassName.FadeFromUnselectedToSelected;
    }
  }
  return FadingClassName.Unselected;
}
