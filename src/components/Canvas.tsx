import { Clock } from "@/components/clock/Clock";
import { Selectors } from "@/components/selector/Selectors";
import { ModeGauge } from "@/components/gauge/ModeGauge";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/Canvas.module.scss";


export function Canvas(
): JSX.Element {
  return (
    <svg
      className={buildClassString(cssModule, ["canvas"])}
      viewBox="0 -210 600 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Selectors />
      <Clock />
      <ModeGauge />
    </svg>
  );
}
