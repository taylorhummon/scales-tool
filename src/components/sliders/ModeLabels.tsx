import { ModeLabel } from "@/components/sliders/ModeLabel";
import { buildClassString } from "@/utilities/css";
import { arrayFromMap } from "@/utilities/map";
import { MODE_NAME_BY_POSITION } from "@/utilities/mode";

import cssModule from "@/components/sliders/ModeLabels.module.css";


export function ModeLabels(
): JSX.Element {
  return (
    <g
      className={buildClassString(cssModule, ["mode-labels"])}
    >
      {arrayFromMap(MODE_NAME_BY_POSITION, (modeName, position) =>
        <ModeLabel
          key={position}
          modeName={modeName}
          position={position}
        />
      )}
    </g>
  );
}
