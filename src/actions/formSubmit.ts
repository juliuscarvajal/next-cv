"use server";
import { mailerTransport, SMTP_SERVER_USERNAME_ALIAS } from "@/lib/setupMailer";

export async function formSubmit(formData: FormData) {
  const subject = formData.get("subject") as string;
  const body = formData.get("body") as string;

  if (!subject || !body) {
    console.error(">>> Malformed subject or body", subject, body);
    return;
  }

  try {
    await mailerTransport.verify();
  } catch (error) {
    console.error(">>> Something Went Wrong", error);
    return;
  }

  const info = await mailerTransport.sendMail({
    from: SMTP_SERVER_USERNAME_ALIAS,
    to: SMTP_SERVER_USERNAME_ALIAS,
    subject: subject,
    text: body,
    html: body,
  });
  console.log(">>> Message Sent", info.messageId);
}
