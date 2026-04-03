import type { ModeName } from "@/enumerations";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/sliders/ModeLabel.module.css";


interface ModeLabelProps {
  modeName: ModeName;
  position: number;
  isSelected: boolean;
}

export function ModeLabel({
  modeName,
  position,
  isSelected
}: ModeLabelProps): JSX.Element {
  return (
    <text
      className={getClassName(position, isSelected)}
    >
      {modeName}
    </text>
  );
}

function getClassName(
  position: number,
  isSelected: boolean
): string {
  const classNames = ["mode-label", `position-${position}`]
  if (isSelected) {
    classNames.push("selected");
  }
  return buildClassString(cssModule, classNames);
}
