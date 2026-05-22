import { type MusicalKey } from "@scalesTool/classes/MusicalKey"
import { SelectorButton } from "@scalesTool/components/selector/SelectorButton"
import { Motion } from "@scalesTool/utilities/motion"
import { type SelectorButtonClickHandler, SelectorButtonSize } from "@scalesTool/utilities/selector"

import selectorButtonsCssModule from "./SelectorButtons.module.scss"


interface SelectorButtonsParameters {
  maxDegree: number,
  minDegree: number,
  motion: Motion,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  selectorButtonClickHandler: SelectorButtonClickHandler,
}

export function SelectorButtons({
  maxDegree,
  minDegree,
  motion,
  currentMusicalKey,
  nextMusicalKey,
  selectorButtonClickHandler,
}: SelectorButtonsParameters): React.ReactNode {
  return (
    <>
      <g className={selectorButtonsCssModule["upper-buttons"]}>
        <SelectorButton
          maxDegree={maxDegree}
          minDegree={minDegree}
          motion={motion}
          currentMusicalKey={currentMusicalKey}
          nextMusicalKey={nextMusicalKey}
          clickHandler={selectorButtonClickHandler}
          size={SelectorButtonSize.Large}
          onClickMotion={Motion.IncrementBoth}
          className={selectorButtonsCssModule["top"]}
          dataTestid="increment-both"
        />
        <SelectorButton
          maxDegree={maxDegree}
          minDegree={minDegree}
          motion={motion}
          currentMusicalKey={currentMusicalKey}
          nextMusicalKey={nextMusicalKey}
          clickHandler={selectorButtonClickHandler}
          size={SelectorButtonSize.Small}
          onClickMotion={Motion.IncrementDegree}
          className={selectorButtonsCssModule["bottom-left"]}
          dataTestid="increment-degree"
        />
        <SelectorButton
          maxDegree={maxDegree}
          minDegree={minDegree}
          motion={motion}
          currentMusicalKey={currentMusicalKey}
          nextMusicalKey={nextMusicalKey}
          clickHandler={selectorButtonClickHandler}
          size={SelectorButtonSize.Small}
          onClickMotion={Motion.IncrementRoot}
          className={selectorButtonsCssModule["bottom-right"]}
          dataTestid="increment-root"
        />
      </g>
      <g className={selectorButtonsCssModule["lower-buttons"]}>
        <SelectorButton
          maxDegree={maxDegree}
          minDegree={minDegree}
          motion={motion}
          currentMusicalKey={currentMusicalKey}
          nextMusicalKey={nextMusicalKey}
          clickHandler={selectorButtonClickHandler}
          size={SelectorButtonSize.Small}
          onClickMotion={Motion.DecrementDegree}
          className={selectorButtonsCssModule["top-left"]}
          dataTestid="decrement-degree"
        />
        <SelectorButton
          maxDegree={maxDegree}
          minDegree={minDegree}
          motion={motion}
          currentMusicalKey={currentMusicalKey}
          nextMusicalKey={nextMusicalKey}
          clickHandler={selectorButtonClickHandler}
          size={SelectorButtonSize.Small}
          onClickMotion={Motion.DecrementRoot}
          className={selectorButtonsCssModule["top-right"]}
          dataTestid="decrement-root"
        />
        <SelectorButton
          maxDegree={maxDegree}
          minDegree={minDegree}
          motion={motion}
          currentMusicalKey={currentMusicalKey}
          nextMusicalKey={nextMusicalKey}
          clickHandler={selectorButtonClickHandler}
          size={SelectorButtonSize.Large}
          onClickMotion={Motion.DecrementBoth}
          className={selectorButtonsCssModule["bottom"]}
          dataTestid="decrement-both"
        />
      </g>
    </>
  )
}
