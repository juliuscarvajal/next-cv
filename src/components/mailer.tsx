"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
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

export const Mailer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(emailSubject);
  const [services, setServices] = useState<Array<string>>([]);
  const [classicContactForm, setClassicContactForm] = useState(false);
  const [, setBody] = useState(bodyWithOtherInfo({ name, phone, services }));

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex gap-2">
          <div className="w-full">
            <Label
              className="font-bold text-xs text-muted-foreground"
              htmlFor="name"
            >
              Your name
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Label
              className="font-bold text-xs text-muted-foreground"
              htmlFor="phone"
            >
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="Mobile number"
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Label
            className="font-bold text-xs text-muted-foreground"
            htmlFor="subject"
          >
            Subject
          </Label>
          <div className="relative">
            <Input
              id="subject"
              placeholder="Subject"
              className="pr-8"
              defaultValue={emailSubject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <CopyToClipboard
              className="absolute top-2 right-2"
              text={emailSubject}
            />
          </div>
        </div>
        <div>
          <Label
            className="font-bold text-xs text-muted-foreground"
            htmlFor="body"
          >
            Body
          </Label>
          <div className="relative">
            <Textarea
              id="body"
              placeholder="Body"
              className="pr-8"
              value={bodyWithOtherInfo({ name, phone, services })}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
            <CopyToClipboard
              className="absolute top-2 right-2"
              text={bodyWithOtherInfo({ name, phone, services })}
            />
          </div>
        </div>
        {classicContactForm && (
          <div className="w-full">
            <Label
              className="font-bold text-xs text-muted-foreground"
              htmlFor="email"
            >
              Your Email
            </Label>
            <Input
              id="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}
        <div>
          <ServicesOffered
            batchLimit={3}
            onSelect={(service) => {
              const updatedServices = uniq([...services, service]);
              console.log(updatedServices);
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
              <Button size="sm">Send Email</Button>
            ) : (
              <Button size="sm">
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
        <div className="flex gap-2 flex-wrap">
          <Label
            htmlFor="classic-contact-form"
            className="cursor-pointer text-xs text-muted-foreground"
          >
            {classicContactForm ? (
              <div className="space-y-2">
                <p className="underline underline-offset-4">
                  Tap here to use your mail app instead.
                </p>
                <p>
                  Using your mail app enables you to edit the email body before
                  sending.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="underline underline-offset-4">
                  No mail app? Tap here to use classic contact form instead.
                </p>
                <p>
                  Or manually open your mail app and send to:{" "}
                  <a className="underline underline-offset-4">
                    {profileCopyText?.altEmail}
                  </a>
                </p>
              </div>
            )}
          </Label>
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
