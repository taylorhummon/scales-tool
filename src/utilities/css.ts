type CssModule = {
  [className: string]: string;
}

export function buildClassString(
  cssModule: CssModule,
  classNames: Array<string>
): string {
  return classNames.map((className) => cssModule[className]).join(" ");
}
