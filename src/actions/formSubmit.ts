"use server";

import { isValidCaptchaToken } from "@/features/recaptcha/actions/isValidCaptchaToken";
import { mailerTransport, SMTP_SERVER_USERNAME_ALIAS } from "@/lib/setupMailer";

function returnError(message: string) {
  console.error(`>>> ${message}`);
  return { error: new Error(message) };
}

export async function formSubmit(formData: FormData, token: string) {
  const subject = formData.get("subject") as string;
  const body = formData.get("body") as string;

  if (!subject || !body) {
    return returnError("Malformed subject or body");
  }

  // Verify reCAPTCHA token
  const isRecaptchaValid = await isValidCaptchaToken(token);
  if (!isRecaptchaValid) {
    return returnError("reCAPTCHA verification failed");
  }

  try {
    await mailerTransport.verify();
  } catch (error) {
    return returnError(`Verification error: ${(error as Error)?.message}`);
  }

  try {
    const info = await mailerTransport.sendMail({
      from: SMTP_SERVER_USERNAME_ALIAS,
      to: SMTP_SERVER_USERNAME_ALIAS,
      subject: subject,
      text: body,
      html: body,
    });
    return { data: info.messageId };
  } catch (error) {
    return returnError(`Message sending error: ${(error as Error).message}`);
  }
}
