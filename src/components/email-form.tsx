"use client";

import { useActionState, useEffect } from "react";
import { Mailer } from "./mailer";
import { formSubmit } from "@/actions/formSubmit";
import Form from "next/form";
import { useValidCaptchaAtom } from "./ui/captcha";

export const EmailForm = () => {
  const [isValidCaptcha, setValidCaptha] = useValidCaptchaAtom();
  const [state, formAction, isPending] = useActionState(
    (prevState: unknown, formData: FormData) => {
      if (!isValidCaptcha) {
        return null;
      }
      return formSubmit(formData);
    },
    null
  );

  useEffect(() => {
    if (state) {
      setValidCaptha(false);
    }
  }, [setValidCaptha, state]);

  return (
    <Form action={formAction}>
      <Mailer loading={isPending} state={state} />
    </Form>
  );
};
