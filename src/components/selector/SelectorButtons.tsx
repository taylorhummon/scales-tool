import { SelectorButton } from "@/components/selector/SelectorButton";
import { Motion } from "@/utilities/motion";

import selectorButtonsCssModule from "@/components/selector/SelectorButtons.module.scss";


export function SelectorButtons(
): JSX.Element {
  return (
    <>
      <SelectorButton
        width={46}
        height={40}
        onClickMotion={Motion.DecrementDegreeAndIncrementMode}
        className={selectorButtonsCssModule["top-top-left"]}
        dataTestid="top-top-left"
      />
      <SelectorButton
        width={98}
        height={40}
        onClickMotion={Motion.IncrementRootAndIncrementDegree}
        className={selectorButtonsCssModule["top-top-right"]}
        dataTestid="top-top-right"
      />
      <SelectorButton
        width={98}
        height={40}
        onClickMotion={Motion.IncrementModeAndIncrementRoot}
        className={selectorButtonsCssModule["top-bottom-left"]}
        dataTestid="top-bottom-left"
      />
      <SelectorButton
        width={46}
        height={40}
        onClickMotion={Motion.IncrementDegreeAndDecrementMode}
        className={selectorButtonsCssModule["top-bottom-right"]}
        dataTestid="top-bottom-right"
      />
      <SelectorButton
        width={98}
        height={40}
        onClickMotion={Motion.DecrementModeAndDecrementRoot}
        className={selectorButtonsCssModule["bottom-top-left"]}
        dataTestid="bottom-top-left"
      />
      <SelectorButton
        width={46}
        height={40}
        onClickMotion={Motion.DecrementDegreeAndIncrementMode}
        className={selectorButtonsCssModule["bottom-top-right"]}
        dataTestid="bottom-top-right"
        />
      <SelectorButton
        width={46}
        height={40}
        onClickMotion={Motion.IncrementDegreeAndDecrementMode}
        className={selectorButtonsCssModule["bottom-bottom-left"]}
        dataTestid="bottom-bottom-left"
      />
      <SelectorButton
        width={98}
        height={40}
        onClickMotion={Motion.DecrementRootAndDecrementDegree}
        className={selectorButtonsCssModule["bottom-bottom-right"]}
        dataTestid="bottom-bottom-right"
      />
    </>
  );
}
