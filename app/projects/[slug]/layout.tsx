import type { Metadata } from "next"
import { projects } from "../data"

type Props = {
  params: { slug: string }
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Steven's Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Steven's Portfolio`,
      description: project.description,
      images: [project.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Steven's Portfolio`,
      description: project.description,
      images: [project.image],
    },
  }
}


export default function ProjectLayout({ children }: Props) {
  return children
}