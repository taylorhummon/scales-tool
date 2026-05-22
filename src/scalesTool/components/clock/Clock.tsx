import { type MusicalKey } from "@scalesTool/classes/MusicalKey"
import { DotAnimator } from "@scalesTool/classes/DotAnimator"
import { Dot } from "@scalesTool/components/clock/Dot"
import { Description } from "@scalesTool/components/clock/Description"
import { Face } from "@scalesTool/components/clock/Face"
import { OrdinaryLabel } from "@scalesTool/components/clock/OrdinaryLabel"
import { RootSpotlight } from "@scalesTool/components/clock/RootSpotlight"
import { SolfegeLabel } from "@scalesTool/components/clock/SolfegeLabel"
import { SymmetrySpotlight } from "@scalesTool/components/clock/SymmetrySpotlight"
import { type ClockSettings } from "@scalesTool/utilities/clock"
import { type Motion } from "@scalesTool/utilities/motion"
import { NATURAL_NOTES } from "@scalesTool/utilities/naturalNote"
import { SOLFEGE_LETTERS } from "@scalesTool/utilities/solfege"

import clockCssModule from "./Clock.module.scss"


interface ClockParameters {
  clockSettings: ClockSettings,
  motion: Motion,
  currentMusicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
}

export function Clock({
  clockSettings,
  motion,
  currentMusicalKey,
  nextMusicalKey,
}: ClockParameters): React.ReactNode {
  const dotAnimator = new DotAnimator({
    clockSettings,
    motion,
    currentMusicalKey,
    nextMusicalKey,
  })

  return (
    <g className={clockCssModule["clock"]}>
      <RootSpotlight
        clockSettings={clockSettings}
        currentMusicalKey={currentMusicalKey}
        nextMusicalKey={nextMusicalKey}
      />
      <SymmetrySpotlight
        clockSettings={clockSettings}
        currentMusicalKey={currentMusicalKey}
        nextMusicalKey={nextMusicalKey}
      />
      <Face />
      {SOLFEGE_LETTERS.map((solfegeLetter) =>
        <Dot
          key={solfegeLetter}
          clockSettings={clockSettings}
          currentMusicalKey={currentMusicalKey}
          dotAnimator={dotAnimator}
          solfegeLetter={solfegeLetter}
        />
      )}
      {NATURAL_NOTES.map((naturalNote) =>
        <OrdinaryLabel
          key={naturalNote}
          clockSettings={clockSettings}
          currentMusicalKey={currentMusicalKey}
          nextMusicalKey={nextMusicalKey}
          naturalNote={naturalNote}
        />
      )}
      {SOLFEGE_LETTERS.map((solfegeLetter) =>
        <SolfegeLabel
          key={solfegeLetter}
          clockSettings={clockSettings}
          currentMusicalKey={currentMusicalKey}
          nextMusicalKey={nextMusicalKey}
          solfegeLetter={solfegeLetter}
        />
      )}
      <Description
        currentMusicalKey={currentMusicalKey}
      />
    </g>
  )
}
