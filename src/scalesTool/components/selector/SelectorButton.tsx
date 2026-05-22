import { type MusicalKey } from "@scalesTool/classes/MusicalKey"
import { Icon } from "@scalesTool/components/selector/Icon"
import { buildClassName } from "@scalesTool/utilities/css"
import { Motion, canPerformMotion } from "@scalesTool/utilities/motion"
import {
  type SelectorButtonClickHandler,
  SelectorButtonSize,
  SelectorButtonState,
} from "@scalesTool/utilities/selector"

import selectorButtonCssModule from "./SelectorButton.module.scss"


interface SelectorButtonParameters {
  maxDegree: number,
  minDegree: number,
  motion: Motion,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  clickHandler: SelectorButtonClickHandler,
  size: SelectorButtonSize,
  onClickMotion: Motion,
  className?: string,
  dataTestid: string,
}

export function SelectorButton({
  maxDegree,
  minDegree,
  motion,
  currentMusicalKey,
  nextMusicalKey,
  clickHandler,
  size,
  onClickMotion,
  className,
  dataTestid,
}: SelectorButtonParameters): React.ReactNode {
  return (
    <g className={getClassName(className)}>
      <Icon
        motion={onClickMotion}
      />
      <ButtonRectangle
        maxDegree={maxDegree}
        minDegree={minDegree}
        motion={motion}
        currentMusicalKey={currentMusicalKey}
        nextMusicalKey={nextMusicalKey}
        clickHandler={clickHandler}
        size={size}
        onClickMotion={onClickMotion}
        dataTestid={dataTestid}
      />
    </g>
  )
}

function getClassName(
  className?: string,
): string {
  return [
    selectorButtonCssModule["button"],
    className,
  ].filter(
    (className) => className !== undefined
  ).join(" ")
}

interface ButtonRectangleParameters {
  maxDegree: number,
  minDegree: number,
  motion: Motion,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  clickHandler: SelectorButtonClickHandler,
  size: SelectorButtonSize,
  onClickMotion: Motion,
  dataTestid: string,
}

function ButtonRectangle({
  maxDegree,
  minDegree,
  motion,
  nextMusicalKey,
  clickHandler,
  size,
  onClickMotion,
  dataTestid,
}: ButtonRectangleParameters) {
  const width = size === SelectorButtonSize.Large ? 98 : 46
  const x = - width / 2
  const buttonState = getButtonState({ maxDegree, minDegree, nextMusicalKey, onClickMotion, motion })

  return (
    <rect
      className={buildClassName(selectorButtonCssModule, [ "rectangle", buttonState ])}
      onClick={() => {
        if (buttonState === SelectorButtonState.Ready) {
          clickHandler(onClickMotion)
        }
      }}
      data-testid={dataTestid}
      width={width}
      height="40"
      x={x}
      y="-20"
      rx="8"
      ry="8"
    />
  )
}

interface getButtonStateParameters {
  maxDegree: number,
  minDegree: number,
  nextMusicalKey: MusicalKey,
  onClickMotion: Motion,
  motion: Motion,
}

function getButtonState({
  maxDegree,
  minDegree,
  nextMusicalKey,
  onClickMotion,
  motion,
}: getButtonStateParameters): SelectorButtonState {
  if (! canPerformMotion({
    maxDegree,
    minDegree,
    musicalKey: nextMusicalKey,
    motion: onClickMotion,
  })) {
    return SelectorButtonState.Disabled
  }
  if (motion === onClickMotion) {
    return SelectorButtonState.Active
  }
  if (motion !== Motion.Still) {
    return SelectorButtonState.Waiting
  }
  return SelectorButtonState.Ready
}
