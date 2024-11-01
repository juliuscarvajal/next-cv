import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { companies } from "@/constants/companies";
import { Project, projects } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const ProjectHeader = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-5xl leading-none font-[family-name:var(--font-archivo-black)]">
        Commercial Projects
      </h1>
      <h2 className="space-y-2">
        These are just some of my commercial projects that I have worked with.
      </h2>
    </div>
  );
};

function getCompanyByProjectName(name: Project["name"]) {
  return companies.find((company) => company.name === name);
}

type ProjectProps = {
  project: Project;
};

type ProjectsProps = {
  projects: Array<Project>;
};

type ProjectListItemProps = ProjectProps & {
  company?: (typeof companies)[number];
};

const ProjectListItem = ({ project, company }: ProjectListItemProps) => {
  return (
    <div key={project.title} className="space-y-6 py-8">
      <div className="space-y-2 flex justify-between items-center gap-4">
        <div className="space-y-2">
          <h1 className="leading-none text-2xl font-[family-name:var(--font-archivo-black)] text-wrap">
            {project.title}
          </h1>
          <h2 className="text-muted-foreground leading-none text-lg font-[family-name:var(--font-archivo-black)] text-wrap">
            {project.subtitle}
          </h2>
        </div>
        {company?.src && (
          <div>
            <Image
              src={company?.src}
              alt={company?.name}
              width={48}
              height={48}
            />
          </div>
        )}
      </div>
      <section className="space-y-4">
        <div className="w-full space-y-2">
          {project.descriptions?.map((description, idx) => {
            return (
              <Fragment key={`${description}${idx}`}>
                <div>{description}</div>
              </Fragment>
            );
          })}
        </div>
      </section>
      {project.images && (
        <section className="w-full py-4 flex flex-wrap gap-4">
          {project.images?.map((image, idx) => {
            return (
              <div key={`${image}${idx}`} className="w-[320px]">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={image}
                    alt="Image"
                    className="rounded-md object-cover"
                    fill
                  />
                </AspectRatio>
              </div>
            );
          })}
        </section>
      )}
      {project.cta && (
        <Link
          href={project.cta?.href}
          target="_blank"
          className="block underline underline-offset-4"
        >
          {project.cta?.label}
        </Link>
      )}
      <div className="pt-8 flex gap-4">
        <Link href="/projects/contact">
          <Button className="w-full md:w-auto font-bold">Let's Talk</Button>
        </Link>
      </div>
    </div>
  );
};

const ProjectsList = ({ projects }: ProjectsProps) => {
  return (
    <>
      {projects.map((project) => {
        const company = getCompanyByProjectName(project.name);
        return (
          <ProjectListItem
            key={project.title}
            project={project}
            company={company}
          />
        );
      })}
    </>
  );
};

export default function Projects() {
  return (
    <div className="divide-y">
      <div className="space-y-8 pb-8">
        <ProjectHeader />
      </div>
      <div className="space-y-8 divide-y">
        <ProjectsList projects={projects} />
      </div>
    </div>
  );
}
