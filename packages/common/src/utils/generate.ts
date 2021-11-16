export const generateHash = (object: unknown): string => {
  const objectStr = typeof object === 'object' ? JSON.stringify(object) : String(object);

  if (objectStr.length === 0) {
    return '';
  }

  let hash = 0;

  for (let i = 0; i < objectStr.length; i++) {
    const chr = objectStr.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    hash = (hash << 5) - hash + chr;
    // eslint-disable-next-line no-bitwise
    hash |= 0; // Convert to 32bit integer
  }

  return Math.abs(hash).toString();
};
