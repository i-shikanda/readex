import type { Metadata } from "next";
import { DM_Sans, Public_Sans, Work_Sans } from "next/font/google";
import "./globals.css";

const dmsans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redex",
  description: "Expand your mind, reading a book at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmsans.className}>{children}</body>
    </html>
  );
}
