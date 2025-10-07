"use client"

import ProjectCard from "@/app/components/project-card"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { projects } from "./data"

export default function ProjectsPage() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    router.refresh()
  }, [router])

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <main>
        {/* Header Section */}
        <section className="px-4 pt-24 pb-12 border-b border-white/10">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-[#EEEEEE]"
            >
              My Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed"
            >
              A collection of my work spanning web development, mobile apps, machine learning, and human-centered AI. Built with purpose, polish, and a touch of curiosity.
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 py-20">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  image={project.image}
                  link={`/projects/${project.slug}`}
                />
              </motion.div>
            ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}