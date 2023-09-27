interface ImageFallbackProps {
  className: any;
  imageStyle: any;
  src: any;
  alt: any;
}

export default function ImageFallback({
  className,
  imageStyle,
  src,
  alt,
}: ImageFallbackProps) {
  return (
    <div style={{ maxWidth: "100%" }}>
      <picture className={className}>
        <img className={imageStyle} src={src} alt={alt} />
      </picture>
    </div>
  );
}
