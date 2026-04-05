import { Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import type { ModeName } from "@/enumerations";
import { buildClassString } from "@/utilities/css";
import { MIN_MODE, MAX_MODE } from "@/utilities/mode";
import { getWillDecrementMode, getWillIncrementMode } from "@/utilities/motion";

import cssModule from "@/components/sliders/ModeLabel.module.scss";


interface ModeLabelProps {
  musicalKey: MusicalKey;
  motion: Motion
  modeName: ModeName;
  position: number;
}

export function ModeLabel({
  musicalKey,
  motion,
  modeName,
  position
}: ModeLabelProps): JSX.Element {
  return (
    <text
      className={getClassName(musicalKey, motion, position)}
    >
      {modeName}
    </text>
  );
}

function getClassName(
  musicalKey: MusicalKey,
  motion: Motion,
  position: number
): string {
  const classNames = ["mode-label", `position-${position}`]
  const fadingClassName = getFadingClassName(musicalKey, motion, position);
  if (fadingClassName !== null) {
    classNames.push(fadingClassName);
  }
  return buildClassString(cssModule, classNames);
}

function getFadingClassName (
  musicalKey: MusicalKey,
  motion: Motion,
  position: number
): string | null {
  if (getWillDecrementMode(motion)) {
    if (position === musicalKey.mode) {
      return "fading-out";
    } else if (position === musicalKey.mode - 1) {
      return "fading-in";
    } else if (position === MAX_MODE && musicalKey.mode === MIN_MODE) {
      return "fading-in";
    }
  } else if (getWillIncrementMode(motion)) {
    if (position === musicalKey.mode) {
      return "fading-out";
    } else if (position === musicalKey.mode + 1) {
      return "fading-in";
    } else if (position === MIN_MODE && musicalKey.mode === MAX_MODE) {
      return "fading-in";
    }
  } else if (position === musicalKey.mode) {
    return "selected";
  }
  return null;
}
