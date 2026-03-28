import type { Dispatch, SetStateAction } from "react";

import { Motion } from "src/enumerations";
import type { State } from "src/types";
import { MusicalKey } from "src/classes/MusicalKey";
import { Icon } from "src/components/sliders/Icon";
import { canPerformMotion } from "src/utilities/action";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/sliders/Button.module.css";


interface ButtonProps {
  musicalKey: MusicalKey;
  motion: Motion;
  onClickMotion: Motion;
  setState: Dispatch<SetStateAction<State>>;
  dataTestid: string;
}

export function Button({
  musicalKey,
  motion,
  onClickMotion,
  setState,
  dataTestid
}: ButtonProps): JSX.Element {
  const isDisabled = ! canPerformMotion(musicalKey, onClickMotion);
  const isWaiting = motion !== Motion.Still;
  const isWide = (
    onClickMotion === Motion.DecrementBoth ||
    onClickMotion === Motion.IncrementBoth
  );
  const width = isWide ? 100 : 46;
  const height = 40;
  const borderRadius = 8;

  function handleClick(
  ): void {
    if (isDisabled || isWaiting) return;
    setState((state: State) => ({ ...state, motion: onClickMotion }));
  }

  return (
    <g
      className={groupClassName(onClickMotion)}
    >
      <Icon
        motion={onClickMotion}
      />
      <rect
        className={rectangleClassName(onClickMotion, isDisabled, isWaiting)}
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
  isDisabled: boolean,
  isWaiting: boolean
): string {
  const classNames = ["button-rectangle", onClickMotion];
  if (isDisabled) classNames.push("disabled");
  if (isWaiting) classNames.push("waiting");
  return buildClassString(cssModule, classNames);
}
