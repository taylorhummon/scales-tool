import { SelectorButton, ButtonPiece } from "@/components/selector/SelectorButton";
import { Motion } from "@/utilities/motion";

import selectorButtonsCssModule from "@/components/selector/SelectorButtons.module.scss";


export function SelectorButtons(
): JSX.Element {
  return (
    <>
      <g
        className={selectorButtonsCssModule["upper-buttons"]}
      >
        <SelectorButton
          buttonPiece={ButtonPiece.Full}
          onClickMotion={Motion.IncrementModeAndIncrementRoot}
          className={selectorButtonsCssModule["top-left"]}
          dataTestid="upper-top-left"
        />
        <SelectorButton
          buttonPiece={ButtonPiece.LeftHalf}
          onClickMotion={Motion.IncrementDegreeAndDecrementMode}
          className={selectorButtonsCssModule["top-right"]}
          dataTestid="upper-top-right"
        />
        <SelectorButton
          buttonPiece={ButtonPiece.RightHalf}
          onClickMotion={Motion.DecrementDegreeAndIncrementMode}
          className={selectorButtonsCssModule["bottom-left"]}
          dataTestid="upper-bottom-left"
        />
        <SelectorButton
          buttonPiece={ButtonPiece.Full}
          onClickMotion={Motion.IncrementRootAndIncrementDegree}
          className={selectorButtonsCssModule["bottom-right"]}
          dataTestid="upper-bottom-right"
        />
      </g>
      <g
        className={selectorButtonsCssModule["lower-buttons"]}
      >
        <SelectorButton
          buttonPiece={ButtonPiece.RightHalf}
          onClickMotion={Motion.IncrementDegreeAndDecrementMode}
          className={selectorButtonsCssModule["top-left"]}
          dataTestid="lower-top-left"
        />
        <SelectorButton
          buttonPiece={ButtonPiece.Full}
          onClickMotion={Motion.DecrementRootAndDecrementDegree}
          className={selectorButtonsCssModule["top-right"]}
          dataTestid="lower-top-right"
        />
        <SelectorButton
          buttonPiece={ButtonPiece.Full}
          onClickMotion={Motion.DecrementModeAndDecrementRoot}
          className={selectorButtonsCssModule["bottom-left"]}
          dataTestid="lower-bottom-left"
        />
        <SelectorButton
          buttonPiece={ButtonPiece.LeftHalf}
          onClickMotion={Motion.DecrementDegreeAndIncrementMode}
          className={selectorButtonsCssModule["bottom-right"]}
          dataTestid="lower-bottom-right"
        />
      </g>
    </>
  );
}
