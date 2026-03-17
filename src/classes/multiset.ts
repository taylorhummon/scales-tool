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
