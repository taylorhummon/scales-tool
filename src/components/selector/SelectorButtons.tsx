import { SelectorButton, ButtonSize } from "@/components/selector/SelectorButton";
import { Motion } from "@/utilities/motion";

import selectorButtonsCssModule from "@/components/selector/SelectorButtons.module.scss";


export function SelectorButtons(
): JSX.Element {
  return (
    <>
      <g className={selectorButtonsCssModule["upper-buttons"]}>
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.IncrementModeAndIncrementRoot}
          className={selectorButtonsCssModule["top-left"]}
          dataTestid="upper-top-left"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.IncrementRootAndIncrementDegree}
          className={selectorButtonsCssModule["top-middle"]}
          dataTestid="upper-top-middle"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.IncrementDegreeAndDecrementMode}
          className={selectorButtonsCssModule["top-right"]}
          dataTestid="upper-top-right"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.DecrementDegreeAndIncrementMode}
          className={selectorButtonsCssModule["bottom-left"]}
          dataTestid="upper-bottom-left"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.IncrementModeAndIncrementRoot}
          className={selectorButtonsCssModule["bottom-middle"]}
          dataTestid="upper-bottom-middle"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.IncrementRootAndIncrementDegree}
          className={selectorButtonsCssModule["bottom-right"]}
          dataTestid="upper-bottom-right"
        />
      </g>
      <g className={selectorButtonsCssModule["lower-buttons"]}>
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.IncrementDegreeAndDecrementMode}
          className={selectorButtonsCssModule["top-left"]}
          dataTestid="lower-top-left"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.DecrementModeAndDecrementRoot}
          className={selectorButtonsCssModule["top-middle"]}
          dataTestid="lower-top-middle"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.DecrementRootAndDecrementDegree}
          className={selectorButtonsCssModule["top-right"]}
          dataTestid="lower-top-right"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.DecrementModeAndDecrementRoot}
          className={selectorButtonsCssModule["bottom-left"]}
          dataTestid="lower-bottom-left"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.DecrementRootAndDecrementDegree}
          className={selectorButtonsCssModule["bottom-middle"]}
          dataTestid="lower-bottom-middle"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.DecrementDegreeAndIncrementMode}
          className={selectorButtonsCssModule["bottom-right"]}
          dataTestid="lower-bottom-right"
        />
      </g>
    </>
  );
}
