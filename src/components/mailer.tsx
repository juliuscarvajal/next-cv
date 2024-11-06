"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { bodyWithOtherInfo, emailSubject, mailTo } from "@/constants/profile";

export const Mailer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(emailSubject);

  const [, setBody] = useState(bodyWithOtherInfo({ name, phone }));
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
            defaultValue={emailSubject}
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
            value={bodyWithOtherInfo({ name, phone })}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="sm">
          <a
            href={mailTo({ subject, body: bodyWithOtherInfo({ name, phone }) })}
          >
            Open Mail App
          </a>
        </Button>
      </div>
    </div>
  );
};
