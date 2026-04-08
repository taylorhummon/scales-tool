import type { Dispatch, SetStateAction } from "react";

import { AnimationType, Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import { Icon } from "@/components/sliders/Icon";
import { buildClassString } from "@/utilities/css";
import { canPerformMotion } from "@/utilities/motion";
import type { State } from "@/utilities/state";
import { advanceToNextMusicalKey } from "@/utilities/state";

import cssModule from "@/components/sliders/Button.module.scss";


interface ButtonProps {
  musicalKey: MusicalKey;
  animationType: AnimationType;
  motion: Motion;
  onClickMotion: Motion;
  setState: Dispatch<SetStateAction<State>>;
  dataTestid: string;
}

export function Button({
  musicalKey,
  animationType,
  motion,
  onClickMotion,
  setState,
  dataTestid
}: ButtonProps): JSX.Element {
  const buttonState = getButtonState(musicalKey, motion, onClickMotion);
  const isWide = (
    onClickMotion === Motion.DecrementBoth ||
    onClickMotion === Motion.IncrementBoth
  );
  const width = isWide ? 100 : 46;
  const height = 40;
  const borderRadius = 8;

  function handleClick(
  ): void {
    if (buttonState !== null) return;
    if (animationType === AnimationType.None) {
      advanceToNextMusicalKey(musicalKey, onClickMotion, setState);
    } else {
      setState((state: State) => ({ ...state, motion: onClickMotion }));
    }
  }

  return (
    <g
      className={getGroupClassName(onClickMotion)}
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
        rx={borderRadius}
        ry={borderRadius}
      />
    </g>
  );
}

function getButtonState(
  musicalKey: MusicalKey,
  motion: Motion,
  onClickMotion: Motion
): string | null {
  if (! canPerformMotion(musicalKey, onClickMotion)) {
    return "disabled";
  }
  if (motion === onClickMotion) {
    return "active";
  }
  if (motion !== Motion.Still) {
    return "waiting";
  }
  return null;
}

function getGroupClassName(
  onClickMotion: Motion
): string {
  const classNames = ["button", onClickMotion];
  return buildClassString(cssModule, classNames);
}

function getRectangleClassName(
  onClickMotion: Motion,
  buttonState: string | null
): string {
  const classNames = ["button-rectangle", onClickMotion];
  if (buttonState !== null) classNames.push(buttonState);
  return buildClassString(cssModule, classNames);
}
