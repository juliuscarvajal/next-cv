import { ImgHTMLAttributes } from "react";

export type ImageListProps = Partial<ImgHTMLAttributes<HTMLImageElement>> & {
  images: Array<ImgHTMLAttributes<HTMLImageElement>>;
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
              <img
                width={width}
                height={height}
                alt={imgAlt}
                className={`${individualClassName} ${className}`}
                loading="lazy"
                {...imageProps}
                {...individualImageProps}
              />
              <div className="text-xs text-muted-foreground font-bold text-center text-wrap">
                {imgAlt}
              </div>
            </div>
          );
        }
      )}
    </>
  );
};
