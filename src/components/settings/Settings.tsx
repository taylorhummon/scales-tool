import { Stack, Switch } from "@mantine/core";

import { useDerivedContext } from "@/contexts/derived";
import { useDispatchContext } from "@/contexts/dispatch";
import { ActionType } from "@/utilities/action";
import { SWITCH_ACTIVATED_COLOR } from "@/utilities/color";

import settingsCssModule from "@/components/settings/Settings.module.scss";


const SWITCH_SIZE = "md";
const WITH_THUMB_INDICATOR = false;

export function Settings(
): JSX.Element {
  const { isUsingSolfege, isUsingAnimation, isUsingNotesBallet } = useDerivedContext();
  const dispatch = useDispatchContext();

  return (
    <Stack
      classNames={{ "root": settingsCssModule["settings"] }}
      align="stretch"
      gap="sm"
    >
      <Switch
        label="Solfège"
        size={SWITCH_SIZE}
        color={SWITCH_ACTIVATED_COLOR}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        checked={isUsingSolfege}
        onChange={(event) => dispatch({
          type: ActionType.SelectIsUsingSolfege,
          isUsingSolfege: event.currentTarget.checked,
        })}
      />
      <Switch
        label="Animation"
        size={SWITCH_SIZE}
        color={SWITCH_ACTIVATED_COLOR}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        checked={isUsingAnimation}
        onChange={(event) => dispatch({
          type: ActionType.SelectIsUsingAnimation,
          isUsingAnimation: event.currentTarget.checked,
        })}
      />
      <Switch
        label="Notes ballet"
        size={SWITCH_SIZE}
        color={SWITCH_ACTIVATED_COLOR}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        disabled={! isUsingAnimation}
        checked={isUsingNotesBallet}
        onChange={(event) => dispatch({
          type: ActionType.SelectIsUsingNotesBallet,
          isUsingNotesBallet: event.currentTarget.checked,
        })}
      />
    </Stack>
  );
}
