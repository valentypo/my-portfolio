import { Variants } from "framer-motion"

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number],
    },
  },
}
