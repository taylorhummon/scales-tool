import { CentralBox } from "@/components/selector/CentralBox";
import { DegreeSelector } from "@/components/selector/DegreeSelector";
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
      <SelectorButtons />
      <DegreeSelector />
      <RootSelector />
      <CentralBox />
    </g>
  );
}
