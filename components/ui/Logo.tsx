/* eslint-disable @next/next/no-img-element */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block rounded-2xl bg-white px-3 py-2 shadow-[0_14px_34px_rgba(5,46,99,0.25)] ${className}`}
    >
      <img
        src="/logo-cecab.png"
        alt="CECAB, Centro Educacional Carvalho Braga"
        width={867}
        height={340}
        className="h-auto w-full"
      />
    </span>
  );
}
