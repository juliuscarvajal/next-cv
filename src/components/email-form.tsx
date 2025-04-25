"use client";

import { useActionState } from "react";
import { Mailer } from "./mailer";
import { formSubmit } from "@/actions/formSubmit";
import Form from "next/form";
import { getCaptchaToken } from "@/features/recaptcha/actions/getCaptchaToken";

export const EmailForm = () => {
  const [state, formAction, isPending] = useActionState(
    async (prevState: unknown, formData: FormData) => {
      const token = await getCaptchaToken();
      return formSubmit(formData, token);
    },
    null
  );

  return (
    <Form action={formAction}>
      <Mailer loading={isPending} state={state} />
    </Form>
  );
};
