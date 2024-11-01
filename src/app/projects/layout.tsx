import { LinkWithActiveStyles } from "@/components/link-with-active-styles";
import { ProfileInfo } from "@/components/profile-info";
import { ProfilePicture } from "@/components/profile-picture";

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
        <LinkWithActiveStyles href="/projects/commercial">
          Commercial
        </LinkWithActiveStyles>
        <LinkWithActiveStyles href="/projects/personal">
          Personal
        </LinkWithActiveStyles>
        <LinkWithActiveStyles href="/projects/contact">
          Contact me
        </LinkWithActiveStyles>
      </nav>
      <div className="w-full">{children}</div>
    </div>
  );
}
