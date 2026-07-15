import type { Metadata } from "next";
import "./globals.css"; // ✅ مهم

export const metadata: Metadata = {
  title: "Voxora AI",
  description: "Create AI Videos in Minutes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
