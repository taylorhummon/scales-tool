import { buildClassName } from "@shared/utilities/css"

import dialValueCssModule from "./DialValue.module.scss"


interface DialValueParameters {
  currentPosition: number,
  nextPosition: number,
  children: React.ReactNode,
}

export function DialValue({
  currentPosition,
  nextPosition,
  children,
}: DialValueParameters): React.ReactNode {
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
    "dial-value",
    `position-${currentPosition}`,
    getDialValueState(currentPosition, nextPosition),
  ]
  return buildClassName(dialValueCssModule, classNames)
}

function getDialValueState(
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
