import { type MusicalKey } from "@shared/classes/MusicalKey"
import { type Note } from "@shared/classes/Note"
import { NoteDotAnimator } from "@shared/classes/NoteDotAnimator"
import { NoteDot } from "@shared/components/clock/NoteDot"
import { type ClockSettings } from "@shared/utilities/clock"
import { arrayFromMap } from "@shared/utilities/map"
import { type Motion } from "@shared/utilities/motion"
import { type SolfegeLetter } from "@shared/utilities/solfege"


interface ClockInput {
  clockSettings: ClockSettings,
  motion: Motion,
  musicalKey: MusicalKey,
}

export function NoteDots({
  clockSettings,
  motion,
  musicalKey,
}: ClockInput): React.ReactNode {
  const { isUntangled } = clockSettings
  const noteDotAnimator = new NoteDotAnimator({ isUntangled, motion, musicalKey })

  return (
    <>
      {arrayFromMap(musicalKey.scale, (note: Note, solfegeLetter: SolfegeLetter) => (
        <NoteDot
          key={note.value}
          clockSettings={clockSettings}
          noteDotAnimator={noteDotAnimator}
          solfegeLetter={solfegeLetter}
          note={note}
        />
      ))}
    </>
  )
}
