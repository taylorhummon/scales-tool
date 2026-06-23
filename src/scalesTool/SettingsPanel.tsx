import { type ActionDispatch } from "react"
import { NativeSelect, Stack } from "@mantine/core"

import { type Action, ActionType } from "@shared/utilities/action"
import { type ClockSettings, LabelsOption } from "@shared/utilities/clock"

import settingsPanelCssModule from "./SettingsPanel.module.scss"


const EXTRA_LABELS_OPTIONS = [
  LabelsOption.None,
  LabelsOption.Solfege,
  LabelsOption.Simplified,
]

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
      <NativeSelect
        classNames={{ "label": settingsPanelCssModule["chooser-label"] }}
        label="Extra note names"
        data={EXTRA_LABELS_OPTIONS}
        value={clockSettings.outsideLabelsOption}
        onChange={(event) => {
          dispatch({
            type: ActionType.SelectExtraNoteNames,
            outsideLabelsOption: event.currentTarget.value as LabelsOption,
          })
        }}
        data-testid="extra-note-names-select"
      />
    </Stack>
  )
}
