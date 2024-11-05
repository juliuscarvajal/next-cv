"use client";

import { useCallback, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { profileCopyText } from "@/constants/profile";

export const Mailer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const defaultSubject = "Hi, Julius! Let's work together";
  const [subject, setSubject] = useState(defaultSubject);
  const [body, setBody] = useState(
    `Hi Julius,\n\nI'm interested in hiring you for my project.`
  );

  const bodyWithOtherInfo = useCallback(
    (value: string) =>
      `${value}.\n${name ? `\nMy name is ${name}.\n` : ""}${
        phone ? `\nYou can reach me at ${phone}.\n` : ""
      }\nLooking forward to hearing from you soon!`,
    [name, phone]
  );
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
            value={bodyWithOtherInfo(body)}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="sm">
          <a
            href={`mailto:${
              profileCopyText.altEmail
            }?subject=${subject}&body=${bodyWithOtherInfo(body)}`}
          >
            Open Mail App
          </a>
        </Button>
      </div>
    </div>
  );
};
