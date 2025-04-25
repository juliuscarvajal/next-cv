"use client";

import { captchaSiteKey } from "../constants/constants";

export async function getCaptchaToken() {
  const grecaptcha = (window as any).grecaptcha;
  const token = await grecaptcha?.execute(captchaSiteKey, {
    action: "submit",
  });
  return token;
}
