import { ModeLabel } from "src/components/sliders/ModeLabel";
import { buildClassString } from "src/utilities/css";
import { arrayFromMap } from "src/utilities/map";
import { MODE_NAME_BY_POSITION } from "src/utilities/mode";

import cssModule from "src/components/sliders/ModeLabels.module.css";


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
