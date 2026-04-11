export function buildIndicesArray(
  length: number
): Array<number> {
  if (length < 0) throw Error("buildIndicesArray() needs a non-negative argument");
  return buildInclusiveRange(0, length - 1);
}

export function buildInclusiveRange(
  start: number,
  stop: number
): Array<number> {
  const array = [] as Array<number>;
  for (let index = start; index <= stop; index++) {
    array.push(index);
  }
  return array;
}
