import { ProjectHeader, ProjectsList } from "@/components/projects-list";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <div className="divide-y">
      <div className="space-y-8 pb-8">
        <ProjectHeader
          title="Commercial Web Apps"
          subtitle="These are just some of my commercial projects that I have worked with."
        />
      </div>
      <div className="space-y-8 divide-y">
        <ProjectsList projects={projects} />
      </div>
    </div>
  );
}
