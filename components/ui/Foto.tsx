/* eslint-disable @next/next/no-img-element */
type FotoProps = {
  className?: string;
  src?: string;
  alt?: string;
  label?: string;
  position?: string;
  priority?: boolean;
};

export function Foto({
  className = "",
  src,
  alt = "",
  label = "Foto em breve",
  position = "center",
  priority = false,
}: FotoProps) {
  if (src) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover"
          style={{ objectPosition: position }}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center text-center ${className}`}>
      <span className="px-6 text-xs font-bold uppercase tracking-wide text-deep/50">
        {label}
      </span>
    </div>
  );
}
