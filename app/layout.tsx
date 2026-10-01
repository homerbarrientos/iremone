import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IREMS ONE — Integrated Workbenches",
  description: "GSIS integrated real estate property origination and asset operations workbenches.",
  other: {
    "irems-baseline": "BPR v2.0 · SRS/FSD v1.0",
  },
  icons: {
    icon: "/irems-mark.svg",
    shortcut: "/irems-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
