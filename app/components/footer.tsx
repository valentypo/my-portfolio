import { Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-sm text-gray-400">© 2025 Steven Valentino Taslim.</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/bowmanstephen"
            target="_blank"
            className="text-white hover:text-gray-300"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="mailto:bowman.stephen92@gmail.com" className="text-white hover:text-gray-300">
            <Mail className="h-5 w-5" />
          </Link>
          <Link href="https://www.bowmanstephen.com" target="_blank" className="text-white hover:text-gray-300">
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
