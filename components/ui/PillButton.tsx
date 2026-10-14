const VARIANTS = {
  orange: "bg-orange text-deep",
  white: "bg-white text-deep",
  blue: "bg-blue text-white",
  outline: "border border-[#8ab9e8] text-white hover:bg-white/10",
} as const;

type PillButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
};

export function PillButton({
  href,
  children,
  variant = "orange",
  className = "",
}: PillButtonProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-2 rounded-full px-[21px] py-[15px] text-[13px] font-extrabold transition-transform hover:scale-[1.04] ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
