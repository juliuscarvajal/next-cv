export const captchaHtmlElementId = "recaptchaToken";
export const captchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
export const serverCaptchaUrl = (token: string) => `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;
export const clientCaptchaUrl = `https://www.google.com/recaptcha/api.js?render=${captchaSiteKey}`;
