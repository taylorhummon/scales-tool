import { buildClassName } from "@shared/utilities/css"

import sliderValueCssModule from "./SliderValue.module.scss"


interface SliderValueParameters {
  currentValue: number,
  nextValue: number,
  thisValue: number,
  children: React.ReactNode,
}

export function SliderValue({
  currentValue,
  nextValue,
  thisValue,
  children,
}: SliderValueParameters): React.ReactNode {
  return (
    <g className={getClassName(currentValue, nextValue, thisValue)}>
      <text
        className="fixed-width-font"
        textAnchor="middle"
      >
        {children}
      </text>
    </g>
  )
}

function getClassName(
  currentValue: number,
  nextValue: number,
  thisValue: number,
): string {
  const classNames = [
    "slider-value",
    `position-${thisValue}`,
    getSliderValueState(currentValue, nextValue, thisValue),
  ]
  return buildClassName(sliderValueCssModule, classNames)
}

function getSliderValueState(
  currentValue: number,
  nextValue: number,
  thisValue: number,
): string {
  if (thisValue === currentValue && thisValue === nextValue) {
    return "highlighted"
  }
  if (thisValue === currentValue) {
    return "fade-from-highlighted-to-unhighlighted"
  }
  if (thisValue === nextValue) {
    return "fade-from-unhighlighted-to-highlighted"
  }
  return "unhighlighted"
}
