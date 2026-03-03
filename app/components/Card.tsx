"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: 19,
    features: [
      "Access all basic resources",
      "Instructional videos",
      "Tools and guides",
      "Certification",
    ],
  },
  {
    name: "Pro",
    price: 25,
    popular: true,
    features: [
      "All Basic features",
      "Priority support",
      "Weekly opportunities",
      "Review & feedback",
    ],
  },
  {
    name: "Team",
    price: 30,
    features: [
      "All Pro features",
      "Custom training profile",
      "Dedicated support",
      "Team collaboration tools",
    ],
  },
];

export default function CardPage() {
  const [annual, setAnnual] = useState(false);
  const [orbs, setOrbs] = useState<any[]>([]);

  // Generate floating orbs (client-safe)
  useEffect(() => {
    const generated = [...Array(5)].map(() => ({
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
      size: 300 + Math.random() * 200,
      moveX: Math.random() * 100 - 50,
      moveY: Math.random() * 100 - 50,
      duration: 15 + Math.random() * 10,
      color:
        Math.random() > 0.5
          ? "radial-gradient(circle,#7c3aed,transparent 60%)"
          : "radial-gradient(circle,#3b82f6,transparent 60%)",
    }));
    setOrbs(generated);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center py-20 px-6 text-white overflow-hidden bg-black">
      
      {/* 🔥 Animated Gradient Mesh */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(120deg,#0f0c29,#302b63,#24243e)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* 🔥 Floating Glow Orbs */}
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

      {/* 🔥 Subtle Grid */}
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

      {/* 🌟 Content */}
      <div className="relative z-10 w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Pricing Plans
        </h1>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm transition ${
                !annual ? "bg-white text-black" : "text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm transition ${
                annual ? "bg-white text-black" : "text-gray-300"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-white/10 backdrop-blur-xl 
              p-8 rounded-2xl border border-white/20 shadow-2xl
              ${plan.popular ? "scale-110 border-indigo-500" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 px-4 py-1 rounded-full text-xs">
                  Popular
                </div>
              )}

              <h2 className="text-2xl font-semibold mb-4 text-center">
                {plan.name}
              </h2>

              <div className="text-center mb-6">
                <span className="text-4xl font-bold">
                  ${annual ? plan.price * 10 : plan.price}
                </span>
                <span className="text-gray-300 text-sm">
                  /{annual ? "year" : "month"}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-200 text-sm">
                    ✔ {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-medium transition ${
                  plan.popular
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {plan.popular ? "Upgrade Now" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}