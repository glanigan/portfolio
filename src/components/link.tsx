import { ReactNode } from "react";
import NextLink from 'next/link';


export function Link({ href, children }: { href: string; children: ReactNode; }) {
  return (
    <NextLink href={href} className='hover:text-white transition-colors'>
      {children}
    </NextLink>
  );
}
