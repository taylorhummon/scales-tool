import { type ActionDispatch } from "react"
import { Stack, Switch } from "@mantine/core"

import { type Action, ActionType } from "@shared/utilities/action"
import { type ClockSettings, LabelsOption } from "@shared/utilities/clock"

import settingsPanelCssModule from "./SettingsPanel.module.scss"


interface SettingsPanelParameters {
  clockSettings: ClockSettings,
  dispatch: ActionDispatch<[action: Action]>,
}

export function SettingsPanel({
  clockSettings,
  dispatch,
}: SettingsPanelParameters): React.ReactNode {
  return (
    <Stack
      classNames={{ "root": settingsPanelCssModule["settings-panel"] }}
      align="stretch"
      gap="sm"
    >
      <Switch
        label="Simplified notes"
        size={SWITCH_SIZE}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        checked={clockSettings.insideLabelsOption === LabelsOption.Simplified}
        onChange={(event) => {
          dispatch({
            type: ActionType.SelectIsUsingSimplifiedNotes,
            isUsingSimplifiedNotes: event.currentTarget.checked,
          })
        }}
        data-testid="simplified-notes-switch"
      />
    </Stack>
  )
}

const SWITCH_SIZE = "md"
const WITH_THUMB_INDICATOR = false
