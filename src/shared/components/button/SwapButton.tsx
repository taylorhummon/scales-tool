import { TextButton } from "@shared/components/button/TextButton"
import { ButtonState } from "@shared/utilities/button"
import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"


interface SwapButtonParameters {
  derived: Derived,
  clickHandler: (motion: Motion) => void,
  className?: string,
}

export function SwapButton({
  derived,
  clickHandler,
  className,
}: SwapButtonParameters): React.ReactNode {
  const { currentIsCaterpillarPattern } = derived
  const text = currentIsCaterpillarPattern ? "Butterfly me!" : "Caterpillar me!"

  function clickHandlerBound() {
    const motion = currentIsCaterpillarPattern ? Motion.ToButterlflyPattern : Motion.ToCaterpillarPattern
    clickHandler(motion)
  }

  return (
    <TextButton
      text={text}
      width={160}
      height={40}
      buttonState={getButtonState(derived)}
      clickHandler={clickHandlerBound}
      className={className}
      dataTestid="swap-button"
    />
  )
}

function getButtonState(
  derived: Derived
): ButtonState {
  const { motion } = derived
  if (motion === Motion.ToCaterpillarPattern || motion === Motion.ToButterlflyPattern) {
    return ButtonState.Active
  }
  if (motion !== Motion.Still) {
    return ButtonState.Waiting
  }
  return ButtonState.Ready
}
