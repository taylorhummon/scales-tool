import { IconName } from "@shared/components/button/Icon"
import { IconButton } from "@shared/components/button/IconButton"
import { ModeSlider } from "@shared/components/slider/ModeSlider"
import { ButtonState } from "@shared/utilities/button"
import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"

import assembledSliderCssModule from "./AssembledSlider.module.scss"


interface AssembledSliderParameters {
  derived: Derived,
  buttonClickHandler: (motion: Motion) => void,
  className?: string,
}

export function AssembledSlider({
  derived,
  buttonClickHandler,
  className,
}: AssembledSliderParameters): React.ReactNode {
  return (
    <g className={className}>
      <IconButton
        iconName={IconName.Plus}
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        buttonState={getButtonState(derived, Motion.IncrementRoot)}
        clickHandler={() => buttonClickHandler(Motion.IncrementRoot)}
        className={assembledSliderCssModule["upper-button"]}
        dataTestid="increment-mode"
      />
      <ModeSlider
        derived={derived}
      />
      <IconButton
        iconName={IconName.Minus}
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        buttonState={getButtonState(derived, Motion.DecrementRoot)}
        clickHandler={() => buttonClickHandler(Motion.DecrementRoot)}
        className={assembledSliderCssModule["lower-button"]}
        dataTestid="decrement-mode"
      />
    </g>
  )
}

const BUTTON_WIDTH = 46
const BUTTON_HEIGHT = 40

function getButtonState(
  derived: Derived,
  onClickMotion: Motion,
): ButtonState {
  const { motion } = derived
  if (onClickMotion === Motion.IncrementRoot && derived.currentMusicalKey.mode >= 3) {
    return ButtonState.Disabled
  }
  if (onClickMotion === Motion.DecrementRoot && derived.currentMusicalKey.mode <= -3) {
    return ButtonState.Disabled
  }
  if (motion === onClickMotion) {
    return ButtonState.Active
  }
  if (motion !== Motion.Still) {
    return ButtonState.Waiting
  }
  return ButtonState.Ready
}
