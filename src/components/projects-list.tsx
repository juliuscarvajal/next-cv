import { NavLink } from "@/components/nav-link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { companies } from "@/constants/companies";
import { Project } from "@/constants/projects";
import Image from "next/image";
import { Fragment } from "react";
import { PopupModal } from "./popup-modal";
import { EmailForm } from "./email-form";
import random from "lodash/random";

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
    <div key={project.title} className="space-y-6 pt-8">
      <div className="flex justify-between items-center gap-4">
        <div className="space-y-2">
          <h1 className="leading-none text-2xl font-[family-name:var(--font-archivo-black)] text-wrap">
            {project.title}
          </h1>
          <h2 className="text-muted-foreground leading-none text-md font-[family-name:var(--font-archivo-black)] text-wrap">
            {project.subtitle}
          </h2>
        </div>
        {company?.src && (
          <div className="shrink-0">
            <Image
              src={company?.src}
              alt={company?.name}
              width={64}
              height={64}
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
        <NavLink href={project.cta?.href} className="block">
          {project.cta?.label}
        </NavLink>
      )}
      <PopupModal
        trigger={<Button className="w-auto font-bold">{`Let's Talk`}</Button>}
        title="Contact me"
      >
        <EmailForm key={random()} />
      </PopupModal>
    </div>
  );
};

type ProjectHeaderProps = {
  title: string;
  subtitle?: string;
};

export const ProjectHeader = ({ title, subtitle }: ProjectHeaderProps) => {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl md:text-5xl leading-none font-[family-name:var(--font-archivo-black)]">
        {title}
      </h1>
      <h2 className="space-y-2">{subtitle}</h2>
    </div>
  );
};

export const ProjectsList = ({ projects }: ProjectsProps) => {
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
