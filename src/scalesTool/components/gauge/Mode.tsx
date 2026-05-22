import { buildClassName } from "@scalesTool/utilities/css"
import { shortModeNameFromMode } from "@scalesTool/utilities/mode"

import modeCssModule from "./Mode.module.scss"


interface ModeParameters {
  currentMode: number,
  nextMode: number,
  mode: number,
}

export function Mode({
  currentMode,
  nextMode,
  mode,
}: ModeParameters): React.ReactNode {
  return (
    <g className={getClassName(currentMode, nextMode, mode)}>
      <text
        className="fixed-width-font"
        textAnchor="middle"
      >
        {shortModeNameFromMode(mode)}
      </text>
    </g>
  )
}

function getClassName(
  currentMode: number,
  nextMode: number,
  mode: number,
): string {
  const classNames = [
    "mode",
    "gauge-value",
    `position-${mode}`,
    getSelectorValueState(currentMode, nextMode, mode),
  ]
  return buildClassName(modeCssModule, classNames)
}

function getSelectorValueState(
  currentMode: number,
  nextMode: number,
  mode: number,
): string {
  if (mode === currentMode && mode === nextMode) {
    return "highlighted"
  }
  if (mode === currentMode) {
    return "fade-from-highlighted-to-unhighlighted"
  }
  if (mode === nextMode) {
    return "fade-from-unhighlighted-to-highlighted"
  }
  return "unhighlighted"
}
