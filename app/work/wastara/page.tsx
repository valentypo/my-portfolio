import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"

export default function WastaraProject() {
  return (
    <div className="min-h-screen bg-[#201E43] text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <Navbar/>
      </header>

      <main className="container px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          BACK TO WORK
        </Link>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              <span className="text-[#71b0be]">Wastara</span>
            </h1>

            <div className="space-y-6 text-gray-300">
              <div>
                <span className="text-white font-semibold">Project Type:</span>
                <span className="ml-2">Self-iniated</span>
              </div>
              <div>
                <span className="text-white font-semibold">Duration:</span>
                <span className="ml-2">Jul 2025 - Aug 2025</span>
              </div>
              <div>
                <span className="text-white font-semibold">Role:</span>
                <span className="ml-2">UX/UI Designer (IBM iX)</span>
              </div>
              <div>
                <span className="text-white font-semibold">TEAM:</span>
                <span className="ml-2">
                  Led a team of 3 designers, collaborating with developers, stakeholders, and compliance officers
                </span>
              </div>
            </div>
          </div>
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <Image
              src="https://sjc.microlink.io/lb6PnrVoJlSjIWuX7CyOIoMFCW78cWbHFGCQP9uUYmz5ofv3y9SnR2NIks9iPw8UHHxogQQMMxj-xH47kVh6TA.jpeg"
              alt="Janssen Pharmaceuticals Project"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-4">THE CHALLENGE</h3>
            <p className="text-gray-300">
              Janssen Pharmaceuticals needed to transform their fragmented digital ecosystem of 18 pharmaceutical brands
              into a cohesive, FDA-compliant platform. The existing system suffered from inconsistent user experiences,
              regulatory compliance issues, and inefficient development workflows.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-4">THE SOLUTION</h3>
            <p className="text-gray-300">
              I led the creation of a comprehensive design system that unified all brand experiences while maintaining
              strict FDA compliance. This involved extensive stakeholder collaboration, regulatory review processes, and
              careful balance between brand identity and user experience consistency.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-4">THE IMPACT</h3>
            <p className="text-gray-300">
              The unified design system dramatically improved both patient and healthcare provider experiences while
              ensuring full regulatory compliance. Development teams reported significant efficiency gains, and the
              success of the project led to an extended partnership with Janssen.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">KEY ACHIEVEMENTS</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-4xl font-bold text-[#71b0be] mb-2">18</div>
              <p className="text-gray-300">Pharmaceutical brands unified under one design system</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-4xl font-bold text-[#71b0be] mb-2">2000+</div>
              <p className="text-gray-300">Screens redesigned across multiple platforms</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-4xl font-bold text-[#71b0be] mb-2">80%</div>
              <p className="text-gray-300">Reduction in UI inconsistencies</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-4xl font-bold text-[#71b0be] mb-2">20%</div>
              <p className="text-gray-300">Streamlined development processes</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-4xl font-bold text-[#71b0be] mb-2">100%</div>
              <p className="text-gray-300">FDA compliance maintained across all designs</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">LESSONS LEARNED</h2>
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <p className="text-xl text-gray-300 italic">
              "Regulatory design is unforgiving. Every pixel is scrutinized by lawyers. Clarity and structure win over
              'coolness'—every time."
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <Link href="/">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ALL PROJECTS
            </Button>
          </Link>
          <Link href="https://www.bowmanstephen.com/work/janssen-pharmaceuticals" target="_blank">
            <Button className="bg-[#71b0be] text-white hover:bg-[#71b0be]/90">
              VIEW LIVE CASE STUDY
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
