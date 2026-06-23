import { IconButton } from "@shared/components/button/IconButton"
import { type IconName } from "@shared/components/button/Icon"
import { ButtonState } from "@shared/utilities/button"
import { type Derived } from "@shared/utilities/derived"
import { Motion, canPerformMotion } from "@shared/utilities/motion"


interface DialButtonParameters {
  derived: Derived,
  clickHandler: (motion: Motion) => void,
  width: number,
  height: number,
  iconName: IconName,
  onClickMotion: Motion,
  className?: string,
  dataTestid: string,
}

export function DialButton({
  derived,
  clickHandler,
  width,
  height,
  iconName,
  onClickMotion,
  className,
  dataTestid,
}: DialButtonParameters): React.ReactNode {
  return (
    <IconButton
      iconName={iconName}
      width={width}
      height={height}
      buttonState={getButtonState(derived, onClickMotion)}
      clickHandler={() => clickHandler(onClickMotion)}
      className={className}
      dataTestid={dataTestid}
    />
  )
}

function getButtonState(
  derived: Derived,
  onClickMotion: Motion,
): ButtonState {
  const { motion, nextMusicalKey } = derived
  if (! canPerformMotion({
    motion: onClickMotion,
    musicalKey: nextMusicalKey,
  })) {
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
