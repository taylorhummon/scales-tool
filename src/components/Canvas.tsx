import { Clock } from "@/components/clock/Clock";
import { ModeGauge } from "@/components/gauge/ModeGauge";
import { Selectors } from "@/components/selector/Selectors";

import canvasCssModule from "@/components/Canvas.module.scss";


// NOTE: Keep the viewbox width in sync with the #scales-tool-mount-point width in CSS.

export function Canvas(
): JSX.Element {
  return (
    <svg
      className={canvasCssModule["canvas"]}
      viewBox="0 0 600 440"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Selectors />
      <ModeGauge />
      <Clock />
    </svg>
  );
}
