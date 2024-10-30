import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const ProfilePicture = () => {
  return (
    <div className="text-center">
      <Avatar className="size-[100px] outline">
        <AvatarImage
          src="/images/profile-pic.jpeg"
          alt="Julius Carvajal profile picture"
        />
        <AvatarFallback>JC</AvatarFallback>
      </Avatar>
    </div>
  );
};
