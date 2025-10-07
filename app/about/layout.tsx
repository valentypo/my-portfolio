import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "About Me | Steven's Portfolio",
  description:
    "Get to know more about me!",
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
