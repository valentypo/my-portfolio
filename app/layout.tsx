import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import TargetCursor from "@/app/components/target-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Steven's Portfolio",
  description:
    "A student majoring in Computer Science. Currently invested in learning more about Artificial Intelligence and developing softwares!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-black font-sans antialiased select-none [cursor:none]", inter.className)}>
        <TargetCursor />
        {children}
      </body>
    </html>
  )
}