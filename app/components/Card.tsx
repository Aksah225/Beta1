"use client";

import { useState } from "react";

const plans = [
  {
    name: "Basic",
    price: 19,
    features: [
      "Access all basic resources",
      "Instructional videos",
      "Tools and guides",
      "Certification"
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
      "Review & feedback"
    ],
  },
  {
    name: "Team",
    price: 30,
    features: [
      "All Pro features",
      "Custom training profile",
      "Dedicated support",
      "Team collaboration tools"
    ],
  },
];

export default function CardPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-[#1f2235] text-white flex flex-col items-center py-20 px-6">
      
      <h1 className="text-4xl font-bold mb-6">Card Page</h1>

      {/* Toggle */}
      <div className="flex items-center bg-[#2b2f4a] p-1 rounded-full mb-16">
        <button
          onClick={() => setAnnual(false)}
          className={`px-6 py-2 rounded-full text-sm ${
            !annual ? "bg-white text-black" : "text-gray-400"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setAnnual(true)}
          className={`px-6 py-2 rounded-full text-sm ${
            annual ? "bg-white text-black" : "text-gray-400"
          }`}
        >
          Annual
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-gradient-to-b from-[#2b2f4a] to-[#1c1f35] 
            p-8 rounded-2xl shadow-xl transition hover:-translate-y-3
            ${plan.popular ? "scale-110 border border-indigo-500" : ""}`}
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
              <span className="text-gray-400 text-sm">
                /{annual ? "year" : "month"}
              </span>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-300 text-sm">
                  ✔ {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-medium ${
                plan.popular
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {plan.popular ? "Upgrade Now" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}