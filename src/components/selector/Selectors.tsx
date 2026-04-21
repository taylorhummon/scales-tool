import { CentralBox } from "@/components/selector/CentralBox";
import { DegreeSelector } from "@/components/selector/DegreeSelector";
import { RootSegment } from "@/components/selector/RootSegment";
import { RootSelector } from "@/components/selector/RootSelector";
import { SelectorButtons } from "@/components/selector/SelectorButtons";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/selector/Selectors.module.scss";


export function Selectors(
): JSX.Element {
  return (
    <g
      className={buildClassString(cssModule, ["selectors"])}
    >
      <defs>
        <clipPath
          id="degree-selector-clip-path"
        >
          <rect
            x="-40"
            y="-103"
            width="80"
            height="206"
          />
        </clipPath>
        <clipPath
          id="root-selector-clip-path"
        >
          <rect
            x="-25"
            y="-103"
            width="50"
            height="206"
          />
        </clipPath>
      </defs>
      <SelectorButtons />
      <RootSegment />
      <CentralBox />
      <DegreeSelector />
      <RootSelector />
    </g>
  );
}
