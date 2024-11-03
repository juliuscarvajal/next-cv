import { Mail } from "lucide-react";

const email = "juliuscarvajal21.com";

const profileInfoCopyText = {
  title: "Julius Carvajal",
  subtitle: "Front End Web / Full Stack Developer",
};

export const ProfileInfo = () => {
  return (
    <div className="font-bold">
      <div className="text-md text-accent-foreground font-extrabold">
        {profileInfoCopyText.title}
      </div>
      <div className="text-xs text-muted-foreground text-wrap">
        {profileInfoCopyText.subtitle}
      </div>
      <div className="text-xs flex gap-1 items-center">
        <Mail width={14} />
        <a
          href={`mailto:${email}?subject=Hello from (Company Name)&body=Hi%20Julius,`}
          className="text-muted-foreground text-wrap underline underline-offset-4"
        >
          {email}
        </a>
      </div>
    </div>
  );
};
