"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  link,
}: ProjectCardProps) {
  const router = useRouter();
  const idleControls = useAnimation();

  useEffect(() => {
    idleControls.start({
      y: [0, -4, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [idleControls]);

  const handleClick = () => {
    router.push(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={idleControls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card className="group relative cursor-pointer bg-[#1a1a2e] border border-[#2c2c3b] rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-xl w-full">
        <CardContent className="p-0 relative aspect-video">
          {/* Background Image */}
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500 z-10" />
          </div>

          {/* Title + Subtitle */}
          <div className="absolute bottom-0 left-0 z-20 p-4 transition-opacity duration-500 group-hover:opacity-0">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-300">{subtitle}</p>
          </div>

          {/* Hover (desktop only) content: description + button */}
          <div className="absolute inset-0 z-30 p-4 flex flex-col justify-end gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {/* Hidden on mobile */}
            <p className="hidden sm:block text-sm text-gray-300 leading-relaxed">
              {description}
            </p>
            <div className="hidden sm:flex justify-end">
              <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.08 }}
                animate={{
                  opacity: [1, 0.85, 1],
                  transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                }}
                className="px-4 py-2 text-white border border-white/20 rounded-md bg-white/5 hover:bg-white/10 transition"
              >
                View Project
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </motion.button>
            </div>
          </div>

          {/* Always-visible button for mobile (top-right) */}
          <div className="absolute top-3 right-3 z-40 sm:hidden">
            <button
              onClick={handleClick}
              className="px-3 py-1.5 text-xs flex items-center gap-1 rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
            >
              View Project
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
