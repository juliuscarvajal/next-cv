"use client";

import React, { useState } from "react";
import { Input, InputProps } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea, TextareaProps } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  bodyWithOtherInfo,
  emailSubject,
  mailTo,
  profileCopyText,
} from "@/constants/profile";
import { ServicesOffered } from "./services-offered";
import uniq from "lodash/uniq";
import { Toggle } from "./ui/toggle";
import { CopyToClipboard } from "./copy-to-clipboard";
import { NavLink } from "./nav-link";

type CommonInputFieldProps = {
  label?: React.ReactNode;
  id: string;
  placeholder?: string;
  canCopy?: boolean;
  value?: string;
  className?: string;
  input?: React.ReactNode;
};

type InputFieldProps = CommonInputFieldProps & InputProps;
type TextAreaFieldProps = CommonInputFieldProps & TextareaProps;

const CommonInputField = ({
  input,
  className = "",
  id,
  label,
  canCopy,
  value,
}: CommonInputFieldProps) => {
  return (
    <div className={`${className}`}>
      <Label htmlFor={id} className="font-bold text-xs text-muted-foreground">
        {label}
      </Label>
      <div className="relative">
        {input}
        {canCopy && (
          <CopyToClipboard
            className="absolute top-2 right-2"
            text={value as string}
          />
        )}
      </div>
    </div>
  );
};

const InputField = ({
  label,
  id,
  className = "",
  canCopy,
  value,
  ...inputProps
}: InputFieldProps) => {
  return (
    <CommonInputField
      label={label}
      id={id}
      className={className}
      canCopy={canCopy}
      value={value}
      input={
        <Input
          id={id}
          className={`text-md ${canCopy ? "pr-8" : ""}`}
          value={value}
          {...inputProps}
        />
      }
    />
  );
};

const TextareaField = ({
  label,
  id,
  className = "",
  canCopy,
  value,
  ...inputProps
}: TextAreaFieldProps) => {
  return (
    <CommonInputField
      label={label}
      id={id}
      className={className}
      canCopy={canCopy}
      value={value}
      input={
        <Textarea
          id={id}
          className={`text-md ${canCopy ? "pr-8" : ""}`}
          value={value}
          {...inputProps}
        />
      }
    />
  );
};

export const Mailer = ({ className = "" }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(emailSubject);
  const [services, setServices] = useState<Array<string>>([]);
  const [classicContactForm, setClassicContactForm] = useState(false);
  const [, setBody] = useState(bodyWithOtherInfo({ name, phone, services }));

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="space-y-4">
        <div className="flex gap-2">
          <InputField
            className="w-full"
            id="name"
            label="Your name"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            className="w-full"
            id="phone"
            label="Phone"
            placeholder="Mobile number"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <InputField
          id="subject"
          label="Subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          canCopy
        />
        <TextareaField
          id="body"
          label="Body"
          placeholder="Body"
          value={bodyWithOtherInfo({ name, phone, services })}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          canCopy
        />
        {classicContactForm && (
          <InputField
            id="email"
            label="Your Email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        <div>
          <ServicesOffered
            batchLimit={3}
            size="xs"
            onSelect={(service) => {
              const updatedServices = uniq([...services, service]);
              setServices(updatedServices);
              setBody(
                bodyWithOtherInfo({
                  name,
                  phone,
                  services: updatedServices,
                })
              );
            }}
          />
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center w-full flex-wrap">
          <div className="flex gap-2">
            {classicContactForm ? (
              <Button>Send Email</Button>
            ) : (
              <Button>
                <a
                  href={mailTo({
                    subject,
                    body: bodyWithOtherInfo({ name, phone, services }),
                  })}
                >
                  Open Mail App
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="flex gap-2 flex-wrap text-xs text-muted-foreground">
          <Label
            htmlFor="classic-contact-form"
            className="text-xs cursor-pointer underline underline-offset-4 text-muted-foreground"
          >
            {classicContactForm
              ? "Tap here to use your mail app instead."
              : "No mail app? Tap here to use classic contact form instead."}
          </Label>
          <p>
            {classicContactForm ? (
              "Using your mail app enables you to edit the email body before sending."
            ) : (
              <span className="flex gap-1">
                <span>Or manually open your mail app and send to:</span>
                <NavLink href={mailTo()}>{profileCopyText?.altEmail}</NavLink>
                <CopyToClipboard text={profileCopyText.altEmail} />
              </span>
            )}
          </p>
          <Toggle
            id="classic-contact-form"
            className="hidden"
            pressed={classicContactForm}
            onPressedChange={() => {
              setClassicContactForm(!classicContactForm);
            }}
          />
        </div>
      </div>
    </div>
  );
};
