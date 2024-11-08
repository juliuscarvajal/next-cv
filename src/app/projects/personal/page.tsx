import { ProjectHeader, ProjectsList } from "@/components/projects-list";
import { personalProjects } from "@/constants/projects";

export default function Projects() {
  return (
    <div className="divide-y">
      <div className="space-y-8 pb-8">
        <ProjectHeader
          title="Personal Web Apps"
          subtitle="These are just some of my personal projects that I have worked with on my free time."
        />
      </div>
      <div className="space-y-8 divide-y">
        <ProjectsList projects={personalProjects} />
      </div>
    </div>
  );
}
