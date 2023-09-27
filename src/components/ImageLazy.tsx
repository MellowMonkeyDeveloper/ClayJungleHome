import React from "react";
export interface ImageLazyProps {
  srcSet: any;
  src: any;
  className: any;
  alt: string;
  imageStyle: any;
}

export default function ImageLazy({
  src,
  srcSet,
  className,
  alt,
  imageStyle,
}: ImageLazyProps) {
  return (
    <div style={{ maxWidth: "100%" }}>
      <picture className={className}>
        <source
          srcSet={srcSet}
          type="image/webp"
          media="(min-width: 480px)"
          style={{ width: "100%", border: "none" }}
        />
        <img className={imageStyle} src={src} alt={alt} />
      </picture>
    </div>
  );
}
