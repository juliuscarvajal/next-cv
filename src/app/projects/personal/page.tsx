import { ProfilePicture } from "@/components/profile-picture";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { companies } from "@/constants/companies";
import { personalProjects } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Projects() {
  return (
    <div className="divide-y">
      <div className="space-y-8 pb-8">
        <div className="space-y-4">
          <h1 className="text-5xl leading-none font-[family-name:var(--font-archivo-black)]">
            Personal Projects
          </h1>
          <div className="space-y-2">
            <p>
              These are just some of my personal projects that I have worked
              with on my free time.
            </p>
            <p>For more details, you can reach out to me anytime. Cheers.</p>
          </div>
        </div>
      </div>
      <div className="space-y-8 divide-y">
        {personalProjects.map((project) => {
          const company = companies.find(
            (company) => company.name === project.name
          );
          return (
            <div key={project.title} className="space-y-6 py-8">
              <section className="space-y-2 flex justify-between items-center gap-4">
                <div className="space-y-2">
                  <h1 className="leading-none text-2xl font-[family-name:var(--font-archivo-black)]">
                    {project.title}
                  </h1>
                  <h2 className="text-muted-foreground leading-none text-lg font-[family-name:var(--font-archivo-black)]">
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
              </section>
              <section className="space-y-4">
                <ul className="list-disc">
                  {project.descriptions?.map((description, idx) => {
                    return (
                      <Fragment key={`${description}${idx}`}>
                        <li>{description}</li>
                      </Fragment>
                    );
                  })}
                </ul>
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
              <div className="pt-8 flex gap-4">
                <Link href="/">
                  <Button className="w-full md:w-auto font-bold">
                    Let's Talk
                  </Button>
                </Link>
                {project.cta && (
                  <Link href={project.cta?.href} target="_blank">
                    <Button className="w-full md:w-auto mr-4" variant="outline">
                      {project.cta?.label}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
