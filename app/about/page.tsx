"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <main>
        <section className="py-24 px-4">
          <div className="container max-w-6xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-6xl font-bold mb-6 text-[#EEEEEE]"
            >
              About Me
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12 text-justify"
            >
              I’m a Computer Science student from BINUS University with a strong curiosity for learning and a deep
              interest in building meaningful technology. My primary focus lies in software development and artificial
              intelligence, where I enjoy exploring how code can be used to solve real-world problems. From developing
              full-stack web applications to experimenting with machine learning, natural language processing, and
              computer vision, I’m always motivated to keep learning and improving.
              <br /><br />
              While I occasionally enjoy creative work, my main passion is in building scalable, reliable software—
              especially projects that bring together thoughtful engineering and AI-driven solutions. I value clean,
              maintainable code and love working through technical challenges, whether independently or with a team.
              <br /><br />
              At the moment, I’m focusing on strengthening my understanding of artificial intelligence, especially in
              areas like deep learning and transformer-based models. Alongside that, I continue to develop full-stack
              applications that balance technical functionality with user-centered design. I try to take initiative when
              I can, but I’m also grateful for every chance to learn from others and grow through collaboration.
              <br /><br />
              I’m excited by the intersection of technology and creativity, and I hope to contribute to projects that
              make a positive impact. As I continue to grow as a developer, I’m committed to staying curious and
              building solutions that matter.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#508C9B] text-white hover:bg-[#508C9B]/90 shadow-sm">
                <Mail className="h-4 w-4 mr-2" />
                stevenv2605@gmail.com
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}