"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { profileCopyText } from "@/constants/profile";
import template from "lodash/template";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const templateSettings = require("lodash/templateSettings");
templateSettings.interpolate = /{{([\s\S]+?)}}/g;

export const Mailer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const defaultSubject = "Hi, Julius! Let's work together";
  const [subject, setSubject] = useState(defaultSubject);

  const bodyTemplate = template(
    "Hi, Julius, {{nameTemplate}}{{phoneTemplate}} I'm interested in hiring you for my project. Looking forward to hearing from you."
  );
  const bodyWithOtherInfo = bodyTemplate({
    nameTemplate: name ? `My name is ${name}. ` : undefined,
    phoneTemplate: phone ? `My phone number is ${phone}. ` : undefined,
  });
  const [body, setBody] = useState(bodyWithOtherInfo);
  return (
    <div className="space-y-6">
      <div className="space-y-2">
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
          <Input
            id="subject"
            placeholder="Subject"
            defaultValue={defaultSubject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <Label
            className="font-bold text-xs text-muted-foreground"
            htmlFor="body"
          >
            Body
          </Label>
          <Textarea
            id="body"
            placeholder="Body"
            value={bodyTemplate({
              nameTemplate: name ? `My name is ${name}. ` : undefined,
              phoneTemplate: phone
                ? `My phone number is ${phone}. `
                : undefined,
            })}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="sm">
          <a
            href={`mailto:${profileCopyText.altEmail}?subject=${subject}&body=${bodyWithOtherInfo}`}
          >
            Open Mail App
          </a>
        </Button>
      </div>
    </div>
  );
};
