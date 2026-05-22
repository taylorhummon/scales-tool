import { type MusicalKey } from "@scalesTool/classes/MusicalKey"
import { Highlighter } from "@scalesTool/components/gauge/Highlighter"
import { Mode } from "@scalesTool/components/gauge/Mode"
import { MODES } from "@scalesTool/utilities/mode"

import modeGaugeCssModule from "./ModeGauge.module.scss"


interface ModeGaugeParameters {
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export function ModeGauge({
  currentMusicalKey,
  nextMusicalKey,
}: ModeGaugeParameters): React.ReactNode {
  const currentMode = currentMusicalKey.mode
  const nextMode = nextMusicalKey.mode

  return (
    <g className={modeGaugeCssModule["mode-gauge"]}>
      <text className={modeGaugeCssModule["label"]}>
        Mode
      </text>
      <Highlighter
        currentMode={currentMode}
        nextMode={nextMode}
      />
      <g className={modeGaugeCssModule["mode-gauge-inner"]}>
        {MODES.map((mode) => (
          <Mode
            key={mode}
            currentMode={currentMode}
            nextMode={nextMode}
            mode={mode}
          />
        ))}
      </g>
    </g>
  )
}
