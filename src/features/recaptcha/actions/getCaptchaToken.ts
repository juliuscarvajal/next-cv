"use client";

import { captchaSiteKey } from "../constants/constants";

export async function getCaptchaToken() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const grecaptcha = (window as any).grecaptcha;
  const token = await grecaptcha?.execute(captchaSiteKey, {
    action: "submit",
  });
  return token;
}
