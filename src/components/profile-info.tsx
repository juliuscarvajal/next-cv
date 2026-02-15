import { mailTo, profileCopyText } from "@/constants/profile";
import { Mail } from "lucide-react";
import { NavLink } from "./nav-link";

export const ProfileInfo = () => {
  return (
    <div className="font-bold">
      <div className="text-xl text-accent-foreground font-extrabold">
        {profileCopyText.name}
      </div>
      <div className="text-xs text-muted-foreground text-wrap">
        {profileCopyText.title}
      </div>
      <div className="text-xs flex gap-1 items-center min-w-0">
        <Mail width={14} />
        <NavLink href={mailTo()} className="text-muted-foreground text-wrap">
          {profileCopyText.altEmail}
        </NavLink>
      </div>
    </div>
  );
};
