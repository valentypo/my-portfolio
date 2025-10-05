import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Lora } from "next/font/google"
import "./globals.css"
import type React from "react"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Steven's Portfolio",
  description:
    "A student majoring in Computer Science. Currently invested in learning more about Artificial Intelligence and developing softwares!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-black antialiased", lora.className)}>
        {children}
      </body>
    </html>
  );
}