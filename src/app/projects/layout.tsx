import { NavLink } from "@/components/nav-link";
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
      <nav className="text-sm flex gap-4 items-center">
        <NavLink href="/projects/commercial">Commercial</NavLink>
        <NavLink href="/projects/personal">Personal</NavLink>
        <NavLink href="/projects/contact">Contact me</NavLink>
      </nav>
      <div className="w-full">{children}</div>
    </div>
  );
}
