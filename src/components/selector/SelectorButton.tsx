import type { MusicalKey } from "@/classes/MusicalKey";
import { Icon } from "@/components/selector/Icon";
import { useDerivedContext } from "@/contexts/derived";
import { useDispatchContext } from "@/contexts/dispatch";
import { ActionType } from "@/utilities/action";
import { buildClassName } from "@/utilities/css";
import { Motion, canPerformMotion, getNextMusicalKey } from "@/utilities/motion";
import { addToBrowserHistory } from "@/utilities/routing";

import selectorButtonCssModule from "@/components/selector/SelectorButton.module.scss";


export enum ButtonSize {
  Large = "large",
  Small = "small",
}

enum ButtonState {
  Ready = "ready",
  Active = "active",
  Waiting = "waiting",
  Disabled = "disabled",
}

interface SelectorButtonProps {
  buttonSize: ButtonSize;
  onClickMotion: Motion;
  className?: string;
  dataTestid: string;
}

export function SelectorButton({
  buttonSize,
  onClickMotion,
  className,
  dataTestid,
}: SelectorButtonProps): JSX.Element {
  return (
    <g className={getClassName(className)}>
      <Icon
        motion={onClickMotion}
      />
      <ButtonRectangle
        buttonSize={buttonSize}
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

interface ButtonRectangleProps {
  buttonSize: ButtonSize;
  onClickMotion: Motion;
  dataTestid: string;
}

function ButtonRectangle({
  buttonSize,
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
  const width = buttonSize === ButtonSize.Large ? 98 : 46;
  const x = - width / 2;
  return (
    <rect
      className={buildClassName(selectorButtonCssModule, ["rectangle", buttonState])}
      onClick={handleClick}
      data-testid={dataTestid}
      width={width}
      height="40"
      x={x}
      y="-20"
      rx="8"
      ry="8"
    />
  );
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
