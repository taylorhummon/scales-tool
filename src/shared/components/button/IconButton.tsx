import { Button } from "@shared/components/button/Button"
import { type IconName, Icon } from "@shared/components/button/Icon"
import { type ButtonState } from "@shared/utilities/button"


interface IconButtonParameters {
  iconName: IconName,
  width: number,
  height: number,
  buttonState: ButtonState,
  clickHandler: () => void,
  className?: string,
  dataTestid: string,
}

export function IconButton({
  iconName,
  width,
  height,
  buttonState,
  clickHandler,
  className,
  dataTestid,
}: IconButtonParameters): React.ReactNode {
  return (
    <Button
      width={width}
      height={height}
      buttonState={buttonState}
      clickHandler={clickHandler}
      className={className}
      dataTestid={dataTestid}
    >
      <Icon
        iconName={iconName}
      />
    </Button>
  )
}
