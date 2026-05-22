type CssModule = {
  [className: string]: string,
}

export function buildClassName(
  cssModule: CssModule,
  localClassNames: Array<string>,
  globalClassNames: Array<string> | undefined = undefined,
): string {
  const classNames = localClassNames.map((localClassName) => cssModule[localClassName])
  if (globalClassNames) {
    classNames.push(...globalClassNames)
  }
  return classNames.filter((mangledClassName) => mangledClassName !== undefined).join(" ")
}
