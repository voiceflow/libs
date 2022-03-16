/**
 * Retrieve the value at the given key inside the map.
 * If the key does not exist, insert the default value into the map and return that value.
 */
export const getOrDefault = <K, V>(map: Map<K, V>, key: K, defaultValue: V): V => {
  if (!map.has(key)) {
    map.set(key, defaultValue);
    return defaultValue;
  }
  return map.get(key)!;
};
