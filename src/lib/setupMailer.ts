import { profileCopyText } from "@/constants/profile";
import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = "smtp.gmail.com";
export const SMTP_SERVER_USERNAME = profileCopyText.email;
export const SMTP_SERVER_USERNAME_ALIAS = profileCopyText.altEmail;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;

export const mailerTransport = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});
