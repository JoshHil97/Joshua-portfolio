import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Joshua Hilarion · Portfolio",
  description: "Full stack and mobile developer portfolio of Joshua Hilarion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050716] text-white antialiased">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
