import { Dots } from "@shared/components/clock/Dots"
import { Face } from "@shared/components/clock/Face"
import { Labels } from "@shared/components/clock/Labels"
import { RankSpotlight } from "@shared/components/clock/RankSpotlight"
import { RootSpotlight } from "@shared/components/clock/RootSpotlight"
import { Triad } from "@shared/components/clock/Triad"
import { type Derived } from "@shared/utilities/derived"


interface ClockParameters {
  derived: Derived,
  className?: string,
}

export function Clock({
  derived,
  className,
}: ClockParameters): React.ReactNode {
  return (
    <g className={className}>
      <Triad
        derived={derived}
      />
      <RootSpotlight
        derived={derived}
      />
      <RankSpotlight
        derived={derived}
      />
      <Face />
      <Dots
        derived={derived}
      />
      <Labels
        derived={derived}
        isInside={true}
      />
      <Labels
        derived={derived}
        isInside={false}
      />
    </g>
  )
}
