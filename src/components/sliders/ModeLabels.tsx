import type { Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import { ModeLabel } from "@/components/sliders/ModeLabel";
import { buildClassString } from "@/utilities/css";
import { arrayFromMap } from "@/utilities/map";
import { MODE_NAME_BY_POSITION } from "@/utilities/mode";

import cssModule from "@/components/sliders/ModeLabels.module.scss";


interface ModeLabelsProps {
  musicalKey: MusicalKey;
  motion: Motion
}

export function ModeLabels({
  musicalKey,
  motion
}: ModeLabelsProps): JSX.Element {
  return (
    <g
      className={buildClassString(cssModule, ["mode-labels"])}
    >
      {arrayFromMap(MODE_NAME_BY_POSITION, (modeName, position) =>
        <ModeLabel
          key={position}
          musicalKey={musicalKey}
          motion={motion}
          modeName={modeName}
          position={position}
        />
      )}
    </g>
  );
}
