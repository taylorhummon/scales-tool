import { useDerivedContext } from "@/contexts/derived";
import { useDispatchContext } from "@/contexts/dispatch";
import { buildClassString } from "@/utilities/css";
import { ActionType } from "@/utilities/action";
import { AnimationType } from "@/utilities/animation";

import cssModule from "@/components/settings/AnimationTypeChooser.module.scss";


export function AnimationTypeChooser(): JSX.Element {
  const { animationType } = useDerivedContext();
  const dispatch = useDispatchContext();

  return (
    <div
      className={buildClassString(cssModule, ["animation-type-chooser"])}
    >
      <span
        className={buildClassString(cssModule, ["label"])}
      >
        Animations:
      </span>
      <select
        className={buildClassString(cssModule, ["menu"])}
        name="animation-type"
        value={animationType}
        onChange={(event) => dispatch({
          type: ActionType.SelectAnimationType,
          animationType: event.target.value
        })}
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
