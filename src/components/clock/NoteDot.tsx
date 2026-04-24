import type { MusicalKey } from "@/classes/MusicalKey";
import type { Note } from "@/classes/Note";
import { useDerivedContext } from "@/contexts/derived";
import { getNoteFinishHour } from "@/utilities/animation";
import { buildClassName } from "@/utilities/css";

import noteDotCssModule from "@/components/clock/NoteDot.module.scss";


interface NoteDotProps {
  note: Note;
}

export function NoteDot({
  note,
}: NoteDotProps): JSX.Element {
  const { musicalKey, nextMusicalKey, isUsingNotesBallet } = useDerivedContext();

  return (
    <circle
      className={getClassName(musicalKey, nextMusicalKey, isUsingNotesBallet, note)}
      data-testid={`note-dot-${note.solfegeLetter}`}
      cx="0"
      cy="0"
      r="8"
      fill="black"
    />
  );
}

function getClassName(
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey,
  isUsingNotesBallet: boolean,
  note: Note,
): string {
  const classNames = ["note-dot"];
  const startHour = note.hour;
  const finishHour = getNoteFinishHour(musicalKey, nextMusicalKey, isUsingNotesBallet, note);
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`);
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  }
  return buildClassName(noteDotCssModule, classNames);
}
