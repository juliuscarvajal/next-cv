import { captchaHtmlElementId } from "../constants/constants";
import { useRecaptcha } from "../hooks/use-recaptcha";

type WithCaptchaProps = {
  children?: React.ReactNode;
}
export const WithCaptcha = ({ children }: WithCaptchaProps) => {
  useRecaptcha();
  return (
    <>
      <input
        type="hidden"
        id={captchaHtmlElementId}
        name={captchaHtmlElementId}
      />
      {children}
    </>
  );
};