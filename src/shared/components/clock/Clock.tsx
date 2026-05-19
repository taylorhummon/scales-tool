import { type MusicalKey } from "@shared/classes/MusicalKey"
import { type Note } from "@shared/classes/Note"
import { NoteDotAnimator } from "@shared/classes/NoteDotAnimator"
import { NoteLabelAnimator } from "@shared/classes/NoteLabelAnimator"
import { SolfegeLabelAnimator } from "@shared/classes/SolfegeLabelAnimator"
import { Face } from "@shared/components/clock/Face"
import { Description } from "@shared/components/clock/Description"
import { NoteDot } from "@shared/components/clock/NoteDot"
import { NoteLabel } from "@shared/components/clock/NoteLabel"
import { RootDot } from "@shared/components/clock/RootDot"
import { SolfegeLabel } from "@shared/components/clock/SolfegeLabel"
import { SymmetryDot } from "@shared/components/clock/SymmetryDot"
import { type ClockSettings } from "@shared/utilities/clock"
import { arrayFromMap } from "@shared/utilities/map"
import { NATURAL_NOTES } from "@shared/utilities/naturalNote"
import { type Motion } from "@shared/utilities/motion"
import { type SolfegeLetter, SOLFEGE_LETTERS } from "@shared/utilities/solfege"

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
  const { isUntangled } = clockSettings
  const noteDotAnimator = new NoteDotAnimator({ isUntangled, motion, musicalKey })
  const noteLabelAnimator = new NoteLabelAnimator({ musicalKey, nextMusicalKey })
  const solfegeLabelAnimator = new SolfegeLabelAnimator({ musicalKey, nextMusicalKey })

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
      {arrayFromMap(musicalKey.noteBySolfegeLetter, (note: Note, solfegeLetter: SolfegeLetter) => (
        <NoteDot
          key={note.value}
          clockSettings={clockSettings}
          musicalKey={musicalKey}
          nextMusicalKey={nextMusicalKey}
          noteDotAnimator={noteDotAnimator}
          solfegeLetter={solfegeLetter}
          note={note}
        />
      ))}
      {NATURAL_NOTES.map((naturalNote) =>
        <NoteLabel
          key={naturalNote}
          clockSettings={clockSettings}
          musicalKey={musicalKey}
          nextMusicalKey={nextMusicalKey}
          noteLabelAnimator={noteLabelAnimator}
          naturalNote={naturalNote}
        />
      )}
      {SOLFEGE_LETTERS.map((solfegeLetter) =>
        <SolfegeLabel
          key={solfegeLetter}
          clockSettings={clockSettings}
          musicalKey={musicalKey}
          nextMusicalKey={nextMusicalKey}
          solfegeLabelAnimator={solfegeLabelAnimator}
          solfegeLetter={solfegeLetter}
        />
      )}
      <Description
        musicalKey={musicalKey}
      />
    </g>
  )
}
