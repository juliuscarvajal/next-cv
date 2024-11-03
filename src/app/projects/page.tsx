import { NavLink } from "@/components/nav-link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

type ProjectsSummaryProps = {
  title: string;
  href: string;
};

const ProjectsSummary = ({ title, href }: ProjectsSummaryProps) => {
  return (
    <NavLink href={href} className="block">
      <Card className="bg-muted">
        <CardHeader className="flex flex-row justify-between items-center">
          <h1 className="text-xl font-bold">{title}</h1>
          <ChevronRight />
        </CardHeader>
      </Card>
    </NavLink>
  );
};

export default function Projects() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <ProjectsSummary
          title="Commercial Web Apps"
          href="/projects/commercial"
        />
        <ProjectsSummary title="Personal Web Apps" href="/projects/personal" />
      </div>
      <NavLink href="/projects/contact" className="block">
        <Button>{`Let's work together`}</Button>
      </NavLink>
    </div>
  );
}
