"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide web development, UI design, and growth solutions for modern businesses.",
  },
  {
    q: "How long does a project take?",
    a: "Most projects take between 1–4 weeks depending on scope.",
  },
  {
    q: "Do you offer support after delivery?",
    a: "Yes, we provide post-delivery support and guidance.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely — you can upgrade or change plans anytime.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f111a] to-[#191c2b] text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1f2235] border border-gray-700 rounded-xl"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="text-lg font-semibold">{faq.q}</span>
                <span className="text-indigo-400">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.2 }}
                  className="px-6 pb-4 text-gray-400"
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}