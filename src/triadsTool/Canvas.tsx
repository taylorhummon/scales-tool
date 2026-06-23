import { AssembledDial } from "@triadsTool/AssembledDial"
import { Caption } from "@triadsTool/Caption"

import { RotateButton } from "@shared/components/button/RotateButton"
import { Clock } from "@shared/components/clock/Clock"
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
      viewBox="0 0 600 340"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AssembledDial
        derived={derived}
        buttonClickHandler={buttonClickHandler}
        className={canvasCssModule["assembled-rank-dial"]}
      />
      <RotateButton
        derived={derived}
        clickHandler={buttonClickHandler}
        onClickMotion={Motion.RotateTriadCCW}
        className={canvasCssModule["rotate-button-ccw"]}
        dataTestid="rotate-triad-ccw"
      />
      <Clock
        derived={derived}
        className={canvasCssModule["clock"]}
      />
      <Caption
        derived={derived}
        className={canvasCssModule["caption"]}
      />
      <RotateButton
        derived={derived}
        clickHandler={buttonClickHandler}
        onClickMotion={Motion.RotateTriadCW}
        className={canvasCssModule["rotate-button-cw"]}
        dataTestid="rotate-triad-cw"
      />
    </svg>
  )
}
