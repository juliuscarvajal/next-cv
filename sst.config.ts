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
    const secret = new sst.Secret("SMTP_SERVER_PASSWORD");

    new sst.aws.Nextjs("JuliusCarvajalCV", {
      // domain: {
      //   name: "webarchi.tech",
      //   dns: false,
      //   cert: "arn:aws:acm:us-east-1:754883701401:certificate/232b566a-a9ad-44a1-b89f-2ee8c948ad10",
      // },
      link: [secret],
    });
  },
});
