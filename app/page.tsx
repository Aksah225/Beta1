"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import PricingCard from "./components/Card"; // ✅ custom card
import FAQs from "./components/FAQs"; // 👈 add this
import ClickGame from "./components/ClickGame";

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

  const [orbs, setOrbs] = useState<
    {
      top: string;
      left: string;
      bg: string;
      moveX: number;
      moveY: number;
      duration: number;
    }[]
  >([]);

  useEffect(() => {
    const generated = [...Array(6)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      bg:
        i % 2
          ? "radial-gradient(circle,#7c3aed,transparent 60%)"
          : "radial-gradient(circle,#3b82f6,transparent 60%)",
      moveX: Math.random() * 80 - 40,
      moveY: Math.random() * 80 - 40,
      duration: 12 + Math.random() * 10,
    }));

    setOrbs(generated);
  }, []);

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

      {/* ✅ Your Custom Pricing Card Component */}
      <PricingCard />

      {/* ================= ULTRA ZEN SECTION ================= */}
      <section className="relative py-32 bg-black overflow-hidden">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{
              background: orb.bg,
              top: orb.top,
              left: orb.left,
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

        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative max-w-xl mx-auto px-6"
        >
          <Card
            sx={{
              background:
                "linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))",
              backdropFilter: "blur(25px)",
              borderRadius: 4,
              color: "white",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 40px 120px rgba(124,58,237,0.35)",
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Living Interface ✨
              </Typography>

              <Typography variant="body2" sx={{ color: "#cbd5f5", mb: 4 }}>
                This UI reacts to your presence — light, depth and motion feel
                organic, calm and intelligent.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg,#7c3aed,#3b82f6)",
                  borderRadius: "999px",
                  textTransform: "none",
                }}
              >
                Enter Experience
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>

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

            <Button type="submit" variant="contained">
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
<ClickGame />
      <Newsletter />
        <FAQs /> 
      <Footer />
    </main>
  );
}