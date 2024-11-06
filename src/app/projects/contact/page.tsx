import { Mailer } from "@/components/mailer";
import { NavLink } from "@/components/nav-link";
import { ProjectHeader } from "@/components/projects-list";
import { ServicesOffered } from "@/components/services-offered";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AtSign, BriefcaseBusiness } from "lucide-react";

const EmailSection = () => {
  return (
    <Card className="bg-accent">
      <CardHeader>
        <h1 className="text-xl font-bold">Email</h1>
      </CardHeader>
      <CardContent className="space-y-4">
        <Mailer />
      </CardContent>
    </Card>
  );
};

const InfoSection = () => {
  return (
    <Card className="bg-accent">
      <CardHeader>
        <h1 className="text-xl font-bold">Info</h1>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="flex gap-2 items-center">
          <AtSign />
          <NavLink href="https://www.linkedin.com/in/juliuscarvajal">
            LinkedIn
          </NavLink>
        </p>
        <p className="flex gap-2 items-center">
          <BriefcaseBusiness />
          <NavLink href="https://abr.business.gov.au/ABN/View?id=27488015405">
            ABN: 27 488 015 405
          </NavLink>
        </p>
      </CardContent>
    </Card>
  );
};

export default function Contact() {
  return (
    <div className="divide-y">
      <div className="space-y-8 pb-8">
        <div className="space-y-4">
          <ProjectHeader
            title="Need a hand with your web app?"
            subtitle="I'm excited to hear from you. Please feel free to reach out to me
              anytime."
          />
          <div className="flex gap-2 flex-wrap text-sm font-bold">
            <ServicesOffered />
          </div>
        </div>
        <EmailSection />
        <InfoSection />
      </div>
    </div>
  );
}
