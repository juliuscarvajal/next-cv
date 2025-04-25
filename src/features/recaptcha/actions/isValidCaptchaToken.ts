import { serverCaptchaUrl } from "../constants/constants";

export async function isValidCaptchaToken(token: string) {
  const response = await fetch(serverCaptchaUrl(token), {
    method: "POST",
  });
  const data = await response.json();
  return data.success && data.score >= 0.5;
}