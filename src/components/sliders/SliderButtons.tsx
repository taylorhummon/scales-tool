import { Motion } from "@/enumerations";
import { SliderButton } from "@/components/sliders/SliderButton";


export function SliderButtons(
): JSX.Element {
  return (
    <>
      <SliderButton
        onClickMotion={Motion.IncrementBoth}
        dataTestid="increment-both"
      />
      <SliderButton
        onClickMotion={Motion.IncrementDegree}
        dataTestid="increment-degree"
      />
      <SliderButton
        onClickMotion={Motion.IncrementRoot}
        dataTestid="increment-root"
      />
      <SliderButton
        onClickMotion={Motion.DecrementDegree}
        dataTestid="decrement-degree"
      />
      <SliderButton
        onClickMotion={Motion.DecrementRoot}
        dataTestid="decrement-root"
      />
      <SliderButton
        onClickMotion={Motion.DecrementBoth}
        dataTestid="decrement-both"
      />
    </>
  );
}
