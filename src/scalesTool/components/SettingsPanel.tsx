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
      <Select
        label="Dot Animation"
        data={Object.values(AnimationOption)}
        value={clockSettings.animationOption}
        onChange={(value) => {
          if (value === null) return
          dispatch({
            type: ActionType.SelectAnimationOption,
            animationOption: value,
          })
        }}
      />
      <Select
        label="Anchor to Top"
        data={Object.values(AnchorOption)}
        value={clockSettings.anchorOption}
        onChange={(value) => {
          if (value === null) return
          dispatch({
            type: ActionType.SelectAnchorOption,
            anchorOption: value,
          })
        }}
      />
    </Stack>
  )
}

const SWITCH_SIZE = "md"
const WITH_THUMB_INDICATOR = false
