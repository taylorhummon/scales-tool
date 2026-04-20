import { NativeSelect } from "@mantine/core";

import { useDerivedContext } from "@/contexts/derived";
import { useDispatchContext } from "@/contexts/dispatch";
import { ActionType } from "@/utilities/action";
import { AnimationType } from "@/utilities/animation";

import cssModule from "@/components/settings/AnimationTypeChooser.module.scss";


export function AnimationTypeChooser(
): JSX.Element {
  const { animationType } = useDerivedContext();
  const dispatch = useDispatchContext();

  return (
    <NativeSelect
      classNames={{
        label: cssModule["chooser-label"],
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
