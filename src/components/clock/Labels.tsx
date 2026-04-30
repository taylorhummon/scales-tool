import { buildNoteLabelAnimator } from "@/classes/NoteLabelAnimator";
import { buildSolfegeLabelAnimator } from "@/classes/SolfegeLabelAnimator";
import type { Note } from "@/classes/Note";
import { NoteLabel } from "@/components/clock/NoteLabel";
import { SolfegeLabel } from "@/components/clock/SolfegeLabel";
import { useDerivedContext } from "@/contexts/derived";
import { arrayFromMap } from "@/utilities/map";


export function Labels(
): JSX.Element {
  const { musicalKey, motion, settings } = useDerivedContext();
  if (settings.isUsingSolfege) {
    const solfegeLabelAnimator = buildSolfegeLabelAnimator(settings, musicalKey, motion);
    return (
      <>
        {arrayFromMap(musicalKey.scale, (note: Note) => (
          <SolfegeLabel
            key={note.value}
            solfegeLabelAnimator={solfegeLabelAnimator}
            note={note}
          />
        ))}
      </>
    );
  } else {
    const noteLabelAnimator = buildNoteLabelAnimator(musicalKey, motion);
    return (
      <>
        {arrayFromMap(musicalKey.scale, (note: Note) => (
          <NoteLabel
            key={note.value}
            noteLabelAnimator={noteLabelAnimator}
            note={note}
          />
        ))}
      </>
    );
  }
}
