"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ For client-side routing in App Router

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string; // Must be internal route, e.g. "/projects/my-project"
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  link,
}: ProjectCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(link); // ✅ navigates without new tab
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card className="bg-[#1a1a2e] border border-[#2c2c3b] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
          {/* Image Section */}
          <div className="relative aspect-video w-full overflow-hidden group">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 transition-all duration-500 group-hover:from-black/60" />
            <div className="absolute bottom-0 left-0 p-4 z-20">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="text-sm text-gray-300">{subtitle}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Content Section */}
          <div className="px-6 pt-6 pb-8 bg-[#1c1b2e] relative z-10">
            <p className="text-gray-300 leading-relaxed tracking-wide text-[0.95rem] mb-6 text-justify">
              {description}
            </p>

            <div className="flex justify-center">
              <motion.button
                className="cursor-target px-6 py-2 rounded-lg border border-white/20 bg-transparent text-white font-medium tracking-wide hover:bg-white/5 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                animate={{
                  opacity: [1, 0.85, 1],
                  transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                }}
                onClick={handleClick}
              >
                View Project
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </motion.button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
