import type { MusicalKey } from "@/classes/MusicalKey";
import { useDerivedContext } from "@/contexts/derived";
import { buildClassString } from "@/utilities/css";
import { modeNameFromMode } from "@/utilities/mode";
import { Motion } from "@/utilities/motion";

import cssModule from "@/components/gauge/Mode.module.scss";


interface ModeProps {
  mode: number
}

export function Mode({
  mode
}: ModeProps): JSX.Element {
  const { musicalKey, motion } = useDerivedContext();
  return (
    <text
      key={mode}
      className={getClassName(mode, musicalKey, motion)}
    >
      {modeNameFromMode(mode)}
    </text>
  );
}

function getClassName(
  mode: number,
  musicalKey: MusicalKey,
  motion: Motion
): string {
  const classNames = ["mode", `position-${mode}`];
  classNames.push(getFadingClassName(mode, musicalKey, motion));
  return buildClassString(cssModule, classNames);
}

function getFadingClassName(
  mode: number,
  musicalKey: MusicalKey,
  motion: Motion
): string {
  if (
    motion === Motion.IncrementDegree ||
    motion === Motion.DecrementRoot
  ) {
    if (mode === musicalKey.mode) {
      return "fade-from-selected-to-unselected";
    }
    if (mode === musicalKey.mode - 1) {
      return "fade-from-unselected-to-selected";
    }
  }
  if (
    motion === Motion.DecrementDegree ||
    motion === Motion.IncrementRoot
  ) {
    if (mode === musicalKey.mode) {
      return "fade-from-selected-to-unselected";
    }
    if (mode === musicalKey.mode + 1) {
      return "fade-from-unselected-to-selected";
    }
  }
  if (mode === musicalKey.mode) {
    return "selected";
  } else {
    return "unselected";
  }
}
