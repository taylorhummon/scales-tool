import { SelectorButton, ButtonPiece } from "@/components/selector/SelectorButton";
import { Motion } from "@/utilities/motion";

import selectorButtonsCssModule from "@/components/selector/SelectorButtons.module.scss";


export function SelectorButtons(
): JSX.Element {
  return (
    <>
      <SelectorButton
        buttonPiece={ButtonPiece.Full}
        onClickMotion={Motion.IncrementModeAndIncrementRoot}
        className={selectorButtonsCssModule["upper-top-left"]}
        dataTestid="upper-top-left"
      />
      <SelectorButton
        buttonPiece={ButtonPiece.LeftHalf}
        onClickMotion={Motion.IncrementDegreeAndDecrementMode}
        className={selectorButtonsCssModule["upper-top-right"]}
        dataTestid="upper-top-right"
      />
      <SelectorButton
        buttonPiece={ButtonPiece.RightHalf}
        onClickMotion={Motion.DecrementDegreeAndIncrementMode}
        className={selectorButtonsCssModule["upper-bottom-left"]}
        dataTestid="upper-bottom-left"
      />
      <SelectorButton
        buttonPiece={ButtonPiece.Full}
        onClickMotion={Motion.IncrementRootAndIncrementDegree}
        className={selectorButtonsCssModule["upper-bottom-right"]}
        dataTestid="upper-bottom-right"
      />
      <SelectorButton
        buttonPiece={ButtonPiece.RightHalf}
        onClickMotion={Motion.IncrementDegreeAndDecrementMode}
        className={selectorButtonsCssModule["lower-top-left"]}
        dataTestid="lower-top-left"
      />
      <SelectorButton
        buttonPiece={ButtonPiece.Full}
        onClickMotion={Motion.DecrementRootAndDecrementDegree}
        className={selectorButtonsCssModule["lower-top-right"]}
        dataTestid="lower-top-right"
      />
      <SelectorButton
        buttonPiece={ButtonPiece.Full}
        onClickMotion={Motion.DecrementModeAndDecrementRoot}
        className={selectorButtonsCssModule["lower-bottom-left"]}
        dataTestid="lower-bottom-left"
      />
      <SelectorButton
        buttonPiece={ButtonPiece.LeftHalf}
        onClickMotion={Motion.DecrementDegreeAndIncrementMode}
        className={selectorButtonsCssModule["lower-bottom-right"]}
        dataTestid="lower-bottom-right"
      />
    </>
  );
}
