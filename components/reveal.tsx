import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  id?: string;
}>;

export function Reveal({ children, className = "", id }: RevealProps) {
  return <div className={`reveal-up ${className}`.trim()} id={id}>{children}</div>;
}