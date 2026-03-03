"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ClickGame() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const [squares, setSquares] = useState<
    { top: string; left: string; duration: number }[]
  >([]);

  // ✅ Timer logic
  useEffect(() => {
    if (time > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (time === 0) {
      setGameOver(true);
    }
  }, [time, gameOver]);

  // ✅ Generate floating squares (CLIENT ONLY → no hydration error)
  useEffect(() => {
    const generated = [...Array(6)].map(() => ({
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      duration: 8 + Math.random() * 6,
    }));

    setSquares(generated);
  }, []);

  // ✅ Move Ball
  const moveBall = () => {
    setScore((s) => s + 1);

    setPosition({
      x: Math.random() * 85,
      y: Math.random() * 65,
    });
  };

  // ✅ Restart Game
  const restartGame = () => {
    setScore(0);
    setTime(30);
    setGameOver(false);
    setPosition({ x: 50, y: 50 });
  };

  return (
    <section className="relative py-20 px-6 bg-[#0f111a] text-white text-center overflow-hidden">
      
      {/* 🔥 Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 🔥 Floating Animated Squares */}
      {squares.map((square, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 border border-indigo-500 opacity-20"
          style={{
            top: square.top,
            left: square.left,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: square.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🌟 Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">
          Agency Explorer Game 🎮
        </h2>

        <p className="text-gray-400 mb-6">
          Click the glowing ball as many times as you can in 30 seconds.
        </p>

        {!gameOver ? (
          <>
            <div className="mb-4 text-lg">
              Time: {time}s | Score: {score}
            </div>

            <div className="relative w-full max-w-lg mx-auto h-64 bg-[#1f2235]/80 backdrop-blur-md rounded-xl overflow-hidden border border-indigo-500/30">
              
              {/* 🎯 Click Ball */}
              <motion.div
                onClick={moveBall}
                className="absolute w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full cursor-pointer shadow-[0_0_30px_rgba(99,102,241,0.9)]"
                animate={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                }}
                transition={{ type: "spring", stiffness: 250 }}
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

            <div className="mt-8 flex gap-4 justify-center">
              <button
                onClick={restartGame}
                className="px-6 py-3 bg-indigo-600 rounded-full hover:scale-105 transition"
              >
                Play Again
              </button>

              <a
                href="#contact"
                className="px-6 py-3 bg-purple-600 rounded-full hover:scale-105 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}