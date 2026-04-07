export function buildIndicesArray(
  length: number
): Array<number> {
  if (length < 0) throw Error("buildIndicesArray() needs a non-negative argument");
  const array = [] as Array<number>;
  for (let index = 0; index < length; index++) {
    array.push(index);
  }
  return array;
}
