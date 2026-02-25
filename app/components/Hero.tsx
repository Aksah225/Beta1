"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./HeroMotion";
import { Button } from "@mui/material";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-sm text-gray-400 mb-4"
        >
          ⭐⭐⭐⭐⭐ Trusted by 20+ brands
        </motion.p>

        <motion.h1
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Really cool videos,
          <br />
          <span className="text-purple-500">
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
          {/* 🔥 Book a Call Button */}
          <Button
            variant="contained"
            href="https://calendly.com/ajitsah870/30min"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: "999px",
              px: 3,
              py: 1.5,
              backgroundColor: "#7c3aed",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": { backgroundColor: "#6d28d9" },
            }}
          >
            Book a call
          </Button>

          {/* Learn More Button */}
          <Button
            variant="outlined"
            sx={{
              borderRadius: "999px",
              px: 3,
              py: 1.5,
              color: "#e5e7eb",
              borderColor: "#4b5563",
              textTransform: "none",
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