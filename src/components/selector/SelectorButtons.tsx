import { SelectorButton } from "@/components/selector/SelectorButton";
import { Motion } from "@/utilities/motion";


export function SelectorButtons(
): JSX.Element {
  return (
    <>
      <SelectorButton
        onClickMotion={Motion.IncrementBoth}
        dataTestid="increment-both"
      />
      <SelectorButton
        onClickMotion={Motion.IncrementRoot}
        dataTestid="increment-root"
      />
      <SelectorButton
        onClickMotion={Motion.IncrementDegree}
        dataTestid="increment-degree"
      />
      <SelectorButton
        onClickMotion={Motion.DecrementRoot}
        dataTestid="decrement-root"
      />
      <SelectorButton
        onClickMotion={Motion.DecrementDegree}
        dataTestid="decrement-degree"
      />
      <SelectorButton
        onClickMotion={Motion.DecrementBoth}
        dataTestid="decrement-both"
      />
    </>
  );
}
