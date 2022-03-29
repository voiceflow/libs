const ZIP_MAGIC_BYTES = new Uint8Array([0x50, 0x4b, 0x03, 0x04]);

export const isZipFile = (content: Uint8Array) => {
  if (content.length < ZIP_MAGIC_BYTES.length) return false;
  return ZIP_MAGIC_BYTES.every((byte, i) => content[i] === byte);
};
