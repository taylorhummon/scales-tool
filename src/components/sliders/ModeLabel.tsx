import type { ModeName } from "@/enumerations";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/sliders/ModeLabel.module.css";


interface ModeLabelProps {
  modeName: ModeName;
  position: number;
}

export function ModeLabel({
  modeName,
  position
}: ModeLabelProps): JSX.Element {
  return (
    <text
      className={buildClassString(cssModule, ["mode-label", `position-${position}`])}
    >
      {modeName}
    </text>
  );
}
