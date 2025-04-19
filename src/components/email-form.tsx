"use client";

import { useActionState } from "react";
import { Mailer } from "./mailer";
import { formSubmit } from "@/actions/formSubmit";
import Form from "next/form";

export const EmailForm = () => {
  const [, formAction] = useActionState(
    (prevState: unknown, formData: FormData) => formSubmit(formData),
    null
  );
  return (
    <Form action={formAction}>
      <Mailer />
    </Form>
  );
};
