"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  ArrowRight,
  Menu,
  X,
  Loader2,
  Mail
} from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showSVT, setShowSVT] = useState(false)

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { href: "/", label: "Home", slug: "~/" },
    { href: "/projects", label: "Projects", slug: "~/projects" },
    { href: "/about", label: "About", slug: "~/about" },
  ]

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)

    const loadTimer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setShowSVT(true), 50)
    }, 1600)

    return () => {
      clearTimeout(loadTimer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-[999] flex justify-center px-4">
        <div
          className={`transition-all duration-700 ease-out backdrop-blur-xl border border-white/10 shadow-md rounded-full px-6 h-16 flex items-center gap-4 bg-black/60 ${
            hasScrolled ? "shadow-black/20" : ""
          }`}
        >
          <div className="flex items-center justify-center w-16 relative">
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin text-white/70 absolute" />
            ) : showSVT ? (
              <Link
                href="/"
                className={`text-sm font-bold tracking-widest text-white px-3 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all hover:scale-105 inline-block fade-in`}
              >
                <span className="inline-block animate-float" style={{ animationDelay: "0s" }}>S</span>
                <span className="inline-block animate-float" style={{ animationDelay: "0.1s" }}>V</span>
                <span className="inline-block animate-float" style={{ animationDelay: "0.2s" }}>T</span>
              </Link>
            ) : null}
          </div>

          <nav className="hidden md:flex items-center gap-1 px-2">
            {navLinks.map((link) => {
              const isCurrent = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    isCurrent
                      ? "bg-white text-black font-semibold"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:bg-white/10 hover:shadow-[0_0_6px_rgba(255,255,255,0.15)] transition-all duration-300"
          >
            <span>Contact</span>
            <Mail className="h-4 w-4" />
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-[998] bg-black/60 backdrop-blur-lg transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* MOBILE MENU CONTENT */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 z-[999] transition-all duration-500 ease-out ${
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav className="flex flex-col px-6 py-6 gap-6 bg-black/95 border-t border-white/10 backdrop-blur-xl rounded-b-2xl">

          <div className="rounded-2xl border border-white/10 p-2 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isCurrent = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                    isCurrent
                      ? "border-white/20 text-white bg-white/5"
                      : "border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{link.label}</span>
                  </span>
                  <span className="text-white/50 text-xs font-mono">{link.slug}</span>
                </Link>
              )
            })}
          </div>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-mono text-white/80 flex items-center justify-between hover:bg-white/10 transition-all duration-300"
          >
            <span>Contact</span>
            <Mail className="h-4 w-4 text-white/60" />
          </Link>
        </nav>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .fade-in {
          opacity: 0;
          animation: fadeIn 0.5s ease-in-out forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}