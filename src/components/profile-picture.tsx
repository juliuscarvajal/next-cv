import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const ProfilePicture = () => {
  return (
    <Avatar className="size-[80px] md:size-[92px] outline">
      <AvatarImage
        src="/images/profile-pic.jpeg"
        alt="Julius Carvajal profile picture"
      />
      <AvatarFallback>JC</AvatarFallback>
    </Avatar>
  );
};
