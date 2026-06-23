import { IconName } from "@shared/components/button/Icon"
import { IconButton } from "@shared/components/button/IconButton"
import { ButtonState } from "@shared/utilities/button"
import { TriadOriginOption } from "@shared/utilities/clock"
import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"


interface RotateButtonParameters {
  derived: Derived,
  clickHandler: (motion: Motion) => void,
  onClickMotion: Motion,
  className?: string,
  dataTestid: string,
}

export function RotateButton({
  derived,
  clickHandler,
  onClickMotion,
  className,
  dataTestid,
}: RotateButtonParameters): React.ReactNode {
  const { clockSettings } = derived
  const { triadOriginOption } = clockSettings
  if (triadOriginOption === TriadOriginOption.None) return null

  return (
    <IconButton
      iconName={getIconName(onClickMotion)}
      width={60}
      height={50}
      buttonState={getButtonState(derived, onClickMotion)}
      clickHandler={() => clickHandler(onClickMotion)}
      className={className}
      dataTestid={dataTestid}
    />
  )
}

function getIconName(
  onClickMotion: Motion,
): IconName {
  if (onClickMotion === Motion.RotateTriadCW) {
    return IconName.RotateCW
   } else {
    return IconName.RotateCCW
   }
}

function getButtonState(
  derived: Derived,
  onClickMotion: Motion,
): ButtonState {
  const { motion } = derived
  if (motion === onClickMotion) {
    return ButtonState.Active
  }
  if (motion !== Motion.Still) {
    return ButtonState.Waiting
  }
  return ButtonState.Ready
}
