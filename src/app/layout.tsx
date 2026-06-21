import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Aman Kumar · Software Engineer",
  description:
    "Personal site of Aman Kumar, a software engineer building mobile products, SDKs and AI-powered tools.",
  authors: [{ name: "Aman Kumar" }],
  openGraph: {
    title: "Aman Kumar · Software Engineer",
    description:
      "Software engineer building mobile products, SDKs and AI-powered tools.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Kumar · Software Engineer",
    description:
      "Software engineer building mobile products, SDKs and AI-powered tools.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
