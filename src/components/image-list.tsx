import { ImageProps } from "next/image";
import Delay from "./delay";
import { ImageWithFallback } from "./image-with-fallback";

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
              <Delay
                placeholder={
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-[100%] h-[100%] bg-gray-200 animate-pulse"
                      style={{
                        width: `${width}px`,
                        height: `${height}px`,
                      }}
                    />
                    <div className="text-xs text-muted-foreground font-bold text-center text-wrap">
                      {imgAlt}
                    </div>
                  </div>
                }
              >
                <ImageWithFallback
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
