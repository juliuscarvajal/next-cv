"use server";
import { mailerTransport, SMTP_SERVER_USERNAME_ALIAS } from "@/lib/setupMailer";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function formSubmit(formData: FormData) {
  const subject = formData.get("subject") as string;
  const body = formData.get("body") as string;

  if (!subject || !body) {
    console.error(">>> Malformed subject or body:");
    return null;
  }

  try {
    await mailerTransport.verify();
  } catch (error) {
    console.error(">>> Verification error:", error);
    return null;
  }

  await sleep(3000); // TODO: Remove. Just a dummy delay for testing...
  return "dummy-sent";

  // try {
  //   const info = await mailerTransport.sendMail({
  //     from: SMTP_SERVER_USERNAME_ALIAS,
  //     to: SMTP_SERVER_USERNAME_ALIAS,
  //     subject: subject,
  //     text: body,
  //     html: body,
  //   });
  //   console.log(">>> Message sent:", info.messageId);
  //   return info.messageId;
  // } catch (error) {
  //   console.error(">>> Message sending error:", error);
  //   return null;
  // }
}
