"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#201E43] text-white">
      <Navbar />

      <main>
        {/* About Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-6xl font-bold mb-8">ABOUT ME</h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 text-justify">
                I’m a Computer Science student from BINUS University with a strong curiosity for learning and a deep interest in building meaningful technology. 
                My primary focus lies in software development and artificial intelligence, where I enjoy exploring how code can be used to solve real-world problems. 
                From developing full-stack web applications to experimenting with machine learning, natural language processing, and computer vision, 
                I’m always motivated to keep learning and improving.
                <br /><br />
                While I occasionally enjoy creative work, my main passion is in building scalable, reliable software—especially projects that bring together 
                thoughtful engineering and AI-driven solutions. I value clean, maintainable code and love working through technical challenges, whether independently or with a team.
                <br /><br />
                At the moment, I’m focusing on strengthening my understanding of artificial intelligence, especially in areas like deep learning and transformer-based models. 
                Alongside that, I continue to develop full-stack applications that balance technical functionality with user-centered design. I try to take initiative when I can, 
                but I’m also grateful for every chance to learn from others and grow through collaboration.
                <br /><br />
                I’m excited by the intersection of technology and creativity, and I hope to contribute to projects that make a positive impact. 
                As I continue to grow as a developer, I’m committed to staying curious and building solutions that matter.
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-white">Design Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Figma", "Adobe XD", "Sketch", "InVision", "Photoshop"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-white">Methodologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Agile", "Lean", "Design Thinking"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-white">Specializations</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Accessibility (WCAG)", "Data Viz", "Design Systems"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-white">Certification</h3>
                    <Badge className="bg-[#508C9B] text-white">Salesforce UX Certification</Badge>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#508C9B] text-white hover:bg-[#508C9B]/90">
                  <Mail className="h-4 w-4 mr-2" />
                  stevenv2605@gmail.com
                </Button>
                <Link href="/contact">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
