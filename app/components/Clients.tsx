"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Clients() {
  const clients = ["Growth Forum", "MoonPay", "HeroDevs", "Outro", "Noble"];

  return (
    <section className="relative py-24 flex justify-center overflow-hidden bg-black text-white">
      
      {/* 🌌 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(120deg, #0f0c29, #302b63, #24243e)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* ✨ Glow Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* 💎 Main Card (Reduced Width) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl w-full bg-white/10 backdrop-blur-xl 
        border border-white/20 rounded-2xl shadow-2xl p-12 text-center"
      >
        <motion.p
          variants={fadeIn}
          custom={0}
          className="text-gray-300 mb-12 text-lg"
        >
          You're in good hands
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              variants={fadeIn}
              custom={i + 1}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-white/5 border border-white/10 
              rounded-xl text-lg font-semibold hover:bg-white/10 transition"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}