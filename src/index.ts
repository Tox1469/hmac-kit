import { createHmac, timingSafeEqual } from "crypto";

export type HmacAlgo = "sha256" | "sha512";

export function hmacSign(
  message: string | Buffer,
  key: string | Buffer,
  algorithm: HmacAlgo = "sha256"
): string {
  const h = createHmac(algorithm, key);
  h.update(message);
  return h.digest("hex");
}

export function hmacSignBuffer(
  message: string | Buffer,
  key: string | Buffer,
  algorithm: HmacAlgo = "sha256"
): Buffer {
  const h = createHmac(algorithm, key);
  h.update(message);
  return h.digest();
}

export function hmacVerify(
  message: string | Buffer,
  expectedHex: string,
  key: string | Buffer,
  algorithm: HmacAlgo = "sha256"
): boolean {
  const actual = hmacSignBuffer(message, key, algorithm);
  const expected = Buffer.from(expectedHex, "hex");
  if (actual.length !== expected.length) return false;
  return timingSafeEqual(actual, expected);
}
