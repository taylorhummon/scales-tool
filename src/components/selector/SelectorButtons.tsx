import { SelectorButton, ButtonSize } from "@/components/selector/SelectorButton";
import { Motion } from "@/utilities/motion";

import selectorButtonsCssModule from "@/components/selector/SelectorButtons.module.scss";


export function SelectorButtons(
): JSX.Element {
  return (
    <>
      <g className={selectorButtonsCssModule["upper-buttons"]}>
        <SelectorButton
          buttonSize={ButtonSize.Large}
          onClickMotion={Motion.IncrementBoth}
          className={selectorButtonsCssModule["top"]}
          dataTestid="upper-top"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.IncrementRoot}
          className={selectorButtonsCssModule["bottom-left"]}
          dataTestid="upper-bottom-left"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.IncrementDegree}
          className={selectorButtonsCssModule["bottom-right"]}
          dataTestid="upper-bottom-right"
        />
      </g>
      <g className={selectorButtonsCssModule["lower-buttons"]}>
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.DecrementRoot}
          className={selectorButtonsCssModule["top-left"]}
          dataTestid="lower-top-left"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.DecrementDegree}
          className={selectorButtonsCssModule["top-right"]}
          dataTestid="lower-top-right"
        />
        <SelectorButton
          buttonSize={ButtonSize.Large}
          onClickMotion={Motion.DecrementBoth}
          className={selectorButtonsCssModule["bottom"]}
          dataTestid="lower-bottom"
        />
      </g>
    </>
  );
}
