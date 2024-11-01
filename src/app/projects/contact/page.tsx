import { Mailer } from "@/components/mailer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AtSign, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="divide-y">
      <div className="space-y-8 pb-8">
        <div className="space-y-4">
          <h1 className="text-5xl leading-none font-[family-name:var(--font-archivo-black)]">
            Need a hand with your web app?
          </h1>
          <div className="space-y-2">
            <p>
              I'm excited to hear from you. Please feel free to reach out to me
              anytime.
            </p>
          </div>
        </div>
        <Card className="bg-accent">
          <CardHeader>
            <h1 className="text-xl font-bold">Email</h1>
          </CardHeader>
          <CardContent className="space-y-4">
            <Mailer />
          </CardContent>
        </Card>
        <Card className="bg-accent">
          <CardHeader>
            <h1 className="text-xl font-bold">Info</h1>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="flex gap-2 items-center">
              <AtSign />
              <Link
                href="https://www.linkedin.com/in/juliuscarvajal"
                target="_blank"
                className="underline underline-offset-4"
              >
                LinkedIn
              </Link>
            </p>
            <p className="flex gap-2 items-center">
              <BriefcaseBusiness />
              <Link
                href="https://abr.business.gov.au/ABN/View?id=27488015405"
                className="underline underline-offset-4"
                target="_blank"
              >
                ABN: 27 488 015 405
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
