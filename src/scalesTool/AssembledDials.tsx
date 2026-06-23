import { IconName } from "@shared/components/button/Icon"
import { RankDial } from "@shared/components/dial/RankDial"
import { DialButton } from "@shared/components/dial/DialButton"
import { DialHighlighter } from "@shared/components/dial/DialHighlighter"
import { RootDial } from "@shared/components/dial/RootDial"
import { type Derived } from "@shared/utilities/derived"
import { Motion } from "@shared/utilities/motion"

import assembledDialsCssModule from "./AssembledDials.module.scss"


interface AssembledDialsParameters {
  derived: Derived,
  buttonClickHandler: (motion: Motion) => void,
  className?: string,
}

export function AssembledDials({
  derived,
  buttonClickHandler,
  className,
}: AssembledDialsParameters): React.ReactNode {
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
      <g className={assembledDialsCssModule["upper-buttons"]}>
        <DialButton
          derived={derived}
          clickHandler={buttonClickHandler}
          width={LARGE_BUTTON_WIDTH}
          height={BUTTON_HEIGHT}
          iconName={IconName.BigArrowUp}
          onClickMotion={Motion.IncrementBoth}
          className={assembledDialsCssModule["top"]}
          dataTestid="increment-both"
        />
        <DialButton
          derived={derived}
          clickHandler={buttonClickHandler}
          width={SMALL_BUTTON_WIDTH}
          height={BUTTON_HEIGHT}
          iconName={IconName.Sharp}
          onClickMotion={Motion.IncrementRank}
          className={assembledDialsCssModule["bottom-left"]}
          dataTestid="increment-rank"
        />
        <DialButton
          derived={derived}
          clickHandler={buttonClickHandler}
          width={SMALL_BUTTON_WIDTH}
          height={BUTTON_HEIGHT}
          iconName={IconName.BlueBallUp}
          onClickMotion={Motion.IncrementRoot}
          className={assembledDialsCssModule["bottom-right"]}
          dataTestid="increment-root"
        />
      </g>
      <DialHighlighter
        width={104}
        height={30}
        className={assembledDialsCssModule["dial-highlighter"]}
      />
      <RankDial
        derived={derived}
        clipPathId={CLIP_PATH_ID}
        className={assembledDialsCssModule["rank-dial"]}
      />
      <RootDial
        derived={derived}
        clipPathId={CLIP_PATH_ID}
        className={assembledDialsCssModule["root-dial"]}
      />
      <g className={assembledDialsCssModule["lower-buttons"]}>
        <DialButton
          derived={derived}
          clickHandler={buttonClickHandler}
          width={SMALL_BUTTON_WIDTH}
          height={BUTTON_HEIGHT}
          iconName={IconName.Flat}
          onClickMotion={Motion.DecrementRank}
          className={assembledDialsCssModule["top-left"]}
          dataTestid="decrement-rank"
        />
        <DialButton
          derived={derived}
          clickHandler={buttonClickHandler}
          width={SMALL_BUTTON_WIDTH}
          height={BUTTON_HEIGHT}
          iconName={IconName.BlueBallDown}
          onClickMotion={Motion.DecrementRoot}
          className={assembledDialsCssModule["top-right"]}
          dataTestid="decrement-root"
        />
        <DialButton
          derived={derived}
          clickHandler={buttonClickHandler}
          width={LARGE_BUTTON_WIDTH}
          height={BUTTON_HEIGHT}
          iconName={IconName.BigArrowDown}
          onClickMotion={Motion.DecrementBoth}
          className={assembledDialsCssModule["bottom"]}
          dataTestid="decrement-both"
        />
      </g>
    </g>
  )
}

const CLIP_PATH_ID = "assembled-dials-clip-path"

const SMALL_BUTTON_WIDTH = 46
const LARGE_BUTTON_WIDTH = 98
const BUTTON_HEIGHT = 40
