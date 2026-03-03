"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const points = [
    {
      bad: "Boring, low-retention edits",
      good: "Engaging, high-retention storytelling edits",
    },
    {
      bad: "Inconsistent output",
      good: "Consistent quality across all videos",
    },
    {
      bad: "Late deliveries",
      good: "Fast & on-time delivery",
    },
    {
      bad: "No strategy, just random cuts",
      good: "Content built with a growth strategy",
    },
    {
      bad: "Poor communication & revision chaos",
      good: "Smooth communication & feedback process",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Choosing Us Over Others
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            See why we stand out with superior service, innovation, and
            client satisfaction benchmarks.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Other Agencies */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-8 text-red-400">
              Other Agencies
            </h3>

            <ul className="space-y-6">
              {points.map((item, i) => (
                <li key={i} className="text-gray-400 flex items-start gap-3">
                  <span className="text-red-500 text-xl">✕</span>
                  {item.bad}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Your Agency */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-700 rounded-2xl p-8 shadow-[0_0_40px_rgba(124,58,237,0.4)]"
          >
            <h3 className="text-2xl font-semibold mb-8 text-purple-400">
              Our Agency
            </h3>

            <ul className="space-y-6">
              {points.map((item, i) => (
                <li key={i} className="text-gray-200 flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  {item.good}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Tools We Use</h3>

          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <span className="px-5 py-2 bg-gray-800 rounded-full">Adobe Premiere Pro</span>
            <span className="px-5 py-2 bg-gray-800 rounded-full">After Effects</span>
            <span className="px-5 py-2 bg-gray-800 rounded-full">CapCut Pro</span>
            <span className="px-5 py-2 bg-gray-800 rounded-full">DaVinci Resolve</span>
            <span className="px-5 py-2 bg-gray-800 rounded-full">Photoshop</span>
            <span className="px-5 py-2 bg-gray-800 rounded-full">Frame.io</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}