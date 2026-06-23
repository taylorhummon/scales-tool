import { AssembledDials } from "@scalesTool/AssembledDials"
import { Caption } from "@scalesTool/Caption"

import { SwapButton } from "@shared/components/button/SwapButton"
import { Clock } from "@shared/components/clock/Clock"
import { ModeSlider } from "@shared/components/slider/ModeSlider"
import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"

import canvasCssModule from "./Canvas.module.scss"


interface CanvasParameters {
  derived: Derived,
  buttonClickHandler: (motion: Motion) => void,
}

export function Canvas({
  derived,
  buttonClickHandler,
}: CanvasParameters): React.ReactNode {
  return (
    <svg
      className={canvasCssModule["canvas"]}
      viewBox="0 0 600 475"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AssembledDials
        derived={derived}
        buttonClickHandler={buttonClickHandler}
        className={canvasCssModule["assembled-dials"]}
      />
      <ModeSlider
        derived={derived}
        className={canvasCssModule["mode-slider"]}
      />
      <SwapButton
        derived={derived}
        clickHandler={buttonClickHandler}
        className={canvasCssModule["swap-button"]}
      />
      <Clock
        derived={derived}
        className={canvasCssModule["clock"]}
      />
      <Caption
        derived={derived}
        className={canvasCssModule["caption"]}
      />
    </svg>
  )
}
