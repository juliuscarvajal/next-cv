import { ProfilePicture } from "@/components/profile-picture";
import Link from "next/link";

const ProfileInfo = () => {
  return (
    <div className="font-bold">
      <div className="text-lg text-accent-foreground font-[family-name:var(--font-archivo-black)]">
        Julius Carvajal
      </div>
      <div className="text-sm text-muted-foreground text-wrap">
        Front End Web Developer
      </div>
      <div className="text-sm text-muted-foreground text-wrap">Full Stack</div>
      <div className="text-sm text-muted-foreground">
        juliuscarvajal21@gmail.com
      </div>
    </div>
  );
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="space-y-8 pb-8 w-full max-w-2xl">
      <div className="flex items-center gap-6">
        <ProfilePicture />
        <ProfileInfo />
      </div>
      <nav className="flex gap-4">
        <Link
          href="/projects/commercial"
          className="underline underline-offset-4"
        >
          Commercial
        </Link>
        <Link
          href="/projects/personal"
          className="underline underline-offset-4"
        >
          Personal
        </Link>
        <Link href="/projects/contact" className="underline underline-offset-4">
          Contact me
        </Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
