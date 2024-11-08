import { ImageListSection } from "@/components/image-list-section";
import { NavLink } from "@/components/nav-link";
import { ProfilePicture } from "@/components/profile-picture";
import { ServicesOffered } from "@/components/services-offered";
import { Button } from "@/components/ui/button";
import { companies } from "@/constants/companies";
import { stacks } from "@/constants/stacks";

const pageCopyText = {
  header: {
    title: "Front End Web Developer",
    subtitle: "or a Full Stack Engineer when needed",
  },
  body: [
    `Hello, I'm Julius Carvajal, a Front End Developer based in Sydney, Australia.`,
    `Problem solver, creative thinker, and a team player. I can help you build your next project from front to back.`,
  ],
  cta: {
    label: "See my work",
  },
};

const Header = () => {
  return (
    <div className="space-y-2">
      <h1 className="leading-none text-4xl md:text-5xl font-[family-name:var(--font-archivo-black)]">
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
      <NavLink href="/projects/commercial" className="w-full sm:w-auto">
        <Button className="w-full">{pageCopyText.cta.label}</Button>
      </NavLink>
      <NavLink href="/projects/contact" className="w-full sm:w-auto">
        <Button className="w-full" variant="secondary">
          Hire me
        </Button>
      </NavLink>
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
      <div className="space-y-8">
        <div className="flex flex-wrap lg:flex-nowrap gap-16 w-full justify-around items-center">
          <div className="space-y-8 w-full lg:max-w-md">
            <section className="space-y-6">
              <ProfilePicture />
              <Header />
            </section>
            <div className="flex gap-4 flex-wrap">
              <Ctas />
            </div>
            <section className="space-y-4 text-accent-foreground prose">
              <Body />
            </section>
            <div className="space-y-4 w-full">
              <h1 className="font-bold text-xl">Services</h1>
              <div className="flex gap-2 flex-wrap text-sm font-bold">
                <ServicesOffered />
              </div>
            </div>
          </div>
          <div className="space-y-8 w-full lg:max-w-2xl">
            <Aside />
          </div>
        </div>
      </div>
    </>
  );
}
