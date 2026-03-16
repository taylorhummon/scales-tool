export function createMultiset<T>(
): Map<T, number> {
  const multiset: Map<T, number> = new Map();
  return multiset;
}

export function addToMultiset<T>(
  multiset: Map<T, number>,
  element: T
): void {
  const count = countFromMultiset(multiset, element);
  multiset.set(element, count + 1);
}

export function countFromMultiset<T>(
  multiset: Map<T, number>,
  element: T
): number {
  const count = multiset.get(element);
  if (count === undefined) return 0;
  return count;
}

export class Multiset<T> {
  #map: Map<T, number>;

  constructor() {
    this.#map = new Map();
  }

  add(
    element: T
  ): void {
    const count = this.count(element);
    this.#map.set(element, count + 1);
  }

  count(
    element: T
  ): number {
    const count = this.#map.get(element);
    if (count === undefined) return 0;
    return count;
  }
}
