import type { Metadata } from "next";
import "./globals.css";
import { fellRegular } from "./fonts";

export const metadata: Metadata = {
  title: "My Figma Site",
  description: "Generated from Figma sections with smooth anchors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fellRegular.className}>{children}</body>
    </html>
  );
}
