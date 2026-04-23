import type { MusicalKey } from "@/classes/MusicalKey";
import { Icon } from "@/components/selector/Icon";
import { useDerivedContext } from "@/contexts/derived";
import { useDispatchContext } from "@/contexts/dispatch";
import { ActionType } from "@/utilities/action";
import { AnimationType } from "@/utilities/animation";
import { buildClassName } from "@/utilities/css";
import { Motion, canPerformMotion, getNextMusicalKey } from "@/utilities/motion";
import { addToBrowserHistory } from "@/utilities/routing";

import selectorButtonCssModule from "@/components/selector/SelectorButton.module.scss";


enum ButtonState {
  Ready = "ready",
  Active = "active",
  Waiting = "waiting",
  Disabled = "disabled"
}

interface SelectorButtonProps {
  width: number;
  height: number;
  onClickMotion: Motion;
  className: string;
  dataTestid: string;
}

export function SelectorButton({
  width,
  height,
  onClickMotion,
  className,
  dataTestid
}: SelectorButtonProps): JSX.Element {
  const { musicalKey, nextMusicalKey, motion, animationType } = useDerivedContext();
  const dispatch = useDispatchContext();
  const buttonState = getButtonState(nextMusicalKey, motion, onClickMotion);

  function handleClick(
  ): void {
    if (buttonState !== ButtonState.Ready) return;
    if (animationType === AnimationType.None) {
      const onClickMusicalKey = getNextMusicalKey(musicalKey, onClickMotion);
      addToBrowserHistory(onClickMusicalKey);
      dispatch({ type: ActionType.ChangeKey, nextMusicalKey: onClickMusicalKey });
    } else {
      dispatch({ type: ActionType.ActivateMotion, motion: onClickMotion });
    }
  }

  return (
    <g
      className={getRootClassName(className)}
    >
      <Icon
        motion={onClickMotion}
      />
      <rect
        className={getRectangleClassName(onClickMotion, buttonState)}
        onClick={handleClick}
        data-testid={dataTestid}
        x={- width / 2}
        y={- height / 2}
        width={width}
        height={height}
        rx={8}
        ry={8}
      />
    </g>
  );
}

function getRootClassName(
  className: string
): string {
  const classNames = [buildClassName(selectorButtonCssModule, ["button"]), className];
  return classNames.filter((className) => className !== undefined).join(" ");
}

function getRectangleClassName(
  onClickMotion: Motion,
  buttonState: ButtonState
): string {
  const classNames = ["button-rectangle", onClickMotion];
  classNames.push(buttonState);
  return buildClassName(selectorButtonCssModule, classNames);
}

function getButtonState(
  nextMusicalKey: MusicalKey,
  motion: Motion,
  onClickMotion: Motion
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
