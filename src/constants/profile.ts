import template from "lodash/template";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const templateSettings = require("lodash/templateSettings");
templateSettings.interpolate = /{{([\s\S]+?)}}/g;

export const profileCopyText = {
  name: "Julius Carvajal",
  title: "Front End Web / Full Stack Developer",
  email: "juliuscarvajal21.com",
  altEmail: "hello@webarchi.tech",
};

type MailToProps = {
  subject: string;
  body: string;
};

export const mailTo = ({ subject, body }: MailToProps) =>
  `mailto:${profileCopyText.altEmail}?subject=${subject}&body=${body}`;

const bodyTemplate = template(
  "Hi, Julius, {{nameTemplate}}{{phoneTemplate}} I'm interested in hiring you for my project. Looking forward to hearing from you."
);

type BodyWithOtherInfoProps = {
  name?: string;
  phone?: string;
};

export const emailSubject = "Hi, Julius! Let's work together";
export const emailBody =
  "I'm interested in hiring you for my project. Looking forward to hearing from you.";

export const bodyWithOtherInfo = ({ name, phone }: BodyWithOtherInfoProps) =>
  bodyTemplate({
    nameTemplate: name ? `My name is ${name}. ` : undefined,
    phoneTemplate: phone ? `My phone number is ${phone}. ` : undefined,
  });
