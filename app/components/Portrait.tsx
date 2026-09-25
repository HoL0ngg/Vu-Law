import Image from "next/image";

type PortraitProps = {
  src?: string;
  alt: string;
  /** Shown when the Client has not supplied a photograph yet. */
  initials: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * A lawyer's portrait, falling back to their initials while a photograph is missing.
 * The 3:4 box is fixed in CSS so a missing photo does not change the layout.
 */
export default function Portrait({ src, alt, initials, sizes, priority = false, className = "" }: PortraitProps) {
  if (!src) {
    return (
      <span className={`portrait portrait--placeholder ${className}`} role="img" aria-label={alt}>
        <span aria-hidden="true">{initials}</span>
      </span>
    );
  }

  return (
    <span className={`portrait ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
    </span>
  );
}
