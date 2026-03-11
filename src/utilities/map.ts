export function buildMap<K, V>(
  keys: Array<K>,
  valueFromKey: ((key: K) => V)
): Map<K, V> {
  const map: Map<K, V> = new Map();
  for (const key of keys) {
    map.set(key, valueFromKey(key));
  }
  return map;
}

export function arrayFromMap<K, V, E>(
  map: Map<K, V>,
  entryFromValueAndKey: (value: V, key: K) => E
): Array<E> {
  const array = [] as Array<E>;
  map.forEach((value: V, key: K) => {
    array.push(entryFromValueAndKey(value, key))
  });
  return array;
}
