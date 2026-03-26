import type { Dispatch, SetStateAction } from "react";

import { Motion } from "src/enumerations";
import type { State, Derived } from "src/types";
import { Icon } from "src/components/sliders/Icon";
import { canPerformMotion } from "src/utilities/action";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/sliders/Button.module.css";


interface ButtonProps {
  derived: Derived;
  motion: Motion;
  setState: Dispatch<SetStateAction<State>>;
  dataTestid: string;
}

export function Button({
  derived,
  motion,
  setState,
  dataTestid
}: ButtonProps): JSX.Element {
  const isDisabled = ! canPerformMotion(derived, motion);
  const isWaiting = derived.motion !== Motion.Still;
  const isWide = (
    motion === Motion.DecrementBoth ||
    motion === Motion.IncrementBoth
  );
  const width = isWide ? 100 : 46;
  const height = 40;
  const borderRadius = 8;

  function handleClick(
  ): void {
    if (isDisabled || isWaiting) return;
    setState((state: State) => ({ ...state, motion }));
  }

  return (
    <g
      className={groupClassName(motion)}
    >
      <Icon
        motion={motion}
        isDisabled={isDisabled}
        isWaiting={isWaiting}
      />
      <rect
        className={rectangleClassName(motion, isDisabled, isWaiting)}
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
  motion: Motion
): string {
  const classNames = ["button", motion];
  return buildClassString(cssModule, classNames);
}

function rectangleClassName(
  motion: Motion,
  isDisabled: boolean,
  isWaiting: boolean
): string {
  const classNames = ["button-rectangle", motion];
  if (isDisabled) classNames.push("disabled");
  if (isWaiting) classNames.push("waiting");
  return buildClassString(cssModule, classNames);
}
