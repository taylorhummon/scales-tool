import { type ActionDispatch } from "react"
import { Stack, Switch } from "@mantine/core"

import { type Action, ActionType } from "@shared/utilities/action"
import { type ClockSettings } from "@shared/utilities/clock"

import settingsPanelCssModule from "./SettingsPanel.module.scss"


interface SettingsPanelInput {
  clockSettings: ClockSettings,
  dispatch: ActionDispatch<[action: Action]>,
}

export function SettingsPanel({
  clockSettings,
  dispatch,
}: SettingsPanelInput): React.ReactNode {
  return (
    <Stack
      classNames={{ "root": settingsPanelCssModule["settings-panel"] }}
      align="stretch"
      gap="sm"
    >
      <Switch
        label="Untangle"
        size={SWITCH_SIZE}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        checked={clockSettings.isUntangled}
        onChange={(event) => {
          dispatch({
            type: ActionType.SelectIsUntangled,
            isUntangled: event.currentTarget.checked,
          })
        }}
        data-testid="untangle-switch"
      />
      <Switch
        label="Symmetry Note"
        size={SWITCH_SIZE}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        checked={clockSettings.isUsingSymmetryDot}
        onChange={(event) => {
          dispatch({
            type: ActionType.SelectIsUsingSymmetryDot,
            isUsingSymmetryDot: event.currentTarget.checked,
          })
        }}
        data-testid="symmetry-switch"
      />
      <Switch
        label="Solfège"
        size={SWITCH_SIZE}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        checked={clockSettings.isUsingSolfege}
        onChange={(event) => {
          dispatch({
            type: ActionType.SelectIsUsingSolfege,
            isUsingSolfege: event.currentTarget.checked,
          })
        }}
        data-testid="solfege-switch"
      />
      <Switch
        label="Notes Ballet"
        size={SWITCH_SIZE}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        checked={clockSettings.isUsingDotsBallet}
        onChange={(event) => {
          dispatch({
            type: ActionType.SelectIsUsingDotsBallet,
            isUsingDotsBallet: event.currentTarget.checked,
          })
        }}
        data-testid="notes-ballet-switch"
      />
      <Switch
        label="Animation"
        size={SWITCH_SIZE}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        checked={clockSettings.isUsingAnimation}
        onChange={(event) => {
          dispatch({
            type: ActionType.SelectIsUsingAnimation,
            isUsingAnimation: event.currentTarget.checked,
          })
        }}
        data-testid="animation-switch"
      />
    </Stack>
  )
}

const SWITCH_SIZE = "md"
const WITH_THUMB_INDICATOR = false
