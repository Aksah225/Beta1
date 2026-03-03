"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ClickGame() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (time > 0 && !gameOver) {
      const timer = setInterval(() => setTime((t) => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (time === 0) {
      setGameOver(true);
    }
  }, [time, gameOver]);

  const moveBall = () => {
    setScore((s) => s + 1);
    setPosition({
      x: Math.random() * 80,
      y: Math.random() * 60,
    });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f111a] to-[#191c2b] text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Agency Explorer Game 🎮</h2>
      <p className="text-gray-400 mb-6">
        Click the ball as many times as you can in 30 seconds.
      </p>

      {!gameOver ? (
        <>
          <div className="mb-4">
            <span className="text-xl">Time: {time}s</span> |{" "}
            <span className="text-xl">Score: {score}</span>
          </div>

          <div className="relative w-full max-w-lg mx-auto h-64 bg-[#1f2235] rounded-xl overflow-hidden">
            <motion.div
              onClick={moveBall}
              className="absolute w-16 h-16 bg-indigo-500 rounded-full cursor-pointer"
              animate={{
                x: `${position.x}%`,
                y: `${position.y}%`,
              }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>
        </>
      ) : (
        <div className="mt-10">
          <h3 className="text-2xl font-bold">Game Over!</h3>
          <p className="text-gray-300 mt-2">Your Score: {score}</p>

          {score >= 10 ? (
            <div className="mt-4 text-green-400 font-semibold">
              🎉 Badge Unlocked: Agency Explorer
            </div>
          ) : (
            <div className="mt-4 text-gray-400">
              Try again to unlock the badge!
            </div>
          )}

          <div className="mt-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 rounded-full text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </section>
  );
}