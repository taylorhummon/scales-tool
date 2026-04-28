import { useDerivedContext } from "@/contexts/derived";
import { buildClassName } from "@/utilities/css";
import { shortModeNameFromMode } from "@/utilities/mode";

import modeCssModule from "@/components/gauge/Mode.module.scss";


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
    <g className={getClassName(mode, currentMode, nextMode)}>
      <text
        key={mode}
        className={modeCssModule["text"]}
        textAnchor="middle"
      >
        {shortModeNameFromMode(mode)}
      </text>
    </g>
  );
}

function getClassName(
  mode: number,
  currentMode: number,
  nextMode: number,
): string {
  const classNames = [
    "mode",
    "gauge-value",
    `position-${mode}`,
    getSelectorValueState(mode, currentMode, nextMode),
  ];
  return buildClassName(modeCssModule, classNames);
}

export function getSelectorValueState(
  mode: number,
  currentMode: number,
  nextMode: number,
): string {
  if (mode === currentMode && mode === nextMode) {
    return "highlighted";
  }
  if (mode === currentMode) {
    return "fade-from-highlighted-to-unhighlighted";
  }
  if (mode === nextMode) {
    return "fade-from-unhighlighted-to-highlighted";
  }
  return "unhighlighted";
}
