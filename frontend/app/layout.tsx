import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "André Micael - Developer Portfolio",
  description:
    "Senior Developer specializing in Next.js, React, and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_br">
      <body className={rubik.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
