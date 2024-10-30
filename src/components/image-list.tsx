import Image, { ImageProps } from "next/image";

export type ImageListProps = Partial<ImageProps> & {
  images: Array<ImageProps>;
};

export const ImageList = (props: ImageListProps) => {
  const { images, alt, height, width, ...imageProps } = props;
  return (
    <>
      {images.map(
        (
          { alt: individualAlt, className = "", ...individualImageProps },
          idx
        ) => {
          const imgAlt = individualAlt || alt || `Image List Item ${idx}`;
          return (
            <div
              key={imgAlt}
              className={`max-h-[${height}px] w-auto relative ${className}`}
            >
              <Image
                width={width}
                height={height}
                alt={imgAlt}
                className={className}
                {...imageProps}
                {...individualImageProps}
              />
            </div>
          );
        }
      )}
    </>
  );
};
