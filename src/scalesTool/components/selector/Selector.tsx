import { buildClassName } from "@scalesTool/utilities/css"

import selectorCssModule from "./Selector.module.scss"


interface SelectorParameters {
  className: string,
  label: string,
  isIncrementing: boolean,
  isDecrementing: boolean,
  children: React.ReactNode,
}

export function Selector({
  className,
  label,
  isIncrementing,
  isDecrementing,
  children,
}: SelectorParameters): React.ReactNode {
  return (
    <g className={className}>
      <text className={selectorCssModule["label"]}>
        {label}
      </text>
      <g clipPath="url(#selectors-clip-path)">
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
  const classNames = [ "selector-inner" ]
  if (isIncrementing) {
    classNames.push("move-up")
  } else if (isDecrementing) {
    classNames.push("move-down")
  }
  return buildClassName(selectorCssModule, classNames)
}
