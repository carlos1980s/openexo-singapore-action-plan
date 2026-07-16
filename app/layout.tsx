import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenExO Singapore — 30-Day Banking Launch Plan",
  description: "A focused 90-day market test to turn OpenExO 3.0 into one Singapore banking pilot.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
