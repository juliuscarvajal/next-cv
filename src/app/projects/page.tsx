import { ProfilePicture } from "@/components/profile-picture";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Projects() {
  return (
    <div className="divide-y">
      <div className="space-y-4 pb-8">
        <div className="flex items-center gap-6">
          <ProfilePicture />
          <div className="font-bold">
            <div className="text-xl text-accent-foreground font-[family-name:var(--font-archivo-black)]">
              Julius Carvajal
            </div>
            <div className="text-sm text-muted-foreground">
              Front End Web Developer / Full Stack
            </div>
            <div className="text-sm text-muted-foreground">
              juliuscarvajal21@gmail.com
            </div>
          </div>
        </div>
        <h1 className="text-5xl leading-none font-[family-name:var(--font-archivo-black)]">
          Professional Projects
        </h1>
        <div className="space-y-4">
          <p>These are just some of my projects that I have worked with.</p>
          <p>For more details, you can reach out to me anytime. Cheers.</p>
        </div>
      </div>
      <div className="space-y-8 divide-y">
        {projects.map((project) => {
          return (
            <div key={project.title} className="space-y-6 py-8">
              <section className="space-y-1 max-w-2xl">
                <h1 className="leading-none text-3xl font-[family-name:var(--font-archivo-black)]">
                  {project.title}
                </h1>
                <h2 className="text-muted-foreground leading-none text-xl font-[family-name:var(--font-archivo-black)]">
                  {project.subtitle}
                </h2>
              </section>
              <section className="space-y-4 max-w-2xl">
                {project.descriptions?.map((description, idx) => {
                  return (
                    <Fragment key={`${description}${idx}`}>
                      <p>{description}</p>
                    </Fragment>
                  );
                })}
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
