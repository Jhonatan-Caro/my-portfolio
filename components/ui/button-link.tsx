import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
};

const variants = {
  primary:
    "border border-accent/40 bg-accent/10 text-accent hover:border-accent/70 hover:bg-accent/15",
  secondary:
    "border border-hairline bg-chip text-ink hover:border-muted",
};

export function ButtonLink({
  variant = "secondary",
  className = "",
  ...props
}: Props) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-sm px-4 py-2 text-small font-medium transition-colors ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export function IconButtonLink({
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`inline-flex size-9 items-center justify-center rounded-sm border border-hairline bg-chip text-muted transition-colors hover:border-muted hover:text-ink ${className}`}
      {...props}
    />
  );
}
