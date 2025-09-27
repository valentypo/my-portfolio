"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 transition-all duration-300 ${
        hasScrolled
          ? "bg-black/40 backdrop-blur-md"
          : "bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white cursor-target"
        >
          SVT
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isCurrent = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`cursor-target relative group text-sm font-medium transition-colors duration-300 ${
                  isCurrent ? "text-[#7ebfcf]" : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ${
                    isCurrent ? "bg-[#7ebfcf] scale-x-100" : "bg-white/50"
                  }`}
                />
              </Link>
            );
          })}
          <Link href="/contact">
            <Button
              size="sm"
              className="cursor-target bg-transparent border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => {
              const isCurrent = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`cursor-target relative group text-sm font-medium transition-colors duration-300 ${
                    isCurrent ? "text-[#7ebfcf]" : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] w-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ${
                      isCurrent ? "bg-[#7ebfcf] scale-x-100" : "bg-white/50"
                    }`}
                  />
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                size="sm"
                className="w-full mt-4 cursor-target bg-transparent border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
              >
                <Mail className="h-4 w-4 mr-1" />
                Contact
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
