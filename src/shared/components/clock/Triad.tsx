import { TriadSpotlight } from "@shared/components/clock/TriadSpotlight"
import { TriadOriginOption } from "@shared/utilities/clock"
import { type Derived } from "@shared/utilities/derived"


interface TriadParameters {
  derived: Derived,
}

export function Triad({
  derived,
}: TriadParameters): React.ReactNode {
  const { clockSettings } = derived
  const { triadOriginOption } = clockSettings
  if (triadOriginOption === TriadOriginOption.None) return null

  return (
    <>
      <TriadSpotlight
        derived={derived}
        solfegeOffset={0}
        dataTestid="triad-spotlight-0"
      />
      <TriadSpotlight
        derived={derived}
        solfegeOffset={2}
        dataTestid="triad-spotlight-2"
      />
      <TriadSpotlight
        derived={derived}
        solfegeOffset={4}
        dataTestid="triad-spotlight-4"
      />
    </>
  )
}
