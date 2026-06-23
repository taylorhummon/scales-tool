import { Button } from "@shared/components/button/Button"
import { type ButtonState } from "@shared/utilities/button"


interface TextButtonParameters {
  text: string,
  width: number,
  height: number,
  buttonState: ButtonState,
  clickHandler: () => void,
  className?: string,
  dataTestid: string,
}

export function TextButton({
  text,
  width,
  height,
  buttonState,
  clickHandler,
  className,
  dataTestid,
}: TextButtonParameters): React.ReactNode {
  return (
    <Button
      width={width}
      height={height}
      buttonState={buttonState}
      clickHandler={clickHandler}
      className={className}
      dataTestid={dataTestid}
    >
      <text
        textAnchor="middle"
        dominantBaseline="central"
      >
        {text}
      </text>
    </Button>
  )
}
