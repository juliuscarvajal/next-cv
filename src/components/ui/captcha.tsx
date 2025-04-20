import { Captcha as Recaptz } from "recaptz";
import { atom, useAtom } from "jotai";
import styles from "./captcha.module.css";

const validCaptchaAtom = atom(false);

export const useValidCaptchaAtom = () => useAtom(validCaptchaAtom);

// TODO: Replace this with altcha: https://altcha.org/docs/website-integration/
export const Captcha = () => {
  const [validCaptcha, setValidCaptha] = useAtom(validCaptchaAtom);
  if (validCaptcha) {
    return null;
  }
  return (
    <div className={styles.captcha}>
      <Recaptz
        className="max-w-full text-black dark:text-white"
        type="mixed"
        maxAttempts={3}
        length={5}
        onValidate={(isValid: boolean) => {
          if (isValid) {
            setValidCaptha(true);
          }
        }}
      />
    </div>
  );
};
