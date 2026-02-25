"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import { motion } from "framer-motion";


import {
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <main className="overflow-hidden">
      <Hero />
      <Clients />
      <Testimonials />
      <Services />
      
     

      {/* ================= TEST SECTION ================= */}
    {/* ================= ULTRA ZEN SECTION ================= */}
<section className="relative py-32 bg-black overflow-hidden">

  {/* Ambient Energy Orbs */}
  {[...Array(6)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
      style={{
        background: i % 2
          ? "radial-gradient(circle,#7c3aed,transparent 60%)"
          : "radial-gradient(circle,#3b82f6,transparent 60%)",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [0, Math.random() * 80 - 40, 0],
        y: [0, Math.random() * 80 - 40, 0],
      }}
      transition={{
        duration: 12 + Math.random() * 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}

  <motion.div
    initial={{ opacity: 0, y: 120 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative max-w-xl mx-auto px-6 perspective-[1200px]"
  >

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-center text-white text-3xl font-bold tracking-widest mb-10"
    >
      ZEN INTERFACE
    </motion.h2>

    {/* 3D Glass Card */}
    <motion.div
      onMouseMove={(e) => {
        const card = e.currentTarget
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = -(y - centerY) / 25
        const rotateY = (x - centerX) / 25
        card.style.transform =
          `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "rotateX(0deg) rotateY(0deg)"
      }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative transition-transform duration-200"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card
        sx={{
          background: "linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))",
          backdropFilter: "blur(25px)",
          borderRadius: 4,
          color: "white",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow:
            "0 40px 120px rgba(124,58,237,0.35)",
        }}
      >
        <CardContent sx={{ position: "relative" }}>
          {/* Light reflection */}
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-xl"
            style={{
              background:
                "linear-gradient(120deg,transparent 40%,rgba(255,255,255,0.15),transparent 60%)",
            }}
          />

          <Typography variant="h6" gutterBottom>
            Living Interface ✨
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#cbd5f5", mb: 4 }}
          >
            This UI reacts to your presence — light, depth and
            motion feel organic, calm and intelligent.
          </Typography>

          {/* Magnetic Button */}
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(90deg,#7c3aed,#3b82f6)",
                borderRadius: "999px",
                px: 4,
                py: 1.3,
                fontWeight: "bold",
                textTransform: "none",
                boxShadow:
                  "0 0 30px rgba(124,58,237,0.8)",
              }}
            >
              Enter Experience
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  </motion.div>
</section>
{/* ================================================= */}

{/* ================================================= */}

{/* ================================================= */}

      {/* ================================================= */}

      {/* ================= CONTACT FORM ================= */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-2xl mx-auto px-6">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#f97316", fontWeight: "bold", mb: 4 }}
          >
            Contact Us
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              backgroundColor: "white",
              padding: 3,
              borderRadius: 2,
              boxShadow: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />

            <TextField
              label="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />

            <TextField
              label="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              fullWidth
              multiline
              rows={4}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor: "#3b82f6",
                "&:hover": { backgroundColor: "#2563eb" },
              }}
            >
              Send Message
            </Button>

            {status && (
              <Typography align="center" sx={{ mt: 1 }}>
                {status}
              </Typography>
            )}
          </Box>
        </div>
      </section>
      {/* ================================================= */}
    </main>
  );
}
