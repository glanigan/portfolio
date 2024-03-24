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
        <header className="px-4 py-4">
          <div className="mx-auto flex max-w-4xl justify-between">
            <h1>
              <Link href="/">Gary Lanigan</Link>
            </h1>
            <nav className="flex gap-3">
              <Link href="#blog">Blog</Link>
              <Link href="#contact">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
