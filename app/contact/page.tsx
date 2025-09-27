"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#201E43] text-white">
      <Navbar />

      <main>
        {/* Contact Section */}
        <section className="py-32">
          <div className="container px-4 text-center">
            <Button variant="outline" className="mb-8 border-white/20 text-white hover:bg-white/10 bg-transparent">
              REACH OUT
            </Button>
            <h1 className="mb-6 text-4xl sm:text-6xl font-bold tracking-tighter md:text-8xl">
              GOT A COMPLEX
              <br />
              UX CHALLENGE?
            </h1>
            <p className="mb-8 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              I'm open to new opportunities and would love to hear about your project. Whether you need help with design
              systems, enterprise UX, or complex problem-solving, let's discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button className="bg-[#508C9B] text-white hover:bg-[#508C9B]/80 text-lg px-8 py-6 h-auto">
                <Mail className="mr-2 h-5 w-5" />
                stevenv2605@gmail.com
              </Button>
              <Link href="https://www.linkedin.com/in/steven-vt" target="_blank">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent text-lg px-8 py-6 h-auto"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <p className="text-gray-400 mb-4">Or download my CV to learn more about my experience</p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                <ExternalLink className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
