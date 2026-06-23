import { ButtonState } from "@shared/utilities/button"
import { buildClassName } from "@shared/utilities/css"

import buttonCssModule from "./Button.module.scss"


interface ButtonParameters {
  width: number,
  height: number,
  buttonState: ButtonState,
  clickHandler: () => void,
  className?: string,
  dataTestid: string,
  children: React.ReactNode,
}

export function Button({
  width,
  height,
  buttonState,
  clickHandler,
  className,
  dataTestid,
  children,
}: ButtonParameters): React.ReactNode {
  return (
    <g className={className}>
      {children}
      <Rectangle
        width={width}
        height={height}
        buttonState={buttonState}
        clickHandler={clickHandler}
        dataTestid={dataTestid}
      />
    </g>
  )
}

interface RectangleParameters {
  width: number,
  height: number,
  buttonState: ButtonState,
  clickHandler: () => void,
  dataTestid: string,
}

function Rectangle({
  width,
  height,
  buttonState,
  clickHandler,
  dataTestid,
}: RectangleParameters) {
  function onClick(): void {
    if (buttonState !== ButtonState.Ready) return
    clickHandler()
  }

  return (
    <rect
      className={buildClassName(buttonCssModule, [ "rectangle", buttonState ])}
      onClick={onClick}
      data-testid={dataTestid}
      width={width}
      height={height}
      x={- width / 2}
      y={- height / 2}
      rx={BUTTON_CORNER_RADIUS}
      ry={BUTTON_CORNER_RADIUS}
    />
  )
}

const BUTTON_CORNER_RADIUS = 8
