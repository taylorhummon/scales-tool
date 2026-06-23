import { SliderValue } from "@shared/components/slider/SliderValue"
import { SliderHighlighter } from "@shared/components/slider/SliderHighlighter"

import sliderCssModule from "./Slider.module.scss"


interface SliderParameters {
  label: string,
  currentValue: number,
  nextValue: number,
  values: Array<number>,
  toDisplayFromValue: (value: number) => string,
  className?: string,
}

export function Slider({
  label,
  currentValue,
  nextValue,
  values,
  toDisplayFromValue,
  className,
}: SliderParameters): React.ReactNode {
  return (
    <g className={className}>
      <text className={sliderCssModule["label"]}>
        {label}
      </text>
      <SliderHighlighter
        currentValue={currentValue}
        nextValue={nextValue}
      />
      <g className={sliderCssModule["slider-inner"]}>
        {values.map((value) => (
          <SliderValue
            key={value}
            currentValue={currentValue}
            nextValue={nextValue}
            thisValue={value}
          >
            {toDisplayFromValue(value)}
          </SliderValue>
        ))}
      </g>
    </g>
  )
}
