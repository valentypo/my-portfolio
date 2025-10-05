"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Download } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-white">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-32">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-[#EEEEEE]"
          >
            Let’s Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            I’m always open to building meaningful products or collaborating on impactful projects in{" "}
            <span className="text-[#9ecad8] font-medium">AI</span> and{" "}
            <span className="text-[#9ecad8] font-medium">Software Engineering</span>. If my work resonates with you,
            feel free to reach out!
          </motion.p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-12">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=stevenv2605@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#508C9B] hover:bg-[#508C9B]/90 text-white text-md sm:text-lg px-6 py-4 h-auto">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
            </a>

            <Link href="https://www.linkedin.com/in/steven-vt" target="_blank">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent text-md sm:text-lg px-6 py-4 h-auto"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </Link>

            <Link href="https://github.com/valentypo" target="_blank">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent text-md sm:text-lg px-6 py-4 h-auto"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </Link>

            <Link href="/CV_StevenValentinoTaslim.pdf" target="_blank">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent text-md sm:text-lg px-6 py-4 h-auto"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            Feel free to reach out — I reply to every message.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}