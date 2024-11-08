import Image, { ImageProps } from "next/image";
import Delay from "./delay";

// export type ImageListProps = Partial<ImgHTMLAttributes<HTMLImageElement>> & {
//   images: Array<ImgHTMLAttributes<HTMLImageElement>>;
// };

export type ImageListProps = Partial<ImageProps> & {
  images: Array<ImageProps>;
};

export const ImageList = (props: ImageListProps) => {
  const { images, alt, height, width, className = "", ...imageProps } = props;
  return (
    <>
      {images.map(
        (
          {
            alt: individualAlt,
            className: individualClassName = "",
            ...individualImageProps
          },
          idx
        ) => {
          const imgAlt = individualAlt || alt || `Image List Item ${idx}`;
          return (
            <div
              key={imgAlt}
              className={`max-h-[${height}px] w-auto relative flex flex-col items-center gap-2 h-full`}
            >
              <Delay>
                <Image
                  width={width}
                  height={height}
                  alt={imgAlt}
                  className={`${individualClassName} ${className}`}
                  priority
                  {...imageProps}
                  {...individualImageProps}
                />
                <div className="text-xs text-muted-foreground font-bold text-center text-wrap">
                  {imgAlt}
                </div>
              </Delay>
            </div>
          );
        }
      )}
    </>
  );
};
