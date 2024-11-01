import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type ProjectsSummaryProps = {
  title: string;
  href: string;
};

const ProjectsSummary = ({ title, href }: ProjectsSummaryProps) => {
  return (
    <Link href={href} className="block">
      <Card className="bg-muted">
        <CardHeader className="flex flex-row justify-between items-center">
          <h1 className="text-xl font-bold">{title}</h1>
          <ChevronRight />
        </CardHeader>
      </Card>
    </Link>
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
      <Link href="/projects/contact" className="block">
        <Button>Let's work together</Button>
      </Link>
    </div>
  );
}
