import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const ProfilePicture = () => {
  return (
    <Avatar className="size-[80px] md:size-[92px] border-2 border-solid border-current">
      <AvatarImage
        src="/images/profile-pic-sketch.jpeg"
        alt="Julius Carvajal profile picture"
      />
      <AvatarFallback>JC</AvatarFallback>
    </Avatar>
  );
};
