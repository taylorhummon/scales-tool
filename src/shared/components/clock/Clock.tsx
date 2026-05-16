import { type MusicalKey } from "@shared/classes/MusicalKey"
import { Face } from "@shared/components/clock/Face"
import { KeyDescription } from "@shared/components/clock/KeyDescription"
import { Labels } from "@shared/components/clock/Labels"
import { NoteDots } from "@shared/components/clock/NoteDots"
import { RootDot } from "@shared/components/clock/RootDot"
import { SymmetryDot } from "@shared/components/clock/SymmetryDot"
import { type ClockSettings } from "@shared/utilities/clock"
import { type Motion } from "@shared/utilities/motion"

import clockCssModule from "./Clock.module.scss"


interface ClockInput {
  clockSettings: ClockSettings,
  motion: Motion,
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export function Clock({
  clockSettings,
  motion,
  musicalKey,
  nextMusicalKey,
}: ClockInput): React.ReactNode {
  return (
    <g className={clockCssModule["clock"]}>
      <RootDot
        clockSettings={clockSettings}
        musicalKey={musicalKey}
        nextMusicalKey={nextMusicalKey}
      />
      <SymmetryDot
        clockSettings={clockSettings}
        musicalKey={musicalKey}
        nextMusicalKey={nextMusicalKey}
      />
      <Face />
      <NoteDots
        clockSettings={clockSettings}
        motion={motion}
        musicalKey={musicalKey}
      />
      <Labels
        clockSettings={clockSettings}
        motion={motion}
        musicalKey={musicalKey}
      />
      <KeyDescription
        musicalKey={musicalKey}
      />
    </g>
  )
}
