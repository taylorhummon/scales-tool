import { DegreeSlider } from "@/components/sliders/DegreeSlider";
import { RootSlider } from "@/components/sliders/RootSlider";
import { SelectionBox } from "@/components/sliders/SelectionBox";
import { SliderButtons } from "@/components/sliders/SliderButtons";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/sliders/Sliders.module.scss";


export function Sliders(
): JSX.Element {
  return (
    <g
      className={buildClassString(cssModule, ["sliders"])}
    >
      <SliderButtons />
      <SelectionBox />
      <DegreeSlider />
      <RootSlider />
    </g>
  );
}
