import { CentralBox } from "@/components/selectors/CentralBox";
import { DegreeSelector } from "@/components/selectors/DegreeSelector";
import { RootSelector } from "@/components/selectors/RootSelector";
import { SelectorButtons } from "@/components/selectors/SelectorButtons";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/selectors/Selectors.module.scss";


export function Selectors(
): JSX.Element {
  return (
    <g
      className={buildClassString(cssModule, ["selectors"])}
    >
      <SelectorButtons />
      <CentralBox />
      <DegreeSelector />
      <RootSelector />
    </g>
  );
}
