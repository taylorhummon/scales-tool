import { ModeName } from "src/enumerations";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/sliders/ModeLabel.module.css";


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
