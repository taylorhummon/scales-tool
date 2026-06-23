import { Slider } from "@shared/components/slider/Slider"
import { type Derived } from "@shared/utilities/derived"
import { MODES, shortModeNameFromMode } from "@shared/utilities/mode"


interface ModeSliderParameters {
  derived: Derived,
  className?: string,
}

export function ModeSlider({
  derived,
  className,
}: ModeSliderParameters): React.ReactNode {
  const { currentMusicalKey, nextMusicalKey } = derived

  return (
    <Slider
      label="Mode"
      currentValue={currentMusicalKey.mode}
      nextValue={nextMusicalKey.mode}
      values={MODES}
      toDisplayFromValue={shortModeNameFromMode}
      className={className}
    />
  )
}
