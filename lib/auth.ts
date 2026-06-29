import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "akad_admin_session";

function secret() {
  return process.env.JWT_SECRET || "dev-secret-change-before-production";
}

export function createSessionToken(email: string) {
  const payload = Buffer.from(JSON.stringify({ email, iat: Date.now() })).toString("base64url");
  const signature = crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifySessionToken(token?: string) {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const expected = crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  return signatureBuffer.length === expectedBuffer.length && crypto.timingSafeEqual(signatureBuffer, expectedBuffer);
}

export function isAdminRequest() {
  return verifySessionToken(cookies().get(COOKIE_NAME)?.value);
}

export function adminCookieName() {
  return COOKIE_NAME;
}