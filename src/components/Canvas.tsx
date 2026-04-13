import { Clock } from "@/components/clock/Clock";
import { Sliders } from "@/components/sliders/Sliders";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/Canvas.module.scss";


export function Canvas(
): JSX.Element {
  return (
    <svg
      className={buildClassString(cssModule, ["canvas"])}
      viewBox="0 -210 500 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Clock />
      <Sliders />
    </svg>
  );
}
