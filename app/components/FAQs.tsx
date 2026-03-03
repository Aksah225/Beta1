"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question:
      "Can you match my exact editing style or replicate creators like Ali Abdaal, Hormozi, Iman Gadzhi, etc.?",
    answer:
      "Yes. If you have reference videos, we can closely match that style. Whether it’s clean educational (Ali Abdaal), high-intensity value cuts (Hormozi), premium brand edits (Iman Gadzhi), or animated storytelling — we adapt.",
  },
  {
    question:
      "How do payments, billing cycles, cancellations, and custom pricing work?",
    answer:
      "We keep everything simple and transparent. We charge after the work is delivered, either weekly or monthly depending on your plan. We do not offer refunds, but you can pause your plan anytime and use your remaining credits later. You're free to pause, upgrade, downgrade, or cancel without any long-term contracts. Billing can be flexible — choose weekly billing for dynamic creators or monthly billing for consistent posting. Podcast edits, faceless channels, bulk shorts (20-40/week), or complex projects fall under custom pricing based on volume. Everything is designed to give you full flexibility and complete control over your content flow.",
  },
  {
    question: "How do you ensure strong retention and engaging videos?",
    answer:
      "We use retention-focused editing to keep viewers watching. This includes strong hooks, tight pacing, pattern interrupts, captions, zooms, motion design, sound design, and clean visual rhythm. Combined with platform-specific strategy for YouTube, Instagram, and LinkedIn, your content is crafted to perform, engage, and retain — not just look good.",
  },
  {
    question: "What types of videos are included in your plans?",
    answer:
      "Our plans cover talking-head, coaching, educational, cash-cow (non-faceless), and short-form social media videos. Formats like podcast editing (multi-cam or long-form), faceless channels, heavy motion graphics or animations, brand commercials, and large bulk orders (20-40 shorts per week) have separate pricing due to their complexity. If you need any of these, we'll create a custom plan based on your volume, workflow, and content requirements.",
  },
  {
    question:
      "Do you handle posting, channel management, urgent edits, and inconsistent recording schedules?",
    answer:
      "Yes, we handle the entire content pipeline for you. This includes posting and scheduling your content across YouTube, Instagram, and LinkedIn with full optimization of titles, tags, hashtags, and descriptions. We also take care of complete channel management, including thumbnails, titles, content calendars, analytics, and overall platform optimization. You receive monthly performance reports that break down retention, CTR, top-performing videos, improvement areas, and content recommendations. For urgent or last-minute videos, we provide priority delivery and express edits. If you don't record consistently, we help you plan batch shoots, repurpose long videos, and extract multiple clips to maintain steady output. And if you prefer a fully hands-off workflow, we manage everything end-to-end — all you need to do is record, and we handle the rest.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-5 cursor-pointer bg-gray-900"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <span className="text-purple-400 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-300 mt-4"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}