import Image from "next/image";

type BrandProps = {
  alt: string;
  size?: "sm" | "lg";
  preload?: boolean;
};

export default function Brand({ alt, size = "sm", preload = false }: BrandProps) {
  return (
    <span className={`mark mark--${size}`}>
      <Image
        className="brand-logo"
        src="/images/logo.png"
        alt={alt}
        width={480}
        height={410}
        sizes={size === "lg" ? "190px" : "100px"}
        preload={preload}
      />
    </span>
  );
}
