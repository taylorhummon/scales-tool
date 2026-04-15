import { Triangle } from "@/components/gauge/Triangle";
import { Mode } from "@/components/gauge/Mode";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/gauge/ModeGauge.module.scss";


const MODES = [-3, -2, -1, 0, 1, 2, 3];


export function ModeGauge(
): JSX.Element {
  return (
    <g
      className={buildClassString(cssModule, ["mode-gauge"])}
    >
      <text
        className={buildClassString(cssModule, ["label"])}
      >
        Mode
      </text>
      <Triangle />
      {MODES.map((mode) => (
        <Mode
          key={mode}
          mode={mode}
        />
      ))}
    </g>
  );
}
