"use client"

import { motion, useScroll } from "framer-motion"

export default function ProgressBar() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/40 via-white to-white/40 transform-gpu z-[60]"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
    />
  )
}
