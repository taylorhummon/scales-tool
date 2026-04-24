import { CentralBox } from "@/components/selector/CentralBox";
import { ModeSelector } from "@/components/selector/ModeSelector";
import { DegreeSelector } from "@/components/selector/DegreeSelector";
import { RootSelector } from "@/components/selector/RootSelector";
import { SelectorButtons } from "@/components/selector/SelectorButtons";

import selectorsCssModule from "@/components/selector/Selectors.module.scss";


export function Selectors(
): JSX.Element {
  return (
    <g className={selectorsCssModule["selectors"]}>
      <defs>
        <clipPath id="selectors-clip-path">
          <rect
            x="-30"
            y="-103"
            width="60"
            height="206"
          />
        </clipPath>
      </defs>
      <SelectorButtons />
      <CentralBox />
      <ModeSelector />
      <RootSelector />
      <DegreeSelector />
    </g>
  );
}
