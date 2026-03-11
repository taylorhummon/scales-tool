export function buildIndicesArray(
  count: number
): Array<number> {
  if (count < 0) throw Error("buildIndicesArray() needs a non-negative argument");
  const array = [] as Array<number>;
  for (let index = 0; index < count; index++) {
    array.push(index);
  }
  return array;
}
