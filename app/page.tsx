"use client"

import { Button } from "@/components/ui/button"
import { Mail, ExternalLink, MapPin, Github, DownloadIcon } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { motion } from "framer-motion"
import TextType from '@/app/components/typewriter-text';
import ProjectCard from "@/app/components/project-card"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="flex min-h-[100vh] flex-col items-start justify-center px-4">
          <div className="container mt-10 md:mt-8 lg:mt-5">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400">Tangerang, ID</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter md:text-7xl mb-6 text-[#EEEEEE] leading-[1.1]">
              <span className="flex gap-1">
                {"STEVEN".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>

              <span className="block mt-1 text-[#71b0be]">
                <TextType 
                  text={["VALENTINO TASLIM", "VALENTINO", "TASLIM", "VALENTINO TASLIM"]}
                  typingSpeed={75}
                  pauseDuration={1000}
                  deletingSpeed={50}
                  showCursor={true}
                  cursorCharacter="•"
                  textColors={["#71b0be"]}
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-md sm:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
            >
              Passionate about turning ideas into reality through code, I explore the intersection of{" "}
              <span className="text-[#9ecad8] font-medium">software engineering</span> and{" "}
              <span className="text-[#9ecad8] font-medium">AI</span> with
              <span className="italic"> curiosity</span>, and
              <span className="italic"> purpose</span>.{" "}
              <span className="block sm:inline">Growing with every line I write.</span>
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/projects" className="w-full sm:w-auto">
                <button
                  className="relative w-full sm:w-auto cursor-target px-6 py-2 rounded-md font-semibold text-white transition-all duration-300
                            bg-white/5 border border-white/10 backdrop-blur-sm
                            hover:border-white/20 hover:shadow-[0_0_12px_1px_rgba(255,255,255,0.08)] group overflow-hidden"
                >
                  <span className="relative z-10">View My Projects</span>
                  <span
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#61a7b0]/20 to-[#508C9B]/20 blur-md"
                  />
                </button>
              </Link>
              <Link href="/CV_StevenValentinoTaslim.pdf" target="_blank">
                <button
                  className="w-full sm:w-auto cursor-target px-6 py-2 rounded-lg border border-white/20 text-white font-semibold bg-transparent hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                  <DownloadIcon className="h-4 w-4" />
                  Download CV
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="px-4 py-20 border-t border-white/10">
          <div className="container">
            <div className="mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold">HIGHLIGHTED PROJECTS</h2>
              <Link href="/projects">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent cursor-target">
                  VIEW ALL PROJECTS
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
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
                title="Student's Wellbeing Assesment"
                subtitle="Web Development & Machine Learning"
                description="Student Wellbeing Assessment is a Next.js web app that detects depression levels in students. We evaluated four tree-based models and chose XGBoost for its efficiency and accuracy, ensuring a lightweight, cross-platform experience."
                image="/students-wellbeing-assessment/students1.png"
                link="/projects/students-wellbeing-assessment"
              />
              <ProjectCard
                title="IMDB Sentiment Analysis"
                subtitle="NLP, Machine Learning & Transformers"
                description="IMDB Sentiment Analysis is an NLP project that classifies movie reviews as positive or negative. We compared traditional and transformer-based models, with RoBERTa achieving the best performance and an F1-score of around 89%."
                image="/imdb-sentiment-analysis/imdb1.png"
                link="/projects/imdb-sentiment-analysis"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-4 py-20 border-t border-white/10">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-5xl font-bold mb-8">ABOUT ME</h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 text-justify">
                I’m a Computer Science student from BINUS University with a strong curiosity for learning and a deep interest in building meaningful technology. 
                My primary focus lies in software development and artificial intelligence, where I enjoy exploring how code can be used to solve real-world problems. 
                From developing full-stack web applications to experimenting with machine learning, natural language processing, and computer vision, 
                I’m always motivated to keep learning and improving.
              </p>

              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#508C9B] text-white hover:bg-[#508C9B]/90">
                  <Mail className="h-4 w-4 mr-2" />
                  stevenv2605@gmail.com
                </Button>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  )
}