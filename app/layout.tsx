import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Pearlville International School",
    template: "%s | Pearlville International School",
  },
  description:
    "A future-ready international school in Nigeria where every learner is known, nurtured and inspired to make a difference.",
  keywords: ["Pearlville International School", "school in Nigeria", "international school", "education"],
  openGraph: {
    title: "Pearlville International School",
    description: "Learn boldly. Live fully. Lead kindly.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
