import type { MusicalKey } from "@/classes/MusicalKey";
import { Icon } from "@/components/selector/Icon";
import { useDerivedContext } from "@/contexts/derived";
import { useDispatchContext } from "@/contexts/dispatch";
import { ActionType } from "@/utilities/action";
import { buildClassName } from "@/utilities/css";
import { Motion, canPerformMotion, getNextMusicalKey } from "@/utilities/motion";
import { addToBrowserHistory } from "@/utilities/routing";

import selectorButtonCssModule from "@/components/selector/SelectorButton.module.scss";


export enum ButtonPiece {
  Full = "full",
  LeftHalf = "left-half",
  RightHalf = "right-half",
}

enum ButtonState {
  Ready = "ready",
  Active = "active",
  Waiting = "waiting",
  Disabled = "disabled",
}

interface SelectorButtonProps {
  buttonPiece: ButtonPiece;
  onClickMotion: Motion;
  className?: string;
  dataTestid: string;
}

export function SelectorButton({
  buttonPiece,
  onClickMotion,
  className,
  dataTestid,
}: SelectorButtonProps): JSX.Element {
  return (
    <g className={getClassName(className)}>
      <Icon
        motion={onClickMotion}
        className={getIconClassName(buttonPiece)}
      />
      <ButtonRectangle
        buttonPiece={buttonPiece}
        onClickMotion={onClickMotion}
        dataTestid={dataTestid}
      />
    </g>
  );
}

function getClassName(
  className?: string,
): string {
  return [
    selectorButtonCssModule["button"],
    className,
  ].filter(
    (className) => className !== undefined
  ).join(" ");
}

function getIconClassName(
  buttonPiece: ButtonPiece,
): string | undefined {
  if (buttonPiece === ButtonPiece.LeftHalf) {
    return selectorButtonCssModule["nudge-icon-right"];
  } else if (buttonPiece === ButtonPiece.RightHalf) {
    return selectorButtonCssModule["nudge-icon-left"];
  } else {
    return undefined;
  }
}

interface ButtonRectangleProps {
  buttonPiece: ButtonPiece;
  onClickMotion: Motion;
  dataTestid: string;
}

function ButtonRectangle({
  buttonPiece,
  onClickMotion,
  dataTestid,
}: ButtonRectangleProps) {
  const { musicalKey, nextMusicalKey, motion, isUsingAnimation } = useDerivedContext();
  const dispatch = useDispatchContext();
  const buttonState = getButtonState(nextMusicalKey, motion, onClickMotion);

  function handleClick(
  ): void {
    if (buttonState !== ButtonState.Ready) return;
    if (isUsingAnimation) {
      dispatch({ type: ActionType.ActivateMotion, motion: onClickMotion });
    } else {
      const onClickMusicalKey = getNextMusicalKey(musicalKey, onClickMotion);
      addToBrowserHistory(onClickMusicalKey);
      dispatch({ type: ActionType.ChangeKey, nextMusicalKey: onClickMusicalKey });
    }
  }

  if (buttonPiece === ButtonPiece.LeftHalf) {
    return (
      <>
        <path
          className={buildClassName(selectorButtonCssModule, ["rectangle", buttonState])}
          onClick={handleClick}
          data-testid={dataTestid}
          d={"M 34 -20 L -15 -20 a 8 8, 0, 0, 0, -8, 8 L -23 12 a 8 8, 0, 0, 0, 8, 8 L 34 20"}
        />
        <line
          className={buildClassName(selectorButtonCssModule, ["dashed-line", buttonState])}
          x1="34"
          y1="-20"
          x2="34"
          y2="20"
        />
      </>
    );
  } else if (buttonPiece === ButtonPiece.RightHalf) {
    return (
      <>
        <path
          className={buildClassName(selectorButtonCssModule, ["rectangle", buttonState])}
          onClick={handleClick}
          data-testid={dataTestid}
          d={"M -34 20 L 15 20 a 8 8, 0, 0, 0, 8, -8 L 23 -12 a 8 8, 0, 0, 0, -8, -8 L -34 -20"}
        />
        <line
          className={buildClassName(selectorButtonCssModule, ["dashed-line", buttonState])}
          x1="-34"
          y1="-20"
          x2="-34"
          y2="20"
        />
      </>
    );
  } else {
    return (
      <rect
        className={buildClassName(selectorButtonCssModule, ["rectangle", buttonState])}
        onClick={handleClick}
        data-testid={dataTestid}
        width="98"
        height="40"
        x="-49"
        y="-20"
        rx="8"
        ry="8"
      />
    );
  }
}

function getButtonState(
  nextMusicalKey: MusicalKey,
  motion: Motion,
  onClickMotion: Motion,
): ButtonState {
  if (! canPerformMotion(nextMusicalKey, onClickMotion)) {
    return ButtonState.Disabled;
  }
  if (motion === onClickMotion) {
    return ButtonState.Active;
  }
  if (motion !== Motion.Still) {
    return ButtonState.Waiting;
  }
  return ButtonState.Ready;
}
