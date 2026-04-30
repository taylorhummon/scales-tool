import { Stack, Switch } from "@mantine/core";

import { useDerivedContext } from "@/contexts/derived";
import { useDispatchContext } from "@/contexts/dispatch";
import { ActionType } from "@/utilities/action";

import settingsCssModule from "@/components/settings/Settings.module.scss";


const SWITCH_SIZE = "md";
const WITH_THUMB_INDICATOR = false;

export function Settings(
): JSX.Element {
  const { settings } = useDerivedContext();
  const dispatch = useDispatchContext();

  return (
    <Stack
      classNames={{ "root": settingsCssModule["settings"] }}
      align="stretch"
      gap="sm"
    >
      <Switch
        label="Cluster notes"
        size={SWITCH_SIZE}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        checked={settings.isClusteringNotes}
        onChange={(event) => dispatch({
          type: ActionType.SelectIsClusteringNotes,
          isClusteringNotes: event.currentTarget.checked,
        })}
      />
      <Switch
        label="Solfège"
        size={SWITCH_SIZE}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        checked={settings.isUsingSolfege}
        onChange={(event) => dispatch({
          type: ActionType.SelectIsUsingSolfege,
          isUsingSolfege: event.currentTarget.checked,
        })}
      />
      <Switch
        label="Animation"
        size={SWITCH_SIZE}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        checked={settings.isUsingAnimation}
        onChange={(event) => dispatch({
          type: ActionType.SelectIsUsingAnimation,
          isUsingAnimation: event.currentTarget.checked,
        })}
      />
      <Switch
        label="Notes ballet"
        size={SWITCH_SIZE}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        disabled={! settings.isUsingAnimation}
        checked={settings.isUsingNotesBallet}
        onChange={(event) => dispatch({
          type: ActionType.SelectIsUsingNotesBallet,
          isUsingNotesBallet: event.currentTarget.checked,
        })}
      />
    </Stack>
  );
}
