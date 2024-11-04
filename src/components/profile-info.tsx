import { profileCopyText } from "@/constants/profile";
import { Mail } from "lucide-react";

export const ProfileInfo = () => {
  return (
    <div className="font-bold">
      <div className="text-md text-accent-foreground font-extrabold">
        {profileCopyText.name}
      </div>
      <div className="text-xs text-muted-foreground text-wrap">
        {profileCopyText.title}
      </div>
      <div className="text-xs flex gap-1 items-center">
        <Mail width={14} />
        <a
          href={`mailto:${profileCopyText.email}?subject=Hello from (Company Name)&body=Hi%20Julius,`}
          className="text-muted-foreground text-wrap underline underline-offset-4"
        >
          {profileCopyText.email}
        </a>
      </div>
    </div>
  );
};
