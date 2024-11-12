import { ImageList, ImageListProps } from "./image-list";
import { Card, CardContent, CardHeader } from "./ui/card";
import { NavLink } from "./nav-link";

type ImageListSectionProps = ImageListProps & {
  title: string;
};

export const ImageListSection = ({
  images,
  width,
  height,
  title,
  className = "",
}: ImageListSectionProps) => {
  return (
    <Card className="bg-accent">
      <CardHeader className="flex flex-row items-center justify-between">
        <h1 className="text-sm font-bold text-muted-foreground">{title}</h1>
        <div className="text-sm text-muted-foreground">
          <NavLink href="/projects">+ more</NavLink>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 grid-cols-4 md:grid-cols-6 items-center">
          <ImageList
            images={images}
            width={width}
            height={height}
            className={className}
          />
        </div>
      </CardContent>
    </Card>
  );
};
