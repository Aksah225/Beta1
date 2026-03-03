"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question:
      "Can you match my exact editing style or replicate creators like Ali Abdaal, Hormozi, Iman Gadzhi, etc.?",
    answer:
      "Yes. If you have reference videos, we can closely match that style. Whether it’s clean educational, high-intensity value cuts, premium brand edits, or animated storytelling — we adapt.",
  },
  {
    question:
      "How do payments, billing cycles, cancellations, and custom pricing work?",
    answer:
      "We charge after delivery (weekly or monthly depending on your plan). You can pause anytime and use remaining credits later. No long-term contracts. Flexible billing and custom pricing for bulk or complex projects.",
  },
  {
    question: "How do you ensure strong retention and engaging videos?",
    answer:
      "We use strong hooks, fast pacing, pattern interrupts, captions, motion design, sound design, and platform-specific optimization for YouTube, Instagram, and LinkedIn.",
  },
  {
    question: "What types of videos are included in your plans?",
    answer:
      "Talking-head, educational, coaching, social short-form videos are included. Podcast edits, faceless channels, heavy animation, and bulk content have custom pricing.",
  },
  {
    question:
      "Do you handle posting, channel management, urgent edits, and inconsistent schedules?",
    answer:
      "Yes. We manage posting, optimization, thumbnails, analytics, content calendars, and urgent edits. Fully hands-off workflow available.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [orbs, setOrbs] = useState<any[]>([]);

  useEffect(() => {
    const generated = [...Array(4)].map(() => ({
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
      size: 300 + Math.random() * 200,
      moveX: Math.random() * 80 - 40,
      moveY: Math.random() * 80 - 40,
      duration: 15 + Math.random() * 10,
    }));
    setOrbs(generated);
  }, []);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 text-white overflow-hidden bg-black">

      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(120deg, #0f0c29, #302b63, #24243e)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating Glow Orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20 bg-indigo-600"
          style={{
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
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

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 
              rounded-2xl p-6 cursor-pointer transition shadow-xl"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  className="text-indigo-400 text-2xl"
                >
                  +
                </motion.span>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300 mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}