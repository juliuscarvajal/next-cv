// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

// TODO: CI/CD and .env in Github actions
export default $config({
  app(input) {
    return {
      name: "juliuscarvajal-cv",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const smtpServerPasswordSecret = new sst.Secret("SMTP_SERVER_PASSWORD");
    const recaptchaSecret = new sst.Secret("RECAPTCHA_SECRET_KEY");
    const link = [smtpServerPasswordSecret, recaptchaSecret];
    const environment = {
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY:
        "6LfD_R8rAAAAACWp6ph3mYW3bxoOQEg_EJfbrgHr",
    };

    new sst.aws.Nextjs("JuliusCarvajalCV", {
      link,
      environment,
    });
  },
});
