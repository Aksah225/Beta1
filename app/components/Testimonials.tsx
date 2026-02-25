"use client";

import Image from "next/image";

export default function Testimonials() {
  // ===== FIRST SECTION (already created) =====
  const mainTestimonial = {
    video: "dQw4w9WgXcQ",
    name: "Lara Acosta",
    role: "Founder, Literally Academy",
    image: "/avatars/avatar1.jpg",
    quote:
      "I wouldn’t have even started my LinkedIn and YouTube video journey if it wasn’t for Unchained. Their work literally speaks for itself.",
  };

  const smallTestimonial = {
    video: "9bZkp7q19f0",
    quote:
      "I wouldn’t have even started my LinkedIn and YouTube video journey if it wasn’t for Unchained. Their work literally speaks for itself.",
    name: "Lara Acosta",
    role: "Founder, Literally Academy",
    image: "/avatars/avatar1.jpg",
  };

  // ===== SECOND SECTION (2 cards grid) =====
  const cards = [
    {
      video: "dQw4w9WgXcQ",
      quote:
        "I wouldn’t have even started my LinkedIn and YouTube video journey if it wasn’t for Unchained. Their work literally speaks for itself.",
      name: "Lara Acosta",
      role: "Founder, Literally Academy",
      image: "/avatars/avatar1.jpg",
    },
    {
      video: "9bZkp7q19f0",
      quote:
        "I wouldn’t have even started my LinkedIn and YouTube video journey if it wasn’t for Unchained. Their work literally speaks for itself.",
      name: "Lara Acosta",
      role: "Founder, Literally Academy",
      image: "/avatars/avatar1.jpg",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">
      <h2 className="text-4xl text-center font-bold mb-16">
        Hear it directly from <span className="text-purple-500">our clients</span>
      </h2>

      {/* ===== FIRST PART (Already Created) ===== */}
      <div className="max-w-6xl mx-auto flex flex-col gap-8">

        {/* Card 1 */}
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col lg:flex-row gap-6 items-center">
          <div className="w-full lg:w-3/5 aspect-[16/7] rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${mainTestimonial.video}`}
              title={mainTestimonial.name}
              allowFullScreen
            />
          </div>

          <div className="w-full lg:w-2/5">
            <p className="text-base text-gray-300">
              “{mainTestimonial.quote}”
            </p>
            <p className="mt-4 text-white font-semibold">{mainTestimonial.name}</p>
            <p className="text-gray-400 text-sm">{mainTestimonial.role}</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col lg:flex-row gap-6 items-center">
          <div className="w-full lg:w-3/5">
            <p className="text-base text-gray-300">
              “{smallTestimonial.quote}”
            </p>
            <p className="mt-4 text-white font-semibold">{smallTestimonial.name}</p>
            <p className="text-gray-400 text-sm">{smallTestimonial.role}</p>
          </div>

          <div className="w-full lg:w-2/5 aspect-[16/7] rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${smallTestimonial.video}`}
              title={smallTestimonial.name}
              allowFullScreen
            />
          </div>
        </div>

      </div>

      {/* ===== BELOW: NEW 2-CARD GRID ===== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col gap-4"
          >
            {/* Video */}
            <div className="w-full aspect-[16/7] rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${item.video}`}
                title={item.name}
                allowFullScreen
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-base text-gray-300">
                “{item.quote}”
              </p>
              <p className="mt-4 text-white font-semibold">{item.name}</p>
              <p className="text-gray-400 text-sm">{item.role}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}