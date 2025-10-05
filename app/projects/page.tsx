"use client"

import ProjectCard from "@/app/components/project-card"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { motion } from "framer-motion"

export default function ProjectsPage() {
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
              <ProjectCard
                title="Wastara"
                subtitle="Web Development & AI Integration"
                description="Wastara is a mobile-first web app that lets citizens report trash and helps organizers coordinate cleanups with role-based accounts, location/photo reporting, and AI-assisted pickup optimization."
                image="/wastara/wastara1.png"
                link="/projects/wastara"
              />
              <ProjectCard
                title="IRIS"
                subtitle="Mobile Application & AI-Driven Features"
                description="IRIS is a Flutter-based mobile app that helps the elderly and visually impaired navigate daily life by using AI for real-time object detection, text recognition, and voice feedback."
                image="/iris/iris1.png"
                link="/projects/iris"
              />
              <ProjectCard
                title="Student's Wellbeing Assessment"
                subtitle="Web Development & Machine Learning"
                description="A Next.js web app to assess depression in students. We tested multiple models and selected XGBoost for its balance of accuracy and efficiency."
                image="/students-wellbeing-assessment/students1.png"
                link="/projects/students-wellbeing-assessment"
              />
              <ProjectCard
                title="IMDB Sentiment Analysis"
                subtitle="NLP, Machine Learning & Transformers"
                description="An NLP project that classifies IMDB reviews using both traditional and transformer models, with RoBERTa achieving an F1-score of 89%."
                image="/imdb-sentiment-analysis/imdb1.png"
                link="/projects/imdb-sentiment-analysis"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}