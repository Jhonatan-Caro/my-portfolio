import type { AnchorHTMLAttributes } from "react";

export function TextLink({
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`underline decoration-hairline underline-offset-4 transition-colors hover:decoration-accent ${className}`}
      {...props}
    />
  );
}
