const isDefaultValueAFunction = <V>(value: unknown): value is () => V => typeof value === 'function';

export function getOrDefault<K, V>(map: Map<K, V>, key: K, defaultValue: V): V;
export function getOrDefault<K, V>(map: Map<K, V>, key: K, getDefaultValue: () => V): V;
/**
 * Retrieve the value at the given key inside the map.
 * If the key does not exist, insert the default value into the map and return that value.
 */
export function getOrDefault<K, V>(map: Map<K, V>, key: K, defaultValue: V | (() => V)): V {
  if (!map.has(key)) {
    const value = isDefaultValueAFunction(defaultValue) ? defaultValue() : defaultValue;
    map.set(key, value);
    return value;
  }
  return map.get(key)!;
}
