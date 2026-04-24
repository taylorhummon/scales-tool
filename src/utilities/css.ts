type CssModule = {
  [className: string]: string;
}

export function buildClassName(
  cssModule: CssModule,
  classNames: Array<string>,
): string {
  return classNames.map(
    (className) => cssModule[className]
  ).filter(
    (mangledClassName) => mangledClassName !== undefined
  ).join(" ");
}
