import { ImageList, ImageListProps } from "@/components/image-list";
import { ImageListSection } from "@/components/image-list-section";
import { ProfilePicture } from "@/components/profile-picture";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { companies } from "@/constants/companies";
import { stacks } from "@/constants/stacks";
import Link from "next/link";

const pageCopyText = {
  header: {
    title: "Front End Web Developer",
    subtitle: "or a Full Stack Engineer...",
  },
  body: [
    `Hello, I'm Julius Carvajal, a Front End Developer based in Sydney, Australia.`,
    `I'm passionate about building user interfaces and experiences that people love. I specialize in creating performant, responsive, and accessible websites using modern web technologies.`,
  ],
  cta: {
    label: "See my work",
  },
};

const Header = () => {
  return (
    <div className="space-y-2">
      <h1 className="leading-none text-5xl font-[family-name:var(--font-archivo-black)]">
        {pageCopyText.header.title}
      </h1>
      <h2 className="leading-tight text-sm text-muted-foreground font-[family-name:var(--font-geist-mono)]">
        {pageCopyText.header.subtitle}
      </h2>
    </div>
  );
};

const Body = () => {
  return (
    <>
      {pageCopyText.body.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </>
  );
};

const Ctas = () => {
  return (
    <>
      <Link href="/projects/commercial">
        <Button>{pageCopyText.cta.label}</Button>
      </Link>
      <Link href="/projects/contact">
        <Button variant="outline">Hire me</Button>
      </Link>
    </>
  );
};

const Aside = () => {
  return (
    <>
      <ImageListSection
        title="Clients"
        images={companies}
        width={64}
        height={64}
      />
      <ImageListSection
        title="Tech stack"
        images={stacks}
        width={48}
        height={48}
      />
    </>
  );
};

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap gap-16 2xl:gap-16 w-full justify-around items-center">
        <div className="space-y-8 w-full lg:max-w-md">
          <section className="space-y-6">
            <ProfilePicture />
            <Header />
          </section>
          <div className="flex gap-4">
            <Ctas />
          </div>
          <section className="space-y-4 font-bold text-accent-foreground">
            <Body />
          </section>
        </div>
        <div className="space-y-8 w-full lg:max-w-xl">
          <Aside />
        </div>
      </div>
    </>
  );
}
