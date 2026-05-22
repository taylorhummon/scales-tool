import { type ActionDispatch } from "react"
import { Stack, Switch, Select } from "@mantine/core"

import { type Action, ActionType } from "@scalesTool/utilities/action"
import { type ClockSettings, AnimationOption, AnchorOption } from "@scalesTool/utilities/clock"

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
        label="Ducks in a row"
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
        label="Symmetry note"
        size={SWITCH_SIZE}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        checked={clockSettings.isUsingSymmetrySpotlight}
        onChange={(event) => {
          dispatch({
            type: ActionType.SelectIsUsingSymmetrySpotlight,
            isUsingSymmetrySpotlight: event.currentTarget.checked,
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
        label="Reduce motion"
        size={SWITCH_SIZE}
        withThumbIndicator={WITH_THUMB_INDICATOR}
        checked={clockSettings.animationOption === AnimationOption.Minimal}
        onChange={(event) => {
          dispatch({
            type: ActionType.SelectAnimationOption,
            animationOption: event.currentTarget.checked ? AnimationOption.Minimal : AnimationOption.Ballet,
          })
        }}
        data-testid="reduce-motion-switch"
      />
    </Stack>
  )
}

const SWITCH_SIZE = "md"
const WITH_THUMB_INDICATOR = false
