import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Figma Site",
  description: "Generated from Figma sections with smooth anchors"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
