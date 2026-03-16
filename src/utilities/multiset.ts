export function createMultiset<T>(
): Map<T, number> {
  const multiset: Map<T, number> = new Map();
  return multiset;
}

export function addToMultiset<T>(
  multiset: Map<T, number>,
  element: T
): void {
  const count = getCountFromMultiset(multiset, element);
  multiset.set(element, count + 1);
}

export function getCountFromMultiset<T>(
  multiset: Map<T, number>,
  element: T
): number {
  const count = multiset.get(element);
  if (count === undefined) return 0;
  return count;
}
