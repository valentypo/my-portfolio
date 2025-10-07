import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Project Not Found</h2>
        <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
        <Link
          href="/projects"
          className="px-6 py-3 bg-[#7ebfcf] text-black font-medium rounded-full hover:bg-[#7ebfcf]/90 transition-all duration-300"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  )
}