"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Mailer = () => {
  const [subject, setSubject] = useState("Work opportunity");
  const [body, setBody] = useState("Let's discuss...");
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Input
          placeholder="Subject"
          defaultValue="Work opportunity"
          onChange={(e) => setSubject(e.target.value)}
        />
        <Input
          placeholder="Body"
          defaultValue="Let's discuss..."
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <Button size="sm">
          <a
            href={`mailto:juliuscarvajal21@gmail.com?subject=${subject}&body=${body}`}
          >
            Open Mail App
          </a>
        </Button>
      </div>
    </div>
  );
};
