import { ProfilePicture } from "@/components/profile-picture";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Projects() {
  return (
    <div>
      <ProfilePicture />
      <div className="space-y-8 divide-y max-w-2xl">
        {projects.map((project) => {
          return (
            <div key={project.title} className="space-y-6 py-8">
              <section className="space-y-2">
                <h1 className="leading-none md:leading-tight text-3xl font-[family-name:var(--font-archivo-black)]">
                  {project.title}
                </h1>
                <h2 className="text-muted-foreground leading-none md:leading-tight text-xl font-[family-name:var(--font-archivo-black)]">
                  {project.subtitle}
                </h2>
              </section>
              <section className="space-y-4">
                {project.descriptions?.map((description, idx) => {
                  return (
                    <Fragment key={`${description}${idx}`}>
                      <p>{description}</p>
                    </Fragment>
                  );
                })}
              </section>
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
            </div>
          );
        })}
      </div>
      <div className="flex justify-center py-8 fixed bottom-0 right-4">
        <Link href="/">
          <Button className="w-auto">Let's Talk</Button>
        </Link>
      </div>
    </div>
  );
}
