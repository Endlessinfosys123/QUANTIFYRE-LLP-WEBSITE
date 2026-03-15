"use client";

import { motion } from "framer-motion";

export default function NoiseOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay">
      <motion.div
        animate={{
          x: [0, -10, 10, -5, 5, 0],
          y: [0, 5, -5, 10, -10, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-200%] w-[500%] h-[500%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-100"
      />
    </div>
  );
}
