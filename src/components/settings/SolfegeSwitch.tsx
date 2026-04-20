import { Switch } from "@mantine/core";

import { useDerivedContext } from "@/contexts/derived";
import { useDispatchContext } from "@/contexts/dispatch";
import { ActionType } from "@/utilities/action";

import cssModule from "@/components/settings/SolfegeSwitch.module.scss";


export function SolfegeSwitch(
): JSX.Element {
  const { isUsingSolfege } = useDerivedContext();
  const dispatch = useDispatchContext();

  return (
    <Switch
      classNames={{
        label: cssModule["switch-label"],
      }}
      label="Solfège"
      withThumbIndicator={false}
      checked={isUsingSolfege}
      onChange={(event) => dispatch({
        type: ActionType.SelectIsUsingSolfege,
        isUsingSolfege: event.currentTarget.checked
      })}
    />
  );
}
