import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Link } from "@/components/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gary Lanigan - Portfolio",
  description: "Gary Lanigan - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='py-4 px-4'>
          <div className="max-w-4xl flex justify-between mx-auto">
            <h1>
              <Link href='/'>Gary Lanigan</Link>
            </h1>
            <nav className="flex gap-3">
              <Link href='#blog'>Blog</Link>
              <Link href='#contact'>Contact</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
