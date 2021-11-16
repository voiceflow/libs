import CryptoBase64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';

class Base64 {
  public static encode(data: string): string {
    return CryptoBase64.stringify(Utf8.parse(data));
  }

  public static encodeJSON(data: unknown): string {
    return Base64.encode(JSON.stringify(data));
  }

  public static decode(data: string): string {
    return Utf8.stringify(CryptoBase64.parse(data));
  }

  public static decodeJSON<T>(data?: string): T {
    return data ? JSON.parse(Base64.decode(data)) : '';
  }
}

export default Base64;
