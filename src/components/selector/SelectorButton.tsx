import type { MusicalKey } from "@/classes/MusicalKey";
import { Icon } from "@/components/selector/Icon";
import { useDerivedContext } from "@/contexts/derived";
import { useDispatchContext } from "@/contexts/dispatch";
import { ActionType } from "@/utilities/action";
import { AnimationType } from "@/utilities/animation";
import { buildClassString } from "@/utilities/css";
import { Motion, canPerformMotion } from "@/utilities/motion";
import { addToBrowserHistory } from "@/utilities/routing";

import cssModule from "@/components/selector/SelectorButton.module.scss";


enum ButtonState {
  Ready = "ready",
  Active = "active",
  Waiting = "waiting",
  Disabled = "disabled"
}

interface SelectorButtonProps {
  onClickMotion: Motion;
  dataTestid: string;
}

export function SelectorButton({
  onClickMotion,
  dataTestid
}: SelectorButtonProps): JSX.Element {
  const { nextMusicalKey, motion, animationType } = useDerivedContext();
  const dispatch = useDispatchContext();
  const buttonState = getButtonState(nextMusicalKey, motion, onClickMotion);
  const isWide = (
    onClickMotion === Motion.DecrementBoth ||
    onClickMotion === Motion.IncrementBoth
  );
  const width = isWide ? 100 : 46;
  const height = 40;
  const borderRadius = 8;

  function handleClick(
  ): void {
    if (buttonState !== ButtonState.Ready) return;
    if (animationType === AnimationType.None) {
      addToBrowserHistory(nextMusicalKey);
      dispatch({ type: ActionType.ChangeKey, nextMusicalKey });
    } else {
      dispatch({ type: ActionType.ActivateMotion, motion: onClickMotion });
    }
  }

  return (
    <g
      className={groupClassName(onClickMotion)}
    >
      <Icon
        motion={onClickMotion}
      />
      <rect
        className={rectangleClassName(onClickMotion, buttonState)}
        onClick={handleClick}
        data-testid={dataTestid}
        x={- width / 2}
        y={- height / 2}
        width={width}
        height={height}
        rx={borderRadius}
        ry={borderRadius}
      />
    </g>
  );
}

function groupClassName(
  onClickMotion: Motion
): string {
  const classNames = ["button", onClickMotion];
  return buildClassString(cssModule, classNames);
}

function rectangleClassName(
  onClickMotion: Motion,
  buttonState: ButtonState
): string {
  const classNames = ["button-rectangle", onClickMotion];
  classNames.push(buttonState);
  return buildClassString(cssModule, classNames);
}

function getButtonState(
  nextMusicalKey: MusicalKey,
  motion: Motion,
  onClickMotion: Motion
): ButtonState {
  if (motion === onClickMotion) {
    return ButtonState.Active;
  }
  if (! canPerformMotion(nextMusicalKey, onClickMotion)) {
    return ButtonState.Disabled;
  }
  if (motion !== Motion.Still) {
    return ButtonState.Waiting;
  }
  return ButtonState.Ready;
}
