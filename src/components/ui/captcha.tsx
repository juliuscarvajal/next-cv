import { Captcha as Recaptz } from "recaptz";
import { atom, useAtom } from "jotai";

const validCaptchaAtom = atom(false);

export const useValidCaptchaAtom = () => useAtom(validCaptchaAtom);

export const Captcha = () => {
  const [validCaptcha, setValidCaptha] = useAtom(validCaptchaAtom);
  if (validCaptcha) {
    return null;
  }
  return (
    <Recaptz
      className="max-w-full"
      darkMode
      type="mixed"
      maxAttempts={3}
      length={5}
      onValidate={(isValid: boolean) => {
        if (isValid) {
          setValidCaptha(true);
        }
      }}
    />
  );
};
