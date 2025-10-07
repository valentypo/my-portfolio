"use client"

import { useEffect, useRef, use } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import ScreenshotGallery from "@/app/components/screenshot-gallery"
import { projects } from "../data"
import { notFound } from "next/navigation"
import { fadeInUp } from "@/lib/variants"

export default function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = projects.find((p) => p.slug === slug)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 py-20 md:py-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#7ebfcf] mb-12 group transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-gray-400">{project.subtitle}</p>
              </div>

              <div className="space-y-4 text-gray-300">
                <div>
                  <span className="text-sm font-medium text-[#7ebfcf]">Timeline</span>
                  <p>{project.timeline}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#7ebfcf]">Role</span>
                  <p>{project.role}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#7ebfcf]">Team Size</span>
                  <p>{project.teamSize}</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-[#7ebfcf] text-black font-medium rounded-full hover:bg-[#7ebfcf]/90 transition-all duration-300 hover:scale-105"
                    >
                      <span>{link.title}</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-br from-[#7ebfcf]/10 to-transparent">
              <Image
                src={project.image}
                alt={`${project.title} Interface`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 py-12"
        >
          <div className="h-1 w-12 bg-[#7ebfcf] rounded-full mb-8"></div>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-gray-400 leading-relaxed text-pretty text-justify">
              {project.overview}
            </p>
          </div>
        </motion.div>

        {/* Problem & Solution */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 py-12"
        >
          <div className="h-1 w-12 bg-[#7ebfcf] rounded-full mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Problem</h2>
              <p className="text-lg text-gray-400 leading-relaxed text-pretty text-justify">
                {project.problem}
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Solution</h2>
              <p className="text-lg text-gray-400 leading-relaxed text-pretty text-justify">
                {project.solution}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 py-12"
        >
          <div className="h-1 w-12 bg-[#7ebfcf] rounded-full mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="space-y-3 p-4 border border-white/5 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-300 text-justify">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 py-12"
        >
          <div className="h-1 w-12 bg-[#7ebfcf] rounded-full mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-sm hover:bg-[#7ebfcf] hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Screenshots */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ScreenshotGallery images={project.screenshots} folderPath={project.folderPath} />
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}