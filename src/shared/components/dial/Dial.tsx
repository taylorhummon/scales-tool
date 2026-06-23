import { buildClassName } from "@shared/utilities/css"

import dialCssModule from "./Dial.module.scss"


interface DialParameters {
  label: string,
  isIncrementing: boolean,
  isDecrementing: boolean,
  clipPathId: string,
  className?: string,
  children: React.ReactNode,
}

export function Dial({
  label,
  isIncrementing,
  isDecrementing,
  clipPathId,
  className,
  children,
}: DialParameters): React.ReactNode {
  return (
    <g className={className}>
      <text className={dialCssModule["label"]}>
        {label}
      </text>
      <g clipPath={`url(#${clipPathId})`}>
        <g className={getClassName(isIncrementing, isDecrementing)}>
          {children}
        </g>
      </g>
    </g>
  )
}

function getClassName(
  isIncrementing: boolean,
  isDecrementing: boolean,
): string {
  const classNames = [ "dial-inner" ]
  if (isIncrementing) {
    classNames.push("move-up")
  } else if (isDecrementing) {
    classNames.push("move-down")
  }
  return buildClassName(dialCssModule, classNames)
}
