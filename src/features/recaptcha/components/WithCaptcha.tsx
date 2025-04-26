import { captchaHtmlElementId } from "../constants/constants";
import { useRecaptcha } from "../hooks/use-recaptcha";

type WithCaptchaProps = {
  children?: React.ReactNode;
  withDisclaimer?: boolean;
};

const Disclaimer = () => {
  return (
    <span className="font-medium text-xs text-muted-foreground">
      <span>This site is protected by reCAPTCHA and the Google</span>{" "}
      <a
        className="underline underline-offset-4"
        href="https://policies.google.com/privacy"
      >
        Privacy Policy
      </a>{" "}
      and{" "}
      <a
        className="underline underline-offset-4"
        href="https://policies.google.com/terms"
      >
        Terms of Service
      </a>{" "}
      apply.
    </span>
  );
};

export const WithCaptcha = ({
  children,
  withDisclaimer = true,
}: WithCaptchaProps) => {
  useRecaptcha();
  return (
    <>
      <input
        type="hidden"
        id={captchaHtmlElementId}
        name={captchaHtmlElementId}
      />
      {children}
      {withDisclaimer && (
        <div>
          <Disclaimer />
        </div>
      )}
    </>
  );
};