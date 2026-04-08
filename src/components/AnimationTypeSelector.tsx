import type { Dispatch, SetStateAction } from "react";

import { AnimationType } from "@/enumerations";
import type { State } from "@/utilities/state";


interface AnimationTypeSelectorProps {
  animationType: AnimationType,
  setState: Dispatch<SetStateAction<State>>;
}


export function AnimationTypeSelector({
  animationType,
  setState
}: AnimationTypeSelectorProps): JSX.Element {
  return (
    <select
      value={animationType}
      onChange={(event) => {
        setState((state: State) => {
          return {
            ...state,
            animationType: event.target.value as AnimationType
          };
        });
      }}
    >
      {Object.values(AnimationType).map((animationType) => (
        <option
          key={animationType}
          value={animationType}
        >
          {animationType}
        </option>
      ))}
    </select>
  );
}
