"use client";

import Image, { ImageProps } from "next/image";
import fallbackImage from "./Bash.png";

export const ImageWithFallback = (props: ImageProps) => {
  const { src, alt, ...imageProps } = props;
  return (
    <Image
      src={src}
      alt={alt}
      onError={(e) => {
        e.currentTarget.src = fallbackImage.src;
      }}
      {...imageProps}
    />
  );
};
