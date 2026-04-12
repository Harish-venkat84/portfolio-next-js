"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <LoadingScreen onComplete={handleLoadingComplete} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
}
