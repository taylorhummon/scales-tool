import { IconName } from "@shared/components/button/Icon"
import { RankDial } from "@shared/components/dial/RankDial"
import { DialButton } from "@shared/components/dial/DialButton"
import { DialHighlighter } from "@shared/components/dial/DialHighlighter"
import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"

import assembledDialCssModule from "./AssembledDial.module.scss"


interface AssembledDialParameters {
  derived: Derived,
  buttonClickHandler: (motion: Motion) => void,
  className?: string,
}

export function AssembledDial({
  derived,
  buttonClickHandler,
  className,
}: AssembledDialParameters): React.ReactNode {
  return (
    <g className={className}>
      <defs>
        <clipPath id={CLIP_PATH_ID}>
          <rect
            x="-30"
            y="-103"
            width="60"
            height="206"
          />
        </clipPath>
      </defs>
      <DialButton
        derived={derived}
        width={WIDTH}
        height={HEIGHT}
        clickHandler={buttonClickHandler}
        iconName={IconName.Sharp}
        onClickMotion={Motion.IncrementBoth}
        className={assembledDialCssModule["upper-button"]}
        dataTestid="sharp-button"
      />
      <DialHighlighter
        width={52}
        height={30}
        className={assembledDialCssModule["dial-highlighter"]}
      />
      <RankDial
        derived={derived}
        clipPathId={CLIP_PATH_ID}
        className={assembledDialCssModule["rank-dial"]}
      />
      <DialButton
        derived={derived}
        width={WIDTH}
        height={HEIGHT}
        clickHandler={buttonClickHandler}
        iconName={IconName.Flat}
        onClickMotion={Motion.DecrementBoth}
        className={assembledDialCssModule["lower-button"]}
        dataTestid="flat-button"
      />
    </g>
  )
}

const CLIP_PATH_ID = "assembled-dial-clip-path"

const WIDTH = 46
const HEIGHT = 40
