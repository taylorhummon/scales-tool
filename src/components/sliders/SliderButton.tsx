import type { Dispatch, SetStateAction } from "react";

import { AnimationType, Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import { Icon } from "@/components/sliders/Icon";
import { buildClassString } from "@/utilities/css";
import { canPerformMotion, getNextMusicalKey } from "@/utilities/motion";
import type { State } from "@/utilities/state";
import { advanceToNextMusicalKey } from "@/utilities/state";

import cssModule from "@/components/sliders/SliderButton.module.scss";


interface SliderButtonProps {
  musicalKey: MusicalKey;
  animationType: AnimationType;
  motion: Motion;
  onClickMotion: Motion;
  setState: Dispatch<SetStateAction<State>>;
  dataTestid: string;
}

export function SliderButton({
  musicalKey,
  animationType,
  motion,
  onClickMotion,
  setState,
  dataTestid
}: SliderButtonProps): JSX.Element {
  const buttonState = getButtonState(musicalKey, motion, onClickMotion);

  function handleClick(
  ): void {
    if (buttonState !== "ready") return;
    if (animationType === AnimationType.None) {
      advanceToNextMusicalKey(musicalKey, onClickMotion, setState);
    } else {
      setState((state: State) => ({ ...state, motion: onClickMotion }));
    }
  }

  return (
    <button
      className={getClassName(onClickMotion, buttonState)}
      onClick={handleClick}
      disabled={buttonState !== "ready"}
      data-testid={dataTestid}
    >
      <Icon
        motion={onClickMotion}
      />
    </button>
  );
}

function getButtonState(
  musicalKey: MusicalKey,
  motion: Motion,
  onClickMotion: Motion
): string {
  if (motion === onClickMotion) {
    return "active";
  }
  const nextMusicalKey = getNextMusicalKey(musicalKey, motion);
  if (! canPerformMotion(nextMusicalKey, onClickMotion)) {
    return "disabled";
  }
  if (motion !== Motion.Still) {
    return "waiting";
  }
  return "ready";
}

function getClassName(
  onClickMotion: Motion,
  buttonState: string
): string {
  const classNames = ["button", onClickMotion, buttonState];
  if (getIsWide(onClickMotion)) classNames.push("wide");
  return buildClassString(cssModule, classNames);
}

function getIsWide(
  onClickMotion: Motion
): boolean {
  return (
    onClickMotion === Motion.DecrementBoth ||
    onClickMotion === Motion.IncrementBoth
  );
}
