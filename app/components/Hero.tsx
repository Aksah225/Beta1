"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { fadeIn, staggerContainer } from "./HeroMotion";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function Hero() {
  const [orbs, setOrbs] = useState<any[]>([]);

  // Mouse 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  useEffect(() => {
    const generated = [...Array(6)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 200 + Math.random() * 300,
      moveX: Math.random() * 120 - 60,
      moveY: Math.random() * 120 - 60,
      duration: 12 + Math.random() * 12,
      color:
        Math.random() > 0.5
          ? "radial-gradient(circle,#7c3aed,transparent 60%)"
          : "radial-gradient(circle,#3b82f6,transparent 60%)",
    }));
    setOrbs(generated);
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center text-center px-6 bg-black text-white overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-40"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            background: orb.color,
          }}
          animate={{
            x: [0, orb.moveX, 0],
            y: [0, orb.moveY, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glow Pulse */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-purple-600 rounded-full blur-[180px] opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 3D Content */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-sm text-gray-400 mb-4 tracking-wide"
        >
          ⭐⭐⭐⭐⭐ Trusted by 20+ brands
        </motion.p>

        <motion.h1
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Really cool videos,
          <br />
          <span className="text-purple-500 drop-shadow-[0_0_25px_rgba(124,58,237,0.9)]">
            edited & delivered in 48 hours.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="mt-6 max-w-xl text-gray-400 mx-auto"
        >
          Affordable, fast, human-powered video edits. Real editors, no AI fillers.
        </motion.p>

        <motion.div
          variants={fadeIn("up", "tween", 0.8, 1)}
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <Button
            variant="contained"
            href="https://calendly.com/ajitsah870/30min"
            target="_blank"
            sx={{
              borderRadius: "999px",
              px: 4,
              py: 1.5,
              background: "linear-gradient(90deg,#7c3aed,#3b82f6)",
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: "0 15px 50px rgba(124,58,237,0.7)",
              "&:hover": {
                transform: "scale(1.08)",
              },
            }}
          >
            Book a call
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderRadius: "999px",
              px: 4,
              py: 1.5,
              color: "#e5e7eb",
              borderColor: "#4b5563",
              textTransform: "none",
              backdropFilter: "blur(10px)",
              "&:hover": {
                borderColor: "#7c3aed",
                color: "#7c3aed",
              },
            }}
          >
            Learn more
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}