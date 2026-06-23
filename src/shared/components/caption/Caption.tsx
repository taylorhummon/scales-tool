import captionCssModule from "./Caption.module.scss"


interface CaptionParameters {
  firstLine?: React.ReactNode,
  secondLine?: React.ReactNode,
  thirdLine?: React.ReactNode,
  className?: string,
}

export function Caption({
  firstLine,
  secondLine,
  thirdLine,
  className,
}: CaptionParameters): React.ReactNode {
  return (
    <g className={className}>
      <CaptionLine
        content={firstLine}
        className={captionCssModule["first-line"]}
      />
      <CaptionLine
        content={secondLine}
        className={captionCssModule["second-line"]}
      />
      <CaptionLine
        content={thirdLine}
        className={captionCssModule["third-line"]}
      />
    </g>
  )
}

interface CaptionLineParameters {
  content?: React.ReactNode,
  className?: string,
}

export function CaptionLine({
  content,
  className,
}: CaptionLineParameters): React.ReactNode {
  if (content === undefined) return null

  return (
    <text
      className={className}
      textAnchor="middle"
    >
      {content}
    </text>
  )
}
