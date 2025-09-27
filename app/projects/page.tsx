"use client"

import ProjectCard from "@/app/components/project-card"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#201E43] text-white">
      <Navbar />

      <main>
        {/* Projects Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="mb-12">
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">MY PROJECTS</h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
                A collection of my work spanning design systems, enterprise UX, and complex problem-solving across
                various industries.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <ProjectCard
                title="Wastara"
                subtitle="Web Development & AI Integration"
                description="Wastara is a mobile-first web app that lets citizens report trash and helps organizers coordinate cleanups with role-based accounts, location/photo reporting, and AI-assisted pickup optimization."
                image="/wastara/wastara1.png"
                link="/work/wastara"
              />
              <ProjectCard
                title="IRIS"
                subtitle="Mobile Application & AI-Driven Features"
                description="IRIS is a Flutter-based mobile app that helps the elderly and visually impaired navigate daily life by using AI for real-time object detection, text recognition, and voice feedback."
                image="/iris/iris1.png"
                link="/work/iris"
              />
              <ProjectCard
                title="Student's Wellbeing Assesment"
                subtitle="Web Development & Machine Learning"
                description="Student Wellbeing Assessment is a Next.js web app that detects depression levels in students. We evaluated four tree-based models and chose XGBoost for its efficiency and accuracy, ensuring a lightweight, cross-platform experience."
                image="/students-wellbeing-assessment/students1.png"
                link="/work/students-wellbeing-assessment"
              />
              <ProjectCard
                title="IMDB Sentiment Analysis"
                subtitle="NLP, Machine Learning & Transformers"
                description="IMDB Sentiment Analysis is an NLP project that classifies movie reviews as positive or negative. We compared traditional and transformer-based models, with RoBERTa achieving the best performance and an F1-score of around 89%."
                image="/imdb-sentiment-analysis/imdb1.png"
                link="/work/imdb-sentiment-analysis"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}