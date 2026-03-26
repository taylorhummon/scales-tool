import type { Dispatch, SetStateAction } from "react";

import type { State, Derived } from "src/types";
import { Motion } from "src/enumerations";
import { Button } from "src/components/sliders/Button";


interface ButtonsProps {
  derived: Derived;
  setState: Dispatch<SetStateAction<State>>;
}

export function Buttons({
  derived,
  setState
}: ButtonsProps) {
  return (
    <>
      <Button
        derived={derived}
        motion={Motion.DecrementDoPosition}
        setState={setState}
        dataTestid="decrement-do-position"
      />
      <Button
        derived={derived}
        motion={Motion.IncrementDoPosition}
        setState={setState}
        dataTestid="increment-do-position"
      />
      <Button
        derived={derived}
        motion={Motion.DecrementKeyDegree}
        setState={setState}
        dataTestid="decrement-key-degree"
      />
      <Button
        derived={derived}
        motion={Motion.IncrementKeyDegree}
        setState={setState}
        dataTestid="increment-key-degree"
      />
      <Button
        derived={derived}
        motion={Motion.DecrementBoth}
        setState={setState}
        dataTestid="decrement-both"
      />
      <Button
        derived={derived}
        motion={Motion.IncrementBoth}
        setState={setState}
        dataTestid="increment-both"
      />
    </>
  );
}
