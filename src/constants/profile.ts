import isEmpty from "lodash/isEmpty";
import template from "lodash/template";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const templateSettings = require("lodash/templateSettings");
templateSettings.interpolate = /{{([\s\S]+?)}}/g;

export const profileCopyText = {
  name: "Julius Carvajal",
  title: "Front End Web / Full Stack Developer",
  email: "juliuscarvajal21.com",
  altEmail: "hi@webarchi.tech",
};

type MailToProps = {
  email?: string;
  subject?: string;
  body?: string;
};

export const emailSubject = "Hi, Julius! Let's work together";
export const emailBody =
  "I'm interested in hiring you for my project. Looking forward to hearing from you.";

export const mailTo = ({
  email = profileCopyText.altEmail,
  subject = emailSubject,
  body = emailBody,
}: MailToProps = {}) => {
  return `mailto:${email}?subject=${subject}&body=${body}`;
};

const bodyTemplate = template(
  "Hi, Julius, {{nameTemplate}}{{phoneTemplate}}{{servicesTemplate}} I'm interested in hiring you for my project. Looking forward to hearing from you."
);

type BodyWithOtherInfoProps = {
  name?: string;
  phone?: string;
  services?: string[];
};

function joinWithAnd(arr?: string[]) {
  if (!arr) {
    return "";
  }
  if (arr.length === 1) {
    return arr[0];
  }
  if (arr.length === 2) {
    return arr.join(" and ");
  }
  return `${arr.slice(0, -1).join(", ")}, and ${arr.slice(-1)}`;
}

export const bodyWithOtherInfo = ({
  name,
  phone,
  services,
}: BodyWithOtherInfoProps) =>
  bodyTemplate({
    nameTemplate: name ? `My name is ${name}. ` : undefined,
    phoneTemplate: phone ? `My phone number is ${phone}. ` : undefined,
    servicesTemplate: !isEmpty(services)
      ? `I need help with ${joinWithAnd(services)}. `
      : undefined,
  });
