import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { personalProjects, Project, projects } from "@/constants/projects";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type ProjectsSummaryProps = {
  title: string;
  projects: Array<Project>;
  href: string;
};

const ProjectsSummary = ({ title, projects, href }: ProjectsSummaryProps) => {
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
    <div className="space-y-4">
      <ProjectsSummary
        title="Commercial Projects"
        projects={projects}
        href="/projects/commercial"
      />
      <ProjectsSummary
        title="Personal Projects"
        projects={personalProjects}
        href="/projects/personal"
      />
      <Button>Let's work together</Button>
    </div>
  );
}
