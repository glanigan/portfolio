import { ReactNode } from "react";
import NextLink from "next/link";

export function Link({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <NextLink href={href} className="transition-colors hover:text-white">
      {children}
    </NextLink>
  );
}
