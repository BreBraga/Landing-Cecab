import type { ReactNode } from "react";
import { InView } from "./InView";

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <InView
      threshold={0.05}
      className={`translate-y-8 opacity-0 transition duration-700 ease-out data-[inview=true]:translate-y-0 data-[inview=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 ${className}`}
    >
      {children}
    </InView>
  );
}
