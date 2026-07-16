import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenExO Singapore — 30-Day Banking Launch Plan",
  description: "Four banks, eight decision-makers and a 30-day route to one lighthouse pilot.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "OpenExO Singapore — Banking Launch Plan",
    description: "Four banks, eight decision-makers and a 30-day route to one lighthouse pilot.",
    images: ["https://carlos1980s.github.io/openexo-singapore-action-plan/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenExO Singapore — Banking Launch Plan",
    description: "Four banks, eight decision-makers and a 30-day route to one lighthouse pilot.",
    images: ["https://carlos1980s.github.io/openexo-singapore-action-plan/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
