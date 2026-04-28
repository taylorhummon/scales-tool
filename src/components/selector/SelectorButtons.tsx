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
          dataTestid="increment-both"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.IncrementDegree}
          className={selectorButtonsCssModule["bottom-left"]}
          dataTestid="increment-degree"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.IncrementRoot}
          className={selectorButtonsCssModule["bottom-right"]}
          dataTestid="increment-root"
        />
      </g>
      <g className={selectorButtonsCssModule["lower-buttons"]}>
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.DecrementDegree}
          className={selectorButtonsCssModule["top-left"]}
          dataTestid="decrement-degree"
        />
        <SelectorButton
          buttonSize={ButtonSize.Small}
          onClickMotion={Motion.DecrementRoot}
          className={selectorButtonsCssModule["top-right"]}
          dataTestid="decrement-root"
        />
        <SelectorButton
          buttonSize={ButtonSize.Large}
          onClickMotion={Motion.DecrementBoth}
          className={selectorButtonsCssModule["bottom"]}
          dataTestid="decrement-both"
        />
      </g>
    </>
  );
}
