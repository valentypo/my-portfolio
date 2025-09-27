import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import type React from "react"
import TargetCursor from "@/app/components/target-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Interested? Let's collaborate!",
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
