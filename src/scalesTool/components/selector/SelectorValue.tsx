import { buildClassName } from "@scalesTool/utilities/css"

import selectorValueCssModule from "./SelectorValue.module.scss"


interface SelectorValueParameters {
  currentPosition: number,
  nextPosition: number,
  children: React.ReactNode,
}

export function SelectorValue({
  currentPosition,
  nextPosition,
  children,
}: SelectorValueParameters): React.ReactNode {
  return (
    <g className={getClassName(currentPosition, nextPosition)}>
      <text
        className={"fixed-width-font"}
        textAnchor="middle"
      >
        {children}
      </text>
    </g>
  )
}

function getClassName(
  currentPosition: number,
  nextPosition: number,
): string {
  const classNames = [
    "selector-value",
    `position-${currentPosition}`,
    getSelectorValueState(currentPosition, nextPosition),
  ]
  return buildClassName(selectorValueCssModule, classNames)
}

function getSelectorValueState(
  currentPosition: number,
  nextPosition: number,
): string {
  if (currentPosition === 0 && nextPosition === 0) {
    return "selected"
  }
  if (currentPosition === 0) {
    return "fade-from-selected-to-unselected"
  }
  if (nextPosition === 0) {
    return "fade-from-unselected-to-selected"
  }
  return "unselected"
}
