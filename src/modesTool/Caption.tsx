import { Caption as CaptionCommon } from "@shared/components/caption/Caption"
import { type Derived } from "@shared/utilities/derived"


interface CaptionParameters {
  derived: Derived,
  className?: string,
}

export function Caption({
  derived,
  className,
}: CaptionParameters): React.ReactNode {
  return (
    <CaptionCommon
      firstLine={getFirstLine(derived)}
      secondLine={getSecondLine(derived)}
      className={className}
    />
  )
}

function getFirstLine(
  derived: Derived,
) {
  const { currentMusicalKey } = derived
  if (currentMusicalKey.mode === -2) {
    return <>The major mode.</>
  }
  if (currentMusicalKey.mode === 1) {
    return <>The minor mode.</>
  }
  return <>The {currentMusicalKey.modeName} mode.</>
}

function getSecondLine(
  derived: Derived,
): React.ReactNode {
  const { currentMusicalKey } = derived
  const rootNoteName = currentMusicalKey.rootNote.name

  return (
    <>
      For no sharps or flats use root note <tspan className={"fixed-width-font"}>{rootNoteName}</tspan>.
    </>
  )
}
