import type { Dispatch, SetStateAction } from "react";

import { AnimationType } from "@/enumerations";
import { buildClassString } from "@/utilities/css";
import type { State } from "@/utilities/state";

import cssModule from "@/components/settings/AnimationTypeSelector.module.scss";


interface AnimationTypeSelectorProps {
  animationType: AnimationType,
  setState: Dispatch<SetStateAction<State>>;
}


export function AnimationTypeSelector({
  animationType,
  setState
}: AnimationTypeSelectorProps): JSX.Element {
  return (
    <div
      className={buildClassString(cssModule, ["animation-type-selector"])}
    >
      Animations:&nbsp;
      <select
        className={buildClassString(cssModule, ["menu"])}
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
    </div>
  );
}
