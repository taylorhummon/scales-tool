import { Highlighter } from "@/components/gauge/Highlighter";
import { Mode } from "@/components/gauge/Mode";

import modeGaugeCssModule from "@/components/gauge/ModeGauge.module.scss";


const MODES = [-3, -2, -1, 0, 1, 2, 3];


export function ModeGauge(
): JSX.Element {
  return (
    <g
      className={modeGaugeCssModule["mode-gauge"]}
    >
      <text
        className={modeGaugeCssModule["label"]}
      >
        Mode
      </text>
      <Highlighter />
      <g
        className={modeGaugeCssModule["mode-gauge-inner"]}
      >
        {MODES.map((mode) => (
          <Mode
            key={mode}
            mode={mode}
          />
        ))}
      </g>
    </g>
  );
}
