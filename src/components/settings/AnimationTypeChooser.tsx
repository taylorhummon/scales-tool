import { NativeSelect } from "@mantine/core";

import { useDerivedContext } from "@/contexts/derived";
import { useDispatchContext } from "@/contexts/dispatch";
import { ActionType } from "@/utilities/action";
import { AnimationType } from "@/utilities/animation";

import animationTypeChooserCssModule from "@/components/settings/AnimationTypeChooser.module.scss";


export function AnimationTypeChooser(
): JSX.Element {
  const { animationType } = useDerivedContext();
  const dispatch = useDispatchContext();

  return (
    <NativeSelect
      classNames={{
        label: animationTypeChooserCssModule["chooser-label"],
      }}
      label="Animation"
      data={Object.values(AnimationType)}
      value={animationType}
      onChange={(event) => dispatch({
        type: ActionType.SelectAnimationType,
        animationType: event.target.value
      })}
    />
  );
}
