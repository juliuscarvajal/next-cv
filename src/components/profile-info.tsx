const profileInfoCopyText = {
  title: "Julius Carvajal",
  subtitle: "Front End Web / Full Stack Developer",
  description: "juliuscarvajal21@gmail.com",
};

export const ProfileInfo = () => {
  return (
    <div className="font-bold">
      <div className="text-lg text-accent-foreground font-[family-name:var(--font-archivo-black)]">
        {profileInfoCopyText.title}
      </div>
      <div className="text-sm text-muted-foreground text-wrap">
        {profileInfoCopyText.subtitle}
      </div>
      <div className="text-sm text-muted-foreground">
        {profileInfoCopyText.description}
      </div>
    </div>
  );
};
